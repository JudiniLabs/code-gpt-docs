---
sidebar_position: 2
---

# OpenAI

官方网站 https://openai.com

OpenAI 是一个人工智能研究组织，旨在开发和推广对人类有益的友好 AI。它已经推出了多个 AI 模型，包括 GPT-4，这可能是世界上最先进的自然语言处理模型。

## 连接你的 OpenAI 账户
- 使用你的 OpenAI 账户登录（或[创建一个新账户](https://platform.openai.com/signup)）
- 前往 [OpenAI 的 API 密钥页面](https://platform.openai.com/settings/organization/api-keys)。
- 点击标有 **`Create a new secret key`** 的按钮
- 一个包含你的 API 密钥的文本框的新对话窗口将会出现。
- 前往 VSCode 并 `选择你的 AI`
- 选择 `OpenAI` 作为 `Provider` 和一个模型
- 在此处粘贴 API 密钥，然后点击 `Connect` 和 Organization ID

<p align="center">
      <img width="600" height="350" src="https://github.com/user-attachments/assets/a48d7c73-900b-4997-952f-b6255c9bcd14" />
</p>

:::caution 移除密钥
要从 CodeGPT 中移除你的 API 密钥，点击提供者框并 `断开连接`。

<p align="center">
      <img width="300" height="250" src="https://github.com/user-attachments/assets/2048048f-0b1a-41be-a985-af97066b0cdb" />
</p>

:::

## OpenAI API

你必须在你的 OpenAI 账户中加载积分才能使用此扩展。
此扩展使用官方 OpenAI API，这是一个[付费 API](https://openai.com/api/pricing/)。

如果你没有积分，扩展将显示以下 OpenAI API 错误：
**你已超出当前配额，请检查你的计划和账单详情**

要查看你的账户和可用积分，你必须使用你的账户登录 https://openai.com/api/

在菜单中，选择管理账户。然后，在使用部分，你将看到可用和已用的积分数量。

:::note OpenAI 账户
![管理账户](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

在这张图片中，$18 中已使用 $13。

:::note 使用情况
![积分](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API 错误
如果你遇到 API 错误，请检查以下链接：[OpenAI API 错误](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### 常见的 OpenAI 错误
- [错误代码 404：模型 gpt-4 不存在](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [错误代码 429 - 请求的速率限制已达到](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [错误代码 429 - 你已超出当前配额，请检查你的计划和账单详情。](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [错误代码 429 - 引擎当前过载。请稍后再试。](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [错误代码 401 - 身份验证无效](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)