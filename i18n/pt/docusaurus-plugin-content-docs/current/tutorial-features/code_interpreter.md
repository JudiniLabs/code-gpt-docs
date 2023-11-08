---
sidebar_position: 8
---

# Execução do Interpretador de Código (Beta)

## Descrição

O recurso ***Interpretador de Código com Python*** (Beta) permite que você solicite e receba sugestões de código de forma contínua em comentários. Essa ferramenta poderosa melhora sua experiência de codificação fornecendo trechos de código rápidos e relevantes.

Com a integração do Jupyter Notebook, agora você pode executar trechos de código diretamente em seu ambiente.

## Requisitos
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## Como Usar:
- Solicitar Código em um Comentário:
    - Escreva um comentário com sua solicitação de código específica (certifique-se de que o cursor esteja no final da linha do comentário).

- Iniciar Sugestões de Código:
    - Pressione ```cmd + shift + i``` para ativar o modo de sugestão de código.

- Utilize o Código:
    - Implemente o código sugerido para aprimorar seu projeto.

## Exemplo
Neste exemplo, solicitamos que você abra um arquivo CSV, recupere as colunas e depois plote os dados.

### Solicitação:

```python noInline
# Sua tarefa é abrir o arquivo localizado em '../datasets/data_test.csv', ler os dados, identificar as colunas e criar um gráfico significativo para visualizá-lo
```
:::note CodeGPT: Code Interpreter
<p align="center">
      <img width="550" height="300" src="https://github.com/davila7/code-gpt-docs/assets/6216945/314b2a0b-c89a-4458-ae58-1dc2c58a384d" />
</p>
:::
