---
sidebar_position: 11
---

# HuggingFace
Site oficial https://huggingface.co/

O Hugging Face é uma plataforma projetada para compartilhar modelos de IA pré-treinados e colaborar no desenvolvimento e compartilhamento de recursos relacionados à IA e ao processamento de linguagem natural (NLP). Serve como um repositório central para muitos modelos, incluindo aqueles para geração de texto, classificação, tradução, resposta a perguntas e mais tarefas.

## Como conectar
- Crie uma conta em [Huggingface](https://huggingface.co/)
- Vá para seu [Perfil - Configurações - Tokens de Acesso](https://huggingface.co/settings/tokens)
- Gere e copie a Chave API 
- Vá para o VSCode e escolha `HuggingFace` como `Provider`
- Clique em `Connect` ou `Set connection`
- Cole a Chave API aqui e clique em `Connect`:

<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/7211de2e-e155-4a23-a0c9-1ba3907e532d" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/fc9ed7dd-fa9e-400d-a760-4d58b55fda5e" />
    </td>
  </tr>
</table>

:::caution Remover Chave
Se você quiser remover sua Chave API do CodeGPT, clique na caixa do provedor e clique em `Disconnect`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/e33666b4-7366-4bfd-b33d-31c7f0b3968f" />
</p>

:::

### Modelos Huggingface disponíveis no Code GPT
- Meta-llama/Llama-3.2-1B-Instruct
- Meta-llama/Llama-3.2-3B-Instruct
- Meta-llama/Meta-Llama-3-8B-Instruct
- Mistralai/Mixtral-8x7B-Instruct-v0.1
- Microsoft/Phi-3.5-mini-instruct
- Qwen/Qwen2.5-72B-Instruct
- Qwen/Qwen2.5-1.5B-Instruct

## Erros de API
Se você estiver recebendo erros de API, verifique o seguinte link: [Huggingface Documentation](https://huggingface.co/docs/inference-endpoints/index)
