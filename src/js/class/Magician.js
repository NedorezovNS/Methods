import Character from '../class/Character'

export default class Magician extends Character {
    constructor (name) {
        super(name,'Magician');
        this.level = 1;
        this.health = 100;
        this.attack = 10;
        this.defence = 40;
    }
}