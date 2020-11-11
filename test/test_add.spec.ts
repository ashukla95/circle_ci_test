import * as chai from "chai";

import * as add from "../addition/add";


describe("add function test suite: ", function () {
    it("returns 5 for 2+3: ", function () {
        chai.expect(add.add(2, 3)).to.equal(5);
    });

    it("5 != 4", function () {
        chai.expect(add.add(2, 3)).to.not.equal(4);
    })
})