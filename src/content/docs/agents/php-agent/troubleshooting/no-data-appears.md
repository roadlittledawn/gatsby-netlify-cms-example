---
title: No data appears
path: /agents/php-agent/troubleshooting/no-data-appears
contentType: troubleshootingDoc
templateKey: BasicDocPageTemplate
topics:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: "For an overview of New Relic's PHP agent (compatibility, requirements, installation, configuration, troubleshooting, known issues), start here."
---
<h2>Problem</h2>
<p>After <a href="/docs/agents/php-agent/installation/php-agent-installation-overview">installing the New Relic PHP agent</a>, generating some traffic, and waiting at least five minutes, no data appears in your New Relic UI.</p>

<h2>Solution</h2>
<p>If no data appears after you generate traffic to your app and wait at least five minutes, use <a href="/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics">New Relic Diagnostics</a> to automatically detect common problems and suggest troubleshooting. If that does not solve the problem, try the following:</p>

<table>
	<thead>
		<tr>
			<th style="width:200px">PHP agent troubleshooting</th>
			<th>Comments</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Compatibility</td>
			<td>Make sure your system meets the PHP agent's <a href="/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements">compatibility and requirements</a>.</td>
		</tr>
		<tr>
			<td>Non-standard PHP version</td>
			<td>If you are using a non-standard version of PHP, follow the <a href="/docs/php/php-agent-installation-non-standard-php">advanced installation procedures</a> to make sure the default installer can find your version of PHP.</td>
		</tr>
		<tr>
			<td>App name</td>
			<td>Make sure your apps have a <a href="/docs/agents/manage-apm-agents/app-naming/name-your-application#app-name">descriptive, unique name.</a> For example, if you have multiple apps with the same name, such as the default app name <code>PHP Application</code>, data from each of these apps rolls up into the default app name, and it may appear as if an individual app is not reporting.</td>
		</tr>
		<tr>
			<td>Web server</td>
			<td>Restart your web server (Apache, Nginx, PHP-FPM, etc.), and wait a few minutes for data to appear.</td>
		</tr>
		<tr>
			<td><code>phpinfo()</code></td>
			<td>Check <code>phpinfo()</code> to <a href="/docs/agents/php-agent/troubleshooting/using-phpinfo-verify-php">verify that you installed the PHP agent</a> and that the <a href="/docs/accounts-partnerships/accounts/account-setup/license-key">license key</a> in it is correct.</td>
		</tr>
		<tr>
			<td>SELinux</td>
			<td>If your system uses SELinux, <a href="/docs/agents/php-agent/troubleshooting/data-stops-reporting-while-using-selinux#solution">configure SELinux</a> to work with the PHP agent.</td>
		</tr>
		<tr>
			<td>Log files</td>
			<td>
			<ol>
				<li>Verify that both the agent and the daemon are <a href="/docs/agents/php-agent/troubleshooting/generating-logs-troubleshooting-php">writing to their log files</a>.</li>
				<li>If not, <a href="/docs/agents/php-agent/installation/php-agent-installation-overview">reinstall the agent</a>.</li>
				<li>Verify the log file permissions to make sure the log owner is the same as the New Relic user.</li>
			</ol>
			</td>
		</tr>
		<tr>
			<td>PHP agent permissions</td>
			<td>Make sure you have the <a href="/docs/agents/php-agent/troubleshooting/determining-permissions-requirements">correct permissions</a> to use the PHP agent.</td>
		</tr>
		<tr>
			<td>Other</td>
			<td>
			<p>If none of these solutions solve the problem, see the troubleshooting procedures for:</p>

			<ul>
				<li id="no_data_after_PHP_update"><a href="/docs/agents/php-agent/troubleshooting/agent-stops-working-after-updating-php">Agent stops after you update PHP</a></li>
				<li id="data_stops_appearing"><a href="/docs/agents/php-agent/troubleshooting/data-stops-reporting">After previously reporting data, the PHP agent stops reporting</a></li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
