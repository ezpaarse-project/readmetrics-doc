<template><p>Make sure you fulfilled the <a href="requirements">requirements</a> before going any further.</p>
<h2 id="stable-version" tabindex="-1"><a class="header-anchor" href="#stable-version" aria-hidden="true">#</a> Stable version</h2>
<p>To install the last stable version on a Unix system, open a console and enter :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ezpaarse-project/readmetrics-scripts.git
<span class="token builtin class-name">cd</span> readmetrics-scripts
./install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="uninstall-readmetrics" tabindex="-1"><a class="header-anchor" href="#uninstall-readmetrics" aria-hidden="true">#</a> Uninstall ReadMETRICS</h2>
<p>Stop and delete docker's containers :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./down.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Remove the readmetrics-scripts folder :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf readmetrics-scripts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
