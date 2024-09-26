---
sidebar_position: 9
---

# Code Interpreter

The ***Code Interpreter*** allows you to execute code within the code blocks provided by agents in the CodeGPT chat.

## How to Use:
- Select an Agent (`Python` or `Claude 3.5 Sonnet` that has the "Code Interpreter" option
- On the chat box, write `/` to show the Code-Interpreter option
- `Send` the request or press `Enter`
- Wait for the code to be executed, and then you will see the result

## Example
In this example, we will select code from the editor and then ask the Python 3.10 Agent to create a Violin plot.

### Prompt:

```python 
Chat CodeGPT: create a Violin plot

Context:

import numpy as np

# Sample data for three categories
category1 = np.random.normal(loc=0, scale=1, size=100)  # Normal distribution centered at 0
category2 = np.random.normal(loc=5, scale=1.5, size=100)  # Normal distribution centered at 5
category3 = np.random.normal(loc=10, scale=2, size=100)  # Normal distribution centered at 10

data = [category1, category2, category3]

```

:::note CodeGPT: Code Interpreter with Python
<p align="center">
      <img width="550" height="300" src="https://github.com/JudiniLabs/code-gpt-docs/assets/6216945/dfb51437-3706-438e-ba32-abf1f7d61213" />
</p>
:::

:::note CodeGPT: Code Interpreter with Claude 3.5 Sonnet
<p align="center">
      <img width="550" height="300" src="https://github.com/user-attachments/assets/2522c1c0-4584-4f3b-a222-12dd0dad5779" />

</p>
:::



