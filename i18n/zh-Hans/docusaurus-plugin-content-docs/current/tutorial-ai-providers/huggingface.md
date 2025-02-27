---
sidebar_position: 11
---

# HuggingFace
官方网站 https://huggingface.co/

Hugging Face 是一个旨在分享预训练 AI 模型并协作开发和共享与 AI 和自然语言处理（NLP）相关资源的平台。它作为许多模型的中央存储库，包括文本生成、分类、翻译、问答等任务的模型。

## 如何连接
- 在 [Huggingface](https://huggingface.co/) 创建一个账户。
- 进入你的 [个人资料 - 设置 - 访问令牌](https://huggingface.co/settings/tokens)。
- 生成并复制 API Key。
- 在 VSCode CodeGPT 扩展中，更改聊天中的模型。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- 选择 `LLMs Cloud model` 并选择 `Huggingface` 作为 `Provider`。
- 选择一个模型，例如 `Qwen/Qwen2.5-1.5B-Instruct`。
- 在此处粘贴 `API Key`，然后点击 `Connect`。
- 点击选项外部并开始聊天。

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/066c9009-af2e-4f33-ace7-e67c31a61cb1"/></p>

:::caution 移除或编辑 Key
要从 CodeGPT 中移除你的 API Key，点击 `Change connection settings` 按钮。
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/1ee36e01-6eaf-44ce-b195-c8a5bef58c79"/></p>
:::

## API 错误
如果你遇到 API 错误，请检查以下链接：[Huggingface 文档](https://huggingface.co/docs/inference-endpoints/index)