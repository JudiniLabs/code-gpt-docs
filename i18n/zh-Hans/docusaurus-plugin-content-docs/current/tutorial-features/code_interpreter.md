---
sidebar_position: 8
---

# 运行代码解释器（Python）

## 描述

***Python代码解释器*** 功能允许您在注释中无缝地请求和接收代码建议。通过提供快速和相关的代码片段，这个强大的工具增强了您的编码体验。

通过Jupyter Notebook的集成，您现在可以直接在您的环境中执行代码片段。

## 要求
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## 如何使用：
- 在评论中请求代码：
    - 编写一个包含您特定代码请求的评论（确保光标位于评论行的末尾）。

- 启动代码建议：
    - 按 ```cmd + shift + i``` 触发代码建议模式。

- 利用代码：
    - 实现建议的代码以增强您的项目。

## 示例
在这个例子中，我们请求打开一个CSV文件，检索列，然后绘制数据。

### 提示：

```python noInline
# 你的任务是打开位于'../datasets/data_test.csv'的文件，读取数据，识别列，然后创建一个有意义的图表来可视化它

:::note CodeGPT: 代码解释器

<p align="center">
      <img width="550" height="300" src="https://github.com/davila7/code-gpt-docs/assets/6216945/314b2a0b-c89a-4458-ae58-1dc2c58a384d" />
</p>
:::
```

