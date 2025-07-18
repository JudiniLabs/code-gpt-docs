---
sidebar_position: 3
---

# Troubleshooting

## CodeGPT VSCode Extension Troubleshooting Guide

### Introduction

This guide is designed to help you resolve common issues that may arise during the installation and use of the CodeGPT extension. Before you begin, ensure that you meet all the requirements and configurations outlined below.

### Requirements

To run the CodeGPT extension, your setup must meet the following requirements:

- VSCode Version: Your VSCode must be version **1.96.0** or higher.
- Node.js Version: Your Node.js must be version **20.0.0** or higher.

### Common Issues and Solutions

- Issue:
The CodeGPT extension requires the use of port 54112 for localhost. If this port is not available, the extension will fail to run.

- Solution:
Ensure that port 54112 is free and not being used by any other application. You can check and free up this port by using the following commands:

For Windows:

```
netstat -aon | findstr :54112
taskkill /F /PID <PID>
```

For macOS and Linux:

```
lsof -i :54112
kill -9 <PID>
```
Replace `<PID>` with the actual Process ID using the port. The first command will provide you with a 4-digit Process ID number.


### Using devcontainer

- Issue:
When using a devcontainer, port 54112 must be opened in the Docker Compose configuration.

- Solution:
Ensure that your docker-compose.yml includes the following configuration to open port 54112:

```
services:
  your-service-name:
    ports:
      - "54112:54112"
```

### VSCode Tunnel Incompatibility

- Issue:
The CodeGPT extension is incompatible with VSCode Tunnel as it cannot run localhost under this setup.

- Solution:
Unfortunately, no workaround exists for using the CodeGPT extension with VSCode Tunnel. Please ensure you run VSCode in a local environment where localhost can be used.

## Experiencing a black screen after reinstalling or updating the CodeGPT Extension
- Issue:
The CodeGPT extension requires cache clearance after reinstallation or an update.

- Solution: Delete cache memory
```

- Press Ctrl + Shift + P
- Type the command "Clear Editor History"
- Press Enter
- Shut VSCode and install CodeGPT again
```

## Unable to connect to the extension services
- Issue:
After installation, the CodeGPT extension requires a restart of the environment.

- Solution:
You can try these alternatives:
```
- Restart your computer
- Delete cache memory 
- Verify the availability of port 54112 or 54113.
```

## Unable to connect to the extension services from VPN 
- Issue:
After installation, the CodeGPT extension cannot connect with your CodeGPT Plus account. The number of daily interactions is -1 to -1.

- Solution:
CodeGPT accesses the API service with the domain `api.codegpt.co` and its subdomains (such as `app.codegpt.co`). Some companies have firewall restrictions or contain restricted domain lists, making it impossible to synchronize services if they are used from VSCode or any other IDE. 
Please consult with your IT provider to add our domain to the list of allowed domains or use the extension from networks without specific restrictions.

## Can't use the Marketplace agents
- Issue:
The number of agents you can install from the Marketplace is limited based on your subscription plan. Therefore, you may encounter an error message stating, "You have reached the limit of agents."

- Solution:
Please remove all excess agents, retaining only the quantity permitted under your current subscription plan.


