---
sidebar_position: 16
---

# Cerebras

Site oficial: https://cerebras.ai/

Cerebras é uma plataforma de computação de ponta para treinamento e inferência de modelos de inteligência artificial em larga escala. Este guia fornece uma visão abrangente do Cerebras, incluindo informações detalhadas sobre conceitos principais, fluxos de trabalho, recursos e a API Cerebras PyTorch.

## Principais Recursos

- Cerebras Model Zoo com Modelos de Linguagem Grande (LLM) pré-configurados
- Suporte para modelos de Visão Computacional (CV)
- Compatibilidade com modelos multimodais como LLaVA
- Capacidade de usar modelos e conjuntos de dados personalizados do PyTorch

O Cluster Wafer-Scale da Cerebras é meticulosamente projetado para permitir o treinamento de redes neurais com uma escalabilidade linear notavelmente eficiente em milhões de núcleos, sem as complexidades da computação distribuída tradicional.

## Como Conectar

- Vá para https://inference.cerebras.ai/
- Selecione "Get API Key"
- Crie uma conta
- Clique em "Join Now"
- Preencha o formulário

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>

- Uma vez que você tenha a API Key, vá para a extensão do VSCode
- Selecione Cerebras como o provedor com o modelo desejado
- Cole a API Key
- Clique em "Connect"

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/1593cb8a-7727-459a-8b9b-526af4d0a06c" />
</p>

:::caution Remover Chave
Se você quiser remover sua API Key do CodeGPT, clique na caixa do provedor e "Disconnect".

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/eb8a35bf-ba6d-4113-b3b5-af4f8e6bedb5" />
</p>

:::

### Modelos Cerebras Disponíveis no Code GPT

- Llama3.1-70b
- Llama3.1-8b

## Erros de API

Se você estiver enfrentando erros de API, consulte a seguinte documentação: [Documentação da Cerebras](https://docs.cerebras.ai/)

:::info Nota Importante
Este provedor está disponível apenas na versão 3.5.73 da extensão CodeGPT para VSCode e posteriores. Certifique-se de que a extensão esteja atualizada.
:::
