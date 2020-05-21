---
title: Introduction to New Relic Browser
path: /browser/get-started/introduction-new-relic-php
contentType: basicDoc
templateKey: BasicDocPageTemplate
topics:
  - Browser
  - Browser agent
  - Get started
moreInfoLinks:
- link: "/docs/agents/php-agent/troubleshooting/no-data-appears-php"
  text: "No data appears (PHP)"
metaDescription: "For an overview of New Relic's Browser agent read this."
---
<p>New Relic Browser provides deep visibility and insight into how your users are interacting with your application or website. New Relic Browser measures page load timing, also known as real user monitoring (RUM), but it goes far beyond that to measure:</p>

<ul>
	<li>Individual session performance</li>
	<li>AJAX requests</li>
	<li><a href="/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring">SPA-architecture route changes</a></li>
	<li>JavaScript errors</li>
</ul>

<p>With this added functionality, New Relic extends real user monitoring to include the entire life cycle of a page or a view. And with <a href="/docs/insights/use-insights-ui/manage-account-data/insights-data-retention#access">access to New Relic Insights</a>, you can gather and visualize your <a href="/docs/insights/insights-data-sources/default-attributes/browser-default-attributes-insights">browser data</a>, then analyze what that data says about your business.</p>

<div class="callout-tip">
<p>If you're ready to get started with browser monitoring, see <a href="/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent">Install Browser</a>.</p>
</div>

<h2 id="life-cycle-monitoring">Full life cycle monitoring</h2>

<p>Many websites contain dynamic content that is loaded after the initial page has finished loading, and complex JavaScript code increases the need for error reporting. After you <a href="/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser">install New Relic Browser</a>, you get visibility into your users' entire experience, from the front end of your app to its backend performance. You can also see the individual interactions within user's webpage session (up to ten minutes).</p>

<p>Expanding far beyond legacy real user monitoring solutions, New Relic Browser monitors full page life cycle data, well beyond the initial page load. The UI also shows events throughout the individual user's session, allowing you to pinpoint problem areas and easily identify solutions.</p>

<p>For each end user page load, New Relic captures:</p>

<ul>
	<li>Time spent in the front end (browser)</li>
	<li>Time spent in the back end (network and web app)</li>
	<li>Geographic origin</li>
	<li>Browser type and version, and operating system</li>
</ul>

<p>For customers monitoring <a href="/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring">single-page application (SPA) architectures</a>, New Relic captures route change data and associated AJAX requests.</p>

<p>Browser presents app data in charts, maps, and tables. You can view the data globally across all users and see it sliced and diced by webpage, browser, user session, and location. In addition, New Relic Browser enhances New Relic's original real user monitoring (RUM) feature with expanded functionality, detailed charts, and focused data.</p>

<h2 id="enhanced-features">Feature comparison</h2>

<p id="standard-features">New Relic Browser includes standard features for all <a href="http://newrelic.com/browser-monitoring/pricing" target="_blank" title="Link opens in a new window">subscription levels</a>. With a New Relic Browser Pro subscription, you can capitalize on additional, enhanced features.</p>

