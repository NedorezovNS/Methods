import Undead from "../class/Undead";

test('Правильно создается объект', () => {
    const undead = new Undead('Undead');
    const correct = {
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(undead).toEqual(correct);
})