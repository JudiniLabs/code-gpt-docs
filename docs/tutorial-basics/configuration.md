---
sidebar_position: 2
---

# Configuration

The subsequent sections describe the various utilities and configurations of the CodeGPT application.

## Main Menu

The main menu is your primary navigation hub within the CodeGPT application. It provides access to essential features and settings.

### Tools

- `Chat`: Engage in AI conversations using the models of your chosen provider or with agents on CodeGPT Plus.
- `AI Agents Marketplace`: Peruse viable agents in the Marketplace and interact with them. Ensure you choose `CodeGPT Plus` as your provider and establish the mandatory connection. You also have the option to explore directly from the Home `⌂` button.

### Experimental 

This section showcases experimental features 🧪.

- `React Sandbox`: Experiment with React components through interaction or image upload.


### Help
Look here when you need help.

- `Help`: If you require additional assistance, this section offers guidance on the various tools. Alternatively, consult the `Extension Docs` and `API Docs`.
- `Report an issue`: Any issues you encounter can be reported in the [Github repository](https://github.com/JudiniLabs/code-gpt-docs/issues).
- `Feedback`: Send 💌 feedback to the team to help us improve the product. 

### Settings

These optional configurations enhance your user experience.

- `Font Size`: Adjust the font size to your preference.
- `Color Mode`: Alter the visual interface of the application by switching between the dark and light themes.

## Select model provider

1. Select your AI provider from the dropdown menu, then enter the `API Key` for the selected provider or follow the instructions for specific steps.

:::info Get your API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegptplus_v2)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [Google Vertex AI](/docs/tutorial-ai-providers/google_vertex)
- [Google AI Studio](/docs/tutorial-ai-providers/google_studio)
- [Ollama](/docs/tutorial-ai-providers/ollama)
- [Fireworks](/docs/tutorial-ai-providers/fireworks)
- [Mistral](/docs/tutorial-ai-providers/mistral)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [DeepSeek](/docs/tutorial-ai-providers/deepseek)
- [Bedrock](/docs/tutorial-ai-providers/bedrock)
- [Perplexity](/docs/tutorial-ai-providers/perplexity)
- [LM Studio](/docs/tutorial-ai-providers/lmstudio)
- [Groq](/docs/tutorial-ai-providers/groq)
- [NVIDIA](/docs/tutorial-ai-providers/nvidia)
- [Custom](/docs/tutorial-ai-providers/custom)

:::

1. 🔑 Set the connection `Connect`. Status must change on the window. For more details, please check the page or every provider above.

  <table>
    <tr>
      <td align="center">
        <img width="250" height="150" src="https://github.com/user-attachments/assets/0f562594-1023-44ce-beed-f2d5d9321fff" />
      </td>
      <td align="center">
        <img width="250" height="150" src="https://github.com/user-attachments/assets/a4230449-9148-44cb-b784-ed2835b519da" />
      </td>
    </tr>
  </table>

## Chat Settings 

- Explore this menu to adjust provider attributes, refine temperature control or conversation Style, and manage window memory.

:::note Explore chat settings
<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/d5971d49-a13a-472b-a0a2-601359154bf3"/></p>

:::

### Conversation style

Representative of the randomness or "creativity" in the text generation, it ranges between 0 and 1. A higher value generates more diverse output, while a lower value sticks closely to the training data. The default value is set at 0.3, with 0 being the most deterministic and 1 being the most random.

For more information about temperature settings, visit [Temperature by Cohere](https://docs.cohere.ai/docs/temperature).

### Window Memory

This tool stores the historical log of your past conversations. By default, it is set to 4. You can adjust this value to your preference.

- Default: 4
- Minimum: 1
- Maximum: 10

To visualize any changes to these settings, click your browser's `tray-arrow-down` button.
