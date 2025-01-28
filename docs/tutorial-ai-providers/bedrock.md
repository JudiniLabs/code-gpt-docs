---
sidebar_position: 9
---

# AWS Bedrock

Official website [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, a fully managed service, offers top foundation models (FMs) from leading AI firms, including AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI, and Amazon via a single API. It provides various capabilities, including security, privacy, and responsible AI for developing generative AI applications. 


## Connect your Provider account
- Create an account in [AWS Bedrock](https://aws.amazon.com/es/console/)
- Create an AWS user with **AmazonBedrockFullAccess** Permissions policies

<img width="300" height="150" src="https://github.com/user-attachments/assets/5a5d46d4-6b5c-4a0c-8a08-84b3838a68f7" />

- Go to **Security Credentials** and create a new **Access keys**
- Generate and copy the Access Key and Secret Key
- Choose `Bedrock` as `Provider`
- - Click on `Connect` or `Set connection` to link with your account.
- Paste the `region`, `Access Key` and `Secret Access Key`, and click `Connect`.

  <table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/18c6ad44-0b08-4e82-9b6a-e59ff5079421" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/b4c83952-9fa2-4492-9ce6-d4341cea14aa" />
    </td>
  </tr>
</table>

:::caution Remove Key
To remove your API Key from CodeGPT, click on the provider box and `Disconnect`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/5b853a55-653e-4da6-ae6b-c90e6fbde98f" />
</p>

:::

## Models available in CodeGPT
Please note that the models you configure on your Amazon Bedrock account will be synchronized with the models on the extension.

<p align="center">
      <img src="https://github.com/JudiniLabs/code-gpt-docs/assets/37567214/81d9fb16-159f-424c-b2d0-c513271cc300"/>
</p>
