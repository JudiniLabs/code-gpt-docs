---
sidebar_position: 16
---

# Cerebras
Sitio web oficial: https://cerebras.ai/

Cerebras es una plataforma de computación de vanguardia para el entrenamiento e inferencia de modelos de inteligencia artificial a gran escala. Esta guía proporciona una visión general completa de Cerebras, incluyendo información detallada sobre conceptos clave, flujos de trabajo, características y la API de Cerebras PyTorch.

## Características Clave
- Cerebras Model Zoo con Modelos de Lenguaje Grande (LLM) preconfigurados.
- Soporte para modelos de Visión por Computadora (CV).
- Compatibilidad con modelos multimodales como LLaVA.
- Capacidad para usar modelos y conjuntos de datos personalizados de PyTorch.

El Clúster de Wafer-Scale de Cerebras está meticulosamente diseñado para permitir el entrenamiento de redes neuronales con una escalabilidad lineal notablemente eficiente a través de millones de núcleos, sin las complejidades de la computación distribuida tradicional.

## Cómo Conectar
- Ve a https://inference.cerebras.ai/.
- Selecciona "Obtener Clave API".
- Crea una cuenta.
- Haz clic en "Únete ahora".
- Completa el formulario.

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>
  
- En la extensión CodeGPT de VSCode, cambia el modelo en el chat

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/9589828c-c794-4d67-b806-9eff0adf3798"/></p>

- Selecciona el modelo LLMs Cloud y elige `Cerebras` como `Proveedor`.
- Pega la `Clave API` aquí y haz clic en `Conectar`.
- Haz clic fuera de las opciones y pide chatear.

:::caution Eliminar Clave
Para eliminar tu Clave API de CodeGPT, haz clic en el botón `Cambiar configuración de conexión`
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b7189968-c88a-4891-82b7-3cbc59a46b25"/></p>
:::

## Errores de API
Si estás experimentando errores de API, consulta la siguiente documentación: [Documentación de Cerebras](https://docs.cerebras.ai/).

:::info Nota Importante
Este proveedor solo está disponible en la versión 3.5.73 de la extensión CodeGPT para VSCode y posteriores. Asegúrate de tener la extensión actualizada.
:::
