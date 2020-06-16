const orderTotal = require("./order-total.js");

const emptyFunction = () => {};

it("fetches VAT api correctly if country code not specified", () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
      expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
      isFakeFetchCalled = true;
  }
  orderTotal(fakeFetch, {
    country: "DE",
    items: [{ name: "Dragon", price: 20, quantity: 2 }],
  }).then((result) => {
      expect(isFakeFetchCalled.toBe(true))
  });
});

it("quantity", () =>
  orderTotal(emptyFunction, {
    items: [{ name: "Dragon", price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6)));

it("No quantity specified", () =>
  orderTotal(emptyFunction, {
    items: [{ name: "Dragon", price: 3 }],
  }).then((result) => expect(result).toBe(3)));

it("more than 1 array element happy path", () =>
  orderTotal(emptyFunction, {
    items: [
      { name: "Dragon food", price: 8, quantity: 1 },
      { name: "Dragon cage", price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808)));

it("happy path ex 2", () =>
  orderTotal(emptyFunction, {
    items: [
      { name: "Dragon food", price: 20, quantity: 1 },
      { name: "Dragon cage", price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60)));
