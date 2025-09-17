import Bowman from "../class/Bowman";

test('Правильно создается объект', () => {
    const bowman = new Bowman ('Bowman');
    const correct = {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(bowman).toEqual(correct);
})