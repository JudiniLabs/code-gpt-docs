---
sidebar_position: 2
---

# Configuration

## Accessing Code GPT's Settings
1.To set up the response, first pick the model.
2. In Visual Studio Code, click on `⋮` button.
3. Then `Configuration`. This will open the Settings window.  
4. On this windows you can fit the `Max Tokens`, `Window Memory` and `Temperature`

## Select provider

Select your AI provider from the dropdown menu, then enter the API Key for the selected provider.

:::info Get your API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [Vertex](/docs/tutorial-ai-providers/google_vertex)
- [Google AI Studio](/docs/tutorial-ai-providers/google)
- [Ollama](/docs/tutorial-ai-providers/ollama)
- [Fireworks](/docs/tutorial-ai-providers/fireworks)
- [Mistral](/docs/tutorial-ai-providers/mistral)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [CodeGPT Plus(legacy)](/docs/tutorial-ai-providers/codegpt_plus)
  
:::

Also, you can visualize it on the browser <i class="fa-sharp fa-light fa-arrow-up-from-bracket"></i>.

## Chat Settings ⚙

In this option, you can set the features of the provider, change the number of tokens, temperature and window memory.

### Max Token
Tokens can be thought of as pieces of words. Before the API processes the prompts, the input is broken down into tokens.

Each model has a maximum number of tokens. Select the number of tokens depending on the length of the response you want to get and the selected model.

Learn more: [Tokens by OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### Temperature
This is a parameter that can be adjusted. It determines the level of randomness or "creativity" in the generated text. A higher temperature will result in more varied and creative output, while a lower temperature will produce output that is more similar to the training data and less likely to contain unexpected or surprising content.

It is a value between 0 and 1. 0 being the most deterministic and 1 being the most random and creative. The default temperature is 0.3

Learn more: [Temperature by Cohere](https://docs.cohere.ai/docs/temperature)

### Window Memory

It stores a list of past conversations, but only the last K (a specific number) conversations are used from the saved list. This is done to prevent the buffer from becoming too large and exceeding the token limit.

- default: 4
- minimum: 1
- maximum: 50

## CodeGPT Settings

### Autocomplete

Autocomplete suggests completions for code elements based on what the developer has typed so far. This includes variables, functions, methods, classes, and keywords relevant to the programming language and context. For more details check this [link](https://docs.codegpt.co/docs/tutorial-features/code_autocompletion)

### Theme
Use the dark or light theme and change the appereance



## CodeGPT Tools
### Chat
In this tab you can go back to the chat window.

### Marketplace
Check the agents available on Marketplace and add it to you CodeGPT Plus account.
⚠️ Do not forget select CodeGPT Plus as provider and set the connection.

### React Sandbox
[React Sandbox](http://localhost:54112/vision), is a experimental tool allows you to build React components. You can either type a command or upload an image to interact.


## Help
### Documentation
Access to the documentation, open the panel automatically.

### Issues
If you found an issue you can report it in the [Github repository](https://github.com/davila7/code-gpt-docs/issues/240).

