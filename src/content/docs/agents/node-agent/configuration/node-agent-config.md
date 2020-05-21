---
title: Node agent configuration
path: /agents/node-js/config/node-agent-configuration
contentType: basicDoc
templateKey: BasicDocPageTemplate
topics:
  - Agents
  - Node.js
  - Configuration
moreInfoLinks:
- link: "/docs/agents/php-agent/troubleshooting/no-data-appears-php"
  text: "No data appears (PHP)"
metaDescription: "For configuration of New Relic's node.js agent for linux read this."
---
<p>You can tailor New Relic's Node.js agent to your app's requirements by editing your <code>newrelic.js</code> config file or by setting an environment variable. The config file resides in the root directory of your app. You can also configure a few options from the New Relic UI, or use New Relic's <a href="/docs/agents/nodejs-agent/api-guides/nodejs-agent-api">Node.js agent API</a>.</p>

<div class="callout-important">
<p>The <a href="#license"><code>license_key</code></a> setting is required. New Relic <b>highly recommends</b> setting the <a href="#app_name"><code>app_name</code></a> so that your app has a <a href="/docs/apm/new-relic-apm/installation-configuration/name-your-application">meaningful name</a> instead of the default <code>My Application</code>.</p>
</div>

<h2 id="methods-and-precedence">Configuration methods and precedence</h2>

<p id="hierarchy">The primary method to configure the Node.js agent is the agent configuration file (<code>newrelic.js</code>). You can also configure most settings with <a href="#environment">environment variables</a>. You can also adjust some settings with <a href="#server-side">server-side configuration</a>.</p>

<p>The Node.js agent uses this order of precedence for configuration methods:</p>

<div class="dnd-atom-wrapper type-image context-inline_image" contenteditable="false">
<div class="dnd-drop-wrapper"><!-- scald=7641:inline_image {"link":""} --><img alt="Node.js agent configuration precedence" height="358" src="https://docs-dev.newrelic.com/sites/default/files/styles/inline_660px/public/thumbnails/image/nodejs-configuration-precedence.png?itok=T2PLMciG" title="Node.js agent configuration precedence" typeof="foaf:Image" width="583" /><!-- END scald=7641 --></div>

<div class="dnd-legend-wrapper" contenteditable="true">
<div class="meta"><b>Node.js configuration hierarchy:</b> Server-side configuration settings override environment variables. Environment variables override the agent config file. The config file overrides the agent defaults.</div>
</div>
</div>

<p>Here are detailed descriptions of each configuration method:</p>

<dl class="clamshell-list">
	<dt class="freq-link" id="config_file">Agent configuration file</dt>
	<dd>
	<p>The config file (<code>newrelic.js</code>) contains every Node.js agent setting. When you <a href="/docs/agents/nodejs-agent/installation-configuration/installing-maintaining-nodejs#installing">install the Node.js agent</a>, you must copy <code>newrelic.js</code> into your app's root directory. Most settings are empty by default; they inherit their values from <code>config/default.js</code>.</p>
	</dd>
	<dt class="freq-link" id="environment">Environment variables</dt>
	<dd>
	<p>Most configuration settings in <code>newrelic.js</code> have equivalent environment variables. These are useful, for example, if your agent runs in a PaaS enviornment such as Heroku or Microsoft Azure. Node.js agent environment variables always start with <code>NEW_RELIC_</code>.</p>

	<p>Where available, these environment variables are documented below under individual config options as the <b>Environ variable</b>. There are also two rarely used settings that can <a href="#environment-variable-overrides">only be configured via environment variables</a>.</p>
	</dd>
	<dt class="freq-link" id="server-side">Server-side configuration</dt>
	<dd>
	<div class="callout-permissions">
	<p><b>Owner or Admins</b></p>
	</div>

	<p id="ui_settings">Owners and Admins can view and configure a few settings <a href="/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration">directly in the New Relic UI</a>. Where available, the UI labels for server-side config are listed in this document under individual config options as the <b>Server-side label</b>.</p>
	</dd>
</dl>

