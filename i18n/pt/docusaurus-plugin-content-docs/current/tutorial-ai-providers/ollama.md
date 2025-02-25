---
sidebar_position: 14
---

# Ollama

Site oficial: https://ollama.ai

Projeto de código aberto para executar, criar e compartilhar grandes modelos de linguagem (LLMs).
## Conectar Modelos Ollama
- Baixe e instale o Ollama a partir do link: [ollama.ai](https://ollama.ai/).


### Baixar modelos via console
- Baixe o modelo, por exemplo, `ollama run deepseek-r1` a partir do terminal.

   <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/258d5faa-3d8c-4198-aabe-5378b3bf3aae"/></p>

- Use o modelo executando o comando ```ollama pull MODEL```, por exemplo: ``ollama pull deepseek-r1``.
- Aguarde até que o carregamento atinja 100% de conclusão.
<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/11bc56a1-62d1-46ad-96cd-465a325b2c7c"/></p>


# Como usar o Ollama

- Na extensão VSCode CodeGPT, altere o modelo no chat.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Escolha `Local LLMs` e selecione `Ollama` como `Provider`.
- Use os modelos disponíveis diretamente.
- Cole o link do servidor onde o modelo está sendo executado. Para localhost: `http://localhost:11434`. 
- Clique fora das opções e peça para conversar.

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/28ec0abc-2928-4225-b1e9-764111291db2"/></p>


:::caution Remover ou editar Chave
Para remover a porta, clique no botão `Change connection settings`.
 <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/b32595a0-47de-4f9b-804b-3d6188fb1027"/></p>
:::
 

## Modelos de Autocompletar disponíveis:
- codestral:latest
- qwen2.5-coder:7b
- deepseek-coder:base
- qwen2.5-coder:1.5b
- codegemma:code
- codellama:code


## Erros de API
Se você estiver recebendo erros de API, verifique o seguinte link: [Documentação Ollama](https://ollama.ai/)

## Erros do Ollama
- Se o modelo Ollama não responder no chat, considere reiniciá-lo localmente desligando-o e ligando-o novamente. Esta ação deve resolver o problema.

  
- Se o Ollama estiver em execução, mas não responder, remova manualmente 'Ollama_Host' das variáveis de ambiente e deixe-o voltar para a configuração padrão.