---
sidebar_position: 1
---
# Escribir Pruebas Unitarias

CodeGPT puede ayudarte a escribir pruebas unitarias para tu código Python para asegurar que su funcionalidad sea confiable y libre de errores.

Al desarrollar aplicaciones en Python, es crucial probar los componentes individuales de tu código. CodeGPT puede asistir generando pruebas unitarias, sugiriendo casos límite y asegurando que tus funciones se comporten como se espera bajo diversas condiciones.

### Escenario de Ejemplo

Supongamos que tienes una función en Python que calcula el costo total de los artículos en un carrito de compras, como se muestra a continuación:

```python
def calculate_item_cost(item):
    """Calcular el costo de un solo artículo, considerando descuentos."""
    discount = item.get('discount', 0)
    return item['price'] * item['quantity'] * (1 - discount)

def calculate_total(cart):
    """Calcular el costo total de todos los artículos en el carrito."""
    return sum(calculate_item_cost(item) for item in cart)
```

Quieres probar este código usando el módulo `unittest`.

---

### Ejemplo de Solicitud

`¿Cómo puedo escribir pruebas unitarias para verificar la corrección de estas funciones?`

---

### Ejemplo de Respuesta

CodeGPT Chat podría generar el siguiente conjunto de pruebas:

```python
import unittest

class TestShoppingCart(unittest.TestCase):
    
    def test_calculate_item_cost_no_discount(self):
        """Probar el cálculo del costo del artículo sin descuento."""
        item = {'price': 10, 'quantity': 2}
        self.assertEqual(calculate_item_cost(item), 20)

    def test_calculate_item_cost_with_discount(self):
        """Probar el cálculo del costo del artículo con descuento."""
        item = {'price': 50, 'quantity': 1, 'discount': 0.2}
        self.assertEqual(calculate_item_cost(item), 40)

    def test_calculate_total_no_items(self):
        """Probar el cálculo total para un carrito vacío."""
        cart = []
        self.assertEqual(calculate_total(cart), 0)

    def test_calculate_total_multiple_items(self):
        """Probar el cálculo total para un carrito con múltiples artículos."""
        cart = [
            {'price': 10, 'quantity': 2, 'discount': 0.1},
            {'price': 20, 'quantity': 1, 'discount': 0},
        ]
        self.assertEqual(calculate_total(cart), 38)  # 18 + 20

    def test_calculate_item_cost_invalid_item(self):
        """Probar el comportamiento cuando el diccionario del artículo está incompleto."""
        item = {'price': 10}  # Falta 'quantity'
        with self.assertRaises(KeyError):
            calculate_item_cost(item)

if __name__ == '__main__':
    unittest.main()
```

---

### Explicación de las Pruebas

1. **Funcionalidad Básica**: Las dos primeras pruebas aseguran que `calculate_item_cost` maneje correctamente los artículos con y sin descuentos.
2. **Entrada Vacía**: La tercera prueba confirma que `calculate_total` maneja correctamente un carrito de compras vacío.
3. **Múltiples Artículos**: La cuarta prueba verifica el cálculo del costo total para múltiples artículos en el carrito.
4. **Manejo de Errores**: La quinta prueba verifica cómo se comporta `calculate_item_cost` cuando faltan claves esenciales en la entrada.