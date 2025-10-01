---
sidebar_position: 6
---
# Internal Tools
CodeGPT's internal tools are a set of functionalities that allow the AI assistant to interact with the file system and execute commands in the user's environment. These tools are designed to facilitate development, code exploration, and automation of common tasks.

## Pre-defined Profiles

CodeGPT offers three pre-configured profiles to match different use cases:

### 1. Chat Mode 🗨️
- No tools enabled
- Questions and answers only

### 2. Search Mode 🔍
- Read-only tools:
  - `code_semantic_search`
  - `get_file_content`
  - `get_folder_tree_structure`

### 3. Agent Mode 🤖
- All tools enabled
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
- **`code_semantic_search`**: Search codebase for similar code patterns and functions using semantic analysis
- **`get_file_content`**: Retrieve content from a specific file in the codebase
- **`get_folder_tree_structure`**: Display project folder hierarchy and file structure
- **`create_file_or_folder`**: Create new files or directories in the codebase
- **`delete_file`**: Remove files from the codebase with confirmation
- **`execute_terminal_command`**: Run terminal commands for builds, tests, and system operations
- **`edit_file`**: Modify existing file content with precise changes
- **`todo_list`**: Manage project tasks, bugs, and feature requests

:::info Security Considerations

1. Tools that modify the file system (`create_file_or_folder`, `delete_file`, `edit_file`) or execute commands (`execute_terminal_command`) are potentially dangerous and should be used with caution.
2. The system implements a limit of 20 auto-approvals for potentially dangerous operations, after which manual user approval is required.
3. Commands that could compromise system security should never be executed, such as deleting critical directories or running unknown scripts.
4. It's recommended to always review proposed changes before approving them, especially when dealing with modifications to existing files.
:::

:::caution Important Note About Tool Compatibility

**Tools only work with specific models that support function calling capabilities.** If you select a model from the "Providers and Models without Tools" section, the tool functionality will not be available. Make sure to choose a model from the "Providers and Models with Tools" section to access the full range of CodeGPT's tool features.
:::

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/307f3480-d303-4689-af11-3e3c94196417"/></td>
    <td><img src="https://github.com/user-attachments/assets/9293dab3-b411-414b-9eea-52a1993e980c"/></td>
  </tr>
</table>

# Providers and Models with Tools

This table shows providers that offer development tools along with their compatible models.

| Provider | Models |
|----------|--------|
| OpenAI | gpt-4.1, gpt-4.1-2025-04-14, gpt-4.1-mini-2025-04-14, gpt-4.1-nano-2025-04-14, gpt-4.5-preview, o4-mini, o3, o3-mini, o3-mini-high, o1-preview, o1-preview-2024-09-12, o1-mini, o1-mini-2024-09-12, gpt-4o, gpt-4o-mini, gpt-4o-2024-11-20, gpt-4o-2024-05-13 |
| Anthropic | claude-sonnet-4-20250514, claude-opus-4-20250514, claude-3-7-sonnet-latest, claude-3-7-sonnet-20250219, claude-3-5-sonnet-20241022, claude-3-5-sonnet-20240620, claude-3-5-haiku-latest, claude-3-5-haiku-20241022, claude-3-opus-latest, claude-3-opus-20240229, claude-3-sonnet-20240229, claude-3-haiku-20240307 |
| Claude Code | claude-sonnet-4-20250514, claude-opus-4-20250514, claude-3-7-sonnet-20250219, claude-3-5-haiku-20241022, claude-3-5-sonnet-20241022, claude-3-5-sonnet-20240620, claude-3-haiku-20240307, claude-3-sonnet-20240229, claude-3-opus-20240229 |
| Grok | grok-4, grok-4-0709, grok-3, grok-3-fast, grok-3-mini, grok-3-mini-fast, grok-3-1702, grok-2-1212 |
| Cohere | command-a-03-2025, command-r7b-12-2024, command-r-plus-04-2024, command-r-plus, command-r-08-2024, command-r-03-2024, command-r, command, command-nightly, command-light, command-light-nightly, c4ai-aya-expanse-32b, c4ai-aya-expanse-8b |
| Google AI Studio | gemini-2.5-pro-preview-05-06, gemini-2.5-flash-preview-04-17, gemini-2.5-pro-preview-03-25, gemini-2.5-pro-exp-03-25, gemini-2.0-flash, gemini-2.0-flash-thinking-exp-1219, gemini-2.0-flash-exp, gemma-3-27b-it, gemma-3-12b-it, gemma-3-4b-it, gemma-3-1b-it |
| Gemini CLI | gemini-2.5-pro, gemini-2.5-flash, gemini-2.5-pro-preview-05-06, gemini-2.5-pro-preview-06-05, gemini-2.5-flash-preview-04-17, gemini-2.5-flash-preview-05-20, gemini-2.5-flash-lite-preview-06-17, gemini-2.0-flash, gemini-2.0-flash-lite, gemini-1.5-flash-8b |
| Mistral | magistral-medium-2506, magistral-small-2506, devstral-small-latest, devstral-small-2505, mistral-large-latest, mistral-medium-latest, mistral-small-latest, pixtral-large-latest, codestral-latest, mistral-saba-latest, ministral-8b-latest, ministral-3b-latest, mistral-small, mistral-tiny, open-mistral-nemo |
| Perplexity | sonar-deep-research, sonar-reasoning-pro, sonar-reasoning, sonar-pro, r1-1776 |
| Groq | meta-llama/llama-4-scout-17b-16e-instruct, meta-llama/llama-4-maverick-17b-128e-instruct, qwen-qwq-32b, qwen-2.5-coder-32b, qwen-2.5-32b, gemma2-9b-it, deepseek-r1-distill-qwen-32b, deepseek-r1-distill-llama-70b, llama-3.3-70b-versatile, llama-3.1-8b-instant |
| Cerebras | llama-4-scout-17b-16e-instruct, llama-3.3-70b, llama3.1-8b, deepseek-r1-distill-llama-70b |

