---
sidebar_position: 2
---

# Configuración

Ingresa en **Settings > Extensions > CodeGPT**

Completa la siguiente información:
![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://user-images.githubusercontent.com/6216945/210634562-1dd5f8cd-4625-42fc-92f4-7e1b5f132c49.png)

### Proveedor de AI
Selecciona un proveedor de AI: luego ingresa el API Key del proveedor seleccionado
- [OpenAI](https://www.codegpt.co/docs/tutorial-ai-providers/openai)
- [Cohere](https://www.codegpt.co/docs/tutorial-ai-providers/cohere)
### API Key
Ingresa el API Key del proveedor seleccionado
- Para ingresar el [API Key](/docs/tutorial-basics/installation#get-yout-api-key) presiona cmd+shift+p y busca `CodeGPT: Set API KEY`. De esta forma se guardará tu API Key de forma segura.

### Max Token
Los tokens pueden ser explicados como piezas de palabras. Antes de que la API procese el prompt de entrada, el input es dividido en tokens.

Cada modelo que selecciones tiene un numero máximo de tokens. Selecciona la cantidad de tokens dependiendo del largo de la respuesta que quieres obtener desde la API

Más información: 
- [Tokens by OpenAI (English)](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- [Max Token in Medium (Spanish)](https://medium.com/@dan.avila7/concepto-de-tokens-en-openai-f5d4196076f6)

### Language
Seleccioan el idioma con el que se realizarán las consultas a la API.

Para funcionalidades como Explain o Document, cada consulta que obtengas vendrá en el idioma que selecciones.

### Model
Cada proveedor cuenta con diferentes tipos de modelos, agrupados por familia o habilidad. Cada familia de modelos está asociado a habilidades o tareas especificas. 

Más información: 
- [Models by OpenAI (English)](https://beta.openai.com/docs/models/overview)
- [Model in Medium (Spanish)](https://medium.com/@dan.avila7/modelos-de-gpt-3-y-codex-11a64948d87)

### Temperature
Este parámetro que puedes modificar. Esto determina que tan random o "creativa" puede ser la generación de texto. Mientras más temperatura, la API retornará más variedad y creatividad, mientras menos temperatura la API retornará de forma más directa y tendrémos menos sorpresas en el cotenido que traiga.

Este valor puede ir de 0 a 1. Siendo 0 el más directo y 1 el más random y creativo.
Por defecto la extensión tiene el valor 0.3

Más información: 
- [Temperature by Cohere (English)](https://docs.cohere.ai/docs/temperature)
- [Temperature in Medium (Spanish)](https://medium.com/@dan.avila7/c%C3%B3mo-manejar-los-par%C3%A1metros-temperature-y-top-p-en-openai-b45892b250be)