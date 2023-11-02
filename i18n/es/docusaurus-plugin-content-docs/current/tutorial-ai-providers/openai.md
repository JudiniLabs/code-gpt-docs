---
sidebar_position: 2
---
# OpenAI

Sitio web oficial https://openai.com

OpenAI es una organización que tiene como objetivo desarrollar y promover una IA amistosa de una manera que beneficie a toda la humanidad. Han desarrollado varios modelos de IA, incluidos GPT-3 y GPT-4, probablemente los modelos de procesamiento de lenguaje natural más avanzados del mundo.

## Conecte su cuenta de OpenAI
- Vaya a la página de [API Keys page on OpenAI](https://platform.openai.com/account/api-keys).
- Inicie sesión con su cuenta de OpenAI (o [crea una nueva cuenta](https://platform.openai.com/signup))
- Haga clic en el botón etiquetado **`Create a new secret key`**
- Aparecerá una nueva ventana de diálogo, que contiene un cuadro de texto con su clave API.
- Copie esta clave API en su portapapeles.
- Pegue su clave API

:::caution Eliminar la API Key
Si desea eliminar su clave API de CodeGPT, abra la Paleta de comandos y busque CodeGPT: `CodeGPT: Eliminar API KEY`.
:::

:::note Conectar con OpenAI :::
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vl6-5BigHzk?si=SgdXt0HAMah9-aal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Modelos GPT disponibles en Code GPT
- gpt-4
- gpt-4-32k
- gpt-3.5-turbo
- gpt-3.5-turbo-16k
- gpt-3.5-turbo-instruct

## API de OpenAI
Para usar esta extensión, debe tener créditos cargados en su cuenta de OpenAI. Esta extensión utiliza la API oficial de OpenAI, que es una API de pago. Si no tiene créditos, la extensión mostrará el siguiente error de API de OpenAI:

**Ha superado su cuota actual, consulte su plan y detalles de facturación**

Para revisar su cuenta y los créditos que tiene disponibles, debe iniciar sesión con su cuenta en https://openai.com/api/
En el menú, seleccione **Administrar cuenta**, luego en la sección Uso, podrá ver la cantidad de créditos disponibles y utilizados.

:::note Cuenta OpenAI
![Manage Account](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

En esta imagen puede ver que se han utilizado $13 USD de un total de $18.

:::note Uso
![Credits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Errores de API
Si está recibiendo errores de API, verifique el siguiente enlace: [Errores de API de OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Errores típicos de OpenAI
- [Código de error 404: El modelo: gpt-4 no existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850) 
- [Código de error 429 - Límite de velocidad alcanzado para solicitudes](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de error 429 - Ha superado su cuota actual, consulte su plan y detalles de facturación.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de error 429 - El motor está actualmente sobrecargado. Por favor, inténtelo de nuevo más tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de error 401 - Autenticación no válida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)