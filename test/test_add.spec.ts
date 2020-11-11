import { expect } from "chai";

import { add } from "../addition/add";


describe("add function test suite: ", function () {
    it("returns 5 for 2+3: ", function () {
        expect(add(2, 3)).to.equal(5);
    });

    it("5 != 4", function () {
        expect(add(2, 3)).to.not.equal(4);
    })

    it("has one extra assertion", function () {
        expect(1).to.deep.equal(1);
    })
})