import { add, multiply } from "./helpers.js";
import { fetchUser } from "./api.js";

async function main() {
  console.log("add(3, 5) =", add(3, 5));
  console.log("multiply(4, 6) =", multiply(4, 6));

  const user = await fetchUser(1);
  console.log("Utilisateur récupéré :", user);
}

main();
