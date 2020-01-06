# tp2-morillon-hugo

## Info
mail:hugo.morillon@ynov.com
GitHub Username : [HugoYnovLyon ]( https://github.com/YI-B3-Devops/tp2-morillon-hugo )



## Objectif

Le but du TP est d'avoir un reverse proxy géré à l'aide de Nginx qui oriente soit sur la page principale de Nginx, soit sur la réponse de base d'une API, soit sur une réponse spécifique de la même API.



## Prérequis

- Docker & Docker Compose
- PowerShell



## Installation

Après avoir cloner le repo, il suffit d'aller dans le répertoire du projet puis dans le sous dossier Dockerfiles et de lancer la commande `docker-compose -f ./docker-compose.dev.yaml up --build --force-recreate`



## Routes

`localhost:3000` → Page de base de Nginx

`localhost:3000/api` → Page de base de l'API

`localhost:3000/api/status` → Page spécifique de l'API



## Complications

J'ai découvert Docker, sur ce projet ainsi que le précédent. Sans période de vacance il était compliqué de concevoir quelque chose de poussé. Ce TP est relativement léger je pense. Je n'ai pu tester pleinement à cause d'une erreur de Postgresql qui survient sous Windows et non sous Linux. J'espère donc que vous n'aurais point ce problème

