import sorting from '../app';

test('test', () => {
  const players = [
    { name: 'маг', health: 50 }, { name: 'лучник', health: 1 }, { name: 'мечник', health: 100 },
  ];
  const result = sorting(players);
  const expected = [{ name: 'мечник', health: 100 }, { name: 'маг', health: 50 }, { name: 'лучник', health: 1 }];
  expect(result).toEqual(expected);
});
