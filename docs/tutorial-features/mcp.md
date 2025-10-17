---
sidebar_position: 1
---

# MCP (Model Control Protocol)

CodeGPT now supports the integration of external tools via the Model Context Protocol (MCP), allowing AI models to interact with various services and data sources. This tutorial will walk you through the process of configuring an MCP server within CodeGPT.

:::note CodeGPT MCP Host
<p align="center">
      <img width="350" height="250" src="https://github.com/user-attachments/assets/291406a3-4f04-462d-b033-ced9578338ee" />
</p>
:::


## Understanding MCP
### What is an MCP Host?
An MCP Host is the client application that connects to MCP servers, facilitating communication between AI models and external tools. In this context, CodeGPT acts as the MCP Host, managing connections and interactions with configured MCP servers.​

### What is an MCP Server?
An MCP Server is a service that exposes tools and functionalities to the MCP Host. These tools can perform various tasks, such as file operations, database queries, or API interactions. MCP servers can be run locally or remotely and communicate with the host using standardized protocols.​

## Configuring an MCP Server in CodeGPT
Follow these steps to add and configure an MCP server in CodeGPT:

1. Open Settings
Click on the gear icon (⚙️) located in the sidebar to open the Settings menu.​

<img width="495" alt="Screenshot 2025-04-28 at 12 20 35" src="https://github.com/user-attachments/assets/ae687290-1380-428d-a954-73e6c5bb4f34" />

2. Navigate to the MCP Configuration Tab
In the Settings menu, select the MCP Configuration tab to access MCP-related settings.​

4. Open the MCP Config File
Click on Open MCP Config File to open the configuration file (mcp.json) where you can define your MCP servers.​

<img width="454" alt="Screenshot 2025-04-28 at 12 21 08" src="https://github.com/user-attachments/assets/97891032-c399-4301-b40b-ce1b8eaed708" />

5. Add Your Server Configuration
In the mcp.json file, add your server configuration. For example, to add a filesystem server:​

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}



```

- `"command"` specifies the executable to run (e.g., npx).
- `"args"` provides the arguments for the command, including the server package and any necessary parameters.​


5. Refresh Server Connections
After saving your configuration, return to the MCP Configuration tab and click on Refresh Server Connections to apply the changes and start the new server.​


## Exploring Available Tools
Once the server is running:​

- You'll see a list of available servers.

- Click on a server to view its exposed tools and their descriptions.

- Select the tools you wish to enable for use by the AI models.​

<img width="377" alt="Screenshot 2025-04-28 at 12 22 08" src="https://github.com/user-attachments/assets/55bd3913-daba-4c06-ab3b-5f7ede6436ad" />


This setup allows you to customize the capabilities available to your models, enhancing their functionality based on your specific needs.
