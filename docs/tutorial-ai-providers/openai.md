---
sidebar_position: 2
---

# OpenAI

Official website https://openai.com

OpenAI is an artificial intelligence research organization that aims to develop and promote friendly AI in a way that benefits all of humanity. They have developed a number of AI models, including GPT-3 and GPT-4, arguably the most advanced natural language processing models in the world.

## Connect your OpenAI Account
- Go to the [API Keys page on OpenAI](https://platform.openai.com/account/api-keys).
- Log in with your OpenAI account (or [create a new account](https://platform.openai.com/signup)
- Click the button labeled **`Create a new secret key`**
- A new dialog window will appear, containing a text box with your API key. 
- Copy the API Key and Organization ID here:
  
<p align="center">
      <img width="450" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/c79e8c36-2d0c-4cfe-992b-5816748472aa"/>
</p>

 
- Or, in VSCode press `cmd + shift + p` and search **`Set API Key`**
- Paste your API Key

:::caution Remove Key
If you want to remove your API Key from CodeGPT, open the Command Palette and search for `CodeGPT: Remove API KEY`.
:::


## GPT models available in Code GPT
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## OpenAI API

To use this extension you must have credits loaded into your OpenAI account.
This extension uses the Official OpenAI API which is a [paid API](https://openai.com/api/pricing/).

If you do not have credits the extension will show the following OpenAI API error:
**You exceeded your current quota, please check your plan and billing details**

To review your account and the credits you have available, you must log in with your account at https://openai.com/api/

In the menu select Manage Account, then in the Usage section, you will be able to see the amount of credits available and used.

:::note OpenAI Account
![Manage Account](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

In this image you can see that $13 USD has been used out of a total of $18.

:::note Usage
![Credits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API Errors
If you are getting API errors check the following link: [OpenAI API Errors](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Typical OpenAI errors
- [Error Code 404: The model: gpt-4 does not exist](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Error Code 429 - Rate limit reached for requests](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Error Code 429 - You exceeded your current quota, please check your plan and billing details.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Error Code 429 - The engine is currently overloaded. Please try again later.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Error Code 401 - Invalid Authentication](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
