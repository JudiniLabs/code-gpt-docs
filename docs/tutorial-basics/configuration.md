---
sidebar_position: 2
---

# Configuration

## Accessing Code GPT's Settings
1. In Visual Studio Code, click **`File` > `Preferences` > `Settings`**.  This will open the Settings window.  
2. On the left-hand side of the Settings window, click **`Extensions`**, and then click **`CodeGPT`**.

<details>

<summary>Screenshot: Code GPT Settings</summary>

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://user-images.githubusercontent.com/6216945/210634562-1dd5f8cd-4625-42fc-92f4-7e1b5f132c49.png)

</details>

## Available Settings

### API Key

Select your API provider from the dropdown menu. 

:::info Entering your API Key

*See the [Installation](./installation.md) page for more information about how to set up Code GPT with your API Key.*

:::

### Max Token
Tokens can be thought of as pieces of words. Before the API processes the prompts, the input is broken down into tokens.

Each model has a maximum number of tokens. Select the number of tokens depending on the length of the response you want to get and the selected model.

Learn more: 
- [Tokens by OpenAI (English)](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- [Max Token in Medium (Spanish)](https://medium.com/@dan.avila7/concepto-de-tokens-en-openai-f5d4196076f6)

## Model
The service provides access to many different models, grouped by family and ability. A model family typically associates models by their intended task.

Learn more: 
- [Models by OpenAI (English)](https://beta.openai.com/docs/models/overview)
- [Model in Medium (Spanish)](https://medium.com/@dan.avila7/modelos-de-gpt-3-y-codex-11a64948d87)

## Organization ID (OpenAI)
The organization ID information only applies to OpenAI and allows you to select the organization with which you will be using your API Key

## Query Language
Select the language in which you will work the interactions with the API.
For functionalities such as Explain or Document, each query will be made in the selected language.

## Temperature
This is a parameter that can be adjusted. It determines the level of randomness or "creativity" in the generated text. A higher temperature will result in more varied and creative output, while a lower temperature will produce output that is more similar to the training data and less likely to contain unexpected or surprising content.

It is a value between 0 and 1. 0 being the most deterministic and 1 being the most random and creative. The default temperature is 0.3

Learn more: 
- [Temperature by Cohere (English)](https://docs.cohere.ai/docs/temperature)
- [Temperature in Medium (Spanish)](https://medium.com/@dan.avila7/c%C3%B3mo-manejar-los-par%C3%A1metros-temperature-y-top-p-en-openai-b45892b250be)