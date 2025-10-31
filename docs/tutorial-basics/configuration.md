---
sidebar_position: 2
---

# Configuration

The subsequent sections describe the various utilities and configurations of the CodeGPT application.

## Sync Your CodeGPT Account

- To sync your CodeGPT account, log in using `Gmail`, `GitHub`, or other `More login options`.
- Try before you buy. New users can sign up for free and gain immediate access
- The browser will open CodeGPT Studio. If you don't have an account, you can create one by following the on-screen instructions.
- A confirmation message will appear once logged in, and you can return to the VS Extension.

<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/06f76e59-524a-488e-82e5-c8836fd9302d"/></p>

 ⚠️ For further information about the plans, please visit the [Pricing site](https://www.codegpt.co/pricing/#info1-r).

- Now, you can use the CodeGPT Extension to synchronize the [custom agents](https://docs.codegpt.co/docs/tutorial-features/chat_code_gpt). 

## Usage according to your plan

### Free plan
- Choose a free model
- 30 Monthly Interactions are allowed
- Providers: Only with your own API keys

When you hit your free tier limit, the provider config modal will auto-open.

### Bring your own API Key- BYOK
The BYOK plan lets you use CodeGPT with your own API keys—no interaction limits from CodeGPT.

-Subscribe to BYOK. Visit app.codegpt.co/en/extensions/plans
- Select the BYOK plan and complete payment
- Once subscribed, open CodeGPT in VSCode
- Click the Manage Models button an go to "Providers" tab
- Set up one or more providers with your API keys (see FREE plan instructions)

  :::info
If you have an API Key from another AI provider, please navigate [here](https://docs.codegpt.co/docs/category/-ai-providers) to the specific section and select your provider.
:::

<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/8ba019c9-200e-4609-8f6c-ba5b25ce0bfc"/></p>

:::caution Important: With BYOK, you MUST select a model before sending messages. If you try to send a message without selecting a model, you'll see: "You must select a model first"
:::  


### Teams plan
- Go to app.codegpt.co/account/subscription/plans
- Select TEAMS plan and complete the payment. Your account updates automatically
- Sign In to VSCode
- Once authenticated, click the model selector, you will see all premium models:
 - GPT-4o
 - Claude 3.7 Sonnet
 - Claude 3.5 Sonnet
 - Gemini Pro
 - And more...
- Select your model
- Start chatting—no limits!

### Appearance

These optional configurations enhance your user experience.

- `Font Size`: Adjust the font size to your preference.
- `Color Mode`: Alter the visual interface of the application by switching between the dark and light themes.

### Panel Position
You can adjust the position of the chat panel by dragging it from the sidebar menu.

![Move Tabs](https://github.com/user-attachments/assets/edd071ce-ce86-41d6-b119-5eca680881f9)

## Codebase Indexing
The Codebase Indexing feature allows you to index your codebase and use it as context for your conversations. In the main menu, you can find the `Codebase` button. Click on it to see the Augmented Context options.

<img width="307" alt="Screenshot 2025-05-19 at 16 37 40" src="https://github.com/user-attachments/assets/c3023f78-8681-4ed0-a311-efc191b1e6b4" />

What is the difference between Codebase Indexing and simply highlighting text for context? Here's a quick guide on why you might choose to use each:

Use Highlighting When:
- You’re focused on a small snippet or a specific bug
- You don’t want to give access to your whole project
- You need quick, one-off explanations

Use Codebase Indexing When:
- You want CodeGPT to understand and work with your entire project
- You need context-aware suggestions, navigation, or implementations
- You're working on larger features, refactors, or debugging across files
- You want access to more advanced tools like Semantic Search and Knowledge Graphs

### Codebase
Click on `Create Codebase Index` and select a target folder to start indexing your codebase.

<img width="413" alt="image" src="https://github.com/user-attachments/assets/c8bbbe7a-55ee-4d89-bfd8-4621a3439b8b" />

With this feature, the agent will have access to the Semantic Search Tool, which allows you to search for code snippets based on their meaning.

### Code Graph
Click on `Code Graph` to connect your Knowledge Graph from CodeGPT Studio  and use it as context for your conversations.

<img width="413" alt="image" src="https://github.com/user-attachments/assets/83608526-5013-41d0-b392-1bddd236dda4" />

With this feature, the agent will have access to the Knowledge Graph Tool, which enables searching for nodes and edges based on their meaning.

## Chat History
You can access the chat history by clicking on the `Chat History` button in the sidebar menu.

<p align="center">
    <img src="https://github.com/user-attachments/assets/38c68ed0-83bb-4792-b5dd-bfe20568e150" width="250" height="140"/>
</p>

