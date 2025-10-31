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

| Provider | Models |
|----------|--------|
| **Anthropic** | <br>1. claude-sonnet-4-5-20250929</br> <br>2. claude-opus-4-1-20250805</br><br>3. claude-sonnet-4-20250514</br><br>4. claude-opus-4-20250514</br><br>5. claude-3-7-sonnet-latest</br><br>6. claude-3-5-sonnet-latest</br><br>7. claude-3-5-haiku-latest</br> |
| **OpenAI** | <br>1. gpt-4.1</br><br>2. gpt-4.1-mini</br><br>3. o4</br><br>4. o4-mini</br><br>5. o3</br><br>6. o3-mini</br><br>7. o3-mini-high</br><br>8. o1</br><br>9. o1-mini</br><br>10. gpt-4o</br><br>11. gpt-4o-mini</br><br>12. gpt-5</br><br>13. gpt-5-mini</br><br>14. gpt-5-nano</br> |
| **Gemini** | <br>1. gemini-2.5-pro</br><br>2. gemini-2.5-flash</br><br>3. gemini-2.5-flash-lite</br><br>4. gemma-3-27b-it</br><br>5. gemma-3-12b-it</br> |
| **OpenRouter** | <br>1. anthropic/claude-3.5-sonnet</br><br>2. deepseek/deepseek-chat-v3v0324:free</br><br>3. deepseek/deepseek-r1-0528:free</br><br>4. qwen/qwen3-235b-a22b:free</br><br>5. qwen/qwq-32b:free</br><br>6. moonshotai/kimi-k2</br><br>7. switchpoint/router</br><br>8. google/gemini-2.5-flash</br><br>9. google/gemini-2.5-pro</br><br>10. anthropic/claude-3.7-sonnet</br><br>11. anthropic/claude-3.7-sonnet:thinking</br><br>12. anthropic/claude-sonnet-4</br><br>13. anthropic/claude-opus-4</br> |
| **Bedrock** | <br>1. claude-opus-4.1-20250805</br><br>2. claude-opus-4-20250514</br><br>3. claude-sonnet-4-20250514</br><br>4. claude-3.7-sonnet-20250219</br><br>5. claude-3.5-sonnet-20240620</br><br>6. claude-3.5-haiku-20241022</br> |
| **Grok** | <br>1. grok-4-fast-non-reasoning</br><br>2. grok-4-fast-reasoning</br><br>3. grok-4-0709</br><br>4. grok-code-fast-1</br><br>5. grok-4</br><br>6. grok-3</br><br>7. grok-3-fast</br><br>8. grok-3-mini</br><br>9. grok-3-mini-fast</br> |
| **Groq** | <br>1. openai/gpt-oss-120b</br><br>2. openai/gpt-oss-20b</br><br>3. moonshotai/kimi-k2-instruct</br><br>4. meta-llama/llama-4-scout-17b-16e-instruct</br><br>5. meta-llama/llama-4-maverick-17b-128e-instruct</br><br>6. qwem-qwq-32b</br><br>7. qwen-2.5-coder-32b</br><br>8. qwen-2.5-32b</br><br>9. gemma2-9b-it</br><br>10. deepseek-r1-distill-qwrn-32b</br><br>11. deepseek-r1-distill-qwrn-70b</br><br>12. llama-3.3-70b-versatile</br><br>13. llama-3.1-8b-instant</br> |
| **DeepSeek** | <br>1. deepseek-reasoner</br><br>2. deepseek-chat</br><br>3. deepseek-coder</br> |
| **Mistral** | <br>1. magistral-medium-2506</br><br>2. magistral-small-2506</br><br>3. devstral-small-latest</br><br>4. devstral-small-2505</br><br>5. mistral-large-lastest</br><br>6. mistral-medium-lastest</br><br>7. mistral-small-lastest</br><br>8. pixtral-large-latest</br><br>9. codestral-lastest</br><br>10. mistral-saba-latest</br><br>11. ministral-8b-latest</br><br>12. ministral-3b-latest</br><br>13. mistral-small</br><br>14. mistral-tiny</br><br>15. open-mistral-nemo</br> |
| **Claude Code** | <br>1. claude-opus-4.1.20250805</br><br>2. claude-sonnet-4-20250514</br><br>3. claude-opus-4-20250514</br><br>4. claude-3-7-sonnet-20250219</br><br>5. claude-3-5-haiku-20241022</br><br>6. claude-3-5-sonnet-20241022</br> |
| **Azure** | <br>The models available in the user's Azure account come from external providers, so model availability depends on what the Azure user has chosen and purchased</br>|
| **Nvidia** | <br>1. deepseek-ai/deepseek-r1</br><br>2. meta/llama-3.1-405b-instruct</br><br>3. meta/llama-3.1-8b-instruct</br><br>4. meta/llama-3-70b-instruct</br><br>5. meta/llama-3-8b-instruct</br><br>6. nvidia/nemotron-4-340b-instruct</br><br>7. nvidia/llama-3.1-nemotron-4-340b-instruct</br><br>8. nvidia/usdcode-llama3.70b-instruct</br><br>9. ibm/granite-34b-code-instruct</br><br>10. microsoft/phi-3-mini-128k-instruct</br><br>11. nv-mistralai/mistral-nemo-12b-instruct</br><br>12. mistralai/codestral-22b-instruct-v0.1</br><br>13. mistralai/mistral-large</br><br>14. mistralai/mistral-7b-instruct-v0.2</br><br>15. google/gemma-2-2b-it</br><br>16. google/gemma-2-9b-it</br><br>17. google/gemma-2-27b-it</br><br>18. google/gemma-7b</br><br>19. google/gemma-2b</br><br>20. google/codegemma-7b</br><br>21. google/recurrectgemma-2b</br><br>22. meta/codellama-70b</br><br>23. meta/llama2-70b</br> |
| **Cohere** | <br>1. command-a-03-2025</br><br>2. command-a-reasoning-08-2025</br><br>3. command-r-plus-08-2024</br> |
| **Gemini CLI** | <br>1. gemini-2.5-pro</br><br>2. gemini-2.5-flash</br> |
| **Perplexity** | <br>1. sonar-deep-research</br><br>2. sonar-reasoning-pro</br><br>3. sonar-reasoning</br><br>4. sonar-pro</br><br>5. r1-1776</br> |
| **Cerebras** | <br>1. qwen-3-coder-480b</br><br>2. gpt-oss-120b</br><br>3. qwen-3-235b-a22b-instruct-2507</br><br>4. qwen-3-235b-a22b-thinking-2507</br><br>5. llama-4-scout-17b-16e-instruct</br><br>6. llama-3.3-70b</br><br>7. llama3.1-8b</br><br>8. deepseek-r1-distill-llama-70b</br> |
| **Byteplus** | <br>1. kimi-k2-250711</br><br>2. deepseek-v3-8-250821</br><br>3. deepseek-r1-250528</br><br>4. gpt-oss-120b-250805</br> |
