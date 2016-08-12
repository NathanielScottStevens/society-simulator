'use strict';
var chance = require('chance').Chance();

export default class Agent {
    constructor(lastName, firstName, gender, age){
        this.gender = gender || chance.gender();
        this.firstName = firstName || chance.first({ gender: this.gender });
        this.lastName = lastName || chance.last();
        this.age = age >= 0 ? age : chance.age();
        this.actions = [];
    }

    addAction(action) {
        this.actions.push(action);
    }

    update() {
        this.age++;

        this.actions.forEach((action) => {
            action();
        });
    }
}