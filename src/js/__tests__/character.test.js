import Character from "../class/Character";


test('should throw an error if name length is less than 2', () => {
    expect(() => {
        new Character('B', 'Bowman', 25, 25);
    }).toThrow('Кол-во символов в name от 2 до 10!');
});

test('should throw an error if name length is more than 10', () => {
    expect(() => {
        new Character('RobertoPistruni', 'Bowman', 25, 25);
    }).toThrow('Кол-во символов в name от 2 до 10!');
});

test('should throw an error if type is not valid', () => {
    expect(() => {
        new Character('Basil', 'Warrior', 25, 25);
    }).toThrow('Данные введены некорректно!');
});

test ('must change level, attack, defence', () => {
    const character = new Character('Bob', 'Bowman', 100, 1, 25, 25)
    character.levelUp()
    const correct = {
        name: 'Bob',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30
    };
    expect(character).toEqual(correct)  
});

test ('should be health=100 if initially health < 100', () => {
    const character = new Character('Bob', 'Bowman', 25, 25)
    character.health = 50
    character.levelUp()
    expect(character.health).toEqual(100)  
});

test ('should not level up a dead character', () => {
    const character = new Character('Bob', 'Bowman', 25, 25)
    character.health = 0;
    expect(() => character.levelUp()).toThrow("нельзя повысить левел умершего!")  
});

test ('should decrease health', () => {
    const character = new Character('Bob', 'Bowman', 100, 1, 25, 25)
    character.damage(50)
    expect(character.health).toEqual(62.5)  
});
test ('should health=0 if health < 0', () => {
    const character = new Character('Bob', 'Bowman', 100, 1, 25, 25)
    character.health = 35
    character.damage(50)
    expect(character.health).toEqual(0)  
});