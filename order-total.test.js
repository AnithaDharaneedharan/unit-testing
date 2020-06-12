const orderTotal = require('./order-total.js');

it('works', () => {
  expect(1).toBe(1)
})

if (orderTotal({
    items: [
        {name: 'Dragon', price: 2, quantity: 3}
    ]
}) !== 6) {
    throw new Error('check fail : quantity !')
}

if (orderTotal({
    items: [
        {name: 'Dragon', price: 3}
    ]
}) !== 3) {
    throw new Error('check fail : quantity !')
}

if (orderTotal({
    items: [
        {name: 'Dragon food', price: 8, quantity: 1},
        {name: 'Dragon cage', price: 800, quantity: 1}
    ]
}) !== 808) {
    throw new Error('check fail : quantity !')
}