# CodeGPT System Requirements

## VSCode Extension

### Software Requirements

| Component | Requirement Details |
|-----------|-------------------|
| **Operating Systems** | • **Windows:** Windows 10/11 (64-bit)<br>• **macOS:** All versions (Intel & Apple Silicon)<br>• **Linux:** Ubuntu 20.04+ and compatible distributions (64-bit) |
| **Visual Studio Code** | Version 1.96.0 or higher |
| **Node.js** | Version 20.0.0 or higher |
| **Network Ports** | Ports 54112 or 54113 must be available |

### Hardware Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **RAM** | 1 GB | 4 GB |
| **Disk Space** | 20 MB (base installation) | 1 GB+ (with local models) |
| **Processor** | Intel Core i5 or equivalent<br>ARM processors (2024+) | Intel Core i7 or equivalent |

---

## JetBrains Plugin

### Software Requirements

| Component | Requirement Details |
|-----------|-------------------|
| **Operating Systems** | • **Windows:** Windows 10/11 (64-bit)<br>• **macOS:** macOS 12 (Monterey) or later (Intel & Apple Silicon)<br>• **Linux:** Ubuntu 20.04+ and compatible distributions (64-bit) |
| **JetBrains IDE** | IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, or other JetBrains IDEs<br>Version 2022.1 or higher |
| **JDK** | Version 17 or higher |
| **Node.js** | Version 18.15.0 (automatically managed by extension) |
| **Network Ports** | Ports 54112 or 54113 must be available |

### Hardware Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **RAM** | 8 GB | 16 GB |
| **Disk Space** | 1.5 GB | 3 GB+ |
| **Processor** | Intel Core i5 (4 cores), Apple M1/M2, or equivalent AMD | Intel Core i7 or higher |

---

## Network Requirements

### Internet Connection
- **Required for:** Cloud AI models, extension updates, and authentication
- **Local models:** Can work offline but initial setup requires internet
- **VPN/Firewall:** Ensure access to required domains

### Required Domains

#### CodeGPT Services
- `storage.codegpt.co`
- `api.codegpt.co`

#### Third-party Services
- `api.github.com`
- `github.com`

#### Installation Sources
- **VSCode:** `marketplace.visualstudio.com`
- **JetBrains:** `plugins.jetbrains.com/plugin/24372-codegpt-chat--ai-agents`

---

## Installation Links

| Platform | Installation Method |
|----------|-------------------|
| **VSCode** | [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/) |
| **JetBrains** | [JetBrains Plugin Repository](https://plugins.jetbrains.com/plugin/24372-codegpt-chat--ai-agents) |

---

## Notes

- **ARM Compatibility:** ARM processors supported from 2024 onwards
- **Local Models:** Additional disk space required for models like Ollama
- **Network Restrictions:** Contact your network administrator if domains are blocked
- **Performance:** Higher specifications recommended for large projects and intensive AI usage

