---
sidebar_position: 9
---

# Code Interpreter

The ***Code Interpreter*** allows you to execute code within the code blocks provided by agents in the CodeGPT chat.

## How to configure:
- Go to Marketplace on VSCode Extension
- Search and install agents with this icon (`Python`, `Claude 3.5 Sonnet`, `GPT-4o`)

<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/31e598e3-42fe-4ca9-8ced-60c526bc2b17" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/acb0f71d-a655-40b5-aeb6-f57dd364ea83" />
    </td>
  </tr>
</table>

- Back to the Main Menu
- Choose CodeGPT Plus as `Provider`
- Select the agent with the Code Interpreter functions installed in the previous step

## How to use

### Case 1: Select code from the editor and then ask the Agent to create code. For example, Violin plot.

- Select the code from Workspace. Example:
```python 
#Context:
import numpy as np
# Sample data for three categories
category1 = np.random.normal(loc=0, scale=1, size=100)  # Normal distribution centered at 0
category2 = np.random.normal(loc=5, scale=1.5, size=100)  # Normal distribution centered at 5
category3 = np.random.normal(loc=10, scale=2, size=100)  # Normal distribution centered at 10

data = [category1, category2, category3]
```

- Make a prompt on CodeGPT chat. Example: `create a Violin plot`
- Wait for the code to be executed and click on `Run` icon <img width="20" height="20" src="https://github.com/user-attachments/assets/26cf6d75-9e52-4bf1-82eb-bef9f4950ca9" />

::: Code interpreter with Python agent
<p align="center">
      <img width="550" height="300" src="https://github.com/JudiniLabs/code-gpt-docs/assets/6216945/dfb51437-3706-438e-ba32-abf1f7d61213" />
</p>
:::

### Case 2: Using the slash icon `/` on the chat box 

- On the chat box, write `/` to show the Code-Interpreter option
- `Send` the request or press `Enter`
- Wait for the code to be executed, and then you will see the result
  
::: Code interpreter with Claude 3.5 Sonnet agent
<p align="center">
      <img width="550" height="300" src="https://github.com/user-attachments/assets/8c4de431-0df2-496f-a233-4f2bc91aaac2" />

</p>
:::



