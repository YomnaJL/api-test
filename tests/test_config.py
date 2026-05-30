import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../src"))

from config import APP_NAME, VERSION, DEBUG, DATABASE

def test_app_name():
    assert isinstance(APP_NAME, str)
    assert len(APP_NAME) > 0

def test_version_format():
    parts = VERSION.split(".")
    assert len(parts) == 3
    assert all(p.isdigit() for p in parts)

def test_debug_is_bool():
    assert isinstance(DEBUG, bool)

def test_database_keys():
    assert "host" in DATABASE
    assert "port" in DATABASE
    assert "name" in DATABASE
    assert isinstance(DATABASE["port"], int)
