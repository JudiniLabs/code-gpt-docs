---
sidebar_position: 2
---

# OpenAI

官方网站 https://openai.com

OpenAI 是一个旨在以使全人类受益的方式开发和推广友好人工智能的人工智能研究组织。他们开发了许多人工智能模型，包括 GPT-3 和 GPT-4，可以说是世界上最先进的自然语言处理模型。

## 连接您的 OpenAI 账户
- 转到 [OpenAI 上的 API 密钥页面](https://platform.openai.com/account/api-keys)。
- 使用您的 OpenAI 账户登录 (或者[创建新账户](https://platform.openai.com/signup))
- 点击标有 **`创建新的秘密密钥`** 的按钮。
- 将显示一个包含 API 密钥的文本框的新对话框。
- 选择 `OpenAI` 作为 `提供者`
- `设置连接` 并通过 `⋮` 按钮链接到您的账户。
- 在这里复制 API 密钥和组织 ID：
  
<p align="center">
      <img width="450" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/c79e8c36-2d0c-4cfe-992b-5816748472aa"/>
</p>

 
- 或者， 在 VSCode 中按 `cmd + shift + p`，并搜索 **`设置 API 密钥`**
- 粘贴您的 API 密钥

:::caution 删除密钥
如果您想从 CodeGPT 中删除 API 密钥，请打开命令面板并搜索 `CodeGPT: 删除 API 密钥`。或者您可以选择 `⋮` 按钮，然后单击 `删除连接`。
:::

## Code GPT 中提供的 GPT 模型
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## OpenAI API

要使用此扩展，您必须在 OpenAI 账户中加载信用点。
此扩展使用官方的 [OpenAI API](https://openai.com/api/pricing/)，是付费的。

如果您没有信用点，扩展将显示以下 OpenAI API 错误：
**您已超过当前配额，请检查您的计划和结算详细信息**

要查看您的帐户和可用的信用点，请使用您的帐户登录到 https://openai.com/api/

在菜单中选择管理帐户，然后在使用部分，您将能够看到可用信用点和已使用信用点的数量。

:::note OpenAI 帐户
![管理帐户](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

在这个图像中，您可以看到总计 $18 中使用了 $13。

:::note 用量
![信用](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API 错误
如果您收到 API 错误，请查看以下链接：[OpenAI API 错误](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### 典型的 OpenAI 错误
- [错误代码 404：模型 gpt-4 不存在](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [错误代码 429 - 请求达到速率限制](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [错误代码 429 - 您已超过当前配额，请检查您的计划和结算详细信息。](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [错误代码 429 - 引擎当前超载。请稍后再试。](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [错误代码 401 - 无效的身份验证](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
