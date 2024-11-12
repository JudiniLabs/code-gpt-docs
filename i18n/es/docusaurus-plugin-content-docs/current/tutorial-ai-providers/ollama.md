---
sidebar_position: 14
---

# Ollama

Sitio web oficial https://ollama.ai

Proyecto de código abierto para ejecutar, crear y compartir modelos de lenguaje grande (LLMs).

## Conectar modelos de Ollama

- Descarga Ollama desde el siguiente enlace: [ollama.ai](https://ollama.ai/)

### Descargar modelos a través de la consola

- Instala Ollama y utiliza el modelo `codellama` ejecutando el comando `ollama pull codellama`
- Si deseas usar `Mistral` u otros modelos, debes reemplazar `codellama` con el modelo deseado. Por ejemplo: `ollama pull mistral`

### Descargar modelos a través de la interfaz de usuario de CodeGPT

- Selecciona Ollama como `Proveedor`
- Selecciona el modelo
- Haz clic en el botón `Descargar`

<p align="center">
      <img width="300" height="250" src="https://github.com/JudiniLabs/code-gpt-docs/assets/6216945/40a47458-7d7a-46c5-8500-b7c00ce99b72" />
</p>

# Cómo usar Ollama

- En VSCode selecciona Ollama como `Proveedor`
- Ten en cuenta que Ollama se está ejecutando localmente en tu computadora.
- Elige un modelo

    <p align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/65f81b2c-cf92-4e94-9041-bc4bcfe80477" />
    </p>

:::caution Eliminar clave
No es necesario desconectar; solo cambia el proveedor.
:::

## Modelos de chat disponibles:

- llama3.2:3b
- llama3.2:1b
- llama3.1:405b
- llama3.1:70b
- llama3.1:8b
- llama3:70b
- llama3:8b
- codellama:latest
- codestral:latest
- mathstral:latest
- mixtral:latest
- mistral:v0.3
- mistral:latest
- codegeex4:9b
- reflection:70b
- yi-coder:1.5b
- yi-coder:9b
- qwen2.5-coder:1.5b
- qwen2.5-coder:7b
- codeqwen
- qwen2:72b
- qwen2:7b
- qwen2:1.5b
- qwen2:0.5b
- command-r-plus:latest
- command-r:latest
- aya:8b
- aya:35b
- phi3.5:latest
- phi3:mini
- phi3:medium
- phi3:latest
- granite-code:3b
- granite-code:8b
- granite-code:20b
- granite-code:34b
- codegemma:latest
- gemma2:2b
- gemma2:9b
- gemma2:27b
- gemma:2b
- gemma:7b
- dbrx:latest
- deepseek-v2.5:236b
- deepseek-coder:latest
- deepseek-coder-v2
- starcoder2:latest
- dolphincoder:latest
- dolphin-mixtral:latest
- starling-lm:latest
- llama2-uncensored:latest

## Modelos de autocompletado disponibles:

- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code

## Errores de API

Si estás recibiendo errores de API, verifica el siguiente enlace: [Documentación de Ollama](https://ollama.ai/)

## Errores de Ollama

- Si el modelo de Ollama no responde en el chat, considera reiniciarlo localmente apagándolo y encendiéndolo nuevamente. Esta acción debería resolver el problema.

    <p align="center">
      <img width="250" height="00" src="https://github.com/davila7/code-gpt-docs/assets/37567214/4bd4e2c8-dbfb-46f3-b4d3-c3484cc7692c"/>
    </p>

- Si Ollama está en funcionamiento pero no responde, por favor elimina manualmente 'Ollama_Host' de las variables de entorno y déjalo revertir a la configuración predeterminada.
