---
sidebar_position: 3
---

# Solução de problemas

## Guia de solução de problemas da extensão CodeGPT do VSCode

### Introdução

Este guia está projetado para ajudá-lo a resolver problemas comuns que podem ocorrer durante a instalação e o uso da extensão CodeGPT. Antes de começar, verifique se você atende a todos os requisitos e configurações abaixo.

### Requisitos

Para executar a extensão CodeGPT, sua configuração deve atender aos seguintes requisitos:

- Versão do VSCode: Sua VSCode deve ser a versão **1.82.0** ou superior.
- Versão do Node.js: Sua Node.js deve ser a versão **18.0.0** ou superior.

### Problemas comuns e soluções

- Problema:
  A extensão CodeGPT requer a utilização da porta 54112 para localhost. Se essa porta não estiver disponível, a extensão falhará ao ser executada.

- Solução:
  Verifique se a porta 54112 está livre e não está sendo utilizada por nenhuma outra aplicação. Você pode verificar e liberar essa porta usando os seguintes comandos:

Para Windows:
