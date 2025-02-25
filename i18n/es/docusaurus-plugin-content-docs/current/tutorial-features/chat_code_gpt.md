---
sidebar_position: 1
---
# CodeGPT Chat

La función de Chat de CodeGPT mejora tu experiencia de desarrollo al permitirte interactuar con Modelos de Lenguaje Grande (LLM) directamente dentro de tu editor de texto. Este tutorial te guiará a través de los pasos para aprovechar al máximo esta poderosa herramienta.

## Cómo Usar:
- Abre la pestaña de Chat
- Navega a la pestaña de herramientas y haz clic en `Chat`. Por defecto, `Claude-3.5-Sonnet` responderá en el chat.
- Una vez que se abra la pestaña de chat, puedes iniciar una conversación escribiendo un mensaje y presionando `Enter`.
- Si solicitas código, cópialo o pégalo directamente en el archivo con el botón `Insertar código`.
- Puedes limpiar el chat haciendo clic en el botón `Nueva conversación` o `Recargar` la pregunta.

:::note Conversación de CodeGPT Chat
<p align="center">
      <img width="750" height="550" src="https://github.com/user-attachments/assets/099fe893-08e3-4c31-a845-5f117a1de696"/>
</p>
:::

## Usando Selección de Código:
Selecciona el código deseado en tu editor por nivel para compartir fragmentos de código. El código seleccionado se insertará automáticamente en la interfaz de chat, permitiendo que CodeGPT proporcione respuestas más precisas y específicas al contexto. Llama a la función usando `@`.

:::note Selección de Código

Para leer el nombre del archivo o segmento, puedes usar la barra deslizante para navegar a través del nombre.
 
<p align="center">
    <img width="750" height="550"  src="https://github.com/user-attachments/assets/90a920ed-74c6-458b-9444-55c4b60128f9" />
</p>
:::

### Nivel de Contexto

Por favor, habilítalo, y la IA podrá entender el contexto de tu código. 

Tienes tres niveles de contexto:

- `Código seleccionado`: código seleccionado manualmente
- `Base de código`: seleccionamos automáticamente la base de código. Por favor, indexa la base de código antes en el botón `Base de código`
- `Perspectivas profundas`: enriquecemos las respuestas con gráficos de conocimiento de código.

## Usando Contexto Personalizado
Usar contextos personalizados te permite adaptar las respuestas a situaciones específicas.

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/3d02120a-bb92-4051-a92d-328e9cc1a504" />
</p>

### Agregar Archivos
1. Haz clic en el botón `+Agregar Contexto`
2. Elige `#Archivos` para agregar un archivo de tu proyecto actual como contexto
3. Haz clic fuera de la ventana para guardar los cambios

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/7c3487cc-402e-4d0a-91a5-29b64f202817" />
</p>

:::note 

También puedes agregar el archivo actual al taller automáticamente haciendo clic en el icono ⚙️ a la derecha y habilitando la opción correspondiente.

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/d1080ef7-cd9b-48eb-8159-1ceecbbc9d3d" />
</p>

:::

### Mis agentes
1. Haz clic en el botón `+Agregar Contexto`
2. Elige `Mis agentes` para obtener la lista de agentes y haz clic en el que deseas usar
3. Haz clic fuera de la ventana para guardar los cambios

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/67b2b971-0cab-4ce9-ba31-bc789ce34eff" />
</p>

### Documentos

1. Haz clic en el botón `+Agregar Contexto`
2. Elige `Documentos` para obtener la lista de agentes del Mercado de CodeGPT y haz clic en el que deseas usar
3. Haz clic fuera de la ventana para guardar los cambios

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/7bd2f40a-2f8a-441d-b769-fb453d090b1a" />
</p>

## Atajos
Puedes usar los atajos para aprovechar al máximo la función de Chat de CodeGPT. Aquí hay algunos de los atajos más útiles:

- [`/Fix`](https://docs.codegpt.co/docs/tutorial-features/find_problems): Arreglar el código seleccionado
- [`/Explain`](https://docs.codegpt.co/docs/tutorial-features/code_explanation): Explicar el código seleccionado
- [`/Refactor`](https://docs.codegpt.co/docs/tutorial-features/code_refactoring): Refactorizar el código seleccionado
- [`/Document`](https://docs.codegpt.co/docs/tutorial-features/code_documentation): Generar documentación para el código seleccionado
- [`/Inline code`](https://docs.codegpt.co/docs/tutorial-features/code_inline): editar palabras específicas dentro del código seleccionado. 
- [`/Unit Test`](https://docs.codegpt.co/docs/tutorial-features/unit_testing): Probar el código seleccionado
- [`/Comment`](ddd): Comentar el código seleccionado
- [`/StackOverflow`](https://docs.codegpt.co/docs/tutorial-features/stackoverflow): Buscar el código seleccionado en StackOverflow 
- [`/Code Builder`](https://docs.codegpt.co/docs/tutorial-features/code_builder): Generar un constructor de código para el código seleccionado
- [`/Code Interpreter`](https://docs.codegpt.co/docs/tutorial-features/code_interpreter): Interpretar el código seleccionado sin ejecutarlo
- [`/Planning`](dddd): permitir que agentes expertos de nuestro Mercado te ayuden a planificar el código.

:::note Atajos

<p align="center">
    <img width="450" height="250"  src="https://github.com/user-attachments/assets/6aba86fa-0c6c-49f2-89bc-47456d2c61e5" />
</p>
:::

Aprovecha al máximo CodeGPT Chat y experimenta un nuevo nivel de productividad en tus esfuerzos de codificación.
