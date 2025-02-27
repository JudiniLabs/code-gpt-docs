---
sidebar_position: 8
---

# Google Vertex AI
官方网站 [https://cloud.google.com/](https://cloud.google.com/)

## 连接你的 Vertex 凭证
在 Google Cloud 上获取凭证可能会有些棘手。截至 2024 年 3 月 28 日，以下是获取凭证的过程：

### 在 Google Cloud 上
- 访问 https://cloud.google.com/ 并使用你的 Gmail 账户登录。
- 选择右上角的选项启动控制台。
- 在左侧面板中，点击“Models Garden”标签。
- 在顶部的搜索框中输入 `Vertex AI`。选择 `Virtual Studio Vertex`。
- 确保你已启用 Vertex AI API、Dataform API 和 Compute Engine API。
- 转到 [Dashboard](https://console.cloud.google.com/home/dashboard)。
- 从右侧菜单中选择“API & Services”并点击 `Credentials`。点击与服务账户关联的电子邮件。
你将被定向到服务账户页面。从那里，导航到 `Keys` 标签并选择 `Add Key`。下载应自动开始，文件应保存为 .json 格式。
- 将下载的文件重命名为 `credentials`。
- 对于自定义链接，根据需要进行自定义，确保更改 LOCATION、PROJECT_ID 和 MODEL。
`https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models/MODEL:streamGenerateContent`

## 在 CodeGPT 扩展上
- 在 VSCode 的 CodeGPT 扩展上，更改聊天中的模型。

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- 选择 `LLMs Cloud model` 并选择 `Cohere` 作为 `Provider`。
- 选择一个模型，例如 `llama3-70b-chat-hf`。
- 在此处粘贴 `API Key`，然后点击 `Connect`。
- 粘贴链接模型并上传 credential.json 文件。
- 直接使用可用的模型。点击选项外部并请求聊天。

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/928e0dbd-27a8-4f1b-8904-784da652bf02"/></p>

:::caution 移除或编辑 Key
要从 CodeGPT 中移除你的 API Key，点击 `Change connection settings` 按钮。
:::

## API 错误
如果你遇到 API 错误，请检查以下链接：[Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)