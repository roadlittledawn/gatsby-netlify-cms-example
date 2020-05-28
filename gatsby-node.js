const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)
const AUTOBUILD_INDEXES = true;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    let slug = node.frontmatter.path || createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      node,
      name: 'urlPath',
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  let subdirsWithIndexPages = [];
  let subdirIndexesToCreate = [];
  let subdirIndexPages = {};
  const result = await graphql(`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            topics
            templateKey
            path
            contentType
          }
          parent {
            ... on File {
              relativePath
            }
          }
          fileAbsolutePath
          fields {
            urlPath
          }
        }
      }
    }
    allDirectory {
      nodes {
        absolutePath
        base
        relativePath
        name
        relativeDirectory
      }
    }
  }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  function recordAsChild(subdir, child, isDir){
    subdirIndexPages[subdir] = typeof(subdirIndexPages[subdir])==='object' ? subdirIndexPages[subdir] : {children:{
      dirs: [],
      md: []
    }}
    const target = isDir ? subdirIndexPages[subdir].children.dirs : subdirIndexPages[subdir].children.md;
    target.push(child);
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const relativePath = node.parent.relativePath.split('.')
    // Get dir of file
    const subdirAbs = path.dirname(node.fileAbsolutePath);
    // Note that this md file is child of dir
    recordAsChild(subdirAbs, node, false);
    createPage({
      path: node.fields.urlPath,
      component: path.resolve(
        `src/templates/${node.frontmatter.templateKey}.js`
      ),
      context: {
        urlPath: node.frontmatter.path || `/${relativePath[0]}`
      }, // additional data can be passed via context
    });
  });
  // Iterate over directories that contain MD, and check if they need an index page created
  let directoryIteratorPromise = new Promise((resolve,reject) =>{
    result.data.allDirectory.nodes.forEach(async (node, index, arr)=>{
      const subdirAbs = node.absolutePath;
      const subdirRel = node.relativePath;
      const parentDir = path.posix.dirname(subdirAbs);
      // Note child of dir
      recordAsChild(parentDir,node,true);
      // Create page for subdir that file is in, if it is missing an index page. Skip for homepage ('/'), or top level page (/test.md)
      const alreadyHasIndexPage = (subdirsWithIndexPages.indexOf(subdirAbs) !==-1 || subdirRel === '');
      if (!alreadyHasIndexPage){
        // Check for index.md
        const indexPath = path.posix.join(subdirAbs, 'index.mdx');
        const existResult = await graphql(`
        {
          allMdx(filter: {fileAbsolutePath: {eq: "${indexPath}"}}) {
            totalCount
          }
        }`);
        if (existResult.data.allMdx.totalCount < 1) {
          console.log(`There is no index for ${indexPath}`);
          subdirIndexesToCreate.push({
            subdirAbs: subdirAbs,
            subdirRel: subdirRel,
            parentDir: parentDir
          });
        }
        subdirsWithIndexPages.push(subdirAbs);
      }
      if (index === arr.length-1) resolve();
    });
  });
  if (AUTOBUILD_INDEXES) {
    directoryIteratorPromise.then(()=>{
      console.log('=============== BUILDING SUBDIR INDEX PAGES! ======================');
      for (let x=0; x<subdirIndexesToCreate.length; x++){
        const subdirPaths = subdirIndexesToCreate[x];
        // Create index page!
        actions.createPage({
          path: subdirPaths.subdirRel,
          component: path.resolve(`./src/templates/directory-index.js`),
          context: {
            slug: subdirPaths.subdirRel,
            hasIndex: false,
            meta: subdirIndexPages[subdirPaths.subdirAbs]
          }
        });
      }
    });
  }
};

