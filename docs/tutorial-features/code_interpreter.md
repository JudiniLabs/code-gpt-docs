---
sidebar_position: 9
---

# Code Interpreter

The ***Code Interpreter*** allows you to execute code within the code blocks provided by agents in the CodeGPT chat.

## How to use

:::note CodeGPT: Refactor CodeGPT
To use this feature, log in with your CodeGPT account, and you will have limited daily free interactions. You can subscribe to one of our plans to get many more interactions and access the selected AI models without worrying about creating API keys or accounts with each provider (we make it easy for you!). In case you want to use CodeGPT for free, you must add your own API key from the desired provider (e.g., Anthropic, OpenAI) and you will pay for the consumption directly to them.

### Using the slash icon `/` on the chat box 

- - Select the code from Workspace. Example:
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
- Wait for the code to be executed and click on `Send` icon <img width="20" height="20" src="https://github.com/user-attachments/assets/26cf6d75-9e52-4bf1-82eb-bef9f4950ca9" />
- On the chat box, write `/` to show the Code-Interpreter option
- `Send` the request or press `Enter`
- Wait for the code to be executed, and then you will see the result
  
::: Code interpreter with Claude 3.5 Sonnet agent
<p align="center">
      <img width="550" height="300" src="https://github.com/user-attachments/assets/8c4de431-0df2-496f-a233-4f2bc91aaac2" />

</p>
:::



