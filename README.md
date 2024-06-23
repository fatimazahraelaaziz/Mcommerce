# Mcommerce - Application Microservices 

## Description du Projet

Le sujet de ce projet concerne le développement et le déploiement d’une application microservices nommée **Mcommerce** en utilisant les pratiques et technologies cloud-native (conteneurisation, orchestration des conteneurs, automatisation des déploiements, etc.). 

Voir la figure ci-après pour avoir une idée sur les fonctionnalités proposées par cette application ainsi que la communication entre ces microservices.

![image](https://github.com/fatimazahraelaaziz/Mcommerce/assets/96253973/0606554b-4460-4203-ba9e-d1058d99a77d)

## Fonctionnalités

- Développement des services backend avec Node.js / Express et MongoDB pour le microservice « produit ».
- Développement du frontend sous forme de SPA avec la librairie React.
- Création des fichiers Dockerfile pour l’ensemble des services et le frontend.
- Automatisation du build, scans de sécurité, packaging et publication des images Docker avec GitLab CI.
- Création des fichiers YAML de Kubernetes pour déployer l'application dans un cluster Kubernetes local.
- Utilisation d’ArgoCD pour détecter les changements dans le repo GitLab et étendre le CI pipeline de GitLab pour déployer les microservices mis à jour dans le cluster Kubernetes local.

## Étapes du Développement

1. **Développement Backend** :
    - Technologies : Node.js / Express, MongoDB.
    - Microservices : « produit », « paiement », « commande ».
    - Communication synchrone entre « paiement » et « commande » via une API REST.

2. **Développement Frontend** :
    - Technologie : React.
    - Type d'application : SPA (Single Page Application).
    - Communication via API REST entre le frontend et le backend.

3. **Création des Dockerfiles** :
    - Créer les fichiers Dockerfile nécessaires pour tous les services et le frontend.

4. **Automatisation avec GitLab CI** :
    - Automatiser le build, scans de sécurité, packaging et publication de l’image Docker pour chaque service et le frontend.

5. **Déploiement Kubernetes** :
    - Créer un répertoire GitLab contenant les fichiers YAML de Kubernetes nécessaires pour déployer l'application dans un cluster Kubernetes local.

6. **Utilisation d’ArgoCD** :
    - Utiliser ArgoCD pour détecter les changements dans le repo GitLab contenant les fichiers YAML de Kubernetes.
    - Étendre le CI pipeline de GitLab pour déployer chaque microservice mis à jour dans le cluster local de Kubernetes.

## Annexes

- **Diagramme des fonctionnalités et des communications** : [Lien vers le diagramme]
- **Fichiers YAML de Kubernetes** : [Lien vers les fichiers YAML]
- **Documentation complémentaire** : [Lien vers la documentation]

## Auteur

- **LAAZIZ Fatima Zahrae - TAMLALTI Maryam**
- **Contact: laazizfatimazahrae@gmail.com - mtamlalti@gmail.com**

## Le CI pipeline de gitlab 

https://gitlab.com/Laazizz/ecommerce


## Le dépôt contenant les fichier YAML

https://gitlab.com/maryam2001/kubernetes

## Pour plus de details: voir le fichier Description_Mcommerce.pdf ci-dessus.
