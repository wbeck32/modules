//array-functions.js

//var arr = [0,1,2,3,5,8,13];

module.exports.myEach = function(array,fn) {
	array.forEach(function(v,i) {
		array[i] = fn(array[i]);
	});
	console.log("myEach: ",array);	
	return array;
};
