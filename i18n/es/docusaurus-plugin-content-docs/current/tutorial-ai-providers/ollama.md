---
sidebar_position: 14
---

# Ollama

Sitio web oficial [https://ollama.ai](https://ollama.ai)

Proyecto de código abierto para ejecutar, crear y compartir modelos de lenguaje grande (LLMs).

## Conectar Modelos Ollama
- Descarga e instala Ollama desde el siguiente enlace: [ollama.ai](https://ollama.ai/).

### Descargar modelos a través de la consola
- Descarga el modelo, por ejemplo, `ollama run deepseek-r1` desde la terminal.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/258d5faa-3d8c-4198-aabe-5378b3bf3aae"/></p>

- Utiliza el modelo ejecutando el comando ```ollama pull MODEL```, por ejemplo: ``ollama pull deepseek-r1``.
- Por favor, espera hasta que la carga alcance el 100% de finalización.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/11bc56a1-62d1-46ad-96cd-465a325b2c7c"/></p>

# Cómo usar Ollama

- En la extensión CodeGPT de VSCode, cambia el modelo en el chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Selecciona `LLMs Locales` y elige `Ollama` como `Proveedor`.
- Utiliza los modelos disponibles directamente.
- Pega el enlace del servidor donde se está ejecutando el modelo. Para localhost: `http://localhost:11434`.
- Haz clic fuera de las opciones y pide chatear.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/28ec0abc-2928-4225-b1e9-764111291db2"/></p>

:::caution Eliminar o editar Clave
Para eliminar el puerto, haz clic en el botón `Cambiar configuración de conexión`.
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b32595a0-47de-4f9b-804b-3d6188fb1027"/></p>
:::

## Modelos de autocompletado disponibles:
- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code

## Errores de API
Si estás recibiendo errores de API, consulta el siguiente enlace: [Documentación de Ollama](https://ollama.ai/)

## Errores de Ollama
- Si el modelo de Ollama no responde en el chat, considera reiniciarlo localmente apagándolo y encendiéndolo nuevamente. Esta acción debería resolver el problema.

- Si Ollama está en ejecución pero no responde, por favor elimina manualmente 'Ollama_Host' de las variables de entorno y deja que vuelva a la configuración predeterminada.
