---
sidebar_position: 7
---

# Microsoft Azure AI

Official website https://azure.microsoft.com/en-us/products/ai-services/openai-service

## Microsoft Azure
- Create an account in [Microsoft Azure](https://azure.microsoft.com/en-us/free)
- Get access to [Azure OpenAI Services](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
- Go to [Azure OpenAI Studio](https://oai.azure.com/)
- Get your `Secret Key` and the `Custom Link`.

To obtain the endpoint and the secret, you must deploy the model and then open it in Azure OpenAI Studio:
Then select "View Code"

<img width="300" height="150" src="[https://github.com/davila7/code-gpt-docs/assets/37567214/e10dc9fb-78d8-41bc-a8d1-901a596db974](https://github.com/davila7/code-gpt-docs/assets/6216945/863be7d6-da26-460e-a365-c40b282d81e1)" />

In this section, you can obtain the API key and the custom link. To display the full custom link, you must select CURL in the code selection and copy the endpoint.

  <img width="300" height="150" src="[https://github.com/davila7/code-gpt-docs/assets/37567214/e10dc9fb-78d8-41bc-a8d1-901a596db974](https://github.com/davila7/code-gpt-docs/assets/6216945/fd18b7d8-24e9-4d00-8e33-52710fab4a56)" />

- Go to VSCode and choose `Azure` as `Provider`.
- `Set connection` on `🔑` button.
- Paste API Key here, and click on `Connect`:
 
<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/e10dc9fb-78d8-41bc-a8d1-901a596db974" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/2abd9605-9f98-49e8-bcad-19ee425d0dcc"/>  
       </td>
  </tr>
</table>

:::caution Remove Key
If you want to remove your API Key from CodeGPT, select `Edit Connection` on `🔑`, and click on `Disconnect`

<p align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/b07e86e4-cbdd-46be-b8f5-7c19344610d1" />
</p>

:::

## Azure OpenAI Models available in Code GPT
- gpt-4o
- gpt-4
- gpt-4-32k
- gpt-35-turbo
- gpt-35-turbo-16k

## API Errors
If you are getting API errors check the following link: [Microsoft Azure Documentation](https://azure.microsoft.com/en-us/products/ai-services/openai-service/)
