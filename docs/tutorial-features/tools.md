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

<table>
  <thead>
    <tr>
      <th>Provider</th>
      <th>Models</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Anthropic</strong></td>
      <td>
        • claude-sonnet-4-5-20250929<br/>
        • claude-opus-4-1-20250805<br/>
        • claude-sonnet-4-20250514<br/>
        • claude-opus-4-20250514<br/>
        • claude-3-7-sonnet-latest<br/>
        • claude-3-5-sonnet-latest<br/>
        • claude-3-5-haiku-latest
      </td>
    </tr>
    <tr>
      <td><strong>OpenAI</strong></td>
      <td>
        • gpt-4.1<br/>
        • gpt-4.1-mini<br/>
        • o4<br/>
        • o4-mini<br/>
        • o3<br/>
        • o3-mini<br/>
        • o3-mini-high<br/>
        • o1<br/>
        • o1-mini<br/>
        • gpt-4o<br/>
        • gpt-4o-mini<br/>
        • gpt-5<br/>
        • gpt-5-mini<br/>
        • gpt-5-nano
      </td>
    </tr>
    <tr>
      <td><strong>Gemini</strong></td>
      <td>
        • gemini-2.5-pro<br/>
        • gemini-2.5-flash<br/>
        • gemini-2.5-flash-lite<br/>
        • gemma-3-27b-it<br/>
        • gemma-3-12b-it
      </td>
    </tr>
    <tr>
      <td><strong>OpenRouter</strong></td>
      <td>
        • anthropic/claude-3.5-sonnet<br/>
        • deepseek/deepseek-chat-v3v0324:free<br/>
        • deepseek/deepseek-r1-0528:free<br/>
        • qwen/qwen3-235b-a22b:free<br/>
        • qwen/qwq-32b:free<br/>
        • moonshotai/kimi-k2<br/>
        • switchpoint/router<br/>
        • google/gemini-2.5-flash<br/>
        • google/gemini-2.5-pro<br/>
        • anthropic/claude-3.7-sonnet<br/>
        • anthropic/claude-3.7-sonnet:thinking<br/>
        • anthropic/claude-sonnet-4<br/>
        • anthropic/claude-opus-4
      </td>
    </tr>
    <tr>
      <td><strong>Bedrock</strong></td>
      <td>
        • claude-opus-4.1-20250805<br/>
        • claude-opus-4-20250514<br/>
        • claude-sonnet-4-20250514<br/>
        • claude-3.7-sonnet-20250219<br/>
        • claude-3.5-sonnet-20240620<br/>
        • claude-3.5-haiku-20241022
      </td>
    </tr>
    <tr>
      <td><strong>Grok</strong></td>
      <td>
        • grok-4-fast-non-reasoning<br/>
        • grok-4-fast-reasoning<br/>
        • grok-4-0709<br/>
        • grok-code-fast-1<br/>
        • grok-4<br/>
        • grok-3<br/>
        • grok-3-fast<br/>
        • grok-3-mini<br/>
        • grok-3-mini-fast
      </td>
    </tr>
    <tr>
      <td><strong>Groq</strong></td>
      <td>
        • openai/gpt-oss-120b<br/>
        • openai/gpt-oss-20b<br/>
        • moonshotai/kimi-k2-instruct<br/>
        • meta-llama/llama-4-scout-17b-16e-instruct<br/>
        • meta-llama/llama-4-maverick-17b-128e-instruct<br/>
        • qwem-qwq-32b<br/>
        • qwen-2.5-coder-32b<br/>
        • qwen-2.5-32b<br/>
        • gemma2-9b-it<br/>
        • deepseek-r1-distill-qwrn-32b<br/>
        • deepseek-r1-distill-qwrn-70b<br/>
        • llama-3.3-70b-versatile<br/>
        • llama-3.1-8b-instant
      </td>
    </tr>
    <tr>
      <td><strong>DeepSeek</strong></td>
      <td>
        • deepseek-reasoner<br/>
        • deepseek-chat<br/>
        • deepseek-coder
      </td>
    </tr>
    <tr>
      <td><strong>Mistral</strong></td>
      <td>
        • magistral-medium-2506<br/>
        • magistral-small-2506<br/>
        • devstral-small-latest<br/>
        • devstral-small-2505<br/>
        • mistral-large-lastest<br/>
        • mistral-medium-lastest<br/>
        • mistral-small-lastest<br/>
        • pixtral-large-latest<br/>
        • codestral-lastest<br/>
        • mistral-saba-latest<br/>
        • ministral-8b-latest<br/>
        • ministral-3b-latest<br/>
        • mistral-small<br/>
        • mistral-tiny<br/>
        • open-mistral-nemo
      </td>
    </tr>
    <tr>
      <td><strong>Claude Code</strong></td>
      <td>
        • claude-opus-4.1.20250805<br/>
        • claude-sonnet-4-20250514<br/>
        • claude-opus-4-20250514<br/>
        • claude-3-7-sonnet-20250219<br/>
        • claude-3-5-haiku-20241022<br/>
        • claude-3-5-sonnet-20241022
      </td>
    </tr>
    <tr>
      <td><strong>Azure</strong></td>
      <td>The models available in the user's Azure account come from external providers, so model availability depends on what the Azure user has chosen and purchased</td>
    </tr>
    <tr>
      <td><strong>Nvidia</strong></td>
      <td>
        • deepseek-ai/deepseek-r1<br/>
        • meta/llama-3.1-405b-instruct<br/>
        • meta/llama-3.1-8b-instruct<br/>
        • meta/llama-3-70b-instruct<br/>
        • meta/llama-3-8b-instruct<br/>
        • nvidia/nemotron-4-340b-instruct<br/>
        • nvidia/llama-3.1-nemotron-4-340b-instruct<br/>
        • nvidia/usdcode-llama3.70b-instruct<br/>
        • ibm/granite-34b-code-instruct<br/>
        • microsoft/phi-3-mini-128k-instruct<br/>
        • nv-mistralai/mistral-nemo-12b-instruct<br/>
        • mistralai/codestral-22b-instruct-v0.1<br/>
        • mistralai/mistral-large<br/>
        • mistralai/mistral-7b-instruct-v0.2<br/>
        • google/gemma-2-2b-it<br/>
        • google/gemma-2-9b-it<br/>
        • google/gemma-2-27b-it<br/>
        • google/gemma-7b<br/>
        • google/gemma-2b<br/>
        • google/codegemma-7b<br/>
        • google/recurrectgemma-2b<br/>
        • meta/codellama-70b<br/>
        • meta/llama2-70b
      </td>
    </tr>
    <tr>
      <td><strong>Cohere</strong></td>
      <td>
        • command-a-03-2025<br/>
        • command-a-reasoning-08-2025<br/>
        • command-r-plus-08-2024
      </td>
    </tr>
    <tr>
      <td><strong>Gemini CLI</strong></td>
      <td>
        • gemini-2.5-pro<br/>
        • gemini-2.5-flash
      </td>
    </tr>
    <tr>
      <td><strong>Perplexity</strong></td>
      <td>
        • sonar-deep-research<br/>
        • sonar-reasoning-pro<br/>
        • sonar-reasoning<br/>
        • sonar-pro<br/>
        • r1-1776
      </td>
    </tr>
    <tr>
      <td><strong>Cerebras</strong></td>
      <td>
        • qwen-3-coder-480b<br/>
        • gpt-oss-120b<br/>
        • qwen-3-235b-a22b-instruct-2507<br/>
        • qwen-3-235b-a22b-thinking-2507<br/>
        • llama-4-scout-17b-16e-instruct<br/>
        • llama-3.3-70b<br/>
        • llama3.1-8b<br/>
        • deepseek-r1-distill-llama-70b
      </td>
    </tr>
    <tr>
      <td><strong>Byteplus</strong></td>
      <td>
        • kimi-k2-250711<br/>
        • deepseek-v3-8-250821<br/>
        • deepseek-r1-250528<br/>
        • gpt-oss-120b-250805
      </td>
    </tr>
  </tbody>
</table>
