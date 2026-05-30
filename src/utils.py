def add(a: float, b: float) -> float:
    """Retourne la somme de a et b."""
    return a + b

def subtract(a: float, b: float) -> float:
    """Retourne la différence de a et b."""
    return a - b

def multiply(a: float, b: float) -> float:
    """Retourne le produit de a et b."""
    return a * b

def divide(a: float, b: float) -> float:
    """Retourne la division de a par b."""
    if b == 0:
        raise ValueError("Division par zéro impossible.")
    return a / b
