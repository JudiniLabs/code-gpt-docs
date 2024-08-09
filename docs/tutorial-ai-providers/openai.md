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
- Go to VSCode and choose `OpenAI` as `Provider`
- `Connect` on button.
- Paste API Key here, and click on `Connect` and Organization ID here:

  <table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/6fe42470-9efe-4335-92e4-086cfcd8b49f" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/b3a12636-a18f-4ed5-94b7-49dd9e631859" />
    </td>
  </tr>
</table>
  

:::caution Remove Key
If you want to remove your API Key from CodeGPT, click on the provider box and click on `Disconnect`.


<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/7859fa05-3aff-4035-9c6d-68573c1ede33" />
</p>

:::


## GPT models available in Code GPT
- gpt-4
- gpt-4o
- gpt-4o-mini
- gpt-4o-2024-05-13
- gpt-4-turbo
- gpt-4-turbo-2024-04-09
- gpt-4-32k
- gpt-4-32k-0613
- gpt-4-1106-preview
- gpt-4-0125-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k
- gpt-3.5-turbo-16k-0613
- gpt-3.5-turbo-0125
- gpt-3.5-turbo-1106

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
