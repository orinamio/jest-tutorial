const profile = {
  name: 'Orinami',
  githubUrl: 'github.com/orinami',
  twitterUrl: 'twitter.com/orinami_'
};

test('expects profile to be an object', () => {
  expect(typeof profile).toBe('object');
});
