# Requisitos del Sistema de CodeGPT

Para asegurar que CodeGPT funcione correctamente, se deben cumplir los siguientes requisitos de software y hardware:

## Requisitos de Software

| Componente                  | Detalles del Requisito                                                                 |
|----------------------------|-------------------------------------------------------------------------------------|
| **Sistemas Operativos Compatibles** |- **macOS:** Funciona en todas las versiones excepto Sonoma. - **Linux:** Compatible a partir de implementaciones en 2024. - **Windows:** Funciona bien en Windows 11 y versiones posteriores. |
| **Versión de Visual Studio Code (VSCode)** | Versión 1.96.0 o superior. |
| **Versión de Node.js**        | Versión 20.0.0 o superior.                                                   |
| **Puerto**                   | Asegúrese de que el puerto 54112 o 54113 esté disponible, ya que la extensión lo requiere para funcionar.           |

## Requisitos de Hardware

| Componente      | Detalles del Requisito               |
|----------------|-----------------------------------|
| **RAM**        | Mínimo de 1GB.               |
| **Espacio en Disco** | Mínimo de 20MB de espacio en disco disponible. Dependiendo del modelo específico, se requerirá espacio adicional si está utilizando modelos locales como Ollama. |
| **Procesador**  | - Intel Core i5 o superior. - No compatible con procesadores ARM anteriores a 2024. |

## Requisitos de Conexión

| Componente | Detalles del Requisito                                                                 |
|-----------|-------------------------------------------------------------------------------------|
| **Red** | - No debe estar en una conexión VLAN o VPN a menos que el administrador o firewall autorice los dominios de codepg.co. - Puede funcionar con modelos locales, pero requiere una conexión a Internet para usar CodeGPT. |

### Dominios de CodeGPT:
- storage.codegpt.co
- api.codegpt.co

### Otros dominios:
- api.github.com
- github.com
- https://marketplace.visualstudio.com/ (para instalar desde VSCode)

Estos requisitos aseguran que CodeGPT opere de manera óptima en su sistema.