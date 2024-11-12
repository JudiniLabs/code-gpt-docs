---
sidebar_position: 9
---

# AWS Bedrock

Sitio web oficial [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

Amazon Bedrock, un servicio completamente gestionado, ofrece los mejores modelos de base (FMs) de las principales empresas de IA, incluyendo AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI y Amazon a través de una única API. Proporciona diversas capacidades, incluyendo seguridad, privacidad y IA responsable para el desarrollo de aplicaciones de IA generativa.

## Conectar tu cuenta de Proveedor

- Crea una cuenta en [AWS Bedrock](https://aws.amazon.com/es/console/)
- Crea un usuario de AWS con políticas de permisos **AmazonBedrockFullAccess**

<img width="300" height="150" src="https://github.com/user-attachments/assets/5a5d46d4-6b5c-4a0c-8a08-84b3838a68f7" />

- Ve a **Credenciales de Seguridad** y crea nuevas **Claves de acceso**
- Genera y copia la Clave de Acceso y la Clave Secreta
- Elige `Bedrock` como `Proveedor`
- Haz clic en `Conectar` o `Establecer conexión` para vincular con tu cuenta.
- Pega la `región`, `Clave de Acceso` y `Clave de Acceso Secreta`, y haz clic en `Conectar`.

<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/18c6ad44-0b08-4e82-9b6a-e59ff5079421" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/b4c83952-9fa2-4492-9ce6-d4341cea14aa" />
    </td>
  </tr>
</table>

:::caution Eliminar Clave
Para eliminar tu Clave API de CodeGPT, haz clic en el cuadro del proveedor y `Desconectar`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/5b853a55-653e-4da6-ae6b-c90e6fbde98f" />
</p>

:::

## Modelos disponibles en CodeGPT

Ten en cuenta que los modelos que configures en tu cuenta de Amazon Bedrock se sincronizarán con los modelos en la extensión.

<p align="center">
      <img src="https://github.com/davila7/code-gpt-docs/assets/37567214/81d9fb16-159f-424c-b2d0-c513271cc300"/>
</p>
