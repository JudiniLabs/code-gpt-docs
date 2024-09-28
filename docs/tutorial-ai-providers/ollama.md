---
sidebar_position: 14
---

# Ollama

Official website https://ollama.ai

Opensource project to run, create, and share large language models (LLMs).
## Connect Ollama Models
- Download Ollama from the following link: [ollama.ai](https://ollama.ai/)

### Download models via the console
- Install Ollama and use the model codellama by running the command ```ollama pull codellama```
- If you want to use mistral or other models, you will need to replace codellama with the desired model. For example: ```ollama pull mistral```

### Download models via CodeGPT UI
- Select Ollama as the `Provider`
- Select the model
- Click the `Download` button

<p align="center">
      <img width="300" height="250" src="https://github.com/JudiniLabs/code-gpt-docs/assets/6216945/40a47458-7d7a-46c5-8500-b7c00ce99b72" />
</p>

# How to use Ollama

- In VSCode and Select Ollama like a `Provider`
- Please be aware that Ollama is running locally on your computer.
- Choose a model

    <p align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/65f81b2c-cf92-4e94-9041-bc4bcfe80477" />
    </p>
  

:::caution Remove Key 
No need to disconnect, just change the provider.
:::
  
## Chat Models available:
- llama3.2:3b
- llama3.2:1b
- llama3.1:405b
- llama3.1:70b
- llama3.1:8b
- llama3:70b
- llama3:8b
- codellama:latest
- codestral:latest
- mathstral:latest
- mixtral:latest
- mistral:v0.3
- mistral:latest
- codegeex4:9b
- reflection:70b
- yi-coder:1.5b
- yi-coder:9b
- qwen2.5-coder:1.5b
- qwen2.5-coder:7b
- codeqwen
- qwen2:72b
- qwen2:7b
- qwen2:1.5b
- qwen2:0.5b
- command-r-plus:latest
- command-r:latest
- aya:8b
- aya:35b
- phi3.5:latest
- phi3:mini
- phi3:medium
- phi3:latest
- granite-code:3b
- granite-code:8b
- granite-code:20b
- granite-code:34b
- codegemma:latest
- gemma2:2b
- gemma2:9b
- gemma2:27b
- gemma:2b
- gemma:7b
- dbrx:latest
- deepseek-v2.5:236b
- deepseek-coder:latest
- deepseek-coder-v2
- starcoder2:latest
- dolphincoder:latest
- dolphin-mixtral:latest
- starling-lm:latest
- llama2-uncensored:latest

## Autocomplete models availables:
- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code


## API Errors
If you are getting API errors check the following link: [Ollama Documentation](https://ollama.ai/)

## Ollama Errors
- If the Ollama model does not respond in the chat, consider restarting it locally by turning it off and then on again. This action should resolve the issue.

    <p align="center">
      <img width="250" height="00" src="https://github.com/davila7/code-gpt-docs/assets/37567214/4bd4e2c8-dbfb-46f3-b4d3-c3484cc7692c"/>
    </p>
  
- If the Ollama is running but not responding, please manually remove 'Ollama_Host' from the environment variables and let it revert to the default setting.
    


 


