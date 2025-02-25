---
sidebar_position: 8
---

# Google Vertex AI
Sitio web oficial [https://cloud.google.com/](https://cloud.google.com/)

## Conecta tus credenciales de Vertex
Obtener tus credenciales en Google Cloud puede ser complicado. A partir del 28 de marzo de 2024, aquí está el proceso para obtenerlas:

### En Google Cloud
- Navega a https://cloud.google.com/ e inicia sesión con tu cuenta de Gmail.
- Inicia la Consola seleccionando la opción en la esquina superior derecha.
- En el panel izquierdo, haz clic en la pestaña "Models Garden".
- En el cuadro de búsqueda en la parte superior, escribe `Vertex AI`. Elige `Virtual Studio Vertex`.
- Asegúrate de haber habilitado la API de Vertex AI, la API de Dataform y la API de Compute Engine.
- Ve al [Tablero](https://console.cloud.google.com/home/dashboard).
- Selecciona "API y Servicios" en el menú de la derecha y haz clic en `Credenciales`. Haz clic en el correo electrónico asociado con las Cuentas de Servicio.
Serás dirigido a la página de Cuentas de Servicio. Desde allí, navega a la pestaña `Keys` y selecciona `Add Key`. La descarga debería comenzar automáticamente y el archivo debería guardarse como un .json.
- Renombra el archivo descargado a `credentials`.
- Para el Enlace Personalizado, personalízalo según sea necesario, asegurándote de que LOCATION, PROJECT_ID y MODEL sean cambiados.
`https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models/MODEL:streamGenerateContent`

## En la Extensión CodeGPT 
- En la extensión CodeGPT de VSCode, cambia el modelo en el chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Selecciona el modelo `LLMs Cloud` y elige `Cohere` como `Proveedor`.
- Selecciona un modelo, por ejemplo, `llama3-70b-chat-hf`.
- Pega la `Clave API` aquí y haz clic en `Conectar`.
- Pega el enlace del modelo y sube el archivo credential.json.
- Utiliza los modelos disponibles directamente. Haz clic fuera de las opciones y pide chatear.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/928e0dbd-27a8-4f1b-8904-784da652bf02"/></p>

:::caution Eliminar o editar Clave
Para eliminar tu Clave API de CodeGPT, haz clic en el botón `Cambiar configuración de conexión`.
:::

## Errores de API
Si estás recibiendo errores de API, consulta el siguiente enlace: [Documentación de Vertex AI](https://cloud.google.com/vertex-ai/docs)
