---
sidebar_position: 2
---

# OpenAI

Site officiel https://openai.com

OpenAI est une organisation de recherche en intelligence artificielle qui vise à développer et promouvoir une IA conviviale de manière à bénéficier à l'ensemble de l'humanité. Ils ont développé plusieurs modèles d'intelligence artificielle, dont GPT-3 et GPT-4, probablement les modèles de traitement du langage naturel les plus avancés au monde.

## Connectez votre compte OpenAI
- Accédez à la [page des clés API sur OpenAI](https://platform.openai.com/account/api-keys).
- Connectez-vous avec votre compte OpenAI (ou [créez un nouveau compte](https://platform.openai.com/signup))
- Cliquez sur le bouton intitulé **`Créer une nouvelle clé secrète`**
- Une nouvelle fenêtre de dialogue apparaîtra, contenant un champ de texte avec votre clé API.
- Choisissez `OpenAI` comme `Fournisseur`
- `Établir la connexion` et liez avec votre compte sur le bouton `⋮`.
- Copiez la clé API et l'ID de l'organisation ici :

<p align="center">
      <img width="450" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/c79e8c36-2d0c-4cfe-992b-5816748472aa"/>
</p>
  
- Collez votre clé API
  

:::caution Supprimer la clé
Si vous souhaitez supprimer votre clé API de CodeGPT, ouvrez la palette de commandes et recherchez `CodeGPT: Supprimer la clé API`. Ou vous pouvez sélectionner le bouton `⋮` et cliquer sur `Supprimer la connexion`.
:::

## Modèles GPT disponibles dans Code GPT
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## API OpenAI

Pour utiliser cette extension, vous devez avoir des crédits chargés sur votre compte OpenAI.
Cette extension utilise l'API officielle d'OpenAI qui est une [API payante](https://openai.com/api/pricing/).

Si vous n'avez pas de crédits, l'extension affichera l'erreur suivante de l'API OpenAI :
**Vous avez dépassé votre quota actuel, veuillez vérifier votre plan et les détails de facturation.**

Pour examiner votre compte et les crédits que vous avez disponibles, vous devez vous connecter avec votre compte sur https://openai.com/api/

Dans le menu, sélectionnez "Gérer le compte", puis dans la section "Utilisation", vous pourrez voir la quantité de crédits disponibles et utilisés.

:::note Compte OpenAI
![Gérer le compte](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

Sur cette image, vous pouvez voir que $13 USD ont été utilisés sur un total de $18.

:::note Utilisation
![Crédits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Erreurs de l'API
Si vous recevez des erreurs de l'API, consultez le lien suivant : [Erreurs de l'API OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Erreurs courantes d'OpenAI
- [Code d'erreur 404 : Le modèle gpt-4 n'existe pas](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Code d'erreur 429 - Limite de fréquence atteinte pour les demandes](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Code d'erreur 429 - Vous avez dépassé votre quota actuel, veuillez vérifier votre plan et les détails de facturation.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Code d'erreur 429 - Le moteur est actuellement surchargé. Veuillez réessayer plus tard.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Code d'erreur 401 - Authentification invalide](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)

