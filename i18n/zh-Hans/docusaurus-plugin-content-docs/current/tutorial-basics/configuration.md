---
sidebar_position: 2
---

# 配置

## 访问 Code GPT 的设置
1. 在Visual Studio Code中，点击 **`File` > `Preferences` > `Settings`**。这将打开设置窗口。
2. 在设置窗口的左侧，点击  **`Extensions`**，然后点击 **`CodeGPT`**。

:::note CodeGPT 设置

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://github-production-user-asset-6210df.s3.amazonaws.com/6216945/274431737-b31ae5a8-8636-4a75-a32b-79062d0087de.png)

:::

## 可用设置

### API Key

从下拉菜单中选择您的AI提供商，然后输入所选提供商的API密钥。

:::info 获取您的API密钥

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Google Makersuite](/docs/tutorial-ai-providers/google)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [AI21](/docs/tutorial-ai-providers/ai21)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [Ollama](/docs/tutorial-ai-providers/ollama)
  
:::

### 最大标记数/Max Token
标记可以被视为单词的片段。在API处理提示之前，输入被分解成标记。

每个模型都有最大标记数。根据您想要获取的响应长度和所选模型，选择标记数。

了解更多：[OpenAI的标记](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### 模型/Model
该服务提供对许多不同模型的访问，这些模型按系列和能力分组。模型系列通常将模型与其预期任务关联起来。

了解更多：[OpenAI的模型](https://beta.openai.com/docs/models/overview)

### 组织ID（OpenAI）/ Organization ID
组织ID信息仅适用于OpenAI，允许您选择使用API密钥的组织。

### 查询语言/Query Language
选择您将与API进行交互的语言。
对于诸如解释或文档等功能，每个查询将在所选语言中执行。

### 温度/Tempeture
这是一个可调整的参数。它决定生成文本中的随机性或“创造性”水平。较高的温度会产生更多变化且更具创意的输出，而较低的温度会产生更类似于训练数据的输出，不太可能包含意外或令人惊讶的内容。

它是一个介于0和1之间的值。0表示最确定性，1表示最随机和富有创意。默认温度为0.3

了解更多：[Cohere的温度](https://docs.cohere.ai/docs/temperature)

### 窗口记忆/Windows Memory

它存储过去对话的列表，但只使用保存列表中的最后K（一个具体的数字）个对话。这是为了防止缓冲区变得太大并超过标记限制。

- 默认值：4
- 最小值：1
- 最大值：50