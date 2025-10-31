---
sidebar_position: 2
---

# ⚙️ Configuration

The following sections describe the various utilities and configuration options available in the CodeGPT application.

## 🔄 Sync Your CodeGPT Account

- To sync your CodeGPT account, log in using `Gmail`, `GitHub`, or explore `More login options`.
- 🎁 Try before you buy! New users can sign up for free and gain immediate access.
- The browser will open CodeGPT Studio. If you don't have an account yet, you can create one by following the on-screen instructions.
- ✅ A confirmation message will appear once you're logged in, and you can return to the VS Code Extension.

<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/06f76e59-524a-488e-82e5-c8836fd9302d"/></p>

⚠️ For more information about our plans, please visit the [Pricing page](https://www.codegpt.co/pricing/#info1-r).

- Now you can use the CodeGPT Extension to synchronize your [custom agents](https://docs.codegpt.co/docs/tutorial-features/chat_code_gpt). 

## 📊 Usage According to Your Plan

### 🆓 Free Plan
- Choose from available free models
- 30 monthly interactions included
- Providers: Only available with your own API keys

When you reach your free tier limit, the provider configuration modal will automatically open.

### 🔑 Bring Your Own API Key (BYOK)
The BYOK plan allows you to use CodeGPT with your own API keys—no interaction limits imposed by CodeGPT.

- Subscribe to BYOK by visiting app.codegpt.co/en/extensions/plans
- Select the BYOK plan and complete the payment process
- Once subscribed, open CodeGPT in VS Code
- Click the **Manage Models** button and navigate to the "Providers" tab
- Configure one or more providers with your API keys (refer to the FREE plan instructions)

 :::info
If you have an API Key from another AI provider, please navigate [here](https://docs.codegpt.co/docs/category/-ai-providers) to find your specific provider section.
:::

<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/8ba019c9-200e-4609-8f6c-ba5b25ce0bfc"/></p>

:::caution 
⚠️ Important: With BYOK, you MUST select a model before sending messages. If you attempt to send a message without selecting a model, you'll see the error: "You must select a model first"
:::  


### 👥 Teams Plan
- Navigate to app.codegpt.co/account/subscription/plans
- Select the **TEAMS** plan and complete the payment. Your account will update automatically
- Sign in to VS Code
- Once authenticated, click the model selector to view all premium models:
- 🤖 GPT-4o
- 🧠 Claude 3.7 Sonnet
- 💎 Claude 3.5 Sonnet
- ✨ Gemini Pro
- And many more...
- Select your preferred model
- Start chatting—with unlimited interactions! 🚀

## 📚 Codebase Indexing
The Codebase Indexing feature enables you to index your entire codebase and use it as context for your conversations. In the main menu, you'll find the `Codebase` button. Click on it to explore the Augmented Context options.

<img width="307" alt="Screenshot 2025-05-19 at 16 37 40" src="https://github.com/user-attachments/assets/c3023f78-8681-4ed0-a311-efc191b1e6b4" />

### 💻 Codebase
Click on `Create Codebase Index` and select a target folder to begin indexing your codebase.

<img width="413" alt="image" src="https://github.com/user-attachments/assets/c8bbbe7a-55ee-4d89-bfd8-4621a3439b8b" />

With this feature enabled, the agent gains access to the **Semantic Search Tool**, which allows you to search for code snippets based on their semantic meaning.

### 🕸️ Code Graph (Teams Plan Only)
Click on `Code Graph` to connect your Knowledge Graph from CodeGPT Studio and leverage it as context for your conversations.

<img width="413" alt="image" src="https://github.com/user-attachments/assets/83608526-5013-41d0-b392-1bddd236dda4" />

With this feature, the agent gains access to the **Knowledge Graph Tool**, which enables searching for nodes and edges based on their semantic relationships.

### 🤔 What's the Difference?
What is the difference between Codebase Indexing and simply highlighting text for context? Here's a quick guide to help you decide:

**Use Highlighting When:**
- 🎯 You're focused on a small snippet or a specific bug
- 🔒 You don't want to grant access to your entire project
- ⚡ You need quick, one-off explanations

**Use Codebase Indexing When:**
- 🌐 You want CodeGPT to understand and work with your entire project
- 🎨 You need context-aware suggestions, navigation, or implementations
- 🔧 You're working on larger features, refactors, or debugging across multiple files
- 🛠️ You want access to advanced tools like Semantic Search and Knowledge Graphs

## 🛠️ Tools and Context Settings

### 🌍 Global
- Enable options to automatically add the current file as context, or configure the model to start responses with a To-Do list.

### 🔌 MCP
- Add your MCP integration. For more information, check [here](https://docs.codegpt.co/docs/tutorial-features/mcp).

### 🧰 Internal Tools
- Customize the interaction mode. For more details, check [here](https://docs.codegpt.co/docs/tutorial-features/tools).

## 🎨 Appearance

These optional configurations enhance your user experience.

- `Font Size`: Adjust the font size to match your preference.
- `Color Mode`: Customize the visual interface by switching between dark 🌙 and light ☀️ themes.

## 📍 Panel Position
You can adjust the position of the chat panel by dragging it from the sidebar menu.

![Move Tabs](https://github.com/user-attachments/assets/edd071ce-ce86-41d6-b119-5eca680881f9)

## 💬 Chat History
You can access your chat history by clicking on the `Chat History` button in the sidebar menu.

<p align="center">
   <img src="https://github.com/user-attachments/assets/38c68ed0-83bb-4792-b5dd-bfe20568e150" width="250" height="140"/>
</p>
