---
sidebar_position: 11
---

# HuggingFace
Site oficial https://huggingface.co/

O Hugging Face é uma plataforma projetada para compartilhar modelos de IA pré-treinados e colaborar no desenvolvimento e compartilhamento de recursos relacionados à IA e ao processamento de linguagem natural (NLP). Ele serve como um repositório central para muitos modelos, incluindo aqueles para geração de texto, classificação, tradução, resposta a perguntas e mais tarefas.

## Como conectar
- Crie uma conta no [Huggingface](https://huggingface.co/).
- Vá para o seu [Perfil - Configurações - Tokens de Acesso](https://huggingface.co/settings/tokens).
- Gere e copie a Chave API.
- Na Extensão CodeGPT do VSCode, altere o modelo no chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Escolha o `modelo LLMs Cloud` e selecione `Huggingface` como `Provedor`.
- Selecione um modelo como `Qwen/Qwen2.5-1.5B-Instruct`.
- Cole a `Chave API` aqui e clique em `Conectar`.
- Clique fora das opções e peça para conversar.

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/066c9009-af2e-4f33-ace7-e67c31a61cb1"/></p>

:::caution Remover ou editar Chave
Para remover sua Chave API do CodeGPT, clique no botão `Alterar configurações de conexão`.
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/1ee36e01-6eaf-44ce-b195-c8a5bef58c79"/></p>
:::

## Erros de API
Se você estiver recebendo erros de API, verifique o seguinte link: [Documentação do Huggingface](https://huggingface.co/docs/inference-endpoints/index).