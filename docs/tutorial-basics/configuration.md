---
sidebar_position: 2
---

# Configuration

## Accessing Code GPT's Settings
1. In Visual Studio Code, click **`File` > `Preferences` > `Settings`**.  This will open the Settings window.  
2. On the left-hand side of the Settings window, click **`Extensions`**, and then click **`CodeGPT`**.

:::note CodeGPT Settings

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://github-production-user-asset-6210df.s3.amazonaws.com/6216945/274431737-b31ae5a8-8636-4a75-a32b-79062d0087de.png)

:::

## Available Settings

### API Key

Select your AI provider from the dropdown menu, then enter the API Key for the selected provider.

:::info Get your API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Google Makersuite](/docs/tutorial-ai-providers/google)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [AI21](/docs/tutorial-ai-providers/ai21)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [Ollama](/docs/tutorial-ai-providers/ollama)
- [Fireworks](/docs/tutorial-ai-providers/fireworks)
  
:::

### Max Token
Tokens can be thought of as pieces of words. Before the API processes the prompts, the input is broken down into tokens.

Each model has a maximum number of tokens. Select the number of tokens depending on the length of the response you want to get and the selected model.

Learn more: [Tokens by OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### Model
The service provides access to many different models, grouped by family and ability. A model family typically associates models by their intended task.

Learn more: [Models by OpenAI](https://beta.openai.com/docs/models/overview)

### Organization ID (OpenAI)
The organization ID information only applies to OpenAI and allows you to select the organization with which you will be using your API Key

### Query Language
Select the language in which you will work the interactions with the API.
For functionalities such as Explain or Document, each query will be made in the selected language.

### Temperature
This is a parameter that can be adjusted. It determines the level of randomness or "creativity" in the generated text. A higher temperature will result in more varied and creative output, while a lower temperature will produce output that is more similar to the training data and less likely to contain unexpected or surprising content.

It is a value between 0 and 1. 0 being the most deterministic and 1 being the most random and creative. The default temperature is 0.3

Learn more: [Temperature by Cohere](https://docs.cohere.ai/docs/temperature)

### Window Memory

It stores a list of past conversations, but only the last K (a specific number) conversations are used from the saved list. This is done to prevent the buffer from becoming too large and exceeding the token limit.

- default: 4
- minimum: 1
- maximum: 50
