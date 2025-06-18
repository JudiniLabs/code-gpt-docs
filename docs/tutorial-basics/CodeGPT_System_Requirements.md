# CodeGPT VSCode System Requirements

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

# CodeGPT Jetbrains System Requirements

## Software Requirements

| Component                  | Requirement Details                                                                                               |
|----------------------------|------------------------------------------------------------------------------------------------------------------|
| Compatible Operating Systems | - **macOS**: macOS 12 (Monterey) or later (Intel & Apple Silicon) <br> - **Linux**: Ubuntu 20.04+ (64-bit) <br> - **Windows**: Windows 10/11 (64-bit) |
| JetBrains IDE Version      | IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, or other JetBrains IDEs, version 2022.1 or higher                    |
| JDK Version                | JDK 17 or higher                                                                                                |
| Node.js                    | Node.js 18.15.0 is automatically downloaded and managed by the extension (no manual installation required)        |
| Port                       | Ensure ports 54112 or 54113 are available, as the extension may require them for local server communication       |

## Hardware Requirements

| Component  | Requirement Details                                                                                   |
|------------|------------------------------------------------------------------------------------------------------|
| RAM        | Minimum 8 GB (16 GB recommended for large projects or heavy AI usage)                                |
| Disk Space | Minimum 1.5 GB free (includes JetBrains IDE, CodeGPT extension, Node.js, and dependencies)           |
| Processor  | Intel Core i5 (4 cores) or higher, Apple M1/M2, or equivalent AMD processor                          |

## Connection Requirements

| Component | Requirement Details                                                                 |
|-----------|-------------------------------------------------------------------------------------|
| **Network** | - Internet connection required for downloading dependencies and using cloud AI models. - Can work with local models, but some features require access to CodeGPT servers. - Avoid restrictive VPNs or firewalls that block required domains. |

### CodeGPT domanins:
- storage.codegpt.co
- api.codegpt.co

### Other domains:
- api.github.com
- github.com
- https://plugins.jetbrains.com/plugin/24372-codegpt-chat--ai-agents (to install from Jetbrains)


These requirements ensure that CodeGPT operates optimally on your system.

