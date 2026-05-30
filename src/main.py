from utils import add, multiply
from config import APP_NAME, VERSION

def main():
    print(f"Bienvenue dans {APP_NAME} v{VERSION}")
    print(f"add(3, 5) = {add(3, 5)}")
    print(f"multiply(4, 6) = {multiply(4, 6)}")

if __name__ == "__main__":
    main()