<table>
	<thead>
		<tr>
			<th width="200">New Relic Browser page</th>
			<th>Features</th>
			<th style="width:100px">Lite</th>
			<th style="width:100px">Pro</th>
		</tr>
	</thead>
	<tbody>
		<tr id="features-overview">
			<td>
			<p><a href="/docs/browser/new-relic-browser/getting-started/browser-overview-website-performance-glance">Browser <strong>Overview</strong></a>:</p>

			<p>Your website's performance at a glance</p>
			</td>
			<td>
			<p>For both Lite and Pro subscriptions, the <strong>Overview</strong> summary charts show:</p>

			<ul>
				<li><a href="/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process">Page load timing</a></li>
				<li>Comparative <a href="/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction">Apdex scores</a> for browsers and app servers</li>
				<li>Throughput by browser type</li>
			</ul>

			<p>In addition, Pro subscriptions include charts with:</p>

			<ul>
				<li>Recent session traces of page load and user interaction events</li>
				<li>JavaScript error rate</li>
				<li>AJAX response time</li>
			</ul>

			<p>Links from the <strong>Overview</strong> page allow you to explore even deeper levels.</p>
			</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i><br />
			(some)</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i><br />
			(all)</td>
		</tr>
		<tr>
			<td id="features-sessions">
			<p><strong><a href="/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle">Session traces</a></strong>:</p>

			<p>Timeline of page load and user interaction events during a webpage's full life cycle</p>
			</td>
			<td>
			<p>This detailed and intuitive visualization of all events in the user's session can help pinpoint problem areas and easily identify solutions. The <strong>Session traces</strong> page provides:</p>

			<ul>
				<li>Summary information with links to specific sessions</li>
				<li>A heat map with events and times to view directly</li>
				<li>An expanded waterfall of events (up to ten minutes) to drill down into details</li>
				<li>Color-coded legend of the webpage's life cycle</li>
				<li>Zoom tools for quick navigation from the big picture to an individual interaction</li>
			</ul>
			</td>
			<td></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="features-ajax">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls">AJAX calls</a></strong>:</p>

			<p>Time-consuming or failing AJAX calls affecting webpage performance</p>
			</td>
			<td>
			<p>The <strong>AJAX</strong> page helps identify page load timing problems from the users' experience when you have time-consuming AJAX calls to update parts of the webpage. Chart data includes:</p>

			<ul>
				<li>Total time percentages for <a href="/docs/browser/new-relic-browser/getting-started/url-whitelists-grouping-browser-metrics">URL-based metrics</a></li>
				<li>Throughput</li>
				<li>Response time</li>
				<li>Average data transfer rates</li>
				<li>Status code patterns</li>
			</ul>
			</td>
			<td></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="features-js-errors">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/browser-pro-features/js-errors-dashboard-examining-errors-over-time">JavaScript errors</a></strong>:</p>

			<p>Browser errors in production over time</p>
			</td>
			<td>
			<p>To help identify problems you may not have tested for, or problems your users are experiencing that you may not have easily seen, the <strong>JS errors</strong> page shows:</p>

			<ul>
				<li>Number of times errors occurred during a given time range</li>
				<li>Automatically detected error patterns</li>
				<li>Event log showing asynchronous activity leading up to an error</li>
				<li>Stack trace error details when available</li>
				<li>Un-minified stack traces with source map upload</li>
			</ul>
			</td>
			<td></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="features-pageviews">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity">Page views</a></strong>:</p>

			<p>Insights into your site's popularity</p>
			</td>
			<td>
			<p>Drill down into detailed information about:</p>

			<ul>
				<li>Top webpages viewed (with <a href="/docs/browser/new-relic-browser/getting-started/url-whitelists-grouping-browser-metrics">URL-based metrics</a>)</li>
				<li>Timing and throughput details</li>
				<li>Links to <a href="/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle">session traces</a> (Pro)</li>
			</ul>

			<p>In addition, use New Relic's <a href="/docs/synthetics/new-relic-synthetics/administration/compare-page-load-performance-browser-synthetics">comparative charting feature</a> for a direct page load time comparison between real user (Browser) interactions and trends appearing in <a href="/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics">New Relic Synthetics</a> monitors.</p>
			</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr>
			<td>
			<p><strong><a href="https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details">Page View Timing</a>:</strong></p>

			<p>A look into your user's perception of your site's performance</p>
			</td>
			<td>
			<p>The <a href="https://docs.newrelic.com/attribute-dictionary/pageview?attribute_name=&amp;events_tids%5B%5D=10061"><code>PageViewTiming</code> event</a> provides a more real-time delivery mechanism that does not have a dependency on any other event. The additional metrics:</p>

			<ul>
				<li>First, first contentful & largest contentful paint</li>
				<li>First input delay</li>
				<li>First interaction</li>
			</ul>

			<p>Helps you understand how users experience your site, both from visual and responsiveness standpoints.</p>
			</td>
			<td class="fcenter"></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="features-spa-pageviews">
			<td>
			<p><strong><a href="/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser">SPA views</a></strong>:</p>

			<p>Monitoring for single-page app (SPA) architectures</p>
			</td>
			<td>
			<p>When SPA monitoring is enabled, Browser's <b>Page views</b> page shows you:</p>

			<ul>
				<li>Data for route changes</li>
				<li>Data for initial page loads</li>
				<li>Synchronous and asynchronous activity associated with browser interactions</li>
				<li>Page load timing that measures all associated asynchronous processes, not just page load events</li>
			</ul>
			</td>
			<td></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="features-geography">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/additional-standard-features/geography-webpage-performance-location">Geography</a></strong>:</p>

			<p>Webpage performance by location</p>
			</td>
			<td>
			<p>Color-coded Apdex scores and other data show your end users' experience around the world or in a specific region or state.</p>

			<p>In addition, Pro users can use the enhanced <a href="/docs/browser/new-relic-browser/browser-pro-features/filterable-geography-webpage-metrics-location"><b>Filterable geography</b> page</a> to:</p>

			<ul>
				<li>Filter and drill down into performance metrics.</li>
				<li>Use your mouse to select or zoom in and out of any location on the map.</li>
				<li>Explore heat map details.</li>
			</ul>

			<p>The Pro subscription level of visual detail is especially useful for professionals in IT and Operations to make business decisions about peering agreements and CDN usage.</p>
			</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i> (some)</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i> (all)</td>
		</tr>
		<tr id="features-browsers-page">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/additional-standard-features/browsers-problem-patterns-type-or-location">Browsers</a></strong>:</p>

			<p>Problem patterns by browser type or platform</p>
			</td>
			<td>
			<p>Explore your end users' experience with your app segmented by the browser they use, such as Google Chrome, Mozilla Firefox, Microsoft Internet Explorer, and Apple Safari. You can drill down to view:</p>

			<ul>
				<li>Top browsers by throughput</li>
				<li>Average page load time by platform type (mobile, desktop, and other)</li>
				<li>Selected browser type by version (for example, Chrome 31, 32, 33, etc.)</li>
			</ul>

			<p>This helps you quickly determine whether problems with page load timing may be related to a specific browser type or platform, or whether the problem is more widespread.</p>
			</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="features-settings">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/getting-started/browser-settings">Settings</a></strong>:</p>

			<p>UI options for browser monitoring</p>
			</td>
			<td>
			<p>Turn the New Relic Browser product on or off, including the option to enable or disable specific features. For example, you can:</p>

			<ul>
				<li>Select specific Apdex settings and countries for browsers.</li>
				<li>Enable or disable the AJAX and JavaScript errors reporting features.</li>
				<li>Maintain an <a href="/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#hierarchy">allow list of URL segments</a>.</li>
				<li>Monitor or block specific <a href="/docs/browser/new-relic-browser/installation-configuration/monitor-or-block-specific-domains">domains</a>.</li>
				<li>View your Browser app's alert conditions.</li>
			</ul>
			</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="insights">
			<td>
			<p><strong><a href="/docs/insights">New Relic Insights</a></strong>:</p>

			<p>Access to Insights features</p>
			</td>
			<td>
			<p>With <a href="/docs/insights/use-insights-ui/manage-account-data/insights-data-retention#access">access to New Relic Insights</a>, you get access to powerful features for the <a href="https://docs.newrelic.com/docs/insights/insights-data-sources/default-data/browser-default-events-insights">default Browser event data</a>, including:</p>

			<ul>
				<li>Run custom queries of your data using a <a href="/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql">SQL-like query language</a>.</li>
				<li>Create <a href="/docs/insights/use-insights-ui/manage-dashboards/create-edit-copy-insights-dashboards">custom dashboards</a> of your data.</li>
			</ul>
			</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i> (some)</td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
		<tr id="distributed-tracing">
			<td>
			<p><strong><a href="/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing">Distributed tracing</a></strong>:</p>

			<p>See complete request paths</p>
			</td>
			<td>
			<p>With <a href="/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing">access to New Relic distributed tracing</a>, you can see the connection between front-end activity and back-end activity. You can see across a full transaction, from browser activity, to time spent in network, to back-end activity.</p>
			</td>
			<td class="fcenter"></td>
			<td class="fcenter"><i class="fa fa-check"><span>[check icon]</span></i></td>
		</tr>
	</tbody>
</table>

