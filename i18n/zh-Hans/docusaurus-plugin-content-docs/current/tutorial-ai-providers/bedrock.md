---
sidebar_position: 10
---

# Bedrock

官方网站 [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock是一项完全托管的服务，通过单一API提供来自领先的AI公司（包括AI21 Labs、Anthropic、Cohere、Meta、Stability AI和亚马逊）的顶级基础模型（FMs）。它提供广泛的功能，包括用于开发生成式AI应用程序的安全性、隐私和负责任的AI。它使您能够测试和评估最佳FMs，使用您的数据对其进行微调，并构建代理以使用企业系统和数据源执行任务。由于是无服务器的，Amazon Bedrock消除了基础设施管理，并使用熟悉的AWS服务将生成式AI功能集成到您的应用程序中。

## 连接您的提供商帐户
- 选择 `Bedrock` 作为 `提供商`
- `设置连接` 并在 `⋮` 按钮上链接到您的帐户。
- 在此处复制API密钥和自定义链接：
  
<p align="center">
      <img width="350" height="250" src="https://github.com/davila7/code-gpt-docs/assets/37567214/f777df34-a667-4f52-87df-0a3d70dae4d2" />
</p>

- 或者，在VSCode中按 `cmd + shift + p` 并搜索 **`Set API Key`**
- 粘贴您的API密钥

:::caution 删除密钥
如果要从CodeGPT中删除API密钥，请打开命令面板并搜索 `CodeGPT: Remove API KEY`。或者您可以选择 `⋮` 按钮，然后单击 `Remove Connection`
:::

## Code GPT中提供的Bedrock模型

### 基础模型（FMs）
- ai21-labs
- anthropic
- cohere
- meta
- stability-ai
- amazon

## API错误
如果出现API错误，请查看以下链接：[Bedrock API错误](https://aws.amazon.com/bedrock/api-errors)
