---
sidebar_position: 2
---

# OpenAI

Website oficial: https://openai.com

A OpenAI é uma organização de pesquisa em inteligência artificial que tem como objetivo desenvolver e promover a IA amigável de uma maneira que beneficie toda a humanidade. Eles desenvolveram diversos modelos de IA, incluindo o GPT-3 e o GPT-4, possivelmente os modelos de processamento de linguagem natural mais avançados do mundo.

## Conecte sua Conta OpenAI
- Acesse a [página de chaves de API na OpenAI](https://platform.openai.com/account/api-keys).
- Faça login com sua conta OpenAI (ou [crie uma nova conta](https://platform.openai.com/signup))
- Clique no botão rotulado **`Create a new secret key`**
- Uma nova janela de diálogo aparecerá, contendo uma caixa de texto com sua chave da API.
- Copie esta chave da API para a área de transferência.
- Cole sua Chave da API

:::caution Remover API Key
Se desejar remover sua API Key do CodeGPT, abra a Paleta de Comandos e procure por `CodeGPT: Remove API KEY`.
:::

:::note Conectar OpenAI
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vl6-5BigHzk?si=SgdXt0HAMah9-aal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Modelos GPT disponíveis no Code GPT
- gpt-4
- gpt-4-32k
- gpt-3.5-turbo
- gpt-3.5-turbo-16k
- gpt-3.5-turbo-instruct

## API OpenAI

Para usar esta extensão, é necessário ter créditos carregados em sua conta OpenAI.
Esta extensão utiliza a API oficial da OpenAI, que é uma [API paga](https://openai.com/api/pricing/).

Se você não tiver créditos, a extensão mostrará o seguinte erro da API OpenAI:
**Você excedeu sua cota atual, verifique seu plano e detalhes de faturamento**

Para revisar sua conta e os créditos disponíveis, faça login em sua conta em https://openai.com/api/

No menu, selecione Gerenciar Conta e, em seguida, na seção Uso, você poderá ver a quantidade de créditos disponíveis e usados.

:::note Conta OpenAI
![Gerenciar Conta](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

Nesta imagem, você pode ver que foram usados $13 USD de um total de $18.

:::note Uso
![Créditos](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Erros da API
Se você estiver recebendo erros da API, confira o seguinte link: [Erros da API OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Erros Típicos da OpenAI
- [Código de Erro 404: O modelo gpt-4 não existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Código de Erro 429 - Limite de taxa atingido para solicitações](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de Erro 429 - Você excedeu sua cota atual, verifique seu plano e detalhes de faturamento](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de Erro 429 - O mecanismo está sobrecarregado no momento. Tente novamente mais tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de Erro 401 - Autenticação Inválida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
