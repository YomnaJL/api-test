import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../src"))

from unittest.mock import patch
import io
from main import main

def test_main_output():
    """Vérifie que main() produit une sortie non vide."""
    with patch("sys.stdout", new_callable=io.StringIO) as mock_out:
        main()
        output = mock_out.getvalue()
    assert "MonProjet" in output
    assert "add(3, 5) = 8" in output
    assert "multiply(4, 6) = 24" in output
