---
sidebar_position: 2
---

# OpenAI

Site oficial https://openai.com

A OpenAI é uma organização de pesquisa em inteligência artificial que tem como objetivo desenvolver e promover uma IA amigável de maneira que beneficie toda a humanidade. Eles desenvolveram vários modelos de IA, incluindo o GPT-3 e o GPT-4, provavelmente os modelos de processamento de linguagem natural mais avançados do mundo.

## Conecte sua conta OpenAI
- Vá para a [página de chaves da API na OpenAI](https://platform.openai.com/account/api-keys).
- Faça login com sua conta OpenAI (ou [crie uma nova conta](https://platform.openai.com/signup))
- Clique no botão rotulado **`Criar uma nova chave secreta`**
- Uma nova janela de diálogo aparecerá, contendo uma caixa de texto com sua chave API.
- Escolha `OpenAI` como `Fornecedor`
- `Configurar conexão` e vincule sua conta no botão `⋮`.
- Copie a chave API e a ID da organização aqui:
  
<p align="center">
      <img width="450" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/c79e8c36-2d0c-4cfe-992b-5816748472aa"/>
</p>

 
- Ou, no VSCode, pressione `cmd + shift + p` e pesquise **`Configurar chave API`**
- Cole sua chave API

:::caution Remover Chave
Se você deseja remover sua chave API do CodeGPT, abra a paleta de comandos e procure por `CodeGPT: Remover Chave API`. Ou você pode selecionar o botão `⋮` e clicar em `Remover Conexão`.
:::

## Modelos GPT disponíveis no Code GPT
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## API OpenAI

Para usar esta extensão, você deve ter créditos carregados em sua conta OpenAI.
Esta extensão utiliza a [API oficial da OpenAI](https://openai.com/api/pricing/), que é paga.

Se você não tiver créditos, a extensão mostrará o seguinte erro da API OpenAI:
**Você excedeu sua cota atual, verifique seu plano e detalhes de faturamento**

Para revisar sua conta e os créditos disponíveis, você deve fazer login com sua conta em https://openai.com/api/

No menu, selecione Gerenciar Conta e, em seguida, na seção Uso, você poderá ver a quantidade de créditos disponíveis e usados.

:::note Conta OpenAI
![Gerenciar conta](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

Nesta imagem, você pode ver que $13 USD foram usados de um total de $18.

## Erros da API
Se você estiver recebendo erros da API, verifique o seguinte link: [Erros da API OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Erros típicos da OpenAI
- [Código de erro 404: O modelo gpt-4 não existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Código de erro 429 - Limite de taxa atingido para solicitações](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de erro 429 - Você excedeu sua cota atual, verifique seu plano e detalhes de faturamento.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de erro 429 - O mecanismo está atualmente sobrecarregado. Tente novamente mais tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de erro 401 - Autenticação inválida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
