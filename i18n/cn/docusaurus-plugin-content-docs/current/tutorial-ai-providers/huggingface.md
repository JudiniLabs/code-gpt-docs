---
sidebar_position: 8
---

# Huggingface

官方网站 https://huggingface.co/

Hugging Face是一个平台，旨在分享预训练的人工智能模型，并共同开发和共享与人工智能和自然语言处理（NLP）相关的资源。它作为一个集中的存储库，包含各种模型，包括文本生成、文本分类、翻译、问答等任务的模型。

## Huggingface
- 在[Huggingface](https://huggingface.co/)创建一个帐户
- 转到您的[个人资料 - 设置 - 访问令牌](https://huggingface.co/settings/tokens)
- 生成并复制API密钥
- 在VSCode中按 ```cmd + shift + p``` 并搜索 **`Set API Key`**
- 粘贴您的API密钥

:::caution 删除密钥
如果您想从CodeGPT中删除API密钥，请打开命令面板并搜索 `CodeGPT: Remove API KEY`。
:::

### Code GPT中可用的Huggingface模型
- HuggingFaceH4/starchat-beta
- tiiuae/falcon-7b-instruct
- codellama/CodeLlama-34b-Instruct-hf

## API错误
如果出现API错误，请查看以下链接：[Huggingface文档](https://huggingface.co/docs/inference-endpoints/index)
