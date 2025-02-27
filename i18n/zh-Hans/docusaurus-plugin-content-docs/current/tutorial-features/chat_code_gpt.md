---
sidebar_position: 1
---
# CodeGPT Chat

CodeGPT Chat 功能通过允许您在文本编辑器中直接与大型语言模型 (LLM) 进行对话来增强您的开发体验。本教程将指导您如何充分利用这一强大的工具。

## 如何使用：
- 打开聊天标签
- 导航到工具标签并点击 `Chat`，默认情况下，`Claude-3.5-Sonnet` 将在聊天中回答。
- 一旦聊天标签打开，您可以通过输入消息并按 `Enter` 键开始对话。
- 如果您请求代码，可以使用 `Insert code` 按钮直接将其复制或粘贴到文件中。
- 您可以通过点击 `New chat` 按钮或 `Reload` 问题来清理聊天。

:::note CodeGPT Chat 对话
<p align="center">
      <img width="750" height="550" src="https://github.com/user-attachments/assets/099fe893-08e3-4c31-a845-5f117a1de696"/>
</p>
:::

## 使用代码选择：
在编辑器中按级别选择所需代码以共享代码片段。选定的代码将自动插入到聊天界面中，使 CodeGPT 能够提供更准确和特定上下文的响应。使用 `@` 调用函数。

:::note 代码选择

要读取文件或段落的名称，您可以使用滑动条导航名称。

<p align="center">
    <img width="750" height="550"  src="https://github.com/user-attachments/assets/90a920ed-74c6-458b-9444-55c4b60128f9" />
</p>
:::

### 上下文级别

请启用它，AI 将能够理解您的代码上下文。

您有三个级别的上下文：

- `Selected code`：手动选择的代码
- `Codebase`：我们自动选择代码库。请先在 `Codebase` 按钮上索引代码库
- `Deep insights`：我们通过代码知识图丰富响应。

## 使用自定义上下文
使用自定义上下文可以根据特定情况定制响应。

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/3d02120a-bb92-4051-a92d-328e9cc1a504" />
</p>

### 添加文件
1. 点击 `+Add Context` 按钮
2. 选择 `#Files` 从当前项目中添加文件作为上下文
3. 点击窗口外部以保存更改

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/7c3487cc-402e-4d0a-91a5-29b64f202817" />
</p>

:::note 

您还可以通过点击右侧的 ⚙️ 图标并启用相应选项自动将当前文件添加到工作区

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/d1080ef7-cd9b-48eb-8159-1ceecbbc9d3d" />
</p>

:::

### 我的代理
1. 点击 `+Add Context` 按钮
2. 选择 `My agents` 获取代理列表并点击您要使用的代理
3. 点击窗口外部以保存更改

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/67b2b971-0cab-4ce9-ba31-bc789ce34eff" />
</p>

### 文档

1. 点击 `+Add Context` 按钮
2. 选择 `Docs` 获取 CodeGPT Marketplace 代理列表并点击您要使用的代理
3. 点击窗口外部以保存更改

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/7bd2f40a-2f8a-441d-b769-fb453d090b1a" />
</p>

## 快捷键
您可以使用快捷键充分利用 CodeGPT Chat 功能。以下是一些最有用的快捷键：

- [`/Fix`](https://docs.codegpt.co/docs/tutorial-features/find_problems)：修复选定的代码
- [`/Explain`](https://docs.codegpt.co/docs/tutorial-features/code_explanation)：解释选定的代码
- [`/Refactor`](https://docs.codegpt.co/docs/tutorial-features/code_refactoring)：重构选定的代码
- [`/Document`](https://docs.codegpt.co/docs/tutorial-features/code_documentation)：为选定的代码生成文档
- [`/Inline code`](https://docs.codegpt.co/docs/tutorial-features/code_inline)：编辑选定代码中的特定词语
- [`/Unit Test`](https://docs.codegpt.co/docs/tutorial-features/unit_testing)：测试选定的代码
- [`/Comment`](ddd)：注释选定的代码
- [`/StackOverflow`](https://docs.codegpt.co/docs/tutorial-features/stackoverflow)：在 StackOverflow 上搜索选定的代码
- [`/Code Builder`](https://docs.codegpt.co/docs/tutorial-features/code_builder)：为选定的代码生成代码生成器
- [`/Code Interpreter`](https://docs.codegpt.co/docs/tutorial-features/code_interpreter)：解释选定的代码而不执行它
- [`/Planning`](dddd)：允许来自我们 Marketplace 的专家代理帮助您规划代码。

:::note 快捷键

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/6aba86fa-0c6c-49f2-89bc-47456d2c61e5" />
</p>
:::

充分利用 CodeGPT Chat，在您的编码工作中体验新的生产力水平。