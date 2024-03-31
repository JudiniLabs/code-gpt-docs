---
sidebar_position: 11
---

# Bedrock

Official website [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, a fully-managed service, offers top foundation models (FMs) from leading AI firms, including AI21 Labs, Anthropic, Cohere, Meta, Stability AI, and Amazon via a single API. It provides a wide range of capabilities, including security, privacy, and responsible AI for developing generative AI applications. It enables you to test and evaluate top FMs, fine-tune them with your data, and build agents to perform tasks using enterprise systems and data sources. Being serverless, Amazon Bedrock eliminates infrastructure management and integrates generative AI features into your apps using familiar AWS services.


## Connect your Provider account
- Create an account in [Bedrock](https://eu-central-1.console.aws.amazon.com/bedrock/home?region=eu-central-1#/)
- Go to your [API Keys](https://eu-central-1.console.aws.amazon.com/kms/home?region=eu-central-1#/kms/home)
- Generate and copy the API Key
- Choose `Bedrock` as `Provider`
- `Set connection `🔑` to link with your account.
- Paste the Key ID, take care about the `region` and the `Secret Access Key` :

  <table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/0dd2c017-0203-4261-b60b-a8cf2a983c33" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/a5ccdf9f-1bbd-4b52-b94d-f042a57bf1a2" />
    </td>
  </tr>
</table>


:::caution Region Unsupported
Amazon Bedrock is not available in all regions, check that your account is set up on these regions:
- Europe (Frankfurt)
- US West (Oregon)
- Asia Pacific (Tokyo)
- Asia Pacific (Singapore)
- US East (N. Virginia)
:::

## Models available in CodeGPT
Please note that the models you configure on your Amazon Bedrock account will be synchronized with the models on the extension

<p align="center">
      <img src="https://github.com/davila7/code-gpt-docs/assets/37567214/81d9fb16-159f-424c-b2d0-c513271cc300"/>
</p>

:::caution Remove Key
If you want to remove your API Key from CodeGPT, select `Edit Connection` on `🔑`, and click on `Disconnect`
:::