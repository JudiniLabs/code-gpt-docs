---
sidebar_position: 2
---

# Configuration

## CodeGPT Menu

### CodeGPT Tools

1. `Chat` with the models of your favorite `provider` or with the agents on CodeGPT Plus.
2. On `AI Agents Marketplace` check the agents available on Marketplace and interact with them. ⚠️ Do not forget select `CodeGPT Plus` as provider and set the connection. Also you can try it directly from the `⌂` button.
3. On `React Sandbox`  interact sending imagens. [React Sandbox](http://localhost:54112/vision), is a experimental tool allows you to build React components. You can either type a command or upload an image to interact.

### Settings
1. `Autocomplete` suggests completions for code elements based on what the developer has typed so far. This includes variables, functions, methods, classes, and keywords relevant to the programming language and context. For more details check this [link](https://docs.codegpt.co/docs/tutorial-features/code_autocompletion).
   ⚠️Do not forget to set a provider before use this feature. If you chose CodeGPT Enterprise as provider, check this [link](https://docs.codegpt.co/docs/tutorial-features/code_autocompletion).
2. On `Theme`, change the appereance to the dark or light theme.

### Help
- Request `Help` if need orientation on how to use the tools, or check our `Docs` and `API Docs`.
- If you found an `issue` you can report it in the [Github repository](https://github.com/davila7/code-gpt-docs/issues/240).

## Select model provider

1. Select your AI provider from the dropdown menu, then enter the API Key for the selected provider or follow the instructions for specific steps.

:::info Get your API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [CodeGPT Enterprise](/docs/tutorial-ai-providers/codegpt_enterprise)
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
- [Bedrock](/docs/tutorial-ai-providers/bedrock)
- [Perplexity](/docs/tutorial-ai-providers/perplexity)
- [LM Studio](/docs/tutorial-ai-providers/lmstudio)
- [Groq](/docs/tutorial-ai-providers/Groq)
- [Custom](/docs/tutorial-ai-providers/custom)

:::

2. Set the connection `🔑`, status must change on the window. For more details, please check the page or every provider above.

   ![image](https://github.com/davila7/code-gpt-docs/assets/37567214/1bd230b7-f9a3-4822-8f67-4bb98d3940c3)


## Chat Settings 

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

Finally, you can visualize it on the browser clicking on <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2zm10 3l5.55-5.46l-1.42-1.41L13 11.25V2h-2v9.25L7.88 8.13L6.46 9.55z"/></svg>  button.