# Providers and Models without Tools

This table shows providers that do not specify the use of development tools along with their available models.

| Provider | Models |
|----------|--------|
| CodeGPT Plus Beta | gpt-3.5-turbo, GPT-4, gpt-4o |
| Nvidia | deepseek-ai/deepseek-r1, meta/llama-3.1-405b-instruct, meta/llama-3.1-8b-instruct, meta/llama3-70b-instruct, meta/llama3-8b-instruct, nvidia/llama-3.1-nemotron-70b-instruct, nvidia/nemotron-4-340b-instruct, nvidia/usdcode-llama3-70b-instruct, ibm/granite-34b-code-instruct, microsoft/phi-3-mini-128k-instruct, nv-mistralai/mistral-nemo-12b-instruct, mistralai/codestral-22b-instruct-v0.1, mistralai/mixtral-8x22b-v0.1, mistralai/mistral-large, mistralai/mistral-7b-instruct-v0.2, google/gemma-2-2b-it, google/gemma-2-9b-it, google/gemma-2-27b-it, google/gemma-7b, google/gemma-2b, google/codegemma-7b, google/recurrentgemma-2b, meta/codellama-70b, meta/llama2-70b |
| Azure | Azure |
| Github Models | DeepSeek-R1, gpt-4o, gpt-4o-mini, Mistral-large, Mistral-large-2407, Mistral-Nemo, Mistral-small, AI21-Jamba-Instruct, Meta-Llama-3-70B-Instruct, Meta-Llama-3-8B-Instruct, Meta-Llama-3.1-405B-Instruct, Meta-Llama-3.1-70B-Instruct, Meta-Llama-3.1-8B-Instruct, Cohere-command-r, Cohere-command-r-plus, Phi-3-medium-128k-instruct, Phi-3-medium-4k-instruct, Phi-3-mini-128k-instruct, Phi-3-mini-4k-instruct, Phi-3-small-128k-instruct, Phi-3-small-8k-instruct, Phi-3.5-mini-instruct |
| DeepSeek | deepseek-reasoner, deepseek-chat, deepseek-coder |
| Ollama | llama4:scout, llama4:maverick, llama3.3:70b, llama3.2:3b, llama3.2:1b, llama3.1:405b and many others. |
| Fireworks AI | llama-v3p1-405b-instruct, llama-v3p1-70b-instruct, llama-v3p1-8b-instruct, llama-v3-70b-instruct, llama-v2-7b-chat, llama-v2-70b-chat, yi-large, qwen2-72b-instruct, mixtral-8x22b-instruct, mixtral-8x7b, gemma-7b-it, dbrx-instruct, zephyr-7b-beta |
| Huggingface | meta-llama/Llama-3.2-1B-Instruct, meta-llama/Llama-3.2-3B-Instruct, meta-llama/Meta-Llama-3-8B-Instruct, mistralai/Mixtral-8x7B-Instruct-v0.1, microsoft/Phi-3.5-mini-instruct, Qwen/Qwen2.5-72B-Instruct, Qwen/Qwen2.5-1.5B-Instruct |
| Bedrock | claude-opus-4-20250514-v1:0, claude-sonnet-4-20250514-v1:0, claude-3-7-sonnet-20250219-v1:0, claude-3-5-sonnet-20241022-v2:0, claude-3-5-sonnet-20240620-v1:0, claude-3.7-sonnet, claude-3.5-sonnet, claude-3-sonnet, claude-v2, claude-v2.1, claude-v1, claude-instant |
| LM Studio | Not required |
| Docker | ai/qwen3, ai/deepseek-r1-distill-llama, ai/deepcoder-preview, ai/phi4, ai/qwq, ai/qwen2.5, ai/gemma3, ai/gemma3-qa, ai/smollm2, ai/llama3.1, ai/llama3.2, ai/llama3.3, ai/mxbai-embed-large, ai/mistral-nemo, ai/mistral |
| OpenRouter | openrouter/cypher-alpha:free, deepseek/deepseek-chat-v3-0324:free, google/gemini-2.0-flash-exp:free, deepseek/deepseek-r1-0528:free, qwen/qwen3-235b-a22b:free, qwen/qwq-32b:free |
| Custom | No specified models |
| CodeGPT Enterprise | gpt-3.5-turbo, GPT-4 |
