---
sidebar_position: 1
---
# Escrevendo Testes Unitários

O CodeGPT pode ajudar você a escrever testes unitários para seu código Python, garantindo que sua funcionalidade seja confiável e livre de bugs.

Ao desenvolver aplicações Python, é crucial testar componentes individuais do seu código. O CodeGPT pode auxiliar gerando testes unitários, sugerindo casos extremos e garantindo que suas funções se comportem como esperado em várias condições.

### Cenário de Exemplo

Suponha que você tenha uma função Python que calcula o custo total dos itens em um carrinho de compras, como mostrado abaixo:

```python
def calculate_item_cost(item):
    """Calcular o custo de um único item, considerando descontos."""
    discount = item.get('discount', 0)
    return item['price'] * item['quantity'] * (1 - discount)

def calculate_total(cart):
    """Calcular o custo total de todos os itens no carrinho."""
    return sum(calculate_item_cost(item) for item in cart)
```

Você quer testar esse código usando o módulo `unittest`.

---

### Exemplo de Prompt

`Como posso escrever testes unitários para verificar a correção dessas funções?`

---

### Exemplo de Resposta

O CodeGPT Chat pode gerar a seguinte suíte de testes:

```python
import unittest

class TestShoppingCart(unittest.TestCase):
    
    def test_calculate_item_cost_no_discount(self):
        """Testar cálculo de custo do item sem desconto."""
        item = {'price': 10, 'quantity': 2}
        self.assertEqual(calculate_item_cost(item), 20)

    def test_calculate_item_cost_with_discount(self):
        """Testar cálculo de custo do item com desconto."""
        item = {'price': 50, 'quantity': 1, 'discount': 0.2}
        self.assertEqual(calculate_item_cost(item), 40)

    def test_calculate_total_no_items(self):
        """Testar cálculo total para um carrinho vazio."""
        cart = []
        self.assertEqual(calculate_total(cart), 0)

    def test_calculate_total_multiple_items(self):
        """Testar cálculo total para um carrinho com múltiplos itens."""
        cart = [
            {'price': 10, 'quantity': 2, 'discount': 0.1},
            {'price': 20, 'quantity': 1, 'discount': 0},
        ]
        self.assertEqual(calculate_total(cart), 38)  # 18 + 20

    def test_calculate_item_cost_invalid_item(self):
        """Testar comportamento quando o dicionário do item está incompleto."""
        item = {'price': 10}  # Faltando 'quantity'
        with self.assertRaises(KeyError):
            calculate_item_cost(item)

if __name__ == '__main__':
    unittest.main()
```

---

### Explicação dos Testes

1. **Funcionalidade Básica**: Os dois primeiros testes garantem que `calculate_item_cost` lida corretamente com itens com e sem descontos.
2. **Entrada Vazia**: O terceiro teste confirma que `calculate_total` lida corretamente com um carrinho de compras vazio.
3. **Múltiplos Itens**: O quarto teste verifica o cálculo do custo total para múltiplos itens no carrinho.
4. **Tratamento de Erros**: O quinto teste verifica como `calculate_item_cost` se comporta quando chaves essenciais estão faltando na entrada.
