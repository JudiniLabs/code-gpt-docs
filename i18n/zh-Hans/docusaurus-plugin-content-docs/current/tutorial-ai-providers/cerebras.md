---
sidebar_position: 16
---

# Cerebras
官方网站: https://cerebras.ai/

Cerebras 是一个用于大规模人工智能模型训练和推理的尖端计算平台。本指南提供了 Cerebras 的全面概述，包括核心概念、工作流程、功能和 Cerebras PyTorch API 的详细信息。

## 主要功能
- 预配置的大型语言模型（LLM）的 Cerebras 模型库。
- 支持计算机视觉（CV）模型。
- 兼容多模态模型，如 LLaVA。
- 能够使用自定义的 PyTorch 模型和数据集。

Cerebras 晶圆级集群经过精心设计，能够在数百万个核心上实现神经网络训练的高效线性扩展，而无需传统分布式计算的复杂性。

## 如何连接
- 访问 https://inference.cerebras.ai/。
- 选择“获取 API 密钥”。
- 创建一个账户。
- 点击“立即加入”。
- 填写表格。

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>
  
- 在 VSCode 的 CodeGPT 扩展中，更改聊天中的模型

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/9589828c-c794-4d67-b806-9eff0adf3798"/></p>

- 选择 LLMs Cloud 模型，并选择 `Cerebras` 作为 `提供商`。
- 在此处粘贴 `API 密钥`，然后点击 `连接`。
- 点击选项外部并开始聊天。

:::caution 移除密钥
要从 CodeGPT 中移除您的 API 密钥，请点击 `更改连接设置` 按钮
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b7189968-c88a-4891-82b7-3cbc59a46b25"/></p>
:::

## API 错误
如果您遇到 API 错误，请参考以下文档：[Cerebras 文档](https://docs.cerebras.ai/)。

:::info 重要提示
此提供商仅在 VSCode 的 CodeGPT 扩展版本 3.5.73 及更高版本中可用。请确保您已更新扩展。
:::
