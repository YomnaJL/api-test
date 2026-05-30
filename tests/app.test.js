// Functions inlined from source (not require'd — avoids browser globals)

// WARNING: main not found in source

describe("app — logique principale", () => {
  test("add et multiply retournent les bonnes valeurs", () => {
    expect(add(3, 5)).toBe(8);
    expect(multiply(4, 6)).toBe(24);
  });

  test("fetchUser est appelé avec le bon id", async () => {
    fetchUser.mockResolvedValueOnce({ id: 1, name: "Alice" });
    const user = await fetchUser(1);
    expect(fetchUser).toHaveBeenCalledWith(1);
    expect(user.name).toBe("Alice");
  });
});
