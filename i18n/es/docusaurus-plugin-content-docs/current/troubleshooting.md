---
sidebar_position: 3
---

# Solución de Problemas

## Guía de Solución de Problemas de la Extensión CodeGPT para VSCode

### Introducción

Esta guía está diseñada para ayudarte a resolver problemas comunes que pueden surgir durante la instalación y uso de la extensión CodeGPT. Antes de comenzar, asegúrate de cumplir con todos los requisitos y configuraciones que se describen a continuación.

### Requisitos

Para ejecutar la extensión CodeGPT, tu configuración debe cumplir con los siguientes requisitos:

- Versión de VSCode: Tu VSCode debe ser la versión **1.82.0** o superior.
- Versión de Node.js: Tu Node.js debe ser la versión **18.0.0** o superior.

### Problemas Comunes y Soluciones

- Problema:
  La extensión CodeGPT requiere el uso del puerto 54112 para localhost. Si este puerto no está disponible, la extensión no podrá ejecutarse.

- Solución:
  Asegúrate de que el puerto 54112 esté libre y no esté siendo utilizado por ninguna otra aplicación. Puedes verificar y liberar este puerto utilizando los siguientes comandos:

Para Windows:
