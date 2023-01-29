---
sidebar_position: 2
---

# Configuração

Acesse **Configurações > Extensões > CodeGPT**

Preencha as seguintes informações:
![imagen](https://user-images.githubusercontent.com/6216945/210634562-1dd5f8cd-4625-42fc-92f4-7e1b5f132c49.png)

### Chave API
Selecione o provedor AI e insira a API Key do provedor selecionado
- Para inserir sua [Chave de API](/docs/tutorial-basics/installation#get-yout-api-key), pressione cmd+shift+p e procure por `CodeGPT: Set API KEY`. Sua chave de API será armazenada com segurança.

### Token Máximo
Os tokens podem ser pensados ​​como pedaços de palavras. Antes que a API processe os prompts, a entrada é dividida em tokens.

Cada modelo tem um número máximo de tokens. Selecione o número de tokens dependendo do comprimento da resposta que deseja obter e do modelo selecionado.

Saber mais:
- [Tokens da OpenAI (inglês)](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- [Max Token in Medium (espanhol)](https://medium.com/@dan.avila7/concepto-de-tokens-en-openai-f5d4196076f6)

### Linguagem
Selecione o idioma no qual você trabalhará as interações com a API.

Para funcionalidades como Explicar ou Documentar, cada consulta será feita no idioma selecionado.

### Modelo
O serviço oferece acesso a vários modelos diferentes, agrupados por família e habilidade. Uma família de modelos geralmente associa modelos por sua tarefa pretendida.

Saber mais:
- [Modelos por OpenAI (Inglês)](https://beta.openai.com/docs/models/overview)
- [Modelo em Medium (Espanhol)](https://medium.com/@dan.avila7/modelos-de-gpt-3-y-codex-11a64948d87)

### Temperatura
Este é um parâmetro que pode ser ajustado. Ele determina o nível de aleatoriedade ou "criatividade" no texto gerado. Uma temperatura mais alta resultará em uma saída mais variada e criativa, enquanto uma temperatura mais baixa produzirá uma saída mais semelhante aos dados de treinamento e menos provável de conter conteúdo inesperado ou surpreendente.

É um valor entre 0 e 1. 0 sendo o mais determinístico e 1 sendo o mais aleatório e criativo. A temperatura padrão é 0,3

Saber mais:
- [Temperatura por Cohere (Inglês)](https://docs.cohere.ai/docs/temperature)
- [Temperatura em médio (espanhol)](https://medium.com/@dan.avila7/c%C3%B3mo-manejar-los-par%C3%A1metros-temperature-y-top-p-en-openai-b45892b250be)