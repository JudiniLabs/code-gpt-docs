---
sidebar_position: 8
---

# Google Vertex AI

Sitio web oficial [https://cloud.google.com/](https://cloud.google.com/)

## Conectar tus credenciales de Vertex

Obtener tus credenciales en Google Cloud puede ser complicado. A partir del 28 de marzo de 2024, aquí está el proceso para obtenerlas:

### En Google Cloud

- Navega a [https://cloud.google.com/](https://cloud.google.com/) e inicia sesión con tu cuenta de Gmail.
- Inicia la Consola seleccionando la opción en la esquina superior derecha.
- En el panel izquierdo, haz clic en la pestaña "Models Garden".
- En el cuadro de búsqueda en la parte superior, escribe "Vertex AI". Elige "Virtual Studio Vertex".
- Asegúrate de haber habilitado la API de Vertex AI, la API de Dataform y la API de Compute Engine.
- Ve al [Tablero](https://console.cloud.google.com/home/dashboard).
- Desde el menú de la derecha, selecciona "API y Servicios" y haz clic en "Credenciales". Haz clic en el correo electrónico asociado con las Cuentas de Servicio.
  Serás dirigido a la página de Cuentas de Servicio. Desde allí, navega a la pestaña "Claves" y selecciona "Agregar clave". La descarga debería comenzar automáticamente, y el archivo debería guardarse como un .json.
- Renombra el archivo descargado a "credentials".
- Para el Enlace Personalizado, personalízalo según sea necesario, asegurándote de que la UBICACIÓN, PROJECT_ID y el MODELO sean cambiados.

#img-representation-1

- Elige `Vertex` como `Proveedor`.
- Haz clic en `Conectar` o `Establecer conexión`.
- Pega el enlace del modelo y sube el archivo credential.json.
- Haz clic en `Conectar`.

<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/fbfca711-3941-4d84-bde3-969457a36978" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/b0e04c27-4332-40d0-94b8-80dbecdcbeab" />
    </td>
  </tr>
</table>

:::caution Eliminar Clave
Si deseas eliminar tu Clave API de CodeGPT, haz clic en el cuadro del proveedor y haz clic en `Desconectar`.

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/e29e919c-0e36-436d-a8bd-acb01c266c3a" />
</p>

:::

## Modelos de Vertex disponibles en CodeGPT

### Gemini

- Llama3-8b-Hf
- llama3-8b-chat-hf
- llama3-70b-hf
- llama3-70b-chat-hf
- gemini-pro
- gemini-1.0-pro
- gemini-1.5-pro-latest
- gemini-1.5-pro-preview-0514
- gemini-1.5-flash-preview-0514
- gemini-ultra
- gemini-nano

## Errores de API

Si estás recibiendo errores de API, verifica el siguiente enlace: [Documentación de Vertex AI](https://cloud.google.com/vertex-ai/docs)
