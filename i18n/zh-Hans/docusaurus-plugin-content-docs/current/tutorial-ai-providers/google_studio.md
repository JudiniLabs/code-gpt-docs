---
sidebar_position: 7
---

# Google AI Studio

官方网站 [https://aistudio.google.com/](https://aistudio.google.com/)

Google AI Studio 是一个基于浏览器的 IDE，专为生成模型的原型设计而量身定制。用户可以在 Google AI Studio 中快速试验各种模型和提示。

## 连接您的提供商账户
- 在 [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat) 创建一个账户。
- 创建一个新项目以附加 API Key。
- 生成并复制 [API Key](https://aistudio.google.com/app/apikey)。
- 在 VSCode CodeGPT 扩展中，更改聊天中的模型。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- 选择 `LLMs Cloud model` 并选择 `Google AI Studio` 作为 `Provider`。
- 选择一个模型，例如 `gemini-1.5-flash-latest`。
- 在此处粘贴 `API Key`，然后点击 `Connect`。
- 点击选项外部并开始聊天。

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/baa3ce4b-7675-4efe-b2a8-d65c40e99537"/></p>

:::caution 移除或编辑 Key
要从 CodeGPT 中移除您的 API Key，请点击 `Change connection settings` 按钮。
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/f3f77803-d725-4dd1-a642-1c0843cf3b2e"/></p>
:::