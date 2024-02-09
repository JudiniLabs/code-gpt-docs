---
sidebar_position: 8
---

# Run Code Interpreter (Python)

## Description

The ***Code Interpreter with Python*** feature allows you to seamlessly request and receive code suggestions within comments. This powerful tool enhances your coding experience by providing quick and relevant code snippets.

With the integration of Jupyter Notebook, you can now execute code snippets directly in your environment.

## Requirements
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## How to Use:
- Requesting Code in a Comment:
    - Write a comment with your specific code request (Ensure your cursor is at the end of the comment line).

- Initiating Code Suggestions:
    - Press ```cmd + shift + i``` to trigger the code suggestion mode.

- Utilize the Code:
    - Implement the suggested code to enhance your project.

## Example
In this example, we request to open a CSV file, retrieve the columns, and then plot the data.

### Prompt:

```python noInline
# Your task is to open the file located at '../datasets/data_test.csv', read the data, identify the columns, and then create a meaningful chart to visualize it
```

:::note CodeGPT: Code Interpreter
<p align="center">
      <img width="750" height="500" src="https://github.com/davila7/code-gpt-docs/assets/6216945/314b2a0b-c89a-4458-ae58-1dc2c58a384d" />
</p>
:::



