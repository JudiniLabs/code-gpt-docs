---
sidebar_position: 7
---

# Google AI Studio

Official website [https://aistudio.google.com/](https://aistudio.google.com/)

Google AI Studio serves as a browser-based IDE tailored for prototyping with generative models. Within Google AI Studio, users can swiftly experiment with various models and prompts. Once satisfied with their creation, they can seamlessly export it to code in their preferred programming language through the Gemini API

## Connect your Provider account
- Create an account in [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat)
- Create a new project to attach the API Key
- Generate and copy the [API Key](https://aistudio.google.com/app/apikey)
- Go to VSCode and choose `Googe AI Studio` as `Provider`
- Click on `Connect` or `Set connection`
- Paste API Key here, and click on `Connect`: 
<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/1a917a98-5c10-4b07-9e06-1daeaee2fc2f" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/d5ca6a20-7bb0-439d-98db-857796ed0869" />
    </td>
  </tr>
</table>


:::caution Remove Key
If you want to remove your API Key from CodeGPT, click on the provider box and click on `Disconnect`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/ddcfc0b4-2564-4e04-90b3-73cad9642011" />
</p>

:::

### Models available in Code GPT
- Gemma-2-2b-it
- Gemma-2-9b-it
- Gemma-2-27b-it
- gemini-1.5-flash-latest
- gemini-1.5-flash
- gemini-1.5-pro-exp-0801
- gemini-1.5-pro-latest
- gemini-1.5-pro
- gemini-1.0-pro
- gemini-1.0-pro-latest
- gemini-pro
- gemini-ultra
- gemini-nano