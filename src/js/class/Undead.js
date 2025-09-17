import Character from '../class/Character'

export default class Undead extends Character {
    constructor (name) {
        super(name,'Undead');
        this.level = 1;
        this.health = 100;
        this.attack = 25;
        this.defence = 25;
    }
}