// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius()", () => {
	it ("should encode correctly", () => {
    expect (polybius("thinkful")).to.equal("4432423352125413");
  });

  it("should decode correctly", () => {
    expect(polybius("4432423352125413",false)).to.equal("th(i/j)nkful");
  });

	it("should return false if number of characters (non-space) is odd", () => {
		expect(polybius("123", false)).to.equal(false);
	});

	it("should ignore non-alphabet characters", () => {
		expect(polybius("thinkful?!")).to.equal("4432423352125413");
	})

	it("should maintain spaces", () => {
    expect(polybius("hello world")).to.equal("3251131343 2543241341");
	});
	
	it("should ignore capital letters", () => {
		expect(polybius("ThInKfUl")).to.equal("4432423352125413");
	});

	it("should convert i or j to 42", () => {
		expect(polybius("thinkful")).to.equal("4432423352125413");
	});

	it("should convert 42 to (i/j)", () => {
		expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
	});
});