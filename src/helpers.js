/**
 * Retourne la somme de a et b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * Retourne la différence de a et b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Retourne le produit de a et b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Retourne la division de a par b.
 * @throws {Error} si b vaut 0
 */
export function divide(a, b) {
  if (b === 0) throw new Error("Division par zéro impossible.");
  return a / b;
}
