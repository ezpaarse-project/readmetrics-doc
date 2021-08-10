<template><h2 id="ezpaarse" tabindex="-1"><a class="header-anchor" href="#ezpaarse" aria-hidden="true">#</a> ezPAARSE</h2>
<p>Les commandes suivantes mettent à jour et reconstruisent le noyau d'ezPAARSE.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./update.sh ezpaarse
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Les commandes suivantes mettent à jour et reconstruisent le noyau d'ezPAARSE. Elles mettent également à jour les matériels de travail (analyseurs syntaxiques, bases de connaissances, racleurs, listes de robots et paramètres prédéfinis).</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./update.sh ezpaarse all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="materiaux-de-travail" tabindex="-1"><a class="header-anchor" href="#materiaux-de-travail" aria-hidden="true">#</a> Matériaux de travail</h3>
<p>Les commandes suivantes mettent à jour le matériel nécessaire à ezPAARSE. Il existe une commande distincte par type de matériel, voir les commentaires.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./update.sh platforms-update   <span class="token comment"># miseà jour des parsers, bases de connaissances, scrapers</span>
./update.sh middlewares-update <span class="token comment"># miseà jour des middlewares</span>
./update.sh exclusions-update  <span class="token comment"># miseà jour des listes d'hôtes identifiés comme des robots</span>
./update.sh resources-update   <span class="token comment"># miseà jour des paramètres prédéfinis, formats de proxy par défaut</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
