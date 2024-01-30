---
sidebar_position: 2
---

# OpenAI

Sitio web oficial https://openai.com

OpenAI es una organización de investigación en inteligencia artificial que tiene como objetivo desarrollar y promover la inteligencia artificial de manera amigable que beneficie a toda la humanidad. Han desarrollado varios modelos de inteligencia artificial, incluidos GPT-3 y GPT-4, probablemente los modelos de procesamiento de lenguaje natural más avanzados del mundo.

## Conectar tu cuenta de OpenAI
- Ve a la [página de claves API en OpenAI](https://platform.openai.com/account/api-keys).
- Inicia sesión con tu cuenta de OpenAI (o [crea una nueva cuenta](https://platform.openai.com/signup))
- Haz clic en el botón etiquetado como **`Crear una nueva clave secreta`**
- Aparecerá una nueva ventana de diálogo que contiene un cuadro de texto con tu clave API.
- Elige `OpenAI` como `Proveedor`
- `Establecer conexión` y vincula con tu cuenta en el botón `⋮`.
- Copia la Clave API y el ID de la Organización aquí:
  
<p align="center">
      <img width="450" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/c79e8c36-2d0c-4cfe-992b-5816748472aa"/>
</p>

 
- O, en VSCode, presiona `cmd + shift + p` y busca **`Establecer Clave API`**
- Pega tu Clave API

:::caution Eliminar Clave
Si deseas eliminar tu Clave API de CodeGPT, abre la Paleta de Comandos y busca `CodeGPT: Eliminar Clave API`. O puedes seleccionar el botón `⋮` y hacer clic en `Eliminar Conexión`.
:::

## Modelos GPT disponibles en Code GPT
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## API de OpenAI

Para usar esta extensión, debes tener créditos cargados en tu cuenta de OpenAI.
Esta extensión utiliza la API oficial de OpenAI, que es una [API de pago](https://openai.com/api/pricing/).

Si no tienes créditos, la extensión mostrará el siguiente error de la API de OpenAI:
**Has excedido tu cuota actual, por favor revisa tu plan y detalles de facturación.**

Para revisar tu cuenta y los créditos disponibles, debes iniciar sesión con tu cuenta en https://openai.com/api/

En el menú selecciona "Gestionar Cuenta" y luego en la sección "Uso", podrás ver la cantidad de créditos disponibles y utilizados.

:::note Cuenta de OpenAI
![Gestionar Cuenta](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

En esta imagen puedes ver que se han utilizado $13 USD de un total de $18.

:::note Uso
![Créditos](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Errores de API
Si estás recibiendo errores de API, consulta el siguiente enlace: [Errores de API de OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Errores típicos de OpenAI
- [Código de error 404: El modelo gpt-4 no existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Código de error 429 - Límite de velocidad alcanzado para las solicitudes](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de error 429 - Has excedido tu cuota actual, por favor revisa tu plan y detalles de facturación.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de error 429 - El motor está actualmente sobrecargado. Inténtalo de nuevo más tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de error 401 - Autenticación inválida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)



