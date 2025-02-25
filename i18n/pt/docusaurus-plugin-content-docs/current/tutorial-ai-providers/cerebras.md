---
sidebar_position: 16
---

# Cerebras
Site oficial: https://cerebras.ai/

Cerebras é uma plataforma de computação de ponta para treinamento e inferência de modelos de inteligência artificial em larga escala. Este guia fornece uma visão geral abrangente do Cerebras, incluindo informações detalhadas sobre conceitos principais, fluxos de trabalho, recursos e a API Cerebras PyTorch.

## Principais Recursos
- Cerebras Model Zoo com Modelos de Linguagem de Grande Escala (LLM) pré-configurados.
- Suporte para modelos de Visão Computacional (CV).
- Compatibilidade com modelos multimodais como LLaVA.
- Capacidade de usar modelos e conjuntos de dados PyTorch personalizados.

O Cerebras Wafer-Scale Cluster é meticulosamente projetado para permitir o treinamento de redes neurais com escalabilidade linear notavelmente eficiente em milhões de núcleos, sem as complexidades da computação distribuída tradicional.

## Como Conectar
- Acesse https://inference.cerebras.ai/.
- Selecione "Get API Key".
- Crie uma conta.
- Clique em "Join Now".
- Preencha o formulário.

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>
  
- Na Extensão CodeGPT do VSCode, altere o modelo no chat

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/9589828c-c794-4d67-b806-9eff0adf3798"/></p>

- Escolha o modelo LLMs Cloud e selecione `Cerebras` como `Provider`.
- Cole a `API Key` aqui e clique em `Connect`.
- Clique fora das opções e comece a conversar.

:::caution Remover Chave
Para remover sua API Key do CodeGPT, clique no botão `Change connection settings`
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b7189968-c88a-4891-82b7-3cbc59a46b25"/></p>
:::

## Erros de API
Se você estiver enfrentando erros de API, consulte a seguinte documentação: [Documentação Cerebras](https://docs.cerebras.ai/).

:::info Nota Importante
Este provedor está disponível apenas na versão 3.5.73 da extensão CodeGPT para VSCode e posteriores. Certifique-se de que sua extensão está atualizada.
:::