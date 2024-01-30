---
sidebar_position: 8
---

# Huggingface

官方网站 https://huggingface.co/

Hugging Face 是一个旨在共享预训练 AI 模型并在 AI 和自然语言处理 (NLP) 相关资源的开发和共享上进行协作的平台。它作为各种模型的中央存储库，包括文本生成、文本分类、翻译、问答等任务的模型。

## Huggingface
- 在 [Huggingface](https://huggingface.co/) 创建帐户。
- 转到 [个人资料 - 设置 - 访问令牌](https://huggingface.co/settings/tokens)
- 生成并复制 API 密钥
- 选择 `HuggingFace` 作为 `提供者`
- `建立连接` 并通过 `⋮` 按钮将其链接到您的帐户。
- 将 API 密钥复制到此处：

<p align="center">
      <img width="400" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/dd106264-9524-48ad-9fb7-593b917b677a" />
</p>
 
- 或者，在 VSCode 中，按 `cmd + shift + p` 并搜索 **`设置 API 密钥`**
- 粘贴您的 API 密钥

:::caution 删除密钥
如果要从 CodeGPT 中删除 API 密钥，请打开命令面板并搜索 `CodeGPT: 删除 API 密钥`。或者您可以选择 `⋮` 按钮，然后单击 `删除连接`
:::

### Code GPT 中可用的 Huggingface 模型
- OperAssistant/oasst
- mistralai/Mixtral-8x7
- mistralai/Mistral-7B-v0.1

## API 错误
如果您收到 API 错误，请查看以下链接：[Huggingface 文档](https://huggingface.co/docs/inference-endpoints/index)

