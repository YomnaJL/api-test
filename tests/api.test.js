// Functions inlined from source (not require'd — avoids browser globals)

// WARNING: fetchUser not found in source

// WARNING: createUser not found in source

describe("fetchUser", () => {
  test("retourne un utilisateur valide", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 1, name: "Alice" }),
    });
    const user = await fetchUser(1);
    expect(user).toEqual({ id: 1, name: "Alice" });
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  });

  test("lance une erreur si la réponse HTTP est KO", async () => {
    fetch.mockResolvedValueOnce({ ok: false, status: 404 });
    await expect(fetchUser(99)).rejects.toThrow("Erreur HTTP : 404");
  });
});

describe("createUser", () => {
  test("crée un utilisateur et retourne les données", async () => {
    const newUser = { name: "Bob", email: "bob@example.com" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 11, ...newUser }),
    });
    const result = await createUser(newUser);
    expect(result.id).toBe(11);
    expect(result.name).toBe("Bob");
  });
});
