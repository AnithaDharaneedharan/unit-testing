const orderTotal = require("./order-total.js");

it("quantity", () =>
  expect(
    orderTotal({
      items: [{ name: "Dragon", price: 2, quantity: 3 }],
    })
  ).toBe(6));

it("No quantity specified", () =>
  expect(
    orderTotal({
      items: [{ name: "Dragon", price: 3 }],
    })
  ).toBe(3));

it("more than 1 array element happy path", () =>
  expect(
    orderTotal({
      items: [
        { name: "Dragon food", price: 8, quantity: 1 },
        { name: "Dragon cage", price: 800, quantity: 1 },
      ],
    })
  ).toBe(808));

it("happy path ex 2", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon food", price: 20, quantity: 1 },
        { name: "Dragon cage", price: 40, quantity: 1 },
      ],
    })
  ).toBe(60);
});
