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

function prepend (element, list){
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

