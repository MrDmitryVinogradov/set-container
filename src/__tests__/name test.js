import Character from '..//js/classes/Character';

test('should create Character', () => {
  const hero = new Character('User');
  expect(hero.name).toBe('User');
});

test('name length', () => {
    expect(() => new Character("fffffffffffff")).toThrow('Character name length must be 3-9 symbols');
})