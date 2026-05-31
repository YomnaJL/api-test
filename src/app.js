const { add, multiply } = require("./helpers");
const { fetchUser } = require("./api");

async function main() {
  const addResult      = add(3, 5);
  const multiplyResult = multiply(4, 6);
  const user           = await fetchUser(1);

  console.log("add(3, 5) =", addResult);
  console.log("multiply(4, 6) =", multiplyResult);

  return { add: addResult, multiply: multiplyResult, user };
}

module.exports = { main };
