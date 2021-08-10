<template><p>Assurez-vous que vous avez bien rempli les <a href="requirements">prérequis</a> avant d'aller plus loin.</p>
<h2 id="version-stable" tabindex="-1"><a class="header-anchor" href="#version-stable" aria-hidden="true">#</a> Version stable</h2>
<p>Pour installer la dernière version stable sur un système Unix, ouvrez une console et entrez :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ezpaarse-project/readmetrics-scripts.git
<span class="token builtin class-name">cd</span> readmetrics-scripts
./install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="desinstaller-readmetrics" tabindex="-1"><a class="header-anchor" href="#desinstaller-readmetrics" aria-hidden="true">#</a> Désinstaller ReadMETRICS</h2>
<p>Arrêter et supprimer les conteneurs docker :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./down.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Supprimer le dossier readmetrics-scripts :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf readmetrics-scripts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
