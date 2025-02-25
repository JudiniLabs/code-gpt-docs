# Requisitos do Sistema para CodeGPT

Para garantir que o CodeGPT funcione corretamente, os seguintes requisitos de software e hardware devem ser atendidos:

## Requisitos de Software

| Componente                  | Detalhes do Requisito                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------|
| **Sistemas Operacionais Compatíveis** |- **macOS:** Funciona em todas as versões, exceto Sonoma. - **Linux:** Compatível a partir das implantações em 2024. - **Windows:** Funciona bem no Windows 11 e versões posteriores. |
| **Versão do Visual Studio Code (VSCode)** | Versão 1.96.0 ou superior. |
| **Versão do Node.js**        | Versão 20.0.0 ou superior.                                                   |
| **Porta**                   | Certifique-se de que a porta 54112 ou 54113 esteja disponível, pois a extensão precisa dela para funcionar.           |

## Requisitos de Hardware

| Componente      | Detalhes do Requisito               |
|-----------------|-------------------------------------|
| **RAM**         | Mínimo de 1GB.                      |
| **Espaço em Disco** | Mínimo de 20MB de espaço disponível em disco. Dependendo do modelo específico, espaço adicional será necessário se você estiver usando modelos locais, como o Ollama. |
| **Processador** | - Intel Core i5 ou superior. - Não compatível com processadores ARM mais antigos que 2024. |

## Requisitos de Conexão

| Componente | Detalhes do Requisito                                                                 |
|------------|---------------------------------------------------------------------------------------|
| **Rede**   | - Não deve estar em uma conexão VLAN ou VPN, a menos que o administrador ou firewall autorize os domínios de codepg.co. - Pode funcionar com modelos locais, mas requer uma conexão com a internet para usar o CodeGPT. |

### Domínios do CodeGPT:
- storage.codegpt.co
- api.codegpt.co

### Outros domínios:
- api.github.com
- github.com
- https://marketplace.visualstudio.com/ (para instalar a partir do VSCode)

Esses requisitos garantem que o CodeGPT opere de forma otimizada em seu sistema.