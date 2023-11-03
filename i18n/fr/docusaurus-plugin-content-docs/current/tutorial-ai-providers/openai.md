---
sidebar_position: 2
---
# OpenAI

Site officiel : https://openai.com

OpenAI est une organisation dont l'objectif est de développer et de promouvoir une IA amicale dans l'intérêt de toute l'humanité. Ils ont développé plusieurs modèles d'IA, dont GPT-3 et GPT-4, probablement les modèles de traitement du langage naturel les plus avancés au monde.

## Connexion de votre compte OpenAI
- Accédez à la page [API Keys sur OpenAI](https://platform.openai.com/account/api-keys).
- Connectez-vous avec votre compte OpenAI (ou [créez un nouveau compte](https://platform.openai.com/signup))
- Cliquez sur le bouton étiqueté **`Créer une nouvelle clé secrète`**
- Une nouvelle fenêtre de dialogue apparaîtra, contenant un champ de texte avec votre API Key.
- Copiez cette API Key dans votre presse-papiers.
- Collez votre API Key

:::caution Supprimer API Key
Si vous souhaitez supprimer votre API Key de CodeGPT, ouvrez la palette de commandes et recherchez CodeGPT : `CodeGPT: Supprimer API Key`.
:::

:::note Se connecter avec OpenAI :::
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vl6-5BigHzk?si=SgdXt0HAMah9-aal" title="Lecteur vidéo YouTube" frameborder="0" allow="acceléromètre; autoplay; écriture au presse-papiers; lecture vidéo cryptée; gyroscope; image dans l'image; partage web" allowfullscreen></iframe>
:::

## Modèles GPT disponibles dans Code GPT
- gpt-4
- gpt-4-32k
- gpt-3.5-turbo
- gpt-3.5-turbo-16k
- gpt-3.5-turbo-instruct

## API OpenAI
Pour utiliser cette extension, vous devez disposer de crédits chargés sur votre compte OpenAI. Cette extension utilise l'API officielle d'OpenAI, qui est une API payante. Si vous n'avez pas de crédits, l'extension affichera l'erreur API OpenAI suivante :

**Vous avez dépassé votre allocation actuelle, consultez votre plan et les détails de facturation**

Pour consulter votre compte et les crédits dont vous disposez, vous devez vous connecter à votre compte sur https://openai.com/api/
Dans le menu, sélectionnez **Gérer le compte**, puis dans la section Utilisation, vous pourrez voir la quantité de crédits disponibles et utilisés.

:::note Compte OpenAI
![Gérer le compte](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

Sur cette image, vous pouvez voir que 13 USD ont été utilisés sur un total de 18 USD.

:::note Utilisation
![Crédits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Erreurs de l'API
Si vous recevez des erreurs de l'API, consultez le lien suivant : [Erreurs de l'API OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Erreurs courantes d'OpenAI
- [Code d'erreur 404 : Le modèle gpt-4 n'existe pas](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Code d'erreur 429 - Limite de vitesse atteinte pour les demandes](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Code d'erreur 429 - Vous avez dépassé votre allocation actuelle, consultez votre plan et les détails de facturation.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Code d'erreur 429 - Le moteur est actuellement surchargé. Veuillez réessayer ultérieurement.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Code d'erreur 401 - Authentification non valide](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
