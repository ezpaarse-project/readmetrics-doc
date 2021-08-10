<template><h2 id="ezpaarse" tabindex="-1"><a class="header-anchor" href="#ezpaarse" aria-hidden="true">#</a> ezPAARSE</h2>
<p>The following commands update and rebuild the core of ezPAARSE.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./update.sh ezpaarse
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The following commands update and rebuild the core of ezPAARSE. They also update the working materials (parsers, knowledge bases, scrapers, robots lists and predefined settings).</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./update.sh ezpaarse all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="working-materials" tabindex="-1"><a class="header-anchor" href="#working-materials" aria-hidden="true">#</a> Working materials</h3>
<p>The following commands update the materials needed by ezPAARSE. There is one distinct command per material type, see comments.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./update.sh platforms-update   <span class="token comment"># update parsers, knowledge bases, scrapers</span>
./update.sh middlewares-update <span class="token comment"># update middlewares</span>
./update.sh exclusions-update  <span class="token comment"># update the lists of hosts identified as robots</span>
./update.sh resources-update   <span class="token comment"># update predefined settings, default proxy formats</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
