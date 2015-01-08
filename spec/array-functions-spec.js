//array-functions-spec.js

var fns = require('../array-functions');

var arr = [0,1,2,3];
var myEachSq = [0,1,4,9];
var myEachPlusOne = [1,2,5,10];

var cb = function(element) {
	var element = element * element;	
	return element;
};

var cb2 = function(element) {
	var element = element + 1;
	//console.log(element);
	return element;
};

describe("myEach", function(){
	it("applies a callback to each item in an array", function(){
		expect(fns.myEach(arr,cb)).toEqual(myEachSq);
		expect(fns.myEach(arr,cb2)).toEqual(myEachPlusOne);			
	});
});
