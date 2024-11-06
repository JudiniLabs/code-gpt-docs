---
sidebar_position: 8
---

# Google Vertex AI
Site oficial [https://cloud.google.com/](https://cloud.google.com/)

## Conecte suas credenciais do Vertex
Obter suas credenciais no Google Cloud pode ser complicado. A partir de 28 de março de 2024, aqui está o processo para obtê-las:

### No Google Cloud
- Navegue até https://cloud.google.com/ e faça login com sua conta do Gmail.
- Inicie o Console selecionando a opção no canto superior direito.
- No painel esquerdo, clique na aba "Models Garden".
- Na caixa de pesquisa no topo, digite "Vertex AI". Escolha "Virtual Studio Vertex".
- Certifique-se de que você ativou a API do Vertex AI, a API do Dataform e a API do Compute Engine.
- Vá para o [Dashboard](https://console.cloud.google.com/home/dashboard).
- No menu à direita, selecione "API & Services" e clique em "Credentials". Clique no e-mail associado às Contas de Serviço.
Você será direcionado para a página da Conta de Serviço. A partir daí, navegue até a aba "Keys" e selecione "Add Key." O download deve começar automaticamente, e o arquivo deve ser salvo como um .json.
- Renomeie o arquivo baixado para "credentials".
- Para o Link Personalizado, customize conforme necessário, garantindo que o LOCATION, PROJECT_ID e MODEL sejam alterados.
`https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models/MODEL:streamGenerateContent`
- Escolha `Vertex` como `Provider`.
- Clique em `Connect` ou `Set connection`
- Cole o link do modelo e faça o upload do arquivo credential.json.
- Clique em `Connect`

<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/fbfca711-3941-4d84-bde3-969457a36978" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/b0e04c27-4332-40d0-94b8-80dbecdcbeab" />
    </td>
  </tr>
</table>

:::caution Remover Chave
Se você quiser remover sua API Key do CodeGPT, clique na caixa do provider e clique em `Disconnect`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/e29e919c-0e36-436d-a8bd-acb01c266c3a" />
</p>

:::

## Modelos Vertex disponíveis no CodeGPT

### Gemini
- Llama3-8b-Hf
- llama3-8b-chat-hf
- llama3-70b-hf
- llama3-70b-chat-hf
- gemini-pro
- gemini-1.0-pro
- gemini-1.5-pro-latest
- gemini-1.5-pro-preview-0514
- gemini-1.5-flash-preview-0514
- gemini-ultra
- gemini-nano

## Erros de API
Se você estiver recebendo erros de API, verifique o seguinte link: [Documentação do Vertex AI](https://cloud.google.com/vertex-ai/docs)
