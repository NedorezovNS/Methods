import Character from '../class/Character'

export default class Swordsman extends Character {
    constructor (name) {
        super(name,'Swordsman');
        this.level = 1;
        this.health = 100;
        this.attack = 40;
        this.defence = 10;
    }
}