import Character from '../js/classes/Character'

import Team from '../js/classes/Team'

const hero = new Character('User');
const hero1 = new Character('User1');
const hero2 = new Character('User2');

test('should add', () => {
  const team = new Team();
  team.add(hero);
  expect(team.members.size).toBe(1)
});

test('should throw on re-adding', () => {
  const team = new Team();
  team.add(hero);
  expect(() => { 
    team.add(hero)
  }).toThrow()
});

test('should throw on wrong instance', () => {
  const team = new Team();
  expect(() => { 
    team.add('hero')
  }).toThrow()
});

test('should add all', () => {
  const team = new Team();
  team.addAll(hero, hero1, hero2, hero);
  expect(team.members.size).toBe(3);
});

test ('should transform to array', () => {
  const team = new Team();
  team.addAll(hero, hero1, hero2);
  expect(Array.isArray(team.toArray())).toBe(true);
});