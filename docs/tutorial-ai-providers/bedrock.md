---
sidebar_position: 9
---

# AWS Bedrock

Official website [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, a fully managed service, offers top foundation models (FMs) from leading AI firms, including AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI, and Amazon via a single API. It provides various capabilities, including security, privacy, and responsible AI for developing generative AI applications. 


## Connect your Provider account
- Create an account in [AWS Bedrock](https://aws.amazon.com/es/console/)
- Create an AWS user with **AmazonBedrockFullAccess** Permissions policies
- Go to **Security Credentials** and create a new **Access keys**
- Generate and copy the Access Key and Secret Key
- On the VSCode CodeGPT Extension, change the model on the chat, click on `Manage Models` button

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/a90fc799-f6d4-49bb-a72d-4752dd8330e1"/></p>

- Pick the `API Keys` tab and select `Bedrock` as `Provider`

<p align="center"><img width="323" height="416"  src="https://github.com/user-attachments/assets/554015c4-5e84-449a-aed2-511d894f365a" /></p>
  
- Paste API Key here, and click on `Connect`
- Click outside the options and ask to chat.
  
:::caution Remove Key
To remove your API Key from CodeGPT, click on `Change connection settings` button
:::

## Models available in CodeGPT
The models you configure on your Amazon Bedrock account will be synchronized with the models on the extension.




