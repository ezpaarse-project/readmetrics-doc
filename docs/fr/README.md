---
lang: fr-FR
home: true
heroImage: /images/icons/icon-384x384.png
heroAlr: ReadMETRICS Logo
heroText: ReadMETRICS
tagline: un ensemble de logiciels robustes pour les statistiques d'utilisation
actions:
  - text: Commencez →
    link: /fr/getting-started/requirements.md
    type: primay
---

## Qu'est-ce que ReadMETRICS ?

**ReadMETRICS** est une nouvelle solution clé en main pour :

- le suivi des accords de transformation, y compris avant et après
- l'analyse de l'utilisation à travers les disciplines et les consortiums
- l'évaluation de la valeur des dépenses d'édition
- permettre une analyse comparative des citations

Il est basé sur les outils libres et open source [ezPAARSE](https://www.ezpaarse.org/) et [ezMESURE](https://ezmesure.couperin.org/) déjà existants et testés sur le terrain, en étendant et en incluant des fonctionnalités inspirées par la transition de la [Bibliothèque nationale du Luxembourg](https://bnl.public.lu/fr.html) vers l'Open Access, décrite [ici](https://www.consortium.lu/?page_id=6334)

<iframe frameborder="0" style="width:100%;height:440px;" src="https://viewer.diagrams.net/?p=anim&highlight=0000ff&edit=_blank&layers=1&nav=1&title=2020-10-08-readmetrics-architecture.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-IVxBpzs6TXC1M-Q6pYoAu_OYUG2PQe1%26export%3Ddownload"> sss </iframe>


## Timeline

Nous travaillons à rendre ReadMETRICS **disponible d'ici l'été 2021**. En attendant, les outils qui constituent la pile sont déjà disponibles et peuvent être déployés et utilisés par les sites pilotes intéressés. N'hésitez pas à [nous contacter](mailto:readmetrics@couperin.org) directement !

## Financing the Team and the Tools

L'équipe compte actuellement 6 personnes, soutenues financièrement par l'Inist-CNRS et le consortium Couperin.org avec l'aide plus ponctuelle de structures tierces (BnL et OCLC). Parmi les institutions désireuses d'utiliser la solution readMETRICS, nous recherchons des partenaires prêts à participer financièrement, pour nous aider à financer deux des postes de développeurs actuels et continuer à maintenir les outils existants et à offrir de nouvelles fonctionnalités. Le montant que nous devons atteindre est d'environ 90k€ (ou 100k$) par an.

## Qu'est-ce que'ezPAARSE

Un [logiciel libre](https://github.com/ezpaarse-project/ezpaarse/) qui peut ingérer vos fichiers journaux (proxy) et montrer comment les utilisateurs accèdent aux ressources électroniques souscrites. Il filtre, extrait et enrichit les événements d'accès qui ont été repérés et produit un fichier de résultats qu'ezMESURE peut ingérer et afficher dans un tableau de bord.

## Qu'est-ce que'ezMESURE

Un [logiciel libre](https://github.com/ezpaarse-project/ezmesure/) basé sur [Elastic et Kibana](https://www.elastic.co/fr/) pour constituer un répertoire centralisant les données statistiques d'utilisation produites par une ou plusieurs instances d'ezPAARSE. Il est également capable d'ingérer les données de [COUNTER5](https://www.projectcounter.org/code-of-practice-five-sections/abstract/).

![ezMESURE Dashboard](/readmetrics-doc/images/ezmesure_dashboard.png)
