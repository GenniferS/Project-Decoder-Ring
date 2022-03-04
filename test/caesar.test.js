// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe ("caesar()", () => {
  it ("should encode the input correctly", () => {
    expect (caesar("thinkful", 3)).to.equal("wklqnixo");
  });
  it ("should decode the input correctly", () =>{
    expect (caesar("wklqnixo", 3, false)).to.equal("thinkful");
  });
  it ("should return false if the shift value is undefined, equal to 0, < -25, or > 25", () =>{
    expect (caesar("thinkful", undefined)).to.equal(false);
  });
  it ("should ignore capital letters", () => {
    expect (caesar("ThInKfUl",3)).to.equal("wklqnixo");
  });
  it ("should maintain spaces and other nonalphabetic symbols", () => {
    expect (caesar("Thinkful!",3)).to.equal("wklqnixo!");
  });
  it ("should wrap around to the front of the alphabet", () => {
    expect (caesar("z",3)).to.equal("c");
  });
});