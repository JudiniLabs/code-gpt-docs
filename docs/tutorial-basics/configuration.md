---
sidebar_position: 2
---

# Configuration

Go to **Settings > Extensions > CodeGPT**

Complete the following information:
![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://user-images.githubusercontent.com/6216945/210634562-1dd5f8cd-4625-42fc-92f4-7e1b5f132c49.png)

### AI Provider
Select the AI ​​provider:and then enter the API Key of the selected provider
- [OpenAI](https://www.codegpt.co/docs/tutorial-ai-providers/openai)
- [Cohere](https://www.codegpt.co/docs/tutorial-ai-providers/cohere)
### API Key
Enter the API Key of the selected provider
- To enter your [API Key](/docs/tutorial-basics/installation#get-yout-api-key) press cmd+shift+p and search for `CodeGPT: Set API KEY`. Your API KEY will be safely stored. 

### Max Token
Tokens can be thought of as pieces of words. Before the API processes the prompts, the input is broken down into tokens.

Each model has a maximum number of tokens. Select the number of tokens depending on the length of the response you want to get and the selected model.

Learn more: 
- [Tokens by OpenAI (English)](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- [Max Token in Medium (Spanish)](https://medium.com/@dan.avila7/concepto-de-tokens-en-openai-f5d4196076f6)

### Language
Select the language in which you will work the interactions with the API.

For functionalities such as Explain or Document, each query will be made in the selected language.

### Model
The service provides access to many different models, grouped by family and ability. A model family typically associates models by their intended task.

Learn more: 
- [Models by OpenAI (English)](https://beta.openai.com/docs/models/overview)
- [Model in Medium (Spanish)](https://medium.com/@dan.avila7/modelos-de-gpt-3-y-codex-11a64948d87)

### Temperature
This is a parameter that can be adjusted. It determines the level of randomness or "creativity" in the generated text. A higher temperature will result in more varied and creative output, while a lower temperature will produce output that is more similar to the training data and less likely to contain unexpected or surprising content.

It is a value between 0 and 1. 0 being the most deterministic and 1 being the most random and creative. The default temperature is 0.3

Learn more: 
- [Temperature by Cohere (English)](https://docs.cohere.ai/docs/temperature)
- [Temperature in Medium (Spanish)](https://medium.com/@dan.avila7/c%C3%B3mo-manejar-los-par%C3%A1metros-temperature-y-top-p-en-openai-b45892b250be)