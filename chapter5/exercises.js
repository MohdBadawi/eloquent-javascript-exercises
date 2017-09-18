
// ******* Exercise 5.1: Flattening *********
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
console.log(arrays.reduce(function(a, b){
    return a.concat(b);
}));

// ***** Exercise 5.4: Every and then some ******
// this can also be done with forEach, but it will need more lines of code and basically it is a hassle
function every (array, f){
    for (var i =0; i<array.length; i++){ 
        if (!f(array[i]))
            return false;
    }
    return true;
}
function some (array, f){
    for (var i =0; i<array.length; i++){
        if (f(array[i]))
            return true;
    }
    return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false