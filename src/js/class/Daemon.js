import Character from '../class/Character'

export default class Daemon extends Character {
    constructor (name) {
        super(name,'Daemon');
        this.level = 1;
        this.health = 100;
        this.attack = 10;
        this.defence = 40;
    }
}