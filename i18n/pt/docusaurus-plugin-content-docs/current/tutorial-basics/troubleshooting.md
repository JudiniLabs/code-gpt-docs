---
sidebar_position: 3
---

# Solução de Problemas

## Guia de Solução de Problemas da Extensão CodeGPT para VSCode

### Introdução

Este guia foi elaborado para ajudar a resolver problemas comuns que podem surgir durante a instalação e uso da extensão CodeGPT. Antes de começar, certifique-se de que você atende a todos os requisitos e configurações descritos abaixo.

### Requisitos

Para executar a extensão CodeGPT, sua configuração deve atender aos seguintes requisitos:

- Versão do VSCode: Seu VSCode deve ser a versão **1.82.0** ou superior.
- Versão do Node.js: Seu Node.js deve ser a versão **18.0.0** ou superior.

### Problemas Comuns e Soluções

- Problema:
A extensão CodeGPT requer o uso da porta 54112 para localhost. Se esta porta não estiver disponível, a extensão não funcionará.

- Solução:
Certifique-se de que a porta 54112 está livre e não está sendo usada por nenhum outro aplicativo. Você pode verificar e liberar esta porta usando os seguintes comandos:

Para Windows:

```
netstat -aon | findstr :54112
taskkill /F /PID <PID>
```

Para macOS e Linux:

```
lsof -i :54112
kill -9 <PID>
```
Substitua `<PID>` pelo ID do Processo que está usando a porta.

### Usando devcontainer

- Problema:
Ao usar um devcontainer, a porta 54112 deve ser aberta na configuração do docker-compose.

- Solução:
Certifique-se de que seu docker-compose.yml inclua a seguinte configuração para abrir a porta 54112:

```
services:
  seu-nome-de-serviço:
    ports:
      - "54112:54112"
```

### Incompatibilidade com VSCode Tunnel

- Problema:
A extensão CodeGPT é incompatível com o VSCode Tunnel, pois não pode executar localhost nesta configuração.

- Solução:
Infelizmente, não existe uma solução alternativa para usar a extensão CodeGPT com o VSCode Tunnel. Certifique-se de executar o VSCode em um ambiente local onde o localhost possa ser usado.

## Experienciando uma tela preta após reinstalar ou atualizar a Extensão CodeGPT
- Problema:
A extensão CodeGPT requer a limpeza do cache após a reinstalação ou uma atualização.

- Solução: Excluir memória cache
```

- Pressione Ctrl + Shift + P
- Digite o comando "Clear Editor History"
- Pressione Enter
- Feche o VSCode e instale o CodeGPT novamente
```

## Incapaz de conectar aos serviços da extensão
- Problema:
Após a instalação, a extensão CodeGPT requer a reinicialização do ambiente.

- Solução:
Você pode tentar estas alternativas:
```
- Reinicie seu computador
- Exclua a memória cache 
- Verifique a disponibilidade das portas 54112 ou 54113.
```

## Incapaz de conectar aos serviços da extensão a partir de uma VPN
- Problema:
Após a instalação, a extensão CodeGPT não consegue se conectar à sua conta CodeGPT Plus. O número de interações diárias é -1 a -1.

- Solução:
O CodeGPT acessa o serviço de API com o domínio `api.codegpt.co` e seus subdomínios (como `app.codegpt.co`). Algumas empresas possuem restrições de firewall ou listas de domínios restritos, então será impossível sincronizar os serviços se forem usados a partir do VSCode ou qualquer outro IDE. 
Por favor, consulte seu provedor de TI para adicionar nosso domínio como permitido ou use a extensão a partir de redes sem restrições específicas.

## Não é possível usar os agentes do Marketplace
- Problema:
O número de agentes que você pode instalar a partir do Marketplace é limitado com base no seu plano de assinatura. Portanto, você pode encontrar uma mensagem de erro informando: "Você atingiu o limite de agentes."

- Solução:
Por favor, remova todos os agentes em excesso, mantendo apenas a quantidade permitida pelo seu plano de assinatura atual.