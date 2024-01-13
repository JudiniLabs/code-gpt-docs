---
sidebar_position: 2
---

# Configuração

## Acessando as Configurações do Code GPT
1. No Visual Studio Code, clique em **`File` > `Preferences` > `Settings`**. Isso abrirá a janela de Configurações.
2. No lado esquerdo da janela de Configurações, clique em **`Extensions`**, e depois clique em **`CodeGPT`**.

:::note Configurações do CodeGPT

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://github-production-user-asset-6210df.s3.amazonaws.com/6216945/274431737-b31ae5a8-8636-4a75-a32b-79062d0087de.png)

:::

## Configurações Disponíveis

### Chave de API

Selecione o seu provedor de IA no menu suspenso e, em seguida, insira a API Key do provedor selecionado.

:::info Obtenha sua API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Google Makersuite](/docs/tutorial-ai-providers/google)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [AI21](/docs/tutorial-ai-providers/ai21)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [Ollama](/docs/tutorial-ai-providers/ollama)
  
:::

### Máximo de Tokens
Os tokens podem ser considerados como partes de palavras. Antes que a API processe as solicitações, a entrada é dividida em tokens.

Cada modelo tem um número máximo de tokens. Selecione o número de tokens dependendo do comprimento da resposta desejada e do modelo selecionado.

Saiba mais: [Tokens by OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### Modelo
O serviço fornece acesso a muitos modelos diferentes, agrupados por família e habilidade. Uma família de modelos normalmente associa modelos pela tarefa pretendida.

Saiba mais: [Models by OpenAI](https://beta.openai.com/docs/models/overview)

### ID da Organização (OpenAI)
A informação do ID da organização aplica-se apenas à OpenAI e permite que você selecione a organização com a qual usará sua Chave de API.

### Idioma da Consulta
Selecione o idioma em que você trabalhará nas interações com a API. Para funcionalidades como Explicar ou Documentar, cada consulta será feita no idioma selecionado.

### Temperatura
Este é um parâmetro que pode ser ajustado. Ele determina o nível de aleatoriedade ou "criatividade" no texto gerado. Uma temperatura mais alta resultará em uma saída mais variada e criativa, enquanto uma temperatura mais baixa produzirá uma saída mais semelhante aos dados de treinamento e menos propensa a conter conteúdo inesperado ou surpreendente.

É um valor entre 0 e 1. 0 sendo o mais determinístico e 1 sendo o mais aleatório e criativo. A temperatura padrão é 0,3

Saiba mais: [Temperature by Cohere](https://docs.cohere.ai/docs/temperature)

### Memória da Janela

Ela armazena uma lista de conversas passadas, mas apenas as últimas K (um número específico) conversas são usadas da lista salva. Isso é feito para evitar que o buffer fique muito grande e exceda o limite de tokens.

- padrão: 4
- mínimo: 1
- máximo: 50
