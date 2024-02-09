---
sidebar_position: 2
---

# Configuración

## Ingresando a los Settings de CodeGPT
1. En Visual Studio Code, haz click en **`File` > `Preferences` > `Settings`** para abrir la ventana de Settings.  
2. En la sección dela izquierda haz click en **`Extensions`**, y luego click en **`CodeGPT`**.

:::note CodeGPT Settings

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://github-production-user-asset-6210df.s3.amazonaws.com/6216945/274431737-b31ae5a8-8636-4a75-a32b-79062d0087de.png)

:::

## Settings Disponibles

### API Key

Selecciona el proveedor de API Key en el selector, luego ingresa la API Key para el proveedor seleccionado.

:::info Obtén tu API Key desde el Proveedor seleccionado

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Google Makersuite](/docs/tutorial-ai-providers/google)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [AI21](/docs/tutorial-ai-providers/ai21)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [Ollama](/docs/tutorial-ai-providers/ollama)
  
:::

### Max Token
Los tokens pueden ser considerados como piezas de palabras. Antes de que la API procese las solicitudes, la entrada se descompone en tokens.

Cada modelo tiene un número máximo de tokens. Seleccione el número de tokens en función de la longitud de la respuesta que desea obtener y del modelo seleccionado.

Más información: [Tokens by OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### Model
El servicio proporciona acceso a muchos modelos diferentes, agrupados por familia y habilidad. Una familia de modelos generalmente asocia modelos por su tarea prevista.

Más información: [Models by OpenAI](https://beta.openai.com/docs/models/overview)

### Organization ID (OpenAI)
La información de ID de organización solo se aplica a OpenAI y te permite seleccionar la organización con la que usarás tu clave de API.

### Query Language
Selecciona el idioma en el que trabajarás las interacciones con la API. Para funcionalidades como Explicar o Documentar, cada consulta se realizará en el idioma seleccionado.

### Temperature
Este es un parámetro que se puede ajustar. Determina el nivel de aleatoriedad o "creatividad" en el texto generado. Una temperatura más alta resultará en una salida más variada y creativa, mientras que una temperatura más baja producirá una salida que es más similar a los datos de entrenamiento y menos probable que contenga contenido inesperado o sorprendente.

Es un valor entre 0 y 1. 0 siendo el más determinista y 1 siendo el más aleatorio y creativo. La temperatura predeterminada es 0.3.

Más información: [Temperature by Cohere](https://docs.cohere.ai/docs/temperature)

### Window Memory

Almacena una lista de conversaciones pasadas, pero solo se utilizan las últimas K (un número específico) conversaciones de la lista guardada. Esto se hace para evitar que el búfer se vuelva demasiado grande y exceda el límite de tokens.

- default: 4
- minimum: 1
- maximum: 50
