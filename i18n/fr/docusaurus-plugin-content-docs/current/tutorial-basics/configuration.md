---
sidebar_position: 2
---

# Configuration

## Accès aux paramètres de Code GPT
1. Dans Visual Studio Code, cliquez sur **`File` > `Preference` > `Settings`**. Cela ouvrira la fenêtre des paramètres.
2. Sur le côté gauche de la fenêtre des paramètres, cliquez sur **`Extensions`**, puis cliquez sur **`CodeGPT`**.

:::note Paramètres de CodeGPT

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://github-production-user-asset-6210df.s3.amazonaws.com/6216945/274431737-b31ae5a8-8636-4a75-a32b-79062d0087de.png)

:::

## Paramètres Disponibles

### Clé API

Sélectionnez votre fournisseur d'IA dans le menu déroulant, puis saisissez la clé API du fournisseur sélectionné.

:::info Obtenez votre clé API

- [CodeGPT Plus](/docs/tutorial-ai-providers/judini)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Google Makersuite](/docs/tutorial-ai-providers/google)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [AI21](/docs/tutorial-ai-providers/ai21)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [Ollama](/docs/tutorial-ai-providers/judini)
  
:::

### Nombre Max de Tokens
Les tokens peuvent être considérés comme des morceaux de mots. Avant que l'API traite les suggestions, l'entrée est décomposée en tokens.

Chaque modèle a un nombre maximum de tokens. Sélectionnez le nombre de tokens en fonction de la longueur de la réponse que vous souhaitez obtenir et du modèle sélectionné.

En savoir plus : [Tokens par OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### Modèle
Le service propose l'accès à de nombreux modèles différents, regroupés par famille et capacité. Une famille de modèles associe généralement des modèles à leur tâche prévue.

En savoir plus : [Modèles par OpenAI](https://beta.openai.com/docs/models/overview)

### ID de l'Organisation (OpenAI)
Les informations sur l'ID de l'organisation s'appliquent uniquement à OpenAI et vous permettent de sélectionner l'organisation avec laquelle vous utiliserez votre clé API.

### Langage de la Requête
Sélectionnez la langue dans laquelle vous effectuerez les interactions avec l'API. Pour des fonctionnalités telles qu'Expliquer ou Documenter, chaque requête sera effectuée dans la langue sélectionnée.

### Température
Il s'agit d'un paramètre qui peut être ajusté. Il détermine le niveau de hasard ou de "créativité" dans le texte généré. Une température plus élevée donnera un résultat plus varié et créatif, tandis qu'une température plus basse produira un résultat plus similaire aux données d'entraînement et moins susceptible de contenir du contenu inattendu ou surprenant.

Il s'agit d'une valeur comprise entre 0 et 1. 0 étant le plus déterministe et 1 étant le plus aléatoire et créatif. La température par défaut est de 0,3.

En savoir plus : [Température par Cohere](https://docs.cohere.ai/docs/temperature)

### Mémoire de Fenêtre

Il stocke une liste de conversations passées, mais seules les dernières K (un nombre spécifique) conversations sont utilisées à partir de la liste sauvegardée. Cela est fait pour éviter que la mémoire ne devienne trop grande et dépasse la limite de tokens.

- par défaut : 4
- minimum : 1
- maximum : 50

