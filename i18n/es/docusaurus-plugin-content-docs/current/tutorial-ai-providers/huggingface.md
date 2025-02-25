---
sidebar_position: 11
---

# HuggingFace
Sitio web oficial [https://huggingface.co/](https://huggingface.co/)

Hugging Face es una plataforma diseñada para compartir modelos de IA preentrenados y colaborar en el desarrollo y la compartición de recursos relacionados con la IA y el procesamiento del lenguaje natural (NLP). Sirve como un repositorio central para muchos modelos, incluidos aquellos para generación de texto, clasificación, traducción, respuesta a preguntas y más tareas.

## Cómo conectar
- Crea una cuenta en [Huggingface](https://huggingface.co/).
- Ve a tu [Perfil - Configuración - Tokens de Acceso](https://huggingface.co/settings/tokens).
- Genera y copia la Clave API.
- En la extensión CodeGPT de VSCode, cambia el modelo en el chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Selecciona el modelo `LLMs Cloud` y elige `Huggingface` como `Proveedor`.
- Selecciona un modelo como `Qwen/Qwen2.5-1.5B-Instruct`.
- Pega la `Clave API` aquí y haz clic en `Conectar`.
- Haz clic fuera de las opciones y pide chatear.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/066c9009-af2e-4f33-ace7-e67c31a61cb1"/></p>

:::caution Eliminar o editar Clave
Para eliminar tu Clave API de CodeGPT, haz clic en el botón `Cambiar configuración de conexión`.
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/1ee36e01-6eaf-44ce-b195-c8a5bef58c79"/></p>
:::

## Errores de API
Si estás recibiendo errores de API, consulta el siguiente enlace: [Documentación de Huggingface](https://huggingface.co/docs/inference-endpoints/index)
