---
sidebar_position: 2
---

# OpenAI

官方网站 https://openai.com

OpenAI是一个人工智能研究组织，旨在以有益于全人类的方式开发和推广友好的人工智能。他们开发了许多AI模型，包括GPT-3和GPT-4，可以说是世界上最先进的自然语言处理模型之一。

## 连接您的OpenAI账户
- 转到 [OpenAI上的API密钥页面](https://platform.openai.com/account/api-keys)。
- 使用您的OpenAI账户登录（或 [创建一个新账户](https://platform.openai.com/signup)）
- 单击标有 **`Create a new secret key`** 的按钮。
- 将出现一个新的对话窗口，其中包含一个带有您的API密钥的文本框。
- 将此API密钥复制到剪贴板。
- 粘贴您的API密钥

:::caution 移除密钥
如果要从CodeGPT中删除API密钥，请打开命令面板并搜索 `CodeGPT: Remove API KEY`。
:::

:::note 连接OpenAI
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vl6-5BigHzk?si=SgdXt0HAMah9-aal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Code GPT中可用的GPT模型
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## OpenAI API

要使用此扩展程序，您必须在OpenAI账户中加载信用额度。
此扩展程序使用官方的OpenAI API，这是一个 [付费API](https://openai.com/api/pricing/)。

如果您没有信用额度，扩展程序将显示以下OpenAI API错误：
**您已超出当前的使用配额，请检查您的计划和计费详细信息**

要查看您的账户和可用的信用额度，请在 https://openai.com/api/ 上使用您的账户登录。

在菜单中选择管理账户，然后在使用部分，您将能够看到可用和已使用的信用额度。

:::note OpenAI账户
![Manage Account](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

在这张图片中，已使用$13美元，总额度是$18。

:::note 使用
![Credits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API错误
如果您遇到API错误，请查看以下链接：[OpenAI API错误](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### 典型的OpenAI错误
- [错误代码404：模型gpt-4不存在](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [错误代码429 - 请求速率限制已达到](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [错误代码429 - 您已超出当前的使用配额，请检查您的计划和计费详细信息](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [错误代码429 - 引擎当前过载。请稍后再试](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [错误代码401 - 无效的身份验证](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)