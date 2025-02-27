---
sidebar_position: 14
---

# Ollama

官方网站 https://ollama.ai

开源项目，用于运行、创建和共享大型语言模型（LLMs）。
## 连接 Ollama 模型
- 从链接下载并安装 Ollama: [ollama.ai](https://ollama.ai/)。

### 通过控制台下载模型
- 从终端下载模型，例如，运行命令 `ollama run deepseek-r1`。

   <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/258d5faa-3d8c-4198-aabe-5378b3bf3aae"/></p>

- 通过运行命令 ```ollama pull MODEL``` 使用模型，例如：``ollama pull deepseek-r1``。
- 请等待加载完成至 100%。
<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/11bc56a1-62d1-46ad-96cd-465a325b2c7c"/></p>

# 如何使用 Ollama

- 在 VSCode CodeGPT 扩展中，更改聊天中的模型。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- 选择 `Local LLMs` 并选择 `Ollama` 作为 `Provider`。
- 直接使用可用的模型。
- 粘贴运行模型的服务器链接。对于本地服务器：`http://localhost:11434`。
- 点击选项外部并开始聊天。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/28ec0abc-2928-4225-b1e9-764111291db2"/></p>

:::caution 移除或编辑密钥
要移除端口，请点击 `Change connection settings` 按钮。
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b32595a0-47de-4f9b-804b-3d6188fb1027"/></p>
:::

## 可用的自动补全模型：
- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code

## API 错误
如果您遇到 API 错误，请检查以下链接：[Ollama 文档](https://ollama.ai/)

## Ollama 错误
- 如果 Ollama 模型在聊天中没有响应，请考虑通过关闭然后重新打开来在本地重新启动它。此操作应能解决问题。

- 如果 Ollama 正在运行但没有响应，请手动从环境变量中移除 'Ollama_Host' 并让其恢复到默认设置。

