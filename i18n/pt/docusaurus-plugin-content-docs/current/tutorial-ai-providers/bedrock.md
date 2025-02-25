---
sidebar_position: 9
---

# AWS Bedrock

Site oficial [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, um serviço totalmente gerenciado, oferece modelos de base (FMs) de ponta de empresas líderes em IA, incluindo AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI e Amazon através de uma única API. Ele fornece várias capacidades, incluindo segurança, privacidade e IA responsável para desenvolver aplicações de IA generativa.

## Conecte sua conta do Provedor
- Crie uma conta em [AWS Bedrock](https://aws.amazon.com/es/console/)
- Crie um usuário AWS com políticas de Permissões **AmazonBedrockFullAccess**
- Vá para **Credenciais de Segurança** e crie novas **Chaves de Acesso**
- Gere e copie a Chave de Acesso e a Chave Secreta
- Na Extensão VSCode CodeGPT, altere o modelo no chat

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/f5d1245b-d58d-4c93-85c1-fa1c055585e4"/></p>

- Escolha o modelo LLMs Cloud e selecione `Bedrock` como `Provedor`
- Cole a `Chave API` aqui e clique em `Conectar`
- Clique fora das opções e peça para conversar.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/375fd655-e3eb-4367-be42-c6cec8736f43"/></p>

:::caution Remover Chave
Para remover sua Chave API do CodeGPT, clique no botão `Alterar configurações de conexão`
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/97221226-2cd3-4f9b-9ed3-b41555f23c04"/></p>
:::

## Modelos disponíveis no CodeGPT
Os modelos que você configurar na sua conta Amazon Bedrock serão sincronizados com os modelos na extensão.
