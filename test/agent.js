'use strict'
let expect = require("chai").expect;
let Agent = require("../src/agent");

describe("Agent", function() {

    describe("Parameters", function() {
        it("Assigns", function() {
            let a = new Agent("Stevens", "Nathaniel", "Male", 26);

            expect(a.firstName).to.equal("Nathaniel");
            expect(a.lastName).to.equal("Stevens");
            expect(a.gender).to.equal("Male");
            expect(a.age).to.equal(26);
        });

        it("Generates default", function() {
            let a = new Agent();

            expect(a.firstName).to.not.be.undefined;
            expect(a.firstName).to.be.a('string');

            expect(a.lastName).to.not.be.undefined;
            expect(a.lastName).to.be.a('string');

            expect(a.gender).to.not.be.undefined;
            expect(a.gender).to.be.a('string');

            expect(a.age).to.not.be.undefined;
            expect(a.age).to.be.a('number');
        });

        it("Allows age to be set to 0", function() {
            let a = new Agent("Stevens", "Nathaniel", "Male", 0);

            expect(a.age).to.equal(0);
        });
    });

    describe("Update", function() {
        let a;

        beforeEach(function(){
            a = new Agent("Stevens", "Nathaniel", "Male", 0);
        });

        it("Increments age", function(){
            for (var i = 0; i < 5; i++){
                a.update();
            }
            expect(a.age).to.equal(5);
        });

        it("Calls actions", function() {
            let counter = 0;
            function count(){
                counter++;
            }
            a.addAction(count);

            for (var i = 0; i < 5; i++){
                a.update();
            }

            expect(counter).to.equal(5);
        });
    });

});