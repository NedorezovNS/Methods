

export default class Character {
   
    constructor(name, type, health, level, attack, defence) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name == 'number' || name.length < 2 || name.length > 10) {
            throw new Error("Кол-во символов в name от 2 до 10!")
        }

        if (!types.includes(type)) {
            throw new Error("Данные введены некорректно!")
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }


    levelUp() {
        if (this.health === 0) {
            throw new Error("нельзя повысить левел умершего!")
        }
        this.level ++;
        this.attack *= 1.20;
        this.defence *= 1.20;
        if (this.health < 100) {
            this.health = 100; 
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
