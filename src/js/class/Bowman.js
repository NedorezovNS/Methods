import Character from '../class/Character'

export default class Bowman extends Character {
    constructor (name) {
        super(name,'Bowman');
        this.level = 1;
        this.health = 100;
        this.attack = 25;
        this.defence = 25;
    }
}
