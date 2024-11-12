---
sidebar_position: 2
---

# OpenAI

Sitio web oficial https://openai.com

OpenAI es una organización de investigación en inteligencia artificial que tiene como objetivo desarrollar y promover una IA amigable que beneficie a la humanidad. Ha producido varios modelos de IA, incluido GPT-4, que es, sin duda, el modelo de procesamiento de lenguaje natural más avanzado del mundo.

## Conectar tu cuenta de OpenAI
- Ve a la [página de claves API en OpenAI](https://platform.openai.com/account/api-keys).
- Inicia sesión con tu cuenta de OpenAI (o [crea una nueva cuenta](https://platform.openai.com/signup)).
- Haz clic en el botón etiquetado **`Crear una nueva clave secreta`**.
- Aparecerá una nueva ventana de diálogo que contiene un cuadro de texto con tu clave API.
- Ve a VSCode y elige `OpenAI` como `Proveedor`.
- Haz clic en el botón `Conectar`.
- Pega la clave API aquí y haz clic en `Conectar` y el ID de la organización aquí:

  <table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/6fe42470-9efe-4335-92e4-086cfcd8b49f" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/b3a12636-a18f-4ed5-94b7-49dd9e631859" />
    </td>
  </tr>
</table>

:::caution Eliminar clave
Si deseas eliminar tu clave API de CodeGPT, haz clic en el cuadro del proveedor y haz clic en `Desconectar`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/7859fa05-3aff-4035-9c6d-68573c1ede33" />
</p>

:::

## Modelos GPT disponibles en Code GPT
- gpt-4
- gpt-4o
- gpt-4o-mini
- gpt-4o-2024-05-13
- gpt-4-turbo
- gpt-4-turbo-2024-04-09
- gpt-4-32k
- gpt-4-32k-0613
- gpt-4-1106-preview
- gpt-4-0125-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k
- gpt-3.5-turbo-16k-0613
- gpt-3.5-turbo-0125
- gpt-3.5-turbo-1106

## API de OpenAI

Debes tener créditos cargados en tu cuenta de OpenAI para usar esta extensión.
Esta extensión utiliza la API oficial de OpenAI, una [API de pago](https://openai.com/api/pricing/).

Si no tienes créditos, la extensión mostrará el siguiente error de la API de OpenAI:
**Has superado tu cuota actual; por favor verifica tu plan y detalles de facturación.**

Para revisar tu cuenta y los créditos que tienes disponibles, debes iniciar sesión con tu cuenta en https://openai.com/api/

En el menú, selecciona Administrar cuenta. Luego, en la sección de Uso, verás la cantidad de créditos disponibles y utilizados.

:::note Cuenta de OpenAI
![Administrar cuenta](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

En esta imagen, se han utilizado $13 USD de $18.

:::note Uso
![Créditos](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## Errores de API
Si estás recibiendo errores de API, verifica el siguiente enlace: [Errores de API de OpenAI](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Errores típicos de OpenAI
- [Código de error 404: El modelo: gpt-4 no existe](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Código de error 429 - Límite de tasa alcanzado para solicitudes](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Código de error 429 - Has superado tu cuota actual, por favor verifica tu plan y detalles de facturación.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Código de error 429 - El motor está actualmente sobrecargado. Por favor, intenta de nuevo más tarde.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Código de error 401 - Autenticación inválida](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
