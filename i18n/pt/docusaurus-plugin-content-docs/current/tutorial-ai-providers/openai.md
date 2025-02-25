---
sidebar_position: 2
---

# OpenAI

Site oficial https://openai.com

OpenAI é uma organização de pesquisa em inteligência artificial que visa desenvolver e promover IA amigável que beneficie a humanidade. Ela produziu vários modelos de IA, incluindo o GPT-4, possivelmente o modelo de processamento de linguagem natural mais avançado do mundo.

## Conecte sua Conta OpenAI
- Faça login com sua conta OpenAI (ou [crie uma nova conta](https://platform.openai.com/signup))
- Vá para a [página de Chaves de API na OpenAI](https://platform.openai.com/settings/organization/api-keys).
- Clique no botão rotulado **`Create a new secret key`**
- Uma nova janela de diálogo contendo uma caixa de texto com sua chave de API aparecerá.
- Vá para o VSCode e `Selecione Seu AI`
- Selecione `OpenAI` como `Provider` e um modelo
- Cole a Chave de API aqui, e clique em `Connect` e ID da Organização

<p align="center">
      <img width="600" height="350" src="https://github.com/user-attachments/assets/a48d7c73-900b-4997-952f-b6255c9bcd14" />
</p>


:::caution Remover Chave
Para remover sua Chave de API do CodeGPT, clique na caixa do provedor e `Desconectar`.

<p align="center">
      <img width="300" height="250" src="https://github.com/user-attachments/assets/2048048f-0b1a-41be-a985-af97066b0cdb" />
</p>

:::

## API OpenAI

Você deve ter créditos carregados em sua conta OpenAI para usar esta extensão.
Esta extensão usa a API Oficial da OpenAI, uma [API paga](https://openai.com/api/pricing/).

Se você não tiver créditos, a extensão exibirá o seguinte erro da API OpenAI:
**Você excedeu sua cota atual; por favor, verifique seu plano e detalhes de cobrança**

Para revisar sua conta e os créditos disponíveis, você deve fazer login com sua conta em https://openai.com/api/

No menu, selecione Gerenciar Conta. Em seguida, na seção Uso, você verá a quantidade de créditos disponíveis e usados.

:::note Conta OpenAI
![Gerenciar Conta](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

Nesta imagem, $13 USD foram usados de $18.

:::note Uso
![Créditos](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Erros da API
Se você estiver recebendo erros da API, verifique o seguinte link: [Erros da API OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Erros típicos da OpenAI
- [Código de Erro 404: O modelo: gpt-4 não existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Código de Erro 429 - Limite de taxa atingido para solicitações](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de Erro 429 - Você excedeu sua cota atual, por favor, verifique seu plano e detalhes de cobrança.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de Erro 429 - O motor está atualmente sobrecarregado. Por favor, tente novamente mais tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de Erro 401 - Autenticação Inválida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
