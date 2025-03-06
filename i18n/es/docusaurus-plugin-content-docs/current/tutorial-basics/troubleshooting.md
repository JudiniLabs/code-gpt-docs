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
```
netstat -aon | findstr :54112 taskkill /F /PID
```

Para macOS y Linux:
```
lsof -i :54112 kill -9
```
Reemplaza `<PID>` con el ID de Proceso real que está usando el puerto.

### Usando devcontainer

- Problema:
Cuando se usa un devcontainer, el puerto 54112 debe estar abierto en la configuración de docker-compose.

- Solución:
Asegúrate de que tu docker-compose.yml incluya la siguiente configuración para abrir el puerto 54112:
```
services: your-service-name: ports: - "54112:54112"
```

### Incompatibilidad con VSCode Tunnel

- Problema:
La extensión CodeGPT es incompatible con VSCode Tunnel ya que no puede ejecutar localhost bajo esta configuración.

- Solución:
Desafortunadamente, no existe una solución alternativa para usar la extensión CodeGPT con VSCode Tunnel. Por favor, asegúrate de ejecutar VSCode en un entorno local donde se pueda usar localhost.

## Pantalla negra después de reinstalar o actualizar la Extensión CodeGPT
- Problema:
La extensión CodeGPT requiere limpieza de caché después de la reinstalación o una actualización.

- Solución: Eliminar memoria caché
```
- Presiona Ctrl + Shift + P
- Escribe el comando "Clear Editor History"
- Presiona Enter
- Cierra VSCode e instala CodeGPT nuevamente
```
## No se puede conectar a los servicios de la extensión
- Problema:
Después de la instalación, la extensión CodeGPT requiere reiniciar el entorno.

- Solución:
```
- Puedes intentar estas alternativas:
- Reinicia tu computadora
- Elimina la memoria caché
- Verifica la disponibilidad del puerto 54112 o 54113
```
## No se puede conectar a los servicios de la extensión desde VPN
- Problema:
Después de la instalación, la extensión CodeGPT no puede conectarse con tu cuenta CodeGPT Plus. El número de interacciones diarias es -1 a -1.

- Solución:
CodeGPT accede al servicio API con el dominio `api.codegpt.co` y sus subdominios (como `app.codegpt.co`). Algunas empresas tienen restricciones de firewall o contienen listas de dominios restringidos, por lo que será imposible sincronizar los servicios si se utilizan desde VSCode o cualquier otro IDE.
Por favor, consulta con tu proveedor de TI para agregar nuestro dominio como permitido o usa la extensión desde redes sin restricciones específicas.

## No se pueden usar los agentes del Marketplace
- Problema:
El número de agentes que puedes instalar desde el Marketplace está limitado según tu plan de suscripción. Por lo tanto, puedes encontrar un mensaje de error que indica "Has alcanzado el límite de agentes".

