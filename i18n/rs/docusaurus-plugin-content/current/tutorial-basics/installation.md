---
sidebar_position: 1
---

# Instalación

## Instalar Visual Studio Code
Visual Studio Code: [Download](https://code.visualstudio.com/download)

## Descargar & instalar la extensión Code GPT
- [Descargar desde el Marketplace de Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt)
- [Descargar desde Open VSX](https://open-vsx.org/extension/DanielSanMedium/dscodegpt)

O puedes buscar directamente desde la pestaña de extensiones dentro de Visual Studio Code

![Extension Tab](https://user-images.githubusercontent.com/6216945/212494271-256734c6-6cab-4c12-bb8f-dae1ffa74b33.png)

## Obtén tu API Key
Esto variará según el proveedor que elija:
- ### OpenAI
  - Vaya a la página de API Key en OpenAI: https://openai.com/api/
  - Inicie sesión con su cuenta de OpenAI (o [cree una nueva cuenta](https://platform.openai.com/signup))
  - Ingresa en el menú [View API Keys](https://beta.openai.com/account/api-keys)
  - Selecciona el botón **Create a new secret key**
  - Aparecerá una nueva ventana de diálogo, que contiene un cuadro de texto con su API Key.
  - Copia tu API Key
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su clave API


- ### CodeGPT Plus

  - Solicite su clave API desde CodeGPT Plus
  - Vaya a Configuración / Tokens de acceso y copie su API Key
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su API Key


- ### Google PaLM 2 con MakerSuite

  - Solicite acceso a PaLM 2 en este enlace [PaLM 2 MakerSuite](https://makersuite.google.com/)
  - Vaya al menú `Get API Key`
  - Cree una nueva API Key
  - Copia tu API Key
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su clave API


- ### Microsoft Azure

  - Cree una cuenta en [Microsoft Azure](https://azure.microsoft.com/en-us/free)
  - Obtenga acceso a [Azure OpenAI Services](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
  - Vaya a [Azure OpenAI Studio](https://oai.azure.com/)
  - Obtenga su `Endpoint` y `Key`
  - En la configuración de CodeGPT, cambie el proveedor a `Azure` y el modelo a `azure`
  - En VSCode presione **cmd + shift + p** y busque `Set Azure Data`
  - Pegue el `Endpoint` y `Key`

- ### Cohere
  - Crea una cuenta en [cohere.ai](https://cohere.ai/)
  - Ingresa en [dashboard](https://dashboard.cohere.ai/)
  - Copia tu API KEY
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su clave API

- ### AI21
  - Cree una cuenta en [AI21](https://www.ai21.com/)
  - Vaya a su [cuenta](https://studio.ai21.com/account/account)
  - Copia tu API KEY
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su clave API

- ### Anthropic
  - Cree una cuenta en [Anthropic](https://console.anthropic.com/)
  - Vaya a sus [API Keys](https://console.anthropic.com/account/keys)
  - Genere una nueva API Key
  - Copia tu API KEY
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su clave API

- ### Huggingface
  - Cree una cuenta en [Huggingface](https://huggingface.co/)
  - Vaya a su [Profile - Settings - Access Tokens
](https://huggingface.co/settings/tokens)
  - Genere una nueva API Key
  - Copia tu API KEY
  - En VSCode Presiona **cmd + shift + p** y busca `CodeGPT: Set API KEY`
  - Pegue su clave API

## Ingrese su clave API
Una vez que tenga su clave API, puede ingresarla en CodeGPT:
- Pegue su clave API en el cuadro de texto y presione **Enter⏎**.
- Ejecute el comando `Developer: Reload Window`

:::caution

Si desea eliminar su clave API de CodeGPT, abra la Paleta de comandos y busque `CodeGPT: Remove API KEY`.

:::

## Proveedores que no necesitan clave API

- ### GPT4All
  - Descargue GPT4All en el siguiente enlace:  [gpt4all.io](https://gpt4all.io/)
  - Vaya al menú **`Downloads`** y descargue todos los modelos que desee utilizar
  - Vaya a la sección **`Settings`** habilite la opción **`Enable web server`**

---
- ### Ollama
  - Descargue Ollama en el siguiente enlace: [ollama.ai](https://ollama.ai/)
  - Instale Ollama y luego ejecute este comando  ```ollama pull codellama```
  - Puede obtener más modelos como: **llama2, llama2:13b and llama2:70b**



