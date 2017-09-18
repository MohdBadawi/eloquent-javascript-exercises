// Exercise 1 build a range and sum functions

function rangeOlderVersion(start, end){
    var result = [];
    for (var i = start; i <= end; i++)
        result.push(i);
    return result;
}

function sum (arr){
	var result = 0;
    for (var i = 0; i < arr.length; i++)
        result += arr[i];
    return result;
}

function range(start, end, step) { // the updated version of range to include the steps and also work backwards
  if (step == undefined) step = 1;
  var result = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      result.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      result.push(i);
  }
  return result;
}

// Exercise 2: Reversing an array and reversing an array in place

function reverseArray(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--)
    result.push(arr[i]);
  return result;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// Exercise 3
// creating lists, reversing lists, prepending to a list, finding the value of nth list
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list){
    var array = [];
	var node = list;
    while (node){
        array.push(node.value);
		node = node.rest;
    }
return array;
}

function listToArray2(list){
    var array = [];
    for (var node = list; node; node = node.rest)
        array.push(node.value);
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function prepend2(element, list){
    var newList = {
        value: element,
        rest: list
    }
    return newList;
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}


// Exerice 4: Deep Comparison 
// I will get back to this part later on