---
sidebar_position: 2
---

# Configuração

As seções subsequentes descrevem as várias utilidades e configurações do aplicativo CodeGPT.

## Menu Principal

O menu principal é o seu hub de navegação primário dentro do aplicativo CodeGPT. Ele fornece acesso a recursos e configurações essenciais.

### Ferramentas

- `Chat`: Participe de conversas com IA usando os modelos do provedor escolhido ou com agentes no CodeGPT Plus.
- `Autocomplete`: 💻 Melhore sua experiência de codificação com sugestões inteligentes de conclusão de código.

### Experimental 

Esta seção apresenta recursos experimentais 🧪 que estão na fase de desenvolvimento.

- `React Sandbox`: Experimente componentes React por meio de interação ou upload de imagem.

### Ajuda
Consulte aqui quando precisar de ajuda.

- `Extension Docs`: O documento que você está lendo agora.
- `API Docs`: 📝 Acesse a documentação da API para o CodeGPT.
- `Report an issue`: Quaisquer problemas que você encontrar podem ser relatados no [repositório do Github](https://github.com/JudiniLabs/code-gpt-docs/issues).
- `Feedback`: Envie 💌 feedback para a equipe para nos ajudar a melhorar o produto.

### Configurações

Essas configurações opcionais melhoram sua experiência de usuário.

- `Font Size`: Ajuste o tamanho da fonte de acordo com sua preferência.
- `Color Mode`: Altere a interface visual do aplicativo alternando entre os temas escuro e claro.

## Selecionar provedor de modelo

1. Selecione seu provedor de IA no menu suspenso e, em seguida, insira a `API Key` para o provedor selecionado ou siga as instruções para etapas específicas.

:::info Obtenha sua API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegptplus_v2)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [GitHub](/docs/tutorial-ai-providers/github_models)
- [Mistral](/docs/tutorial-ai-providers/mistral)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [Groq](/docs/tutorial-ai-providers/groq)
- [Google AI Studio](/docs/tutorial-ai-providers/google_studio)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Google Vertex AI](/docs/tutorial-ai-providers/google_vertex)
- [AWS Bedrock](https://docs.codegpt.co/docs/tutorial-ai-providers/bedrock)
- [DeepSeek](/docs/tutorial-ai-providers/deepseek)
- [NVIDIA](/docs/tutorial-ai-providers/nvidia)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [Ollama](/docs/tutorial-ai-providers/ollama)
- [Fireworks](/docs/tutorial-ai-providers/fireworks)
- [LM Studio](/docs/tutorial-ai-providers/lmstudio)
- [Perplexity](/docs/tutorial-ai-providers/perplexity)
- [Cerebras](/docs/tutorial-ai-providers/cerebras)
- [Custom](/docs/tutorial-ai-providers/custom)

:::

1. 🔑 Defina a conexão `Connect`. O status deve mudar na janela. Para mais detalhes, consulte a página ou cada provedor acima.

  <table>
    <tr>
      <td align="center">
        <img width="250" height="150" src="https://github.com/user-attachments/assets/0f562594-1023-44ce-beed-f2d5d9321fff" />
      </td>
      <td align="center">
        <img width="250" height="150" src="https://github.com/user-attachments/assets/a4230449-9148-44cb-b784-ed2835b519da" />
      </td>
    </tr>
  </table>

## Configurações de Chat 

- Explore este menu para ajustar os atributos do provedor, refinar o controle de temperatura ou o estilo da conversa, e gerenciar a memória da janela.

:::note Explore as configurações de chat
<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/d5971d49-a13a-472b-a0a2-601359154bf3"/></p>

:::

### Estilo de Conversa

O valor padrão é 0.3, representando a aleatoriedade ou "criatividade" na geração de texto. Um valor mais alto gera saídas mais diversas, enquanto um valor mais baixo se mantém mais próximo dos dados de treinamento. 0 é o mais determinístico, e 1 é o mais aleatório.

### Memória da Janela

Esta ferramenta armazena o registro histórico de suas conversas passadas. Por padrão, está definido como 4, mas você pode ajustar esse valor de acordo com sua preferência.

- Padrão: 4
- Mínimo: 1
- Máximo: 10
