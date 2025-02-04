---
sidebar_position: 2
---

# OpenAI

Official website https://openai.com

OpenAI is an artificial intelligence research organization that aims to develop and promote friendly AI that benefits humanity. It has produced several AI models, including GPT-4, arguably the world's most advanced natural language processing model.

## Connect your OpenAI Account
- Log in with your OpenAI account (or [create a new account](https://platform.openai.com/signup))
- Go to the [API Keys page on OpenAI](https://platform.openai.com/settings/organization/api-keys).
- Click the button labeled **`Create a new secret key`**
- A new dialog window containing a text box with your API key will appear.
- Go to VSCode and `Select Your AI`
- Select `OpenAI` as `Provider` and a model
- Paste the API Key here, and click on `Connect` and Organization ID

<p align="center">
      <img width="600" height="350" src="https://github.com/user-attachments/assets/a48d7c73-900b-4997-952f-b6255c9bcd14" />
</p>


:::caution Remove Key
To remove your API Key from CodeGPT, click on the provider box and `Disconnect`.

<p align="center">
      <img width="300" height="250" src="https://github.com/user-attachments/assets/2048048f-0b1a-41be-a985-af97066b0cdb" />
</p>

:::

## OpenAI API

You must have credits loaded into your OpenAI account to use this extension.
This extension uses the Official OpenAI API, a [paid API](https://openai.com/api/pricing/).

If you do not have credits, the extension will show the following OpenAI API error:
**You exceeded your current quota; please check your plan and billing details**

To review your account and the credits you have available, you must log in with your account at https://openai.com/api/

In the menu, select Manage Account. Then, in the Usage section, you will see the amount of credits available and used.

:::note OpenAI Account
![Manage Account](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

In this image, $13 USD has been used out of $18.

:::note Usage
![Credits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API Errors
If you are getting API errors, check the following link: [OpenAI API Errors](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Typical OpenAI errors
- [Error Code 404: The model: gpt-4 does not exist](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Error Code 429 - Rate limit reached for requests](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Error Code 429 - You exceeded your current quota, please check your plan and billing details.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Error Code 429 - The engine is currently overloaded. Please try again later.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Error Code 401 - Invalid Authentication](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
