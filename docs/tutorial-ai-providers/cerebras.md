---
sidebar_position: 16
---

# Cerebras
Official website: https://cerebras.ai/

Cerebras is a cutting-edge computing platform for large-scale artificial intelligence model training and inference. This guide provides a comprehensive overview of Cerebras, including detailed information on core concepts, workflows, features, and the Cerebras PyTorch API.

## Key Features
- Cerebras Model Zoo with pre-configured Large Language Models (LLM).
- Support for Computer Vision (CV) models.
- Compatibility with multimodal models like LLaVA.
- Ability to use custom PyTorch models and datasets.

The Cerebras Wafer-Scale Cluster is meticulously engineered to enable neural network training with remarkably efficient linear scaling across millions of cores without the complexities of traditional distributed computing.

## How to Connect
- Go to https://inference.cerebras.ai/.
- Select "Get API Key".
- Create an account.
- Click on "Join Now".
- Fill out the form.

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>
  
- On the VSCode CodeGPT Extension, change the model on the chat, click on `Manage Models` button

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/a90fc799-f6d4-49bb-a72d-4752dd8330e1"/></p>

- Pick the `API Keys` tab and select `Cerebras` as `Provider`

<p align="center"><img width="323" height="416"  src="https://github.com/user-attachments/assets/e8c0b245-be36-4096-a256-b2998adc4dae" /></p>

- Paste API Key here, and click on `Connect`
- Click outside the options and ask to chat.

:::caution Remove Key
To remove your API Key from CodeGPT:
- Click again on  the `Manage models` button.
- Click on "Change connection settings"
:::


## API Errors
If you are experiencing API errors, please refer to the following documentation: [Cerebras Documentation](https://docs.cerebras.ai/).

:::info Important Note
This provider is only available in version 3.5.73 of the CodeGPT extension for VSCode and later. Ensure that you have the extension updated.
:::
