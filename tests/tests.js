var expect = chai.expect;

describe("max", function() {
	it("should exist", function() {
		expect(max).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(max(8, 7)).to.equal(8);
	});
	it("should return zero if I pass in zero and one", function() {
	expect(max(0, 1)).to.equal(1);
	});
	it("should throw an error is input is not string", function() {
	expect (function() { max("", 5);}).to.throw("Invalid Input");
	});
});

describe("maxOfThree", function() {
	it("should exist", function() {
		expect(maxOfThree).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(maxOfThree(8, 7, 11)).to.equal(11);
	});
	it("should return zero if I pass in zero and one", function() {
	expect(maxOfThree(0, 1, 0)).to.equal(1);
	});
	it("should throw an error is input is not string", function() {
	expect (function() { maxOfThree(undefined, 5);}).to.throw("Invalid Input");
	});
});

describe("isVowel", function() {
	it("should exist", function() {
		expect(isVowel).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(isVowel("o")).to.equal(true);
	});
	it("should return zero if I pass in zero and one", function() {
	expect(isVowel("q")).to.equal(false);
	});
	it("should throw an error is input is not string", function() {
	expect (function() { isVowel(5);}).to.throw("Invalid Input");
	});
});

describe("sum", function() {
	it("should exist", function() {
		expect(sum).to.not.be.undefined;
	});
	it("should return zero if I pss in an empty array", function() {
		expect(sum([])).to.equal(0);
	});
	it("should return zero if I pss in an empty array", function() {
	expect(sum([1,2,3])).to.equal(6);
	});
});

describe("multiply", function() {
	it("should exist", function() {
		expect(multiply).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(multiply([5, 5, 2])).to.equal(50);
	});
	it("should return zero if I pass in zero and one", function() {
	expect(multiply([0, 1])).to.equal(0);
	});
	it("should throw an error is input is not string", function() {
	expect (function() { multiply(0);}).to.throw("Invalid Input");
	});
	it("should throw an error is input is not string", function() {
	expect (function() { multiply([2, undefined]);}).to.throw("Invalid Input");
	});
});

describe("findLongestWord", function() {
	it("should exist", function() {
		expect(findLongestWord).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(findLongestWord(["green", "red", "blue"])).to.equal("green");
	});
	it("should return zero if I pass in zero and one", function() {
	expect(findLongestWord(["blue", "blue", "yellow"])).to.equal("yellow");
	});
});

describe("filterLongWords", function() {
	it("should exist", function() {
		expect(filterLongWords).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(filterLongWords(["green","red", 4])).to.deep.equal(["green"]);
	});
	it("should return zero if I pass in zero and one", function() {
	expect(filterLongWords(["red", "blue", "green", 3])).to.eql(["blue", "green"]);
	});
});

describe("charFreq", function() {
	it("should exist", function() {
		expect(charFreq).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 8 & 7", function() {
		expect(charFreq("cat")).to.deep.equal("c:1a:1t:1");
	});
	it("should return zero if I pass in zero and one", function() {
	expect(charFreq("tall")).to.eql("t:1a:1l:2");
	});
	it("should throw an error is input is not string", function() {
	expect (function() { charFreq(5);}).to.throw("Invalid Input");
	});
});


















