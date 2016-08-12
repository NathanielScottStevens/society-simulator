'use strict';
import { expect } from 'chai';
import Sinon from 'sinon';
import World from '../src/world';
import Agent from '../src/agent';

describe("World", function() {

    describe("Agents", function() {
        let agent;
        let world;

        beforeEach(function() {
            agent = new Agent();
            Sinon.spy(agent, "update");
            world = new World();
            world.addAgent(agent);
        });

        it("Calls update on agents", function(){
            for (var i = 0; i < 5; i++){
                world.update();
            }
            expect(agent.update.callCount).to.equal(5);
        });
    });
});