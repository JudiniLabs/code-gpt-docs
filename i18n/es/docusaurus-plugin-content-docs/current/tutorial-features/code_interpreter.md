---
sidebar_position: 8
---

# Ejecutar Intérprete de Código (Beta)

La función ***Code Interpreter with Python*** (Beta) te permite solicitar y recibir sugerencias de código de manera fluida dentro de los comentarios. Esta herramienta poderosa mejora tu experiencia de programación al proporcionar fragmentos de código rápidos y relevantes.

Con la integración de Jupyter Notebook, ahora puedes ejecutar fragmentos de código directamente en tu entorno.

## Requisitos
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## Cómo utilizarlo:
- Solicitando código en un comentario:
    - Escribe un comentario con tu solicitud de código específica (asegúrate de que el cursor esté al final de la línea de comentario).

- Iniciando sugerencias de código:
    - Presiona ```cmd + shift + i``` para activar el modo de sugerencia de código.

- Utiliza el código:
    - Implementa el código sugerido para mejorar tu proyecto.

## Ejemplo
En este ejemplo, solicitamos abrir un archivo CSV, recuperar las columnas y luego trazar los datos.

### Prompt:

```python noInline
# Tu tarea es abrir el archivo ubicado en '../datasets/data_test.csv', leer los datos, identificar las columnas y luego crear un gráfico significativo para visualizarlos.
```

:::note CodeGPT: Intérprete de Código
<p align="center">
      <img width="550" height="300" src="https://github.com/davila7/code-gpt-docs/assets/6216945/314b2a0b-c89a-4458-ae58-1dc2c58a384d" />
</p>
:::



