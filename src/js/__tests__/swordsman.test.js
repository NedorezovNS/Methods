import Swordsman from "../class/Swordsman";

test('Правильно создается объект', () => {
    const swordsman = new Swordsman('Swordsman');
    const correct = {
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(swordsman).toEqual(correct);
})