---
sidebar_position: 16
---

# Cerebras

Sitio web oficial: https://cerebras.ai/

Cerebras es una plataforma de computación de vanguardia para el entrenamiento e inferencia de modelos de inteligencia artificial a gran escala. Esta guía proporciona una visión general completa de Cerebras, incluyendo información detallada sobre conceptos clave, flujos de trabajo, características y la API de Cerebras PyTorch.

## Características Clave

- Cerebras Model Zoo con Modelos de Lenguaje Grande (LLM) preconfigurados
- Soporte para modelos de Visión por Computadora (CV)
- Compatibilidad con modelos multimodales como LLaVA
- Capacidad para usar modelos y conjuntos de datos personalizados de PyTorch

El Clúster de Wafer-Scale de Cerebras está meticulosamente diseñado para permitir el entrenamiento de redes neuronales con una escalabilidad lineal notablemente eficiente a través de millones de núcleos, sin las complejidades de la computación distribuida tradicional.

## Cómo Conectar

- Ve a https://inference.cerebras.ai/
- Selecciona "Obtener Clave API"
- Crea una cuenta
- Haz clic en "Únete Ahora"
- Completa el formulario

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/78cb13e7-eb4f-4883-ae70-cee010c3d5a0" />
</p>

- Una vez que tengas la Clave API, ve a la extensión de VSCode
- Selecciona Cerebras como el proveedor con el modelo deseado
- Pega la Clave API
- Haz clic en "Conectar"

<p align="center">
      <img width="500" height="350" src="https://github.com/user-attachments/assets/1593cb8a-7727-459a-8b9b-526af4d0a06c" />
</p>

:::caution Eliminar Clave
Si deseas eliminar tu Clave API de CodeGPT, haz clic en el cuadro del proveedor y "Desconectar".

<p align="center">
      <img width="300" height="150" src="https://github.com/user-attachments/assets/eb8a35bf-ba6d-4113-b3b5-af4f8e6bedb5" />
</p>
:::

### Modelos de Cerebras Disponibles en Code GPT

- Llama3.1-70b
- Llama3.1-8b

## Errores de API

Si estás experimentando errores de API, consulta la siguiente documentación: [Documentación de Cerebras](https://docs.cerebras.ai/)

:::info Nota Importante
Este proveedor solo está disponible en la versión 3.5.73 de la extensión CodeGPT para VSCode y posteriores. Asegúrate de tener la extensión actualizada.
:::
