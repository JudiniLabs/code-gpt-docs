---
sidebar_position: 1
---
# Internal Tools
CodeGPT's internal tools comprise a set of functionalities that enable the AI assistant to interact with the file system and execute commands within the user's environment. These tools are designed to facilitate development, code exploration, and automation of common tasks.

## Pre-defined Profiles

CodeGPT offers three pre-configured profiles to match different use cases:

<p align="center">
    <img src="https://github.com/user-attachments/assets/f78409d8-85af-4c08-867d-76b918eb0777" width="550" height="540"/>
</p>


### 1. Chat Mode 🗨️
- No tools enabled
- Questions and answers only

### 2. Search Mode 🔍
- Read-only tools
- Search and read your codebase to find relevant code snippets from the structure to the content

### 3. Agent Mode 🤖
- All tools enabled (Create, delete, edit file, and run terminal)
- Includes write and execution tools
- The active profile determines which tools are available to the assistant. Agent mode is the most powerful but also requires more user supervision.

## Configuration

Before using tools, you need to configure them in the settings menu:

1. Go to the **Settings** menu in CodeGPT
2. Navigate to the **Tools** section
3. Enable the tools you want to use
4. Choose between **Enabled** and **Auto-Approve** modes:
   - **Enabled**: You control when tools are executed
   - **Auto-Approve**: Tools are executed automatically based on context

## Available Internal Tools

CodeGPT includes several built-in tools to enhance your development experience:
- **`Code Search`**: Search codebase for similar code patterns and functions using semantic analysis
- **`Read File`**: Retrieve content from a specific file in the codebase
- **`View Folder Structure`**: Display project folder hierarchy and file structure
- **`Create File/Folder`**: Create new files or directories in the codebase
- **`Delete File`**: Remove files from the codebase with confirmation
- **`Run Terminal Command`**: Run terminal commands for builds, tests, and system operations
- **`Edit File`**: Modify existing file content with precise changes
- **`Update ToDo List`**: Manage project tasks, bugs, and feature requests

:::note Security Considerations

1. Tools that modify the file system (`Create File/Folder`, `delete file`, `Edit File`) or execute commands (`Execute Terminal Command`) are potentially dangerous and should be used with caution.
2. The system implements a limit of 20 auto-approvals for potentially dangerous operations, after which manual user approval is required.
3. Commands that could compromise system security should never be executed, such as deleting critical directories or running unknown scripts.
4. It's recommended to always review proposed changes before approving them, especially when dealing with modifications to existing files.
:::

:::caution Important Note About Tool Compatibility

**Tools only work with specific models that support function calling capabilities.** If you select a model from the "Providers and Models without Tools" section, the tool functionality will not be available. Ensure you select a model from the "Providers and Models with Tools" section to access the full range of CodeGPT's tool features.
:::

# Providers and Models with Tools

This table shows providers that offer development tools along with their compatible models.

