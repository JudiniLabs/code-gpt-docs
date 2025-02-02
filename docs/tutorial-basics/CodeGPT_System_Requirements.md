# CodeGPT System Requirements

To ensure CodeGPT functions correctly, the following software and hardware requirements must be met:

## Software Requirements

| Component                  | Requirement Details                                                                 |
|----------------------------|-------------------------------------------------------------------------------------|
| **Compatible Operating Systems** |- **macOS:** Works on all versions except Sonoma.- **Linux:** Compatible starting from deployments in 2024.  - **Windows:** Works well on Windows 11 and later versions. |
| **Visual Studio Code (VSCode) Version** | Version 1.96.0 or higher. |
| **Node.js Version**        | Version 20.0.0 or higher.                                                   |
| **Port**                   | Ensure port 54112 or 54113 is available, as the extension requires it to function.           |

## Hardware Requirements

| Component      | Requirement Details               |
|----------------|-----------------------------------|
| **RAM**        | Minimum of 1GB.               |
| **Disk Space** | Minimum of 20MB of available disk space. Depending on the specific model, additional space will be required if you are using local models such as Ollama. |
| **Processor**  | - Intel Core i5 or higher. - Not compatible with ARM processors older than 2024. |

## Connection Requirements

| Component | Requirement Details                                                                 |
|-----------|-------------------------------------------------------------------------------------|
| **Network** | - Should not be on a VLAN or VPN connection unless the administrator or firewall authorizes the domains of codepg.co. - Can work with local models but requires an internet connection to use CodeGPT. |

### CodeGPT domanins:
- storage.codegpt.co
- api.codegpt.co

### Other domains:
- api.github.com
- github.com
- https://marketplace.visualstudio.com/ (to install from VSCode)



These requirements ensure that CodeGPT operates optimally on your system.

