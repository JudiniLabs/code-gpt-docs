---
sidebar_position: 1
---

# Installation

## Install Visual Studio Code
Visual Studio Code: [Download](https://code.visualstudio.com/download)

## Install the Code GPT Extension
You can install the extension from the Visual Studio Marketplace, Open VSX, or directly from the Extensions tab in Visual Studio Code.

:::note Search for Code GPT in the Extensions tab
<p align="center">
      <img src="https://github.com/davila7/code-gpt-docs/assets/6216945/ec68d8d7-fa99-454c-876d-1e52815667c7" />
</p>
:::

You can either click on this link to go directly to the CodeGPT's Visual Studio Marketplace page:
- [Download from Marketplace](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt)

Or you can download the extension via Open VSX:
- [Download from Open VSX](https://open-vsx.org/extension/DanielSanMedium/dscodegpt)

## Get your API key
This will differ depending on the provider you choose:
- ### OpenAI
  - Go to the [API Keys page on OpenAI](https://platform.openai.com/account/api-keys).
  - Log in with your OpenAI account (or [create a new account](https://platform.openai.com/signup))
  - Click the button labeled **`Create a new secret key`**
  - A new dialog window will appear, containing a text box with your API key. 
  - Copy this API Key to your clipboard.
  - Paste your API Key

---

- ### CodeGPT Plus
  - Request your API Key from the [CodeGPT Plus](https://account.codegpt.co/auth/register)
  - Go to the Settings / Access tokens and copy your **`API Key`**
  - In VSCode press ```cmd + shift + p``` and search **`Set API Key`**
  - Paste your API Key

---

- ### Google PaLM 2 with MakerSuite
  - Request access to PaLM 2 in this link [PaLM 2 MakerSuite](https://makersuite.google.com/)
  - Go to the [Get API key](https://makersuite.google.com/app/apikey) menu
  - Create a new API key
  - Copy this API Key to your clipboard
  - In VSCode press ```cmd + shift + p``` and search **`Set API Key`**
  - Paste your API Key

---

- ### Microsoft Azure
  - Create an account in [Microsoft Azure](https://azure.microsoft.com/en-us/free)
  - Get access to [Azure OpenAI Services](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
  - Go to [Azure OpenAI Studio](https://oai.azure.com/)
  - Get your Endpoint and Secret Key
  - In CodeGPT Settings change the provider to ```Azure``` and the model to ```azure```
  - In VSCode press ```cmd + shift + p``` and search **`Set Azure Data`**
  - Paste the Endpoint and Secret Key

---

- ### Cohere
  - Create an account in [cohere.ai](https://cohere.ai/)
  - Go to your [dashboard](https://dashboard.cohere.ai/)
  - Copy the API Key
  - In VSCode press ```cmd + shift + p``` and search **`Set API Key`**
  - Paste your API Key

---

- ### AI21
  - Create an account in [AI21](https://www.ai21.com/)
  - Go to your [account](https://studio.ai21.com/account/account)
  - Copy the API Key
  - In VSCode press ```cmd + shift + p``` and search **`Set API Key`**
  - Paste your API Key

---

- ### Anthropic
  - Create an account in [Anthropic](https://console.anthropic.com/)
  - Go to yours [API Keys](https://console.anthropic.com/account/keys)
  - Generate and copy the API Key
  - In VSCode press ```cmd + shift + p``` and search **`Set API Key`**
  - Paste your API Key

---

- ### Huggingface
  - Create an account in [Huggingface](https://huggingface.co/)
  - Go to your [Profile - Settings - Access Tokens](https://huggingface.co/settings/tokens)
  - Generate and copy the API Key
  - In VSCode press ```cmd + shift + p``` and search **`Set API Key`**
  - Paste your API Key

## Enter your API Key
Once you have your API Key, you can enter it into CodeGPT:
- Paste your API Key into the text box and press **Enter⏎**.
- Execute the command `Developer: Reload Window` to apply changes.

:::caution

If you want to remove your API Key from CodeGPT, open the Command Palette and search for `CodeGPT: Remove API KEY`.

:::

## Providers that do not need api key

- ### GPT4All
  - Download GPT4All at the following link: [gpt4all.io](https://gpt4all.io/)
  - Go to the **`Downloads`** menu and download all the models you want to use
  - Go to the **`Settings`** section and enable the **`Enable web server`** option

---
- ### Ollama
  - Download Ollama at the following link: [ollama.ai](https://ollama.ai/)
  - Install Ollama and then run this command ```ollama pull codellama```
  - You can get more models like: **llama2, llama2:13b and llama2:70b**



