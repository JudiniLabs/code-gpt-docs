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
- Na caixa de pesquisa na parte superior, digite `Vertex AI`. Escolha `Virtual Studio Vertex`.
- Certifique-se de ter ativado a API do Vertex AI, a API do Dataform e a API do Compute Engine.
- Vá para o [Dashboard](https://console.cloud.google.com/home/dashboard).
- Selecione "API & Services" no menu à direita e clique em `Credentials`. Clique no e-mail associado às Contas de Serviço.
Você será direcionado para a página da Conta de Serviço. A partir daí, navegue até a aba `Keys` e selecione `Add Key`. O download deve começar automaticamente, e o arquivo deve ser salvo como um .json.
- Renomeie o arquivo baixado para `credentials`.
- Para o Link Personalizado, personalize conforme necessário, garantindo que a LOCALIZAÇÃO, PROJECT_ID e MODELO sejam alterados.
`https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models/MODEL:streamGenerateContent`

## Na Extensão CodeGPT 
- Na Extensão CodeGPT do VSCode, altere o modelo no chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Escolha o `LLMs Cloud model` e selecione `Cohere` como `Provider`.
- Selecione um modelo, por exemplo, `llama3-70b-chat-hf`.
- Cole a `API Key` aqui e clique em `Connect`.
- Cole o link do modelo e faça o upload do arquivo credential.json.
- Use os modelos disponíveis diretamente. Clique fora das opções e peça para conversar.

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/928e0dbd-27a8-4f1b-8904-784da652bf02"/></p>

:::caution Remover ou editar a Chave
Para remover sua Chave API do CodeGPT, clique no botão `Change connection settings`.
:::

## Erros de API
Se você estiver recebendo erros de API, verifique o seguinte link: [Documentação do Vertex AI](https://cloud.google.com/vertex-ai/docs)