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

[Screenshot: Profile selector dropdown]

- Step 2: Choose Your Profile
Select the appropriate profile based on your current task:

- Chat Mode: For questions and explanations
- Search Mode: To explore and understand your project
- Agent Mode: To modify files and implement features

[Screenshot: Profile options in dropdown]

- Step 3: Verify Profile Selection
The active profile will be displayed in the chat interface. You'll see different capabilities based on your selection.
[Screenshot: Active profile indicator]

## Quick Start Examples

### Using Chat Mode
You: "Explain how async/await works in JavaScript"
Perfect for learning concepts without needing project context.
[Screenshot: Chat mode conversation]

### Using Search Mode
You: "How is authentication handled in this project?"
CodeGPT will automatically explore your project to understand the auth implementation.
[Screenshot: Search mode analyzing project]

### Using Agent Mode
You: "Add input validation to the user registration form"
CodeGPT will explore your project, plan the implementation, and make the necessary file changes.
[Screenshot: Agent mode implementing changes]

## When to Use Each Mode

[screenshot]

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