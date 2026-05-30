const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Récupère un utilisateur par son id.
 * @param {number} id
 * @returns {Promise<Object>}
 */
export async function fetchUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
  return res.json();
}

/**
 * Crée un nouvel utilisateur (mock).
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export async function createUser(data) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
  return res.json();
}
