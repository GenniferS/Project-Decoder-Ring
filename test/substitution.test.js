// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution()", () => {
	const letters = "xoyqmcgrukswaflnthdjpzibev";
	it("should encode the message correctly", () => {
		expect(substitution("thinkful", letters)).to.equal("jrufscpw");
	});

	it("should decode the message correctly", () => {
		expect(substitution("jrufscpw", letters, false)).to.equal("thinkful");
	});
	
	it("should maintain spaces throughout", () => {
		expect(substitution("you are an excellent spy", letters)).to
			.equal("elp xhm xf mbymwwmfj dne");
	});

	it("should ignore capital letters", () => {
		expect(substitution("ThInKfUl", letters)).to.equal("jrufscpw");
	});

	it("should be able to use symbols within the alphabet", () => {
		expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to
			.equal("y&ii$r&");
	});

	it("should return false if alphabet does not have 26 characters", () => {
		expect(substitution("thinkful", "short")).to.equal(false);
	});

	it("should return false if alphabet contains non-unique characters", () => {
		expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to
			.equal(false);
	});
});