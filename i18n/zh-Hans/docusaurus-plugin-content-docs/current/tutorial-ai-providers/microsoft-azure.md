---
sidebar_position: 7
---

# Microsoft Azure AI

官方网站 https://azure.microsoft.com/en-us/products/ai-services/openai-service

## Microsoft Azure
- 在 [Microsoft Azure](https://azure.microsoft.com/en-us/free) 创建一个账户。
- 获取 [Azure OpenAI 服务](https://azure.microsoft.com/en-us/products/ai-services/openai-service) 的访问权限。
- 访问 [Azure OpenAI Studio](https://oai.azure.com/)
- 获取你的 `Secret Key` 和 `Custom Link`。

要获取端点和密钥，你必须部署模型，然后在 Azure OpenAI Studio 中打开它：
- 然后选择 "View Code"

此部分提供 API 密钥和自定义链接。要显示完整的自定义链接，请在代码选择中选择 CURL 并复制端点。

- 在 VSCode CodeGPT 扩展中，更改聊天中的模型。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- 选择 `LLMs Cloud model` 并选择 `Azure` 作为 `Provider`。
- 选择一个模型。
- 在此处粘贴 `API Key`，然后点击 `Connect`。
- 点击选项外部并开始聊天。

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/e5658252-9b32-4d65-85c1-8f5fcdd8ad44"/></p>

:::caution 移除或编辑密钥
要从 CodeGPT 中移除你的 API 密钥，请点击 `Change connection settings` 按钮
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/9a0ae15f-b719-4b8a-ac3e-7e856dc319de"/></p>
:::

## API 错误
如果你遇到 API 错误，请检查以下链接：[Microsoft Azure 文档](https://azure.microsoft.com/en-us/products/ai-services/openai-service/)