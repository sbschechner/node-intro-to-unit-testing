var fizzBuzz = require("../fizzBuzzer.js");

require('chai').should();

describe("fizzBuzz", function(){
	it("should return error if not a number", function(){
		// test number cases
		//bad inputs listed in an array so then I can test them
		var badInput = [
		"hello",
		'a',
		"6",
		];


		badInput.forEach(function(input){ //goes through each item in the array as input
			(function(){
				fizzBuzz(input)
			}).should.throw(Error);

		});
	});

	it("should run the normal fizzBuzz Test", function(){
		//NORMAL CASES
		var goodInput = [
			{a: 5, expected: "buzz"}, //creating an array of objects
			{a:3, expected: "fizz"},
			{a:15, expected: "fizz-buzz"}
		];

		goodInput.forEach(function(input){
			var answer = fizzBuzz(input.a);
			answer.should.be.equal(input.expected);
		});
	});
});