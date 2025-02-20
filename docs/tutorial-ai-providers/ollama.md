---
sidebar_position: 14
---

# Ollama

Official website https://ollama.ai

Opensource project to run, create, and share large language models (LLMs).
## Connect Ollama Models
- Download Ollama from the following link: [ollama.ai](https://ollama.ai/)

### Download models via the console
- Install Ollama and use the model `codellama` by running the command ```ollama pull codellama```
- If you want to use `Mistral` or other models, you must replace `codellama` with the desired model. For example: ```ollama pull mistral```

### Download models via CodeGPT UI
- Select Ollama as the `Provider`
- Select the model
- Click the `Download` button



# How to use Ollama

- In VSCode select Ollama as a `Provider`
- Please be aware that Ollama is running locally on your computer.
- Choose a model



:::caution Remove Key 
There is no need to disconnect; just change the provider.
:::

## Autocomplete models availables:
- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code


## API Errors
If you are getting API errors, check the following link: [Ollama Documentation](https://ollama.ai/)

## Ollama Errors
- If the Ollama model does not respond in the chat, consider restarting it locally by turning it off and then on again. This action should resolve the issue.

  
- If the Ollama is running but not responding, please manually remove 'Ollama_Host' from the environment variables and let it revert to the default setting.
    


 


