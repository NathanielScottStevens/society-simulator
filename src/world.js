'use strict';

export default class World {
    constructor(){
        this.agents = [];
    }

    addAgent(agent){
        this.agents.push(agent);
    }

    update(){
        this._updateAgents();
    }

    _updateAgents(){
        this.agents.forEach((agent) => {
            agent.update();
        });
    }
}