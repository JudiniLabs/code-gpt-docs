---
sidebar_position: 16
---

# Cerebras
Official website: https://cerebras.ai/

Cerebras is a cutting-edge computing platform designed for large-scale artificial intelligence model training and inference. It provides a comprehensive guide for all things Cerebras, including detailed information on core concepts, workflows, features, and the Cerebras PyTorch API.

## Key Features
- Cerebras Model Zoo with pre-configured Large Language Models (LLM)
- Support for Computer Vision (CV) models
- Compatibility with multimodal models like LLaVA
- Ability to use custom PyTorch models and datasets

The Cerebras Wafer-Scale Cluster is meticulously engineered to enable the training of neural networks with remarkably efficient linear scaling across millions of cores, all without the complexities of traditional distributed computing.

## How to Connect
- Go to https://inference.cerebras.ai/
- Select "Get API Key"
- Create an account
- Click on "Join Now"
- Fill out the form

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>

- Once you have the API Key, go to the VSCode extension
- Select Cerebras as the provider with the desired model
- Click on "Connect"
- Paste the API Key
- Click on "Connect"

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/1593cb8a-7727-459a-8b9b-526af4d0a06c" />
</p>

:::caution Remove Key
If you want to remove your API Key from CodeGPT, click on the provider box and then click on "Disconnect".

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/eb8a35bf-ba6d-4113-b3b5-af4f8e6bedb5" />
</p>

:::

### Cerebras Models Available in Code GPT
- Llama3.1-70b
- Llama3.1-8b

## API Errors
If you are experiencing API errors, please refer to the following documentation: [Cerebras Documentation](https://docs.cerebras.ai/)

:::info Important Note
This provider is only available in version 3.5.73 of the CodeGPT extension for VSCode and later. Make sure you have the extension updated.
:::
