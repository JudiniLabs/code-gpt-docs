---
sidebar_position: 9
---

# AWS Bedrock

官方网站 [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock 是一项完全托管的服务，通过单一 API 提供来自领先 AI 公司（包括 AI21 Labs、Anthropic、Cohere、Meta、Mistral AI、Stability AI 和 Amazon）的顶级基础模型（FMs）。它提供了多种功能，包括安全性、隐私性和负责任的 AI，用于开发生成式 AI 应用程序。

## 连接您的提供商账户
- 在 [AWS Bedrock](https://aws.amazon.com/es/console/) 创建一个账户
- 创建一个具有 **AmazonBedrockFullAccess** 权限策略的 AWS 用户
- 转到 **Security Credentials** 并创建新的 **Access keys**
- 生成并复制访问密钥和秘密密钥
- 在 VSCode CodeGPT 扩展中，更改聊天中的模型

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/f5d1245b-d58d-4c93-85c1-fa1c055585e4"/></p>

- 选择 LLMs Cloud 模型并选择 `Bedrock` 作为 `Provider`
- 在此处粘贴 `API Key`，然后点击 `Connect`
- 点击选项外部并开始聊天。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/375fd655-e3eb-4367-be42-c6cec8736f43"/></p>

:::caution 移除密钥
要从 CodeGPT 中移除您的 API 密钥，请点击 `Change connection settings` 按钮
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/97221226-2cd3-4f9b-9ed3-b41555f23c04"/></p>
:::

## CodeGPT 中可用的模型
您在 Amazon Bedrock 账户中配置的模型将与扩展中的模型同步。
