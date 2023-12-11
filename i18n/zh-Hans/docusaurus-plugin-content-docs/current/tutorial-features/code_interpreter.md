---
sidebar_position: 8
---

# 运行代码解释器（Beta）

## 描述

***使用Python的代码解释器***（Beta）功能使您能够在注释中轻松请求和接收代码建议。这个强大的工具通过提供快速而相关的代码片段来增强您的编码体验。

通过Jupyter Notebook的集成，您现在可以直接在您的环境中执行代码片段。

## 要求
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## 如何使用：
- 在注释中请求代码：
    - 编写包含特定代码请求的注释（确保光标位于注释行的末尾）。

- 启动代码建议：
    - 按下```cmd + shift + i```触发代码建议模式。

- 利用代码：
    - 实施建议的代码以增强您的项目。

## 示例
在这个示例中，我们请求打开一个CSV文件，检索列，然后绘制数据。

### Prompt/提示：

你的任务是打开位于 '../datasets/data_test.csv' 的文件，读取数据，识别列，然后创建一个有意义的图表来可视化它

:::note CodeGPT: 代码解释器
<p align="center">
      <img width="550" height="300" src="https://github.com/davila7/code-gpt-docs/assets/6216945/314b2a0b-c89a-4458-ae58-1dc2c58a384d" />
</p>
:::



