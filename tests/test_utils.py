import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../src"))

import pytest
from utils import add, subtract, multiply, divide

class TestAdd:
    def test_positifs(self):
        assert add(2, 3) == 5

    def test_negatifs(self):
        assert add(-1, -4) == -5

    def test_zero(self):
        assert add(0, 0) == 0

class TestSubtract:
    def test_basic(self):
        assert subtract(10, 4) == 6

    def test_negatif_result(self):
        assert subtract(2, 5) == -3

class TestMultiply:
    def test_basic(self):
        assert multiply(3, 7) == 21

    def test_par_zero(self):
        assert multiply(5, 0) == 0

class TestDivide:
    def test_basic(self):
        assert divide(10, 2) == 5.0

    def test_division_par_zero(self):
        with pytest.raises(ValueError, match="Division par zéro"):
            divide(5, 0)
