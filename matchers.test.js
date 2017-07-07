//toEqual
const data = {
    name: 'Orinami',
    lastname: 'Olatunji'
  };

test('Object Assignment', () => {
  expect(data).toEqual({name: 'Orinami', lastname: 'Olatunji'});
});

// For truthiness
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
});

test('zero', () => {
  const zero = 0;
  expect(zero).not.toBeNull();
  expect(zero).toBeDefined();
  expect(zero).not.toBeUndefined();
});

// For Numbers
const sum = 5 + 6;

test('five + six', () => {
  expect(sum).toBeGreaterThan(10);
  expect(sum).toBeGreaterThanOrEqual(11);
  expect(sum).toBeLessThan(12);
  expect(sum).toBeLessThanOrEqual(11);
});

//toContain - For arrays
const languages = [
  'JavaScript',
  'PHP', 
  'Ruby', 
];

test('languages contains JavaScript', () => {
  expect(languages).toContain('JavaScript');
});

//toMatch - For strings
test('g in programmer', () => {
  expect('Programmer').toMatch(/g/);
});