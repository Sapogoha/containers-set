import Character from '../character';
import Team from '../team';

const team = new Team();
const characterA = new Character('TestA', 'Bowman');
const characterB = new Character('TestB', 'Magician');
const characterC = new Character('TestC', 'Daemon');
const characterD = new Character('TestD', 'Zombie');

test('add(member) method - add one member', () => {
  team.add(characterA);
  expect(team.members).toContain(characterA);
  expect(team.members.size).toBe(1);
});

test('add(member) method - adding already existing member, exect error', () => {
  expect(() => team.add(characterA)).toThrow(Error);
});

test('addAll(...members) method - add several members', () => {
  team.addAll(characterB, characterC, characterD);
  expect(team.members).toContain(characterB, characterC, characterD);
  expect(team.members.size).toBe(4);
});

test('toArray() method - returns an array of members', () => {
  expect(team.toArray()).toEqual([
    characterA,
    characterB,
    characterC,
    characterD,
  ]);
});
