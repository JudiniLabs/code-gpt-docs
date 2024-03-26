---
sidebar_position: 2
---

# Configuration

The subsequent sections describe the various utilities and configurations of the CodeGPT application.

## CodeGPT Stack

Explore the significant facets of the CodeGPT software stack.

### CodeGPT Toolbox

1. `Chat`: Engage in AI conversations using the models of your chosen provider or with agents on CodeGPT Plus.
2. `AI Agents Marketplace`: Peruse viable agents in the Marketplace and interact with them. Ensure you choose `CodeGPT Plus` as your provider and establish the mandatory connection. You also have the option to explore directly from the Home `⌂` button.
3. `React Sandbox`: Experiment with React components through interaction or image upload. Visit [React Sandbox](http://localhost:54112/vision) for a hands-on experience.

### Settings

These optional configurations enhance your user experience.

1. `Autocomplete`: This feature provides code completion suggestions based on the developer's input. It covers multiple aspects, including variables, functions, methods, classes, and context-specific keywords. [Check out this guide](https://docs.codegpt.co/docs/tutorial-features/code_autocompletion) for further explanation. Remember to choose a provider first. If your choice is CodeGPT Enterprise, refer to [this link](https://docs.codegpt.co/docs/tutorial-features/code_autocompletion).
2. `Theme`: Alter the visual interface of the application by switching between the dark and light themes.

### Assistance
Look here when you need help.

- `Help`: If you require additional assistance, this section offers guidance on the various tools. Alternatively, consult the `Docs` and `API Docs`.
- `Issue Reporting`: Any issues you encounter can be reported in the [Github repository](https://github.com/davila7/code-gpt-docs/issues/240).

## Select model provider

1. Select your AI provider from the dropdown menu, then enter the `API Key` for the selected provider or follow the instructions for specific steps.

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

   <table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/f7f9bbdf-4370-4413-9c90-2c09fd11cd4d" />
    </td>
    <td align="center">
      <img width="275" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/1bd230b7-f9a3-4822-8f67-4bb98d3940c3" />
    </td>
  </tr>
</table>

## Chat Settings 

Explore this menu to adjust provider attributes, set token limits, refine temperature control, and manage window memory.

### Max Token

Consider tokens as fragments of words. The API first disintegrate the input into tokens before executing any operation.

Each model follows a token limit that you can modify according to the anticipated response length and the model you operate on.

To understand more about tokens, refer to [Tokens by OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them).

### Temperature

Representative of the randomness or "creativity" in the text generation, it ranges between 0 and 1. A higher value generates more diverse output, while a lower value sticks closely to the training data. The default value is set at 0.3, with 0 being the most deterministic and 1 being the most random.

For more information about temperature settings, visit [Temperature by Cohere](https://docs.cohere.ai/docs/temperature).

### Window Memory

This tool stores the historical log of your past conversations. However, it only accounts for the last 'K' conversations, ensuring the buffer doesn't exceed the token limit.

- Default: 4
- Minimum: 1
- Maximum: 50

To visualize any changes made to these settings, click the `tray-arrow-down` button in your browser.
