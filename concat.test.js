const concat = require('./concat');

test('join Orin and ami to be Orinami', () => {
  expect(concat('Orin', 'ami')).toBe('Orinami');
});