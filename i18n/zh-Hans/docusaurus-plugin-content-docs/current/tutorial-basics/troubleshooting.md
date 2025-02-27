---
sidebar_position: 3
---

# 故障排除

## CodeGPT VSCode 扩展故障排除指南

### 介绍

本指南旨在帮助您解决在安装和使用 CodeGPT 扩展期间可能遇到的常见问题。在开始之前，请确保您满足以下列出的所有要求和配置。

### 要求

要运行 CodeGPT 扩展，您的设置必须满足以下要求：

- VSCode 版本：您的 VSCode 必须是 **1.82.0** 或更高版本。
- Node.js 版本：您的 Node.js 必须是 **18.0.0** 或更高版本。

### 常见问题及解决方案

- 问题：
CodeGPT 扩展需要使用 54112 端口作为本地主机。如果此端口不可用，扩展将无法运行。

- 解决方案：
确保 54112 端口空闲且未被其他应用程序使用。您可以使用以下命令检查并释放此端口：

对于 Windows：

```
netstat -aon | findstr :54112
taskkill /F /PID <PID>
```

对于 macOS 和 Linux：

```
lsof -i :54112
kill -9 <PID>
```
将 `<PID>` 替换为使用该端口的实际进程 ID。

### 使用 devcontainer

- 问题：
使用 devcontainer 时，必须在 docker-compose 配置中打开 54112 端口。

- 解决方案：
确保您的 docker-compose.yml 包含以下配置以打开 54112 端口：

```
services:
  your-service-name:
    ports:
      - "54112:54112"
```

### VSCode Tunnel 不兼容

- 问题：
CodeGPT 扩展与 VSCode Tunnel 不兼容，因为在此设置下无法运行本地主机。

- 解决方案：
不幸的是，没有解决方法可以在 VSCode Tunnel 中使用 CodeGPT 扩展。请确保您在可以使用本地主机的本地环境中运行 VSCode。

## 重新安装或更新 CodeGPT 扩展后出现黑屏

- 问题：
重新安装或更新后，CodeGPT 扩展需要清除缓存。

- 解决方案：删除缓存
```

- 按 Ctrl + Shift + P
- 输入命令 "Clear Editor History"
- 按 Enter
- 关闭 VSCode 并重新安装 CodeGPT
```

## 无法连接到扩展服务

- 问题：
安装后，CodeGPT 扩展需要重新启动环境。

- 解决方案：
您可以尝试以下替代方法：
```
- 重启计算机
- 删除缓存
- 验证 54112 或 54113 端口的可用性
```

## 无法通过 VPN 连接到扩展服务

- 问题：
安装后，CodeGPT 扩展无法连接到您的 CodeGPT Plus 帐户。每日交互次数显示为 -1 到 -1。

- 解决方案：
CodeGPT 通过域 `api.codegpt.co` 及其子域（如 `app.codegpt.co`）访问 API 服务。一些公司有防火墙限制或包含受限域列表，因此如果从 VSCode 或任何其他 IDE 使用这些服务，将无法同步服务。请咨询您的 IT 提供商将我们的域添加为允许域，或在没有特定限制的网络中使用扩展。

## 无法使用 Marketplace 代理

- 问题：
您可以从 Marketplace 安装的代理数量根据您的订阅计划有限。因此，您可能会遇到错误消息，提示 "您已达到代理数量限制"。

- 解决方案：
请删除所有多余的代理，仅保留当前订阅计划允许的数量。