---
sidebar_position: 2
---
# Validando Formato JSON

O CodeGPT pode ajudar a identificar e corrigir erros de formatação em dados JSON, garantindo que sejam válidos e analisáveis.

---

### **Cenário de Exemplo**

Imagine que você está trabalhando com uma API que consome dados JSON. Sua aplicação lança o seguinte erro:  

```
Error: Parse error
-------------------^
Expecting 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[', got 'undefined'
```

O objeto JSON que está causando o erro se parece com isto:

```json
{
  "user": {
    "id": 123,
    "name": "Jane Doe"
    "email": "jane.doe@example.com",
    "active": true,
  },
  "roles": [
    "admin",
    "editor",
    "viewer",
  ]
}
```

---

### **Prompt de Exemplo**

**`Por que meu objeto JSON é inválido e como posso corrigi-lo?`**

---

### **Resposta de Exemplo**

O CodeGPT pode responder com a seguinte explicação e JSON corrigido:

**Explicação**:  
- O primeiro problema é a falta de uma vírgula após `"name": "Jane Doe"`.  
- O segundo problema é uma vírgula extra após o último elemento no array `roles`.  
- Finalmente, há uma vírgula extra após o par chave-valor `"active": true`, o que não é permitido em JSON.

Aqui está o JSON corrigido:

```json
{
  "user": {
    "id": 123,
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "active": true
  },
  "roles": [
    "admin",
    "editor",
    "viewer"
  ]
}
```

---

### **Benefícios de Usar o CodeGPT**

- **Identificação de Erros**: O CodeGPT aponta as linhas exatas onde ocorrem os erros, economizando tempo durante a depuração.  
- **Sugestões Automáticas**: Ele não apenas identifica problemas, mas também sugere correções precisas, tornando a edição de JSON mais fácil.  
- **Prevenção**: Garante que os dados JSON estejam livres de erros antes de integrar com APIs ou outros serviços.