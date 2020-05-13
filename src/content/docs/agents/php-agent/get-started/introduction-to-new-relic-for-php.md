---
title: Introduction to New Relic for PHP
path: /agents/php-agent/getting-started/introduction-new-relic-php
contentType: basicDoc
templateKey: BasicDocPageTemplate
topics:
  - Agents
  - PHP agent
  - Get started
moreInfoLinks:
- link: "/docs/agents/php-agent/troubleshooting/no-data-appears-php"
  text: "No data appears (PHP)"
metaDescription: "For an overview of New Relic's PHP agent (compatibility, requirements, installation, configuration, troubleshooting, known issues), start here."
---
<p>The New Relic PHP agent monitors your application to help you <a href="#monitor-performance">identify and solve performance issues</a>. You can also extend the agent's performance monitoring to <a href="#business-data">collect and analyze business data</a> to help you improve the customer experience and make data-driven business decisions.</p>

<p>Before you install the PHP agent, ensure your system meets the <a href="/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements">system requirements</a>. The PHP agent supports many of the most common <a href="/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#frameworks">PHP frameworks</a>, <a href="/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases">databases</a>, and <a href="/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases">libraries</a>. You can also use the PHP agent in a <a href="/docs/agents/php-agent/advanced-installation/install-new-relic-php-agent-gae-flexible-environment">Google App Engine (GAE) flexible environment</a>.</p>

<h2 id="monitor-performance">Monitor app performance</h2>

<div class="dnd-atom-wrapper type-image context-inline_image" contenteditable="false">
<div class="dnd-drop-wrapper"><!-- scald=5586:sdl_editor_representation -->
<div class="image"><img alt="php-apm-app-overview.png" height="1271" src="https://docs-dev.newrelic.com/sites/default/files/thumbnails/image/php-apm-app-overview.png" title="php-apm-app-overview.png" typeof="foaf:Image" width="1454" /></div>
<!-- END scald=5586 --></div>

<div class="dnd-legend-wrapper" contenteditable="true">
<div class="meta"><b>rpm.newrelic.com &gt; APM &gt; (select an app) &gt; Overview</b>: After installing New Relic's PHP agent, view a summary of your app's performance.</div>
</div>
</div>

<p><b>View the big picture of your app</b></p>

<ul>
	<li>Monitor your app's <a href="/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction">Apdex (user satisfaction)</a></li>
	<li>Get a <a href="/docs/apm/applications-menu/monitoring/apm-overview-page">high-level summary of your app</a></li>
	<li>Create <a href="/docs/data-analysis/user-interface-functions/view-your-data/service-maps-visualize-monitor-apps-entire-architecture">architectural maps</a> of your app</li>
</ul>

<p><b>Find errors and problems quickly</b></p>

<ul>
	<li>Track <a href="/docs/apm/transactions/key-transactions/key-transactions-tracking-important-transactions-or-events">key transactions</a></li>
	<li><a href="/docs/insights/new-relic-insights/explore/metric-explorer-search-chart-metrics-sent-new-relic-agents">Search and create customizable charts</a> for the metric timeslice data most important to you, including any <a href="/docs/agents/manage-apm-agents/agent-data/custom-metrics">custom metrics</a> you are sending to New Relic.</li>
	<li><a href="/docs/alerts/alert-policies/understanding-alert-policies/alerting-new-relic">Alert</a> your team when errors or problems occur before they affect your users</li>
	<li>Track performance <a href="/docs/agents/php-agent/features/recording-deployments-using-php-script">after a deploy</a></li>
</ul>

<p><b>Drill down into performance details</b></p>

<ul>
	<li>Examine code-level <a href="/docs/apm/transactions/transaction-traces/transaction-traces">transaction traces</a></li>
	<li>Examine <a href="/docs/apm/transactions/transaction-traces/sql-statements">database query traces</a></li>
	<li>Examine <a href="/docs/apm/applications-menu/events/viewing-apm-errors-error-traces">error traces</a></li>
</ul>

<p id="business-data"><b>Analyze business data</b></p>

<p>Use the PHP agent with <a href="/docs/insights/new-relic-insights/understanding-insights/new-relic-insights">Insights</a> to organize, query, and visualize your data to answer key questions about application performance and customer experience.</p>

<ul>
	<li>Use <a href="/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights">default transaction attributes</a> or <a href="/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes">add your own</a></li>
	<li>Query your data <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql">using NRQL</a></li>
	<li>Send <a href="/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-new-relic-apm-agents#php-att">your own event data</a></li>
	<li>Create and share customizable, interactive <a href="/docs/insights/new-relic-insights/managing-dashboards-data">dashboards</a></li>
</ul>

<h2 id="architecture">Architecture</h2>

<p>The PHP agent has two binaries that work together to forward data to New Relic:</p>

<ul>
	<li>The agent handles automatic and API instrumentation of your PHP code.</li>
	<li>The daemon acts as a proxy between the agent and the New Relic platform.</li>
</ul>

<p>You can connect up to 500 applications/agents to one daemon. The daemon imposes <a href="/docs/agents/manage-apm-agents/agent-data/new-relic-events-limits-sampling">sampling</a> when the harvest cycle limits are reached, so consider this when deciding how many applications/agents to connect to a single daemon.</p>

<div class="callout-tip">
<p>The number of applications/agents per daemon may be lower when running in separate Docker containers, depending on the capacity of the connection between containers.</p>
</div>

<div class="dnd-atom-wrapper type-image context-sdl_editor_representation" contenteditable="false">
<div class="dnd-drop-wrapper"><!-- scald=10696:sdl_editor_representation -->
<div class="image"><img alt="This diagram shows the flow of data from the PHP agent to New Relic." height="366" src="https://docs-dev.newrelic.com/sites/default/files/thumbnails/image/PHP_Agent_Diagram_5.png" title="PHP_Agent_Diagram_4.png" typeof="foaf:Image" width="1266" /></div>
<!-- END scald=10696 --></div>

<div class="dnd-legend-wrapper" contenteditable="true">
<div class="meta">The flow of data from your PHP applications to New Relic.</div>
</div>
</div>

<p>The workflow between your application and New Relic must occur in this order:</p>

<ol>
	<li>The agent establishes a socket connection with the daemon by sending the first payload of instrumentation data.</li>
	<li>The daemon establishes an HTTPS link with the New Relic platform. The daemon must be invoked before your instrumented application is invoked. This is called <a href="/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced">agent mode</a> and is the default.</li>
</ol>

<p>To avoid losing reported data, make sure your instrumented application doesn't send transactions before both connections are established.</p>

<h2 id="installation">Install the agent</h2>

<div class="callout-tip">
<p>If you are <a href="/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service">installing the agent on a shared hosting service</a>, ensure you have root permissions to install the agent or contact your hosting provider for technical assistance.</p>
</div>

<p>For <strong>standard installations</strong>, see:</p>

<ul>
	<li><a href="/docs/agents/php-agent/installation/php-agent-installation-overview">PHP agent installation overview</a> (the basic installation steps for the most common setups).</li>
	<li><a href="/docs/agents/php-agent/installation/php-agent-installation-redhat-and-centos">Installing on RedHat or CentOS</a></li>
	<li><a href="/docs/agents/php-agent/installation/php-agent-installation-ubuntu-and-debian">Installing on Ubuntu or Debian</a></li>
	<li><a href="/docs/agents/php-agent/installation/php-agent-installation-tar-file">Installing with tar archive</a> (generic method to use on any supported systems such as Linux variants, OpenSolaris, SmartOS, FreeBSD, Mac OS X, etc)</li>
	<li><a href="/docs/agents/php-agent/installation/newrelic-install-script">The newrelic-install script</a> (how to use the interactive script that automates some installation tasks)</li>
</ul>

<p>For other types of PHP installations and <strong>advanced installation</strong> topics, see:</p>

<ul>
	<li><a href="/docs/agents/php-agent/installation/php-agent-installation-non-standard-php">PHP agent installation: Non-standard PHP</a></li>
	<li><a href="/docs/agents/php-agent/installation/starting-php-daemon-advanced">Starting the PHP daemon</a> (a standard New Relic installation starts the daemon automatically, but you can also <a href="/docs/agents/php-agent/installation/starting-php-daemon-advanced#selecting-external">start the daemon manually</a>)</li>
	<li><a href="/docs/agents/php-agent/installation/running-php-install-script-silent-mode">Silent mode for the install script</a></li>
	<li><a href="/docs/agents/php-agent/advanced-installation/install-new-relic-php-agent-gae-flexible-environment">Google App Engine (GAE) flex environment installation</a> for New Relic's PHP agent</li>
</ul>

<h2 id="configuration">Configure the agent</h2>

<p>The agent includes a variety of <a href="/docs/agents/php-agent/configuration/php-agent-configuration">configuration options</a> to further customize and fine-tune your installation.</p>

<div class="callout-tip">
<p>The most important part of agent configuration is to give your app a <a href="/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname">descriptive name</a>. New Relic <a href="/docs/agents/manage-apm-agents/app-naming/name-your-application#app-name">uses this app name to aggregate metrics</a> when you have multiple apps or hosts.</p>
</div>

<p>After changing any agent configuration options, restart your web server.</p>

<h2 id="extend">Extend agent instrumentation</h2>

<p>After installing the agent, go further and extend the agent's instrumentation:</p>

<ul>
	<li><a href="/docs/agents/php-agent/features/page-load-timing-php">Page load timing</a>: Integrate the PHP agent with <a href="/docs/browser/new-relic-browser/getting-started/new-relic-browser">New Relic Browser</a> to gain visibility into end-user activity.</li>
	<li><a href="/docs/agents/php-agent/features/php-custom-instrumentation">Custom instrumentation</a>: Instrument transactions not captured as part of our framework instrumentation.</li>
	<li><a href="/docs/agents/php-agent/configuration/php-agent-api">Agent API</a>: Use the agent API to customize the agent's behavior. For example, you can collect custom metrics, flag an error, or ignore a particular transaction entirely.</li>
	<li><a href="/docs/agents/php-agent/attributes/php-agent-attributes">Agent attributes</a>: Customize the <a href="/docs/agents/manage-apm-agents/agent-metrics/agent-attributes">attributes</a> attached to transactions. Customizing attributes allows you to avoid sending sensitive attributes, or to collect additional attributes for deeper visibility into your transactions.</li>
</ul>

<h2 id="troubleshoot">Troubleshoot your installation</h2>

<p>If you encounter issues with the PHP agent, see our <a href="/docs/agents/php-agent/troubleshooting">full list of troubleshooting documentation</a>. Common installation issues include:</p>

<ul>
	<li><a href="/docs/agents/php-agent/troubleshooting/no-data-appears-php">No data appears (PHP)</a></li>
	<li><a href="/docs/agents/php-agent/troubleshooting/determining-permissions-requirements">Determining permissions requirements</a></li>
	<li><a href="/docs/agents/php-agent/troubleshooting/ini-settings-not-taking-effect-immediately">INI settings not taking effect immediately</a></li>
	<li><a href="/docs/agents/php-agent/troubleshooting/why-when-restart-your-web-server-php">Why and when to restart your web server (PHP)</a></li>
</ul>

<h2 id="more_help">For more help</h2>