<h2 id="exports_config">Exports variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>exports.config = {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="app_name">app_name <span style="color: red">(HIGHLY RECOMMENDED)</span></dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>"My Application"</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_APP_NAME</code></td>
			</tr>
		</tbody>
	</table>

	<p>The <a href="/docs/apm/new-relic-apm/installation-configuration/name-your-application">name New Relic uses to identify your app</a>. For example, <code>app_name: ['<var>MyNodeApp</var>']</code>. To <a href="/docs/apm/new-relic-apm/installation-configuration/use-multiple-names-app">use multiple names for your app</a>, specify a comma-delimited list of names.</p>

	<p>Data for all applications with the same name will be merged in the New Relic UI, so set this carefully. New Relic <b>highly recommends</b> that you replace the default name with a descriptive name to avoid confusion and unintended aggregation of data.</p>

	<div class="callout-tip">
	<p>For <a href="/docs/agents/nodejs-agent/hosting-services/nodejs-agent-microsoft-azure">Azure users</a>, the Node.js agent will use <code>APP_POOL_ID</code> if it is set, so you can use the name you chose for your Azure Web Server without setting it twice.</p>
	</div>
	</dd>
	<dt id="license">license_key <span style="color: red">(REQUIRED)</span></dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_LICENSE_KEY</code></td>
			</tr>
		</tbody>
	</table>

	<p>This setting is required. Your New Relic <a href="/docs/accounts-partnerships/accounts/account-setup/license-key">license key</a>. For example, <code>license_key: '<var>40HexadecimalCharacters</var>'</code>.</p>
	</dd>
	<dt id="agent-enabled">agent_enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>Set to <code>false</code> to stop the agent from starting up. This is useful when debugging your code requires temporarily disabling the agent. It prevents the agent from bootstrapping its instrumentation or setting up all its pieces, which prevents the agent from starting up and connecting to New Relic's servers.</p>
	</dd>
	<dt id="allow_all_headers">allow_all_headers</dt>
	<dd>
	<p>If <code>true</code>, enables capture of all HTTP headers, except for those filtered by <code>exclude</code> rules. If <code>false</code>, collected headers are limited to those defined in <a href="/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-attributes">Node.js agent attributes</a>.</p>

	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
		</tbody>
	</table>

	<div class="callout-caution">
	<p>Any header-related include/exclude rules must be in camelCase form to be filtered.</p>
	</div>
	</dd>
	<dt .apdex_t="" id="apdex">apdex_t <span style="color: red">(DEPRECATED)</span></dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Number</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>0.100</code></td>
			</tr>
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Apdex T</code></td>
			</tr>
		</tbody>
	</table>

	<p>Set your Apdex T <a href="https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/changing-your-apdex-settings">via the New Relic UI</a>.</p>
	</dd>
	<dt id="certificates">certificates</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array of strings</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
		</tbody>
	</table>

	<p>Additional certificates to trust for SSL connections, specified as an array of strings in PEM format. This affects both connections to an HTTPS proxy and connections to New Relic.</p>

	<div class="callout-tip">
	<p>You can also configure the agent to read its certificates from a file:</p>

	<pre>
certificates: [ fs.readFileSync('<var>myca</var>.crt', {encoding: '<var>utf8</var>'}) ]</pre>
	</div>
	</dd>
	<dt id="high_security">high_security</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_HIGH_SECURITY</code></td>
			</tr>
		</tbody>
	</table>

	<p>When set to <code>true</code>, enables <a href="/docs/accounts-partnerships/accounts/security/high-security#version2description">high security v2</a>. You must also enable the <a href="#ssl"><code>ssl</code></a> setting and <a href="/docs/accounts-partnerships/accounts/security/high-security#version2enabled">enable high security in the UI</a>.</p>
	</dd>
	<dt id="host">host</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>collector.newrelic.com</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_HOST</code></td>
			</tr>
		</tbody>
	</table>

	<div class="callout-important">
	<p>Do not edit this value unless New Relic Support asks you to change it.</p>
	</div>

	<p>Hostname for the <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector">New Relic collector</a> to connect to the Internet; for example, <code>host: 'collector.newrelic.com'</code>.</p>
	</dd>
	<dt id="labels">labels</dt>
	<dd>
	<p>Use <a href="/docs/apm/new-relic-apm/maintenance/labels-categories-organize-your-apps-servers">labels and categories to organize your apps</a>. Specify your labels as objects or a semicolon-delimited string of colon-separated pairs (for example, <code><var>Server</var>:<var>One</var>;<var>Data Center</var>:<var>Primary</var></code>).</p>

	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Object or string</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_LABELS</code></td>
			</tr>
		</tbody>
	</table>
	</dd>
	<dt id="port">port</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>443</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PORT</code></td>
			</tr>
		</tbody>
	</table>

	<div class="callout-important">
	<p>Do not edit this value unless New Relic Support asks you to change it.</p>
	</div>

	<p>Port number to connect to the New Relic collector; for example, <code>port: 443</code>.</p>
	</dd>
	<dt id="proxy">proxy</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PROXY_URL</code></td>
			</tr>
		</tbody>
	</table>

	<p id="proxy_url">A URL specifying the proxy server to connect to the Internet. For example, <code>proxy: 'http://<var>user</var>:<var>pass</var>@<var>10.0.0.1</var>:<var>8000</var>/'</code>.</p>

	<div class="callout-important">
	<p>The <code>proxy</code> config file setting overrides the other config file proxy settings (<code>proxy_host</code>, <code>proxy_port</code>, <code>proxy_user</code>, <code>proxy_pass</code>) if used. Similarly, the <code>NEW_RELIC_PROXY_URL</code> environment variable overrides the other environment variable proxy settings (<code>NEW_RELIC_PROXY_HOST</code>, <code>NEW_RELIC_PROXY_PORT</code>, <code>NEW_RELIC_PROXY_USER</code>, and <code>NEW_RELIC_PROXY_PASS</code>) if used.</p>
	</div>
	</dd>
	<dt id="proxy_host">proxy_host</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PROXY_HOST</code></td>
			</tr>
		</tbody>
	</table>

	<p>Hostname or IP address of the proxy server to connect to the Internet.</p>
	</dd>
	<dt id="proxy_pass">proxy_pass</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PROXY_PASS</code></td>
			</tr>
		</tbody>
	</table>

	<p>Password for authenticating to the proxy server. The agent supports only basic HTTP authentication.</p>
	</dd>
	<dt id="proxy_port">proxy_port</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PROXY_PORT</code></td>
			</tr>
		</tbody>
	</table>

	<p>Port number of the proxy server to connect to the Internet.</p>
	</dd>
	<dt id="proxy_user">proxy_user</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PROXY_USER</code></td>
			</tr>
		</tbody>
	</table>

	<p>User name for authenticating to the proxy server. The agent supports only basic HTTP authentication.</p>
	</dd>
	<dt id="ssl">ssl <span style="color: red">(DEPRECATED)</span></dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_USE_SSL</code></td>
			</tr>
		</tbody>
	</table>

	<p>The agent communicates with New Relic via HTTPS by default, and New Relic <a href="/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls">requires HTTPS</a> for all traffic to New Relic APM and the New Relic REST API. When enabled, the agent uses SSL to connect to the <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector">New Relic collector</a>. Must be <code>true</code> to enable <a href="#high_security"><code>high_security</code></a>.</p>

	<div class="callout-caution">
	<p>By default the agent is compliant with <a href="/docs/accounts-partnerships/accounts/security/high-security#version1descritpion">high security v1</a>. However, if you disable <code>ssl</code> and enable <a href="#params"><code>capture_params</code></a>, the agent can exit high security mode, which prevents the agent from connecting with high-security accounts. If high security mode fails, the log files show an error message such as <code>ERROR Account Security Violation</code>.</p>
	</div>
	</dd>
</dl>

<h2 id="logging_config">Logging variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>logging: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="log-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code> (<code>false</code> in <code>serverless_mode</code>)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_LOG_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>Enables or disables agent specific logging.</p>
	</dd>
	<dt id="log_level">level</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>info</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_LOG_LEVEL</code></td>
			</tr>
		</tbody>
	</table>

	<p>Defines the level of detail recorded in the agent logs. From least detail to most detail, possible values are <code>fatal</code>, <code>error</code>, <code>warn</code>, <code>info</code>, <code>debug</code>, or <code>trace</code>.</p>

	<div class="callout-caution">
	<p>Do not use <code>debug</code> or <code>trace</code> logging unless New Relic Support asks you to use them. These levels of logging can generate excessive overhead. For most situations, use <code>info</code>.</p>
	</div>
	</dd>
	<dt id="log">filepath</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>process.cwd()</code> plus <code>newrelic_agent.log</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_LOG</code></td>
			</tr>
		</tbody>
	</table>

	<p>Complete path to the New Relic agent log, including the filename. Defaults to <code>filepath: require('path').join(process.cwd(), 'newrelic_agent.log')</code>. The agent will shut down the process if it cannot create this file. The agent creates a log file with the same permissions as the parent Node.js agent process.</p>

	<ul>
		<li>To write all logging to <b>stdout</b>, set this to <code>stdout</code>.</li>
		<li>To write all logging to <b>stderr</b>, set this to <code>stderr</code>.</li>
	</ul>
	</dd>
</dl>

<h2 id="audit_log">Audit logging</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>audit_log: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="audit_log-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_AUDIT_LOG_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent logs the payloads it sends to the collector. This data is included in the main log file even when logging level is set to the lowest level.</p>
	</dd>
	<dt id="endpoints">endpoints</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>Empty array (include all types)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_AUDIT_LOG_ENDPOINTS</code></td>
			</tr>
		</tbody>
	</table>

	<p>The agent sends several different types of data to the collector in separate payloads. By default, all of them are included in the log file. This option makes it possible to limit logging only to specific types of data.</p>

	<p>Valid values include:</p>

	<ul>
		<li><code>agent_settings</code></li>
		<li><code>analytic_event_data</code></li>
		<li><code>connect</code></li>
		<li><code>custom_event_data</code></li>
		<li><code>error_data</code></li>
		<li><code>error_event_data</code></li>
		<li><code>metric_data</code></li>
		<li><code>preconnect</code></li>
		<li><code>shutdown</code></li>
		<li><code>span_event_data</code></li>
		<li><code>sql_trace_data</code></li>
		<li><code>transaction_sample_data</code></li>
	</ul>
	</dd>
</dl>

<h2 id="api_config">API configuration</h2>

<p>This section allows you to choose which API methods are enabled. Each configuration option allows you to modularly enable API methods that are responsible for sending custom information to New Relic.</p>

<div class="callout-important">
<p>All of these are set to <code>false</code> when the agent is in high security mode.</p>
</div>

<dl class="clamshell-list">
	<dt id="custom-attributes">custom_attributes_enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td>
				<p><code>NEW_RELIC_API_CUSTOM_ATTRIBUTES</code></p>
				</td>
			</tr>
		</tbody>
	</table>

	<p>This option enables <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#add-custom-param"><code>newrelic.addCustomAttribute</code></a> and <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#add-custom-params"><code>newrelic.addCustomAttributes</code></a>.</p>
	</dd>
	<dd></dd>
	<dt id="custom-events">custom_events_enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_API_CUSTOM_EVENTS</code></td>
			</tr>
		</tbody>
	</table>

	<p>This option enables <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#record_custom_event"><code>recordCustomEvent</code></a>.</p>
	</dd>
	<dt id="notice-error">notice_error_enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_API_NOTICE_ERROR</code></td>
			</tr>
		</tbody>
	</table>

	<p>This option enables <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError"><code>newrelic.noticeError</code></a>.</p>
	</dd>
</dl>

<h2 id="node-js-attributes">Attributes</h2>

<p>This section defines the variables for <a href="/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes">Node.js agent attributes</a> in the order they typically appear in the <code>attributes: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<div class="callout-caution">
<p>Any header-related include/exclude rules must be in camelCase form to be filtered.</p>
</div>

<dl class="clamshell-list">
	<dt id="attributes_enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ATTRIBUTES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>If <code>true</code>, enables capture of attributes for all destinations.</p>
	</dd>
	<dt id="attributes_exclude">exclude</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ATTRIBUTES_EXCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to exclude from all destinations. Allows <code>*</code> as wildcard at end.</p>
	</dd>
	<dt id="attributes_include">include</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ATTRIBUTES_INCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to include from all destinations. Allows <code>*</code> as wildcard at end.</p>
	</dd>
	<dt id="attributes_include_enabled">include_enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ATTRIBUTES_INCLUDE_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>When <code>true</code>, patterns may be added to the <a href="/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes#cfg-attributes-include"><code>attributes.include</code></a> list.</p>
	</dd>
</dl>

<h2 id="error_config">Error collector variables</h2>

<p>You can <a href="/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-mark-expected">manage how error are handled</a> in New Relic APM. This section defines the Node.js agent variables in the order they typically appear in the <code>error_collector: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="error_collector">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_ENABLED</code></td>
			</tr>
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Enable error collection?</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent collects <a href="/docs/apm/applications-menu/events/viewing-apm-errors-error-traces">error traces</a> from your app.</p>
	</dd>
	<dt id="error_ignore">ignore_status_codes</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>404</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES</code></td>
			</tr>
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Ignore these status codes</code></td>
			</tr>
		</tbody>
	</table>

	<p>Comma-delimited list of HTTP status codes for the error collector to ignore.</p>

	<div class="callout-caution">
	<p>Errors recorded using <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError">newrelic.noticeError</a> do not obey this configuration value.</p>
	</div>
	</dd>
	<dt id="error_ignore">ignore_classes</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array|Object</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERRORS</code></td>
			</tr>
			<!-- 
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES</code></td>
			</tr>
 --><!-- 
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Ignore these status codes</code></td>
			</tr>
 -->
		</tbody>
	</table>
	<!-- <p>Comma-delimited list of HTTP status codes for the error collector to ignore.</p> -->

	<p>Comma-delimited list of javascript error types/classes for the error collector to ignore.</p>

	<p>The following configuration</p>

	<pre>
    /* ... */
    error_collector: {
        ignore_classes: ["ReferenceError"]
    }    
    /* ... */
</pre>

	<p>Would ignore all reference errors.</p>

	<div class="callout-caution">
	<p>Errors recorded using <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError">newrelic.noticeError</a> do not obey this configuration value.</p>
	</div>
	</dd>
	<dt id="error_ignore">ignore_messages</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Object</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>{}</code></td>
			</tr>
			<!-- 
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES</code></td>
			</tr>
 --><!-- 
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Ignore these status codes</code></td>
			</tr>
 -->
		</tbody>
	</table>
	<!-- <p>Comma-delimited list of HTTP status codes for the error collector to ignore.</p> -->

	<p>A javascript object describing a list of javascript classes tied to javascript error messages for the collector to ignore. The following configuration.</p>

	<pre>
    /* ... */
    error_collector: {
        /* ... */
        ignore_messages: {"Error":["Undefined"],"Error":["Out of time"]}
        /* ... */
    }    
    /* ... */
</pre>

	<p>Would ignore all errors of type Error, with the exact (case-sensative) message strings of "Undefined" and "Out of time".</p>

	<div class="callout-caution">
	<p>Errors recorded using <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError">newrelic.noticeError</a> do not obey this configuration value.</p>
	</div>
	</dd>
	<dt id="error_ignore">expected_status_codes</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERROR_CODES</code></td>
			</tr>
			<!-- 
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES</code></td>
			</tr>
 --><!-- 
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Ignore these status codes</code></td>
			</tr>
 -->
		</tbody>
	</table>
	<!-- <p>Comma-delimited list of HTTP status codes for the error collector to ignore.</p> -->

	<p>Comma-delimited list of HTTP status codes for the error collector to mark as expected.</p>

	<div class="callout-caution">
	<p>Errors recorded using <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError">newrelic.noticeError</a> do not obey this configuration value.</p>
	</div>
	</dd>
	<dt id="error_ignore">expected_classes</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERRORS</code></td>
			</tr>
			<!-- 
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES</code></td>
			</tr>
 --><!-- 
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Ignore these status codes</code></td>
			</tr>
 -->
		</tbody>
	</table>
	<!-- <p>Comma-delimited list of HTTP status codes for the error collector to ignore.</p> -->

	<p>The following configuration</p>

	<pre>
    /* ... */
    error_collector: {
        expected_classes: ["ReferenceError"]
    }    
    /* ... */
</pre>

	<p>Would mark all reference errors as expected.</p>

	<p></p>

	<div class="callout-caution">
	<p>Errors recorded using <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError">newrelic.noticeError</a> do not obey this configuration value.</p>
	</div>
	</dd>
	<dt id="error_ignore">expected_messages</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Object</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>{}</code></td>
			</tr>
			<!-- 
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES</code></td>
			</tr>
 --><!-- 
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Ignore these status codes</code></td>
			</tr>
 -->
		</tbody>
	</table>
	<!-- <p>Comma-delimited list of HTTP status codes for the error collector to ignore.</p> -->

	<p>A javascript object describing a list of javascript classes tied to javascript error messages for the collector to ignore. The following configuration.</p>

	<pre>
    /* ... */
    error_collector: {
        /* ... */
        expected_messages: {"Error":["Undefined"],"Error":["Out of time"]}
        /* ... */
    }    
    /* ... */
</pre>

	<p>Would mark all errors of type Error with the exact (case-sensative) message strings of "Undefined" and "Out of time" as expected.</p>

	<div class="callout-caution">
	<p>Errors recorded using <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError">newrelic.noticeError</a> do not obey this configuration value.</p>
	</div>
	</dd>
	<dt id="error_attributes_enabled">attributes.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>If <code>true</code>, the agent captures attributes from error collection.</p>

	<div class="callout-caution">
	<p>Any header-related include/exclude rules must be in camelCase form to be filtered.</p>
	</div>
	</dd>
	<dt id="error_attributes_exclude">attributes.exclude</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_EXCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to exclude from error collection. Allows <code>*</code> as wildcard at end.</p>
	</dd>
	<dt id="error_attributes_include">attributes.include</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_INCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to include in error collection. Allows <code>*</code> as wildcard at end.</p>
	</dd>
</dl>

<h2 id="tx_tracer_config">Transaction tracer variables</h2>

<p>The agent groups your requests into <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction">transactions</a>, which are used to:</p>

<ul>
	<li>Visualize where your app spends its time (in transaction breakdowns).</li>
	<li>Identify slow requests.</li>
	<li>Group metrics.</li>
	<li>Isolate other issues, such as slow <a href="/docs/apm/applications-menu/monitoring/databases-slow-queries-dashboard">database performance</a>.</li>
</ul>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>transaction_tracer: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<div class="callout-important">
<p>Do not use brackets <code>[<var>suffix</var>]</code> at the end of your transaction name. New Relic automatically strips brackets from the name. Instead, use parentheses <code>(<var>suffix</var>)</code> or other symbols if needed.</p>
</div>

<dl class="clamshell-list">
	<dt id="tracer_enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRACER_ENABLED</code></td>
			</tr>
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Enable transaction tracing?</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent collects slow <a href="/docs/apm/transactions/transaction-traces/transaction-traces">transaction traces</a>.</p>
	</dd>
	<dt id="explain_threshold">explain_threshold</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>500</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_EXPLAIN_THRESHOLD</code></td>
			</tr>
		</tbody>
	</table>

	<p>Minimum query duration (in milliseconds) for a transaction to be eligible for <a href="/docs/apm/applications-menu/monitoring/viewing-slow-query-details">slow queries</a> in <a href="/docs/apm/transactions/transaction-traces/transaction-traces">transaction traces</a>.</p>
	</dd>
	<dt id="record-sql">record_sql</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String (<code>off</code>, <code>obfuscated</code>, or <code>raw</code>)</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>off</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_RECORD_SQL</code></td>
			</tr>
		</tbody>
	</table>

	<p>This option affects both <a href="#slow-queries">slow queries</a> and <code>record_sql</code> for transaction traces. It can have one of three values: <code>off</code>, <code>obfuscated</code>, or <code>raw</code>.</p>

	<p>When set to <code>off</code> no slow queries will be captured, and backtraces and SQL will not be included in transaction traces. If set to <code>raw</code> or <code>obfuscated</code>, the agent sends raw or obfuscated SQL and a slow query sample to the <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector">collector</a>. The agent may also send SQL when other criteria are met, such as when <code>slow_sql.enabled</code> is set.</p>
	</dd>
	<dt id="tracer_top">top_n</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>20</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRACER_TOP_N</code></td>
			</tr>
		</tbody>
	</table>

	<p>Defines the maximum number of requests eligible for <a href="/docs/apm/transactions/transaction-traces/transaction-traces">transaction traces</a>.</p>

	<p>Transactions are named based on the request, and <code>top_n</code> refers to the "top <var>n</var> slowest transactions" grouped by these names. The module replaces a recorded trace with a new trace only if the new trace is slower than the previous slowest trace of that name. The default value for this setting is <code>top_n: 20</code>, because the <a href="/docs/apm/transactions/transaction-traces/transaction-traces"><strong>Transactions</strong> page</a> also defaults to the 20 slowest transactions.</p>

	<p>The Node.js agent captures at least five different slow transactions in the first harvest cycle after start up. It will also reset and capture different transactions if no slow transactions have been captured for the last five <a href="/docs/apm/new-relic-apm/getting-started/glossary#harvest-cycle">harvest cycles</a>. This allows you to see more information about more of your app's request paths, at the possible cost of not focusing on the absolutely slowest request for that harvest cycle.</p>

	<div class="callout-tip">
	<p>To record the absolute slowest transaction over the last minute, you can set <code>top_n: 0</code> or <code>top_n: 1</code>. However, this causes one very slow route to dominate your transaction traces.</p>
	</div>
	</dd>
	<dt id="tracer_threshold">transaction_threshold</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer or <code>apdex_f</code></td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>apdex_f</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRACER_THRESHOLD</code></td>
			</tr>
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Threshold</code></td>
			</tr>
		</tbody>
	</table>

	<p>Threshold of web transaction response time in seconds beyond which a <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction">transaction</a> is eligible for <a href="/docs/apm/transactions/transaction-traces/transaction-traces">transaction tracing</a>. The default value is <code>apdex_f</code>; this sets the trace threshold to four times your application's <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#apdex_t">Apdex T</a>. You can also enter a specific time value in milliseconds.</p>

	<div class="examplebox">
	<p><b>Example: Threshold set to <code>apdex_f</code></b></p>

	<p>The default <code>apdex_t</code> is 100 milliseconds. If your transaction threshold is set to <code>apdex_f</code>, a "slow" transaction is 400 milliseconds.</p>
	</div>
	</dd>
	<dt id="hide-internals">hide_internals</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_HIDE_INTERNALS</code></td>
			</tr>
		</tbody>
	</table>

	<p>The agent uses a small amount of CPU in order to hide internal properties that are attached to the web application. If you change this configuration to <code>false</code>, it may slightly decrease your agent overhead, but it could also have an impact on the performance of the agent.</p>
	</dd>
	<dt id="hide-attributes-enabled">attributes.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>If <code>true</code>, the agent captures attributes from transaction traces.</p>

	<div class="callout-caution">
	<p>Any header-related include/exclude rules must be in camelCase form to be filtered.</p>
	</div>
	</dd>
	<dt id="hide-attributes-exclude">attributes.exclude</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_EXCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to exclude from transaction traces. Allows <code>*</code> as wildcard at end.</p>
	</dd>
	<dt id="hide-attributes-include">attributes.include</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_INCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to include in transaction traces. Allows <code>*</code> as wildcard at end.</p>
	</dd>
</dl>

<h2 id="rules_config">Rules variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>rules: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="rules_names">name</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Strings or regular expressions</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_NAMING_RULES</code></td>
			</tr>
		</tbody>
	</table>

	<p>A comma-delimited list of rules to match incoming request URLs and name the associated New Relic transaction. Uses the format:</p>

	<pre>
	name: [
	{pattern: '<var>STRING_OR_REGEX</var>', name: '<var>NAME</var>'},

	{pattern: '<var>STRING_OR_REGEX</var>', name: '<var>NAME</var>'}

	],
</pre>

	<p>Both parameters are required. For strings, you must escape control characters. You do not need to escape control characters in regular expressions. Additional attributes are ignored.</p>

	<p>Regular expressions support JavaScript-style capture groups, and names use <code>$1</code>-style replacement strings. Regular expressions only find the first matching result; subsequent matches are ignored. For more information, see <a href="/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#ignoring">Node.js transaction naming API</a>.</p>

	<p>For the <code>NEW_RELIC_NAMING_RULES</code> environment variable, pass the rules as comma-delimited JSON object literals:</p>

	<pre>
NEW_RELIC_NAMING_RULES='{"pattern":"<var>^t</var>","name":"<var>u</var>"},{"pattern":"<var>^u</var>","name":"<var>t</var>"}'</pre>
	</dd>
	<dt id="rules_ignore">ignore</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Strings or regular expressions</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>
				<p>Regular expression to match socket.io long-polling requests ("^\/socket\.io\/.*\/xhr-polling/").</p>
				</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_IGNORING_RULES</code></td>
			</tr>
		</tbody>
	</table>

	<p>Define a list of request URLs you want the agent to ignore. Specify the list as patterns, which can be strings or regular expressions.</p>
	</dd>
	<dt id="enforce_backstop">enforce_backstop</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ENFORCE_BACKSTOP</code></td>
			</tr>
		</tbody>
	</table>

	<div class="callout-caution">
	<p>Do not change this setting unless you understand <a href="/docs/features/metric-grouping-issues">metric grouping issues</a>.</p>
	</div>

	<p>When enabled, the agent renames transactions that are not affected by other naming logic (such as the API, rules, or metric normalization rules) to <code><var>NormalizedUri</var>/*</code>. If you set this to <code>false</code>, the agent sets transaction names to <code><var>Uri/path/to/resource</var></code>.</p>
	</dd>
</dl>

<h2 id="tx_events">Transaction events variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>transaction_events: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="tx_events_enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent sends transaction events to New Relic. This event data includes transaction timing, transaction name, and any custom parameters. If this is disabled, the agent does not collect this data or send it to Insights.</p>
	</dd>
	<dt id="tx_events_max_samples_stored">max_samples_stored</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>10000</td>
			</tr>
		</tbody>
	</table>

	<p>Defines the maximum number of events the agent collects per minute. If there are more than this number, the agent collects a statistical sampling.</p>

	<p>We do not recommend configuring past 10k. The server will cap data at 10k per-minute.</p>

	<div class="callout-important">
	<p>This configuration had different behavior in agent versions lower than 6.0.0. See <a href="#tx_events_max_samples_stored_legacy">max_samples_stored (DEPRECATED)</a> for agent versions 5.x or lower.</p>
	</div>
	</dd>
	<dt id="tx_events_max_samples_stored_legacy">max_samples_stored <span style="color: red">(DEPRECATED)</span></dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>20000</td>
			</tr>
		</tbody>
	</table>

	<p>Defines the maximum number of events the agent stores if it is unable to communicate with the <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector">New Relic collector</a>. The values from the previous <a href="/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle">harvest cycle</a> will be merged into the next one, with this option limiting the maximum number. Make sure this number is greater than <code><a href="#tx_events_max_samples_per_minute">max_samples_per_minute</a></code>; for example, set it to twice as much. Consider your memory overhead before increasing this value.</p>

	<div class="callout-caution">
	<p>This configuration has different behavior starting with agent version 6.0.0 and a new recommended maximum. See <a href="#tx_events_max_samples_stored">max_samples_stored</a> for agent versions 6.x or higher.</p>
	</div>
	</dd>
	<dt id="tx_events_max_samples_per_minute">max_samples_per_minute <span style="color: red">(DEPRECATED)</span></dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>10000</code></td>
			</tr>
		</tbody>
	</table>

	<p>Defines the maximum number of events the agent collects per minute. If there are more than this number, the agent collects a statistical sampling.</p>

	<div class="callout-caution">
	<p>This configuration has been replaced with max_samples_stored starting with version 6.0.0 of the agent. See <a href="#tx_events_max_samples_stored">max_samples_stored</a> for 6.x or later agents.</p>
	</div>
	</dd>
	<dt id="tx-attributes-enabled">attributes.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>If <code>true</code>, the agent captures attributes from transaction events.</p>

	<div class="callout-caution">
	<p>Any header-related include/exclude rules must be in camelCase form to be filtered.</p>
	</div>
	</dd>
	<dt id="tx-attributes-exclude">attributes.exclude</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_EXCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to exclude from transaction events. Allows <code>*</code> as wildcard at end.</p>
	</dd>
	<dt id="tx-attributes-include">attributes.include</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_INCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to include in transaction events. Allows <code>*</code> as wildcard at end.</p>
	</dd>
</dl>

<h2 id="browser-variables">Browser monitoring variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>browser_monitoring: {</code> section of your app's <code>newrelic.js</code> configuration file.</p>

<dl class="clamshell-list">
	<dt id="browser">enable</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_BROWSER_MONITOR_ENABLE</code></td>
			</tr>
			<tr>
				<th><a href="#server-side">Server-side label</a></th>
				<td><code>Enable browser monitoring?</code></td>
			</tr>
		</tbody>
	</table>

	<p>Generate JavaScript headers for New Relic Browser instrumentation. Although this defaults to <code>true</code>, the agent doesn't inject the New Relic Browser JavaScript unless you have <a href="/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser">enabled New Relic Browser</a>. Even if you have enabled New Relic Browser and <a href="/docs/agents/nodejs-agent/supported-features/page-load-timing-nodejs#procedures">added the Browser timing header</a>, you can <a href="/docs/agents/nodejs-agent/supported-features/page-load-timing-nodejs#disabling">disable Browser for your app</a> by setting this to <code>false</code>.</p>
	</dd>
	<dt id="browser-debug">debug</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_BROWSER_MONITOR_DEBUG</code></td>
			</tr>
		</tbody>
	</table>

	<p>If <code>true</code>, request un-minified sources from the server.</p>
	</dd>
	<dt id="browser-debug-enabled">attributes.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>If <code>true</code>, the agent sends custom attributes to New Relic Browser monitoring.</p>

	<div class="callout-caution">
	<p>Any header-related include/exclude rules must be in camelCase form to be filtered.</p>
	</div>
	</dd>
	<dt id="browser-debug-exclude">attributes.exclude</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_EXCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to exclude from Browser monitoring. Allows <code>*</code> as wildcard at end.</p>
	</dd>
	<dt id="browser-debug-include">attributes.include</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_INCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>Prefix of attributes to include in Browser monitoring. Allows <code>*</code> as wildcard at end.</p>
	</dd>
</dl>

<h2 id="custom_events">Custom Insights events variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>custom_insights_events: {</code> section of your app's <code>newrelic.js</code> configuration file. Currently there are no environment variables for custom Insights events.</p>

<dl class="clamshell-list">
	<dt id="custom_events_enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent sends custom Insights events recorded with <a href="/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#custom-events-api"><code>recordCustomEvent()</code></a> to <a href="/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api">New Relic Insights</a>. If this is disabled, the agent does not collect this data or send it to New Relic Insights.</p>
	</dd>
	<dt id="custom_events_max_samples_stored">max_samples_stored</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>1000</code></td>
			</tr>
		</tbody>
	</table>

	<p>Defines the maximum number of custom events the agent collects per minute. If the number of custom events exceeds this limit, the agent collects a statistical sampling.</p>

	<div class="callout-important">
	<p>Increasing this limit increases memory usage.</p>
	</div>
	</dd>
</dl>

<h2 id="slow-queries">Slow queries variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>slow_sql: {</code> section of your app's <code>newrelic.js</code> configuration file. These options control behavior for slow queries, but do not affect SQL nodes in transaction traces.</p>

<dl class="clamshell-list">
	<dt id="slow-sql-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_SLOW_SQL_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent collects <a href="/docs/apm/applications-menu/monitoring/viewing-slow-query-details">slow query details</a>.</p>
	</dd>
	<dt id="slow-sql-max-samples">max_samples</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>10</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_MAX_SQL_SAMPLES</code></td>
			</tr>
		</tbody>
	</table>

	<p>Defines the maximum number of slow queries the agent collects per minute. The agent discards additional queries after the limit is reached.</p>

	<div class="callout-important">
	<p>Increasing this limit increases memory usage.</p>
	</div>
	</dd>
</dl>

<h2 id="custom-hostnames">Custom hostname variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>process_host: {</code> section of your app's <code>newrelic.js</code> configuration file. These options control behavior regarding the host display name in the New Relic APM UI.</p>

<dl class="clamshell-list">
	<dt id="custom-hostnames-display">display_name</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String of 255 bytes or less</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_PROCESS_HOST_DISPLAY_NAME</code></td>
			</tr>
		</tbody>
	</table>

	<p>Specify a custom hostname for <a href="/docs/apm/new-relic-apm/maintenance/add-rename-remove-hosts#display_name">display in the New Relic UI</a>. If you do not set this field, New Relic will continue to use the default hostname found by calling <code>os.hostname()</code>.</p>

	<ul id="custom_hostname">
		<li>If you use the default hostname settings, New Relic finds the hostname through <code>os.hostname()</code>.</li>
		<li>If this call fails, New Relic uses the host's IP as the name.</li>
		<li>If you set <code>ipv_preference: 4</code> or <code>ipv_preference: 6</code>, you can select the type of IP address (IPv4 or IPv6) that appears in the New Relic UI.</li>
	</ul>
	</dd>
	<dt id="custom-hostnames-ipv">ipv_preference</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Integer (<code>4</code> or <code>6</code>)</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>4</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_IPV_PREFERENCE</code></td>
			</tr>
		</tbody>
	</table>
	</dd>
</dl>

<h2 id="environment-variable-overrides">Environment variable overrides</h2>

<p>This section defines two configuration options only available with environment variables. These overrides are not used in most configurations.</p>

<dl class="clamshell-list">
	<dt id="home">NEW_RELIC_HOME</dt>
	<dd>
	<p>Path to the directory containing <code>newrelic.js</code>. This is available only as an environment variable. You cannot set it in your config file.</p>

	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>String</td>
			</tr>
			<tr>
				<th>Default</th>
				<td>(none)</td>
			</tr>
		</tbody>
	</table>
	</dd>
	<dt id="no_file">NEW_RELIC_NO_CONFIG_FILE</dt>
	<dd>
	<p>Avoid using <code>NEW_RELIC_NO_CONFIG_FILE</code> because:</p>

	<ul>
		<li>Environment variables override <code>newrelic.js</code> settings anyway.</li>
		<li>Most configurations depend on the existence of <code>newrelic.js</code>.</li>
		<li>Some log messages assume a config file exists.</li>
	</ul>

	<p>If used, this prevents the agent from reading configuration settings from <code>newrelic.js</code>. To use this setting, you must configure <b>all</b> key settings by using environment variables.</p>

	<p>This is available only as an environment variable. You cannot set it in your config file.</p>

	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>False</code></td>
			</tr>
		</tbody>
	</table>
	</dd>
</dl>

<h2 id="datastore-tracer">Datastore tracer variables</h2>

<p>This section defines the Node.js agent variables in the order they typically appear in the <code>datastore_tracer</code> section of your app's <code>newrelic.js</code> configuration file. These options control behavior for collecting datastore instance metrics.</p>

<dl class="clamshell-list">
	<dt id="datastore-instance-enabled">instance_reporting.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent collects datastore instance metrics (such as host and port) for <a href="/docs/agents/nodejs-agent/supported-features/nodejs-instance-level-database-information">some database drivers</a>. These are reported on slow query traces and transaction traces.</p>
	</dd>
	<dt id="datastore-name-enabled">database_name_reporting.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
		</tbody>
	</table>

	<p>When enabled, the agent collects database name on slow query traces and transaction traces for <a href="/docs/agents/nodejs-agent/supported-features/nodejs-instance-level-database-information">some database drivers</a>.</p>
	</dd>
</dl>

<h2 id="cross-app-tracing">Cross application tracing</h2>

<p>The Node.js agent variables that control <a href="/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces">cross application tracing</a> typically appear in the <code>cross_application_tracer</code> section of your app's <code>newrelic.js</code> configuration file:</p>

<dl class="clamshell-list">
	<dt id="cat-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
		</tbody>
	</table>

	<p>When set to <code>true</code>, allows tracing of transactions across more than one New Relic-monitored applications.</p>
	</dd>
</dl>

<h2 id="err-message-redact">Error message redaction variables</h2>

<p>The Node.js agent variables that control error message redaction appear in the <code>allow_raw_exception_messages</code> section of your app's <code>newrelic.js</code> configuration file:</p>

<dl class="clamshell-list">
	<dt id="allow-raw-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_ALLOW_RAW_EXCEPTION_MESSAGES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>When <code>false</code>, the agent will redact the messages of captured errors.</p>
	</dd>
</dl>

<h2 id="distributed-tracing">Distributed tracing</h2>

<div class="callout-important">
<p>Enabling distributed tracing disables <a href="#cross-app-tracing">cross application tracing</a>, and has effects on other New Relic APM features. Before enabling, read the <a href="/docs/transition-guide-distributed-tracing">transition guide</a>.</p>

<p>Requires <a href="/docs/agents/nodejs-agent/installation-configuration/upgrade-nodejs-agent">Node.js agent version 4.7.0 or higher</a>.</p>
</div>

<p><a href="/docs/intro-distributed-tracing">Distributed tracing</a> lets you see the path that a request takes as it travels through a distributed system. When configuring via the config file, place the following option in the <code>distributed_tracing</code> section.</p>

<p>When distributed tracing is enabled, you can collect <a href="/docs/apm/distributed-tracing/ui-data/span-event">span events</a>.</p>

<dl class="clamshell-list"><!-- ********** enabled ********** -->
	<dt id="dt-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_DISTRIBUTED_TRACING_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>Set this to <code>true</code> to enable distributed tracing.</p>

	<p>For example, to enable this in the config file, you would use:</p>

	<pre>
distributed_tracing: {
   enabled: true
}</pre>
	</dd>
	<dt id="dt-exclude-newrelic-header">exclude_newrelic_header</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>false</code></td>
			</tr>
		</tbody>
	</table>

	<p>Set this to <code>true</code> to exclude the New Relic header that is attached to outbound requests, and instead only rely on W3C Trace Context Headers for distributed tracing. If this is <code>false</code> then both types of headers are used.</p>

	<p>For example, to enable this in the config file, you would use:</p>

	<pre>
distributed_tracing:{
   enabled: true,
   exclude_newrelic_header: true
}</pre>
	</dd>
</dl>

<h2 id="span-events">Span events</h2>

<p><a href="/docs/apm/distributed-tracing/ui-data/span-event">Span events</a> are reported for <a href="#distributed-tracing">distributed tracing</a>. Distributed tracing must be enabled to report span events. Span configuration is set in the <code>span_events</code> stanza. Options include:</p>

<dl class="clamshell-list">
	<dt id="span-events-enabled">enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_SPAN_EVENTS_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>Turns reporting of span events on or off.</p>
	</dd>
	<dt id="span-events-attributes-enabled">attributes.enabled</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Boolean</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>true</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_ENABLED</code></td>
			</tr>
		</tbody>
	</table>

	<p>This setting can be used to turn reporting of attributes on or off for span events. If <code>attributes.enabled</code> at the root level is <code>false</code>, no attributes will be sent to span events regardless on how this is set.</p>
	</dd>
	<!-- ********** span_events.attributes.include ********** -->
	<dt id="span-events-attributes-include">attributes.include</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_INCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>If attributes are enabled for span events, all attribute keys found in this list will be attached to span events. For more information, see the <a href="/docs/apm/other-features/attributes/agent-attributes">agent attribute rules</a>.</p>
	</dd>
	<!-- ********** span_events.attributes.exclude ********** -->
	<dt id="span-events-attributes-exclude">attributes.exclude</dt>
	<dd>
	<table class="specs">
		<tbody>
			<tr>
				<th>Type</th>
				<td>Array</td>
			</tr>
			<tr>
				<th>Default</th>
				<td><code>[]</code></td>
			</tr>
			<tr>
				<th><a href="#environment-variables">Environ variable</a></th>
				<td><code>NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_EXCLUDE</code></td>
			</tr>
		</tbody>
	</table>

	<p>All attribute keys found in this list will not be sent with span events. For more information, see the <a href="/docs/apm/other-features/attributes/agent-attributes">agent attribute rules</a>.</p>
	</dd>
</dl>

<h2 id="more_help">For more help</h2>
