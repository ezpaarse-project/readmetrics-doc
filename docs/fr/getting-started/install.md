---
lang: fr-FR
title: Installation
description: ''
---

Assurez-vous que vous avez bien rempli les [prérequis](requirements) avant d'aller plus loin.

## Version stable

Pour installer la dernière version stable sur un système Unix, ouvrez une console et entrez :

```bash
git clone https://github.com/ezpaarse-project/readmetrics-scripts.git
cd readmetrics-scripts
./install.sh
```

## Désinstaller ReadMETRICS

Arrêter et supprimer les conteneurs docker :

```bash
./down.sh
```

Supprimer le dossier readmetrics-scripts :

```bash
rm -rf readmetrics-scripts
```