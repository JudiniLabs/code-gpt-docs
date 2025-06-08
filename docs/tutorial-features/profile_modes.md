---
sidebar_position: 2
---
# Profile Modes

CodeGPT offers three distinct profile modes to match your development workflow. Each mode provides different levels of project interaction and capabilities.
Available Profiles

## 💬 Chat Mode
Best for: Learning, code explanations, and general programming questions

Provides expert programming guidance without project context
Perfect for debugging code snippets you share
Explains concepts, algorithms, and best practices
Works with any code you copy-paste into the conversation

## 🔍 Search Mode
Best for: Understanding existing codebases and getting context-aware suggestions

Automatically explores your project structure and dependencies
Provides suggestions based on your existing codebase
Analyzes architecture patterns and project organization
Read-only operations - explores without making changes

## 🤖 Agent Mode
Best for: Active development, implementing features, and project modifications

Full project modification capabilities (create, edit, delete files)
Executes terminal commands (install packages, run tests, etc.)
Works iteratively with automatic progression
Implements complete features with best practices

# How to Switch Profiles
- Step 1: Access Profile Selection

Open CodeGPT
Look for the profile selector in the chat interface
Click on the current profile name to open the dropdown

- Step 2: Choose Your Profile
Select the appropriate profile based on your current task:

- Chat Mode: For questions and explanations
- Search Mode: To explore and understand your project
- Agent Mode: To modify files and implement features

<img width="585" alt="Screenshot 2025-06-08 at 12 26 01" src="https://github.com/user-attachments/assets/e8754c78-906a-4a31-bc88-6eb360dd87db" />

- Step 3: Verify Profile Selection
The active profile will be displayed in the chat interface. You'll see different capabilities based on your selection.

<img width="662" alt="Screenshot 2025-06-08 at 12 34 13" src="https://github.com/user-attachments/assets/8e6b58c0-a7ec-4fb2-93b2-edcbba02977c" />

## Quick Start Examples

### Using Chat Mode
You: "Explain how async/await works in JavaScript"
Perfect for learning concepts without needing project context.

<img width="732" alt="Screenshot 2025-06-08 at 12 35 50" src="https://github.com/user-attachments/assets/aa12a1fb-cc09-4d3a-a4e3-62c3075700aa" />

### Using Search Mode
You: "How is authentication handled in this project?"
CodeGPT will automatically explore your project to understand the auth implementation.

<img width="696" alt="Screenshot 2025-06-08 at 12 36 48" src="https://github.com/user-attachments/assets/24bf2c4d-4afb-4c6c-acdf-b490db494f1a" />

### Using Agent Mode
You: "Add a sing up button in the sidebar"
CodeGPT will explore your project, plan the implementation, and make the necessary file changes.

<img width="692" alt="Screenshot 2025-06-08 at 13 20 23" src="https://github.com/user-attachments/assets/8d56c9ed-ee1c-41c8-ab36-d6f066ac2700" />


## When to Use Each Mode

![Screenshot 2025-06-08 at 12 28 15](https://github.com/user-attachments/assets/3b74b38f-7bca-40f8-ad63-864c37c2808c)

# Profile Switching Tips
- ✅ Best Practices
  - Start Simple: Begin with Chat Mode for questions, then switch to Search/Agent as needed
  - Match the Task: Use the minimum required capabilities for your current task
  - Progressive Workflow: Search Mode → understand, then Agent Mode → implement
  - Review Changes: Always review file modifications in Agent Mode

- ⚠️ Important Notes
  - Agent Mode makes real changes to your files - use version control
  - Search Mode is read-only and safe for project exploration
  - Chat Mode works independently of your project files
  - You can switch profiles anytime during your conversation

# Troubleshooting
Profile Not Working as Expected?

- Check Active Profile: Verify the correct profile is selected
- Restart Chat: Start a new conversation after switching profiles
- Clear Instructions: Be specific about what you want to accomplish

# When Agent Mode Seems Too Powerful?

- Switch to Search Mode to explore and understand first
- Use Chat Mode for specific questions about implementations
- Remember: you can always review changes before they're applied
