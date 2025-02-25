---
sidebar_position: 2
---

# OpenAI

Sitio web oficial [https://openai.com](https://openai.com)

OpenAI es una organización de investigación en inteligencia artificial que tiene como objetivo desarrollar y promover una IA amigable que beneficie a la humanidad. Ha producido varios modelos de IA, incluyendo GPT-4, que es, sin duda, el modelo de procesamiento de lenguaje natural más avanzado del mundo.

## Conectar tu cuenta de OpenAI
- Inicia sesión con tu cuenta de OpenAI (o [crea una nueva cuenta](https://platform.openai.com/signup)).
- Ve a la [página de Claves API en OpenAI](https://platform.openai.com/settings/organization/api-keys).
- Haz clic en el botón etiquetado **`Crear una nueva clave secreta`**.
- Aparecerá una nueva ventana de diálogo que contiene un cuadro de texto con tu clave API.
- Ve a VSCode y `Selecciona Tu IA`.
- Selecciona `OpenAI` como `Proveedor` y un modelo.
- Pega la Clave API aquí y haz clic en `Conectar` y en ID de Organización.

<p align="center">
      <img width="600" height="350" src="https://github.com/user-attachments/assets/a48d7c73-900b-4997-952f-b6255c9bcd14" />
</p>

:::caution Eliminar Clave
Para eliminar tu Clave API de CodeGPT, haz clic en el cuadro del proveedor y `Desconectar`.

<p align="center">
      <img width="300" height="250" src="https://github.com/user-attachments/assets/2048048f-0b1a-41be-a985-af97066b0cdb" />
</p>

:::

## API de OpenAI

Debes tener créditos cargados en tu cuenta de OpenAI para usar esta extensión.
Esta extensión utiliza la API Oficial de OpenAI, una [API de pago](https://openai.com/api/pricing/).

Si no tienes créditos, la extensión mostrará el siguiente error de API de OpenAI:
**Has superado tu cuota actual; por favor verifica tu plan y detalles de facturación.**

Para revisar tu cuenta y los créditos que tienes disponibles, debes iniciar sesión con tu cuenta en [https://openai.com/api/](https://openai.com/api/)

En el menú, selecciona Administrar Cuenta. Luego, en la sección de Uso, verás la cantidad de créditos disponibles y utilizados.

:::note Cuenta de OpenAI
![Administrar Cuenta](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

En esta imagen, se han utilizado $13 USD de $18.

:::note Uso
![Créditos](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Errores de API
Si estás recibiendo errores de API, consulta el siguiente enlace: [Errores de API de OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Errores típicos de OpenAI
- [Código de Error 404: El modelo: gpt-4 no existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Código de Error 429 - Límite de tasa alcanzado para solicitudes](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de Error 429 - Has superado tu cuota actual, por favor verifica tu plan y detalles de facturación.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de Error 429 - El motor está actualmente sobrecargado. Por favor, intenta de nuevo más tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de Error 401 - Autenticación inválida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
