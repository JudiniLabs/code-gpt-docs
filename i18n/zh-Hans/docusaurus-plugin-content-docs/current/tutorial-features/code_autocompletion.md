---
sidebar_position: 2
---

# GPT 自动补全

## 描述
GPT 自动补全功能带有模型选择，您可以从精心挑选的模型中进行选择，包括 OpenAI、Anthropic、Ollama 和 Google Makersuite 等。通过提供准确而与上下文相关的代码建议，这个先进的工具将提升您的编程体验。

## 如何使用：
- 自动补全设置：
    - 勾选选项 ✅ **启用 CodeGPT Copilot**
    - **最大令牌数 (Max Tokens)：** 生成的最大令牌数量。一旦生成了这么多令牌，模型就会停止生成，因此该值在响应延迟和一致性之间保持平衡。
    - **提供商 (Provider)：**
        - OpenAI - gpt-3.5-turbo-instruct
        - CodeGPT Plus - Plus
        - Anthropic - claude-2
        - Anthropic - claude-instant-1
        - Ollama - deepseek-coder:base
        - Ollama - codegpt/deepseek-coder-1.3b-typescript
    - **建议延迟 (Suggestion Delay)：** 最后一个字符输入后到请求建议之间的延迟时间（以毫秒为单位）。默认值为 3000。

:::note GPT 自动补全设置
<p align="center">
      <img width="500" height="350" src="https://github.com/davila7/code-gpt-docs/assets/37567214/14693326-ee6c-4696-875b-b360188b969d" />
</p>
:::

- 无缝集成：
    - 将建议的代码片段轻松整合到您的项目中，提高代码的质量和效率。按下 `Tab` 键接受建议。

:::note GPT 自动补全
<p align="center">
      <img width="500" height="450" src="https://github.com/davila7/code-gpt-docs/assets/37567214/a3f1d2b5-fc0b-4338-926d-287fcb02465c" />
</p>
:::
