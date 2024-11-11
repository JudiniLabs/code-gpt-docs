---
sidebar_position: 2
---

# Configuración

Las secciones siguientes describen las diversas utilidades y configuraciones de la aplicación CodeGPT.

## Menú Principal

El menú principal es tu centro de navegación principal dentro de la aplicación CodeGPT. Proporciona acceso a características y configuraciones esenciales.

### Herramientas

- `Chat`: Participa en conversaciones de IA utilizando los modelos de tu proveedor elegido o con agentes en CodeGPT Plus.
- `Autocompletar`: 💻 Mejora tu experiencia de codificación con sugerencias inteligentes de autocompletado de código.

### Experimental

Esta sección muestra características experimentales 🧪 que están en fase de desarrollo.

- `React Sandbox`: Experimenta con componentes de React a través de la interacción o la carga de imágenes.

### Ayuda

Consulta aquí cuando necesites ayuda.

- `Documentación de la Extensión`: El documento que estás leyendo en este momento.
- `Documentación de la API`: 📝 Accede a la documentación de la API para CodeGPT.
- `Reportar un problema`: Cualquier problema que encuentres puede ser reportado en el [repositorio de Github](https://github.com/JudiniLabs/code-gpt-docs/issues).
- `Comentarios`: Envía 💌 comentarios al equipo para ayudarnos a mejorar el producto.

### Configuraciones

Estas configuraciones opcionales mejoran tu experiencia de usuario.

- `Tamaño de Fuente`: Ajusta el tamaño de la fuente a tu preferencia.
- `Modo de Color`: Cambia la interfaz visual de la aplicación alternando entre los temas oscuro y claro.

## Seleccionar proveedor de modelo

1. Selecciona tu proveedor de IA del menú desplegable, luego ingresa la `API Key` para el proveedor seleccionado o sigue las instrucciones para pasos específicos.

:::info Obtén tu API Key

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegptplus_v2)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [GitHub](/docs/tutorial-ai-providers/github_models)
- [Mistral](/docs/tutorial-ai-providers/mistral)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [Groq](/docs/tutorial-ai-providers/groq)
- [Google AI Studio](/docs/tutorial-ai-providers/google_studio)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Google Vertex AI](/docs/tutorial-ai-providers/google_vertex)
- [AWS Bedrock](https://docs.codegpt.co/docs/tutorial-ai-providers/bedrock)
- [DeepSeek](/docs/tutorial-ai-providers/deepseek)
- [NVIDIA](/docs/tutorial-ai-providers/nvidia)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [Ollama](/docs/tutorial-ai-providers/ollama)
- [Fireworks](/docs/tutorial-ai-providers/fireworks)
- [LM Studio](/docs/tutorial-ai-providers/lmstudio)
- [Perplexity](/docs/tutorial-ai-providers/perplexity)
- [Cerebras](/docs/tutorial-ai-providers/cerebras)
- [Personalizado](/docs/tutorial-ai-providers/custom)

:::

1. 🔑 Establece la conexión `Connect`. El estado debe cambiar en la ventana. Para más detalles, consulta la página o cada proveedor mencionado arriba.

  <table>
    <tr>
      <td align="center">
        <img width="250" height="150" src="https://github.com/user-attachments/assets/0f562594-1023-44ce-beed-f2d5d9321fff" />
      </td>
      <td align="center">
        <img width="250" height="150" src="https://github.com/user-attachments/assets/a4230449-9148-44cb-b784-ed2835b519da" />
      </td>
    </tr>
  </table>

## Configuraciones de Chat

- Explora este menú para ajustar los atributos del proveedor, refinar el control de temperatura o el estilo de conversación, y gestionar la memoria de la ventana.

:::note Explora las configuraciones de chat

<p align="center"><img width="550" height="300" src="https://github.com/user-attachments/assets/d5971d49-a13a-472b-a0a2-601359154bf3"/></p>

:::

### Estilo de Conversación

El valor predeterminado es 0.3, que representa la aleatoriedad o "creatividad" en la generación de texto. Un valor más alto genera una salida más diversa, mientras que un valor más bajo se adhiere más estrechamente a los datos de entrenamiento. 0 es el más determinista, y 1 es el más aleatorio.

### Memoria de Ventana

Esta herramienta almacena el registro histórico de tus conversaciones pasadas. Por defecto, está configurada en 4, pero puedes ajustar este valor a tu preferencia.

- Predeterminado: 4
- Mínimo: 1
- Máximo: 10
