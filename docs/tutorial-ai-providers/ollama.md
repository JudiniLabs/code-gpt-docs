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

### Download models via the console
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
  
## Ollama Models available in Code GPT
- llama3:70b
- llama3:8b
- command-r-plus
- command-r
- codegemma
- gemma:7b
- gemma:2b
- dbrx
- mistral
- mixtral
- llama2
- codellama
- phi
- deepseek-coder
- starcoder2
- dolphincoder
- dolphin-mixtral
- starling-lm
- llama2-uncensored



## API Errors
If you are getting API errors check the following link: [Ollama Documentation](https://ollama.ai/)

## Ollama Errors
- If the Ollama model does not respond in the chat, consider restarting it locally by turning it off and then on again. This action should resolve the issue.

    <p align="center">
      <img width="250" height="00" src="https://github.com/davila7/code-gpt-docs/assets/37567214/4bd4e2c8-dbfb-46f3-b4d3-c3484cc7692c"/>
    </p>
  
- If the Ollama is running but not responding, please manually remove 'Ollama_Host' from the environment variables and let it revert to the default setting.
    


 


