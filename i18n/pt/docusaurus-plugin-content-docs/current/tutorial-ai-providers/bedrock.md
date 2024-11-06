---
sidebar_position: 9
---

# AWS Bedrock

Site oficial [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, um serviço totalmente gerenciado, oferece os principais modelos de fundação (FMs) de empresas líderes em IA, incluindo AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI e Amazon, através de uma única API. Ele fornece várias capacidades, incluindo segurança, privacidade e IA responsável para o desenvolvimento de aplicações de IA generativa.

## Conecte sua conta do Provider
- Crie uma conta em [AWS Bedrock](https://aws.amazon.com/es/console/)
- Crie um usuário AWS com as políticas de permissões **AmazonBedrockFullAccess**

<img width="300" height="150" src="https://github.com/user-attachments/assets/5a5d46d4-6b5c-4a0c-8a08-84b3838a68f7" />

- Vá para **Credenciais de Segurança** e crie novas **Chaves de Acesso**
- Gere e copie a Chave de Acesso e a Chave Secreta
- Escolha `Bedrock` como `Provider`
- Clique em `Connect` ou `Set connection` para vincular à sua conta.
- Cole a `region`, `Access Key` e `Secret Access Key`, e clique em `Connect`.

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

:::caution Remover Chave
Para remover sua Chave de API do CodeGPT, clique na caixa do provedor e `Disconnect`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/5b853a55-653e-4da6-ae6b-c90e6fbde98f" />
</p>

:::

## Modelos disponíveis no CodeGPT
Por favor, note que os modelos que você configurar em sua conta do Amazon Bedrock serão sincronizados com os modelos na extensão.

<p align="center">
      <img src="https://github.com/davila7/code-gpt-docs/assets/37567214/81d9fb16-159f-424c-b2d0-c513271cc300"/>
</p>
