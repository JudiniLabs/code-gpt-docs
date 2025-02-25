# Cómo Documentar Problemas en GitHub para CodeGPT

Por favor, sigue estas pautas al crear un nuevo problema en el repositorio de CodeGPT para asegurarte de que los problemas se comuniquen y resuelvan de manera efectiva.

⚠️ **Advertencia:** Los problemas que no sigan estas pautas pueden no ser considerados. ⚠️

## Pasos para Documentar un Problema

1. **Verificar Problemas Existentes**
   - Antes de crear un nuevo problema, verifica los problemas existentes para asegurarte de que tu problema no haya sido reportado ya.

2. **Abrir un Nuevo Problema**
   - Navega a la [pestaña de Problemas](https://github.com/davila7/code-gpt-docs/issues/) del repositorio de CodeGPT.
   - Haz clic en el botón `Nuevo problema`.

3. **Seleccionar Tipo de Problema**
   - Elige la plantilla de problema apropiada que mejor describa tu problema:
     - Informe de Error
     - Solicitud de Función
     - Mejora de Documentación
     - Otro

4. **Completar la Plantilla del Problema**
   - **Título**: Proporciona un título claro y conciso para tu problema.
   - **Descripción**: Describe el problema en detalle, incluyendo:
     - **Pasos para Reproducir**: Proporciona una descripción paso a paso de cómo reproducir el problema.
     - **Comportamiento Esperado**: Describe lo que esperabas que sucediera.
     - **Comportamiento Actual**: Describe lo que realmente sucedió.
     - **Capturas de Pantalla**: Adjunta capturas de pantalla si es aplicable.
   - **Entorno**: Incluye información relevante sobre el entorno donde ocurrió el problema:
     - SO (por ejemplo, Windows, macOS, Linux)
     - Navegador (si es aplicable)
     - Versión de CodeGPT
     - Cualquier otro detalle relevante

5. **Información Adicional**
   - **Registros**: Proporciona cualquier mensaje de registro o código de error relevante.
   - **Soluciones Alternativas**: Menciona si has encontrado alguna solución alternativa.
   - **Referencias**: Enlaza a cualquier problema o discusión relacionada.

6. **Enviar el Problema**
   - Revisa tu problema para asegurarte de que toda la información necesaria esté incluida.
   - Haz clic en el botón `Enviar nuevo problema`.

## Ejemplo de Plantilla de Problema

Aquí hay un ejemplo de un problema bien documentado:

### Informe de Error

**Título:** CodeGPT se cierra al abrir archivos grandes

**Descripción:**
Cuando intento abrir un archivo grande (más de 20MB) en CodeGPT, la aplicación se cierra inmediatamente.

**Pasos para Reproducir:**
1. Abre CodeGPT.
2. Ve a `Archivo` > `Abrir`.
3. Selecciona un archivo mayor de 20MB.
4. Haz clic en `Abrir`.

**Comportamiento Esperado:**
CodeGPT debería abrir el archivo grande sin cerrarse.

**Comportamiento Actual:**
CodeGPT se cierra con un mensaje de error que dice: "La aplicación ha dejado de funcionar."

**Capturas de Pantalla:**
[Captura de Pantalla de Error](link_to_screenshot)

**Entorno:**
- SO: Windows 10
- Versión de CodeGPT: 1.2.3
- Memoria: 16GB
- Procesador: Intel i7

**Registros:**

**Soluciones Alternativas:**
No se conocen soluciones alternativas.

**Referencias:**
Problema relacionado: #123

## Consejos para un Informe de Problema Efectivo
- Sé Específico: Proporciona tantos detalles como sea posible para ayudarnos a entender y reproducir el problema.
- Mantente en Tema: Concéntrate en un solo problema por informe. Si tienes múltiples problemas, crea informes separados para cada uno.
- Seguimiento: Si se dispone de más información, actualiza el problema con nuevos detalles.

Al seguir estas pautas, ayudas a mejorar CodeGPT para todos. ¡Gracias por tu contribución!