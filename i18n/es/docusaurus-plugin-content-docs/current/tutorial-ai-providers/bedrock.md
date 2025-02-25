---
sidebar_position: 9
---

# AWS Bedrock

Sitio web oficial [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, un servicio completamente gestionado, ofrece los mejores modelos de base (FMs) de las principales empresas de IA, incluyendo AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI y Amazon a través de una única API. Proporciona diversas capacidades, incluyendo seguridad, privacidad y IA responsable para el desarrollo de aplicaciones de IA generativa.

## Conecta tu cuenta de Proveedor
- Crea una cuenta en [AWS Bedrock](https://aws.amazon.com/es/console/)
- Crea un usuario de AWS con políticas de permisos **AmazonBedrockFullAccess**
- Ve a **Credenciales de seguridad** y crea nuevas **Claves de acceso**
- Genera y copia la Clave de acceso y la Clave secreta
- En la extensión CodeGPT de VSCode, cambia el modelo en el chat

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/f5d1245b-d58d-4c93-85c1-fa1c055585e4"/></p>

- Selecciona el modelo LLMs Cloud y elige `Bedrock` como `Proveedor`
- Pega la `Clave API` aquí y haz clic en `Conectar`
- Haz clic fuera de las opciones y pide chatear.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/375fd655-e3eb-4367-be42-c6cec8736f43"/></p>

:::caution Eliminar Clave
Para eliminar tu Clave API de CodeGPT, haz clic en el botón `Cambiar configuración de conexión`
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/97221226-2cd3-4f9b-9ed3-b41555f23c04"/></p>
:::

## Modelos disponibles en CodeGPT
Los modelos que configures en tu cuenta de Amazon Bedrock se sincronizarán con los modelos en la extensión.
