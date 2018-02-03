'use strict'


function chunk(array = [], size = 1){
    let resultArray = [];
    while (array.length) {
        resultArray.push(array.splice(0, size));
    }

    return resultArray;
};


function compact(array = []) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) resultArray.push(array[i]);
    }

    return resultArray;
}

function concat() {
    let resultArray = [];
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
        if (!(args[i] instanceof Array)) {
            resultArray.push(args[i])
        } else {
            for (let j = 0; j < args[i].length; j++) {
                resultArray.push(args[i][j]);
            }
        }
    }

    return resultArray;
}


function compareForDifferences(array, currentArray) {
    var newArray = [];
    array.forEach(el => {
        if (!(currentArray.includes(el))) {
            newArray.push(el);
        }
    })

    return newArray;
}

function difference(ars) {
    if (!arguments.length) {
        return []
    } else {
        var newArr = [];
        for (var j = 0; j < arguments[0].length; j++) {
            if (!(arguments[1].includes(arguments[0][j]))) {
                newArr.push(arguments[0][j]);
            }
        }

        for (var k = 2; k < arguments.length; k++) {
            newArr = compareForDifferences(newArr, arguments[k]);
        }

        return newArr;
    }
}

function drop(arr = [], size = 1) {
    return arr.slice(size, arr.length);
}

function dropRight(arr = [], size = 1) {
    return arr.slice(0, arr.length-size);
}

function fill(arr = [], value, start = 0, end = arr.length) {
    for(start; start < end; start++)
        arr[start] = value;

    return arr;
}

function head(arr) {
    if(arguments.length == 0 || !(arguments[0] instanceof Array)) return undefined;
    return arr[0];
}

function flatten(arr = []) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            for(let j = 0; j < arr[i].length; j++) {
                resultArray.push(arr[i][j]);
            }
        } else resultArray.push(arr[i])
    }

    return resultArray;
}

function getRidOfDepth(arg, temp) {
    if(arg instanceof Array) {
        for (let i = 0; i < arg.length; i++) {
            if (!(arg[i] instanceof Array)) {
                temp.push(arg[i]);
            } else getRidOfDepth(arg[i], temp);
        };
    } else temp.push(arg);
}

function flattenDeep(arr = []) {
    let resultArray = [];
    getRidOfDepth(arr, resultArray);

    return resultArray;
}

function flattenDepth(arr = [], depth = 1) {
    let resultArray = [];
    getRidOfDefDepth(arr, resultArray, depth);

    return resultArray;
}

function getRidOfDefDepth(arg, temp, depth) {
    for (let i = 0; i < arg.length; i++) {
        if ((arg[i] instanceof Array)) {
            if (depth) {
                getRidOfDefDepth(arg[i], temp, depth - 1);
            } else temp.push(arg[i]);
        } else temp.push(arg[i]);
    }
}


function fromPairs(pairs = {}) {
    var result = {};
    for (let i = 0; i < pairs.length; i++) {
        var onePair = pairs[i];
        result[onePair[0]] = onePair[1];
    }

    return result;
}

function indexOf(array = [], value, fromIndex = 0) {
    var result = -1;
    for(fromIndex; fromIndex < array.length; fromIndex++) {
        if (array[fromIndex] == value) {
            result = fromIndex;
            break;
        }
    }

    return result;
}

function initial(array) {
    return dropRight(array, 1);
}


function compareForIntersection(array, currentArray) {
    var newArray = [];
    array.forEach(el => {
        if (currentArray.includes(el)) {
            newArray.push(el);
        }
    })

    return newArray;
}

function intersection(ars = []) {
    var newArr = [];
    for (var t = 0; t < arguments.length; t++) {
        if (!(arguments[t] instanceof Array)) {
            arguments[t] = [];
        }
    }

    for (var i = 0; i < arguments[0].length; i++) {
        for (var j = 0; j < arguments[1].length; j++) {
            if (arguments[0][i] === arguments[1][j])
                newArr.push(arguments[0][i]);
        }
    }

    for (var k = 2; k < arguments.length; k++) {
        newArr = compareForIntersection(newArr, arguments[k]);
    }

    return newArr;
}


function join(array = [], separator = ',') {
    var resultString = separator;
    if (array instanceof Array) {
        array.forEach(el => {
            resultString = el + resultString;
        })
        resultString = initial(resultString);

        return resultString;
    } else return resultString;
}

function last(arr) {
    return(drop(arr, arr.length-1));
}


function nth(array, n = 0) {
    if(n < 0) {
        return array[array.length - 2];
    }

    return array[n];
}

function pull(array, ...values) {
    var ar = values;
    if (ar) {
        ar.forEach(el => {
            for(let i = 0; i < array.length; i++) {
                if(array[i] == el) {
                    array.splice(i, 1);
                }
            }
        })

        return array;
    }   else return array;
}

function pullAll(array = [], values = []) {
    values.forEach(el => {
        var index = 0;
        while ((indexOf(array, el, index)) != -1) {
            index = indexOf(array, el, index);
            array.splice(index, 1);
        }
    })

    return array;
}

function pullAt(arr = [], ...indexes) {
    var values = [], pulled = [];
    if(!(indexes instanceof Array)) {
        values = indexes;
    } else values = arguments[1];

    if(arr) {
        values.forEach(el => {
            for(var i = 0; i < arr.length; i++) {
                if(i == el) {
                    pulled.push(arr[i]);
                }
            }
        })
        arr = pullAll(arr, pulled);
        return pulled;
    }

    return [];
}

function remove(array = [], predicate) {
    var result = [], index = 0, indexes = [];
    if (!(arguments[0] instanceof Array)) {

        return result;
    }

    array.forEach (el => {
        if (predicate(el, index, array)) {
            result.push(el);
            indexes.push(index);
        }
        index++;
    });
    pullAt(array, indexes);

    return result;
}

function reverse(array = []) {
    var temp, length = array.length;
    for(var i = 0; i < length / 2; i++) {
        temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }

    return array;
}

function slice(array, start = [], end = []) {
    var result = [];
    if (!array.length) {
      return [];
    }

    if (!(end instanceof Number) || !(start instanceof Number)) {
        start = 0;
        end = array.length;
    }
    array.forEach(el => {
        result.push(el);
    });

    return result;
}


exports.sortedIndex = sortedIndex;
exports.slice = slice;
exports.reverse = reverse;
exports.remove = remove;
exports.pullAt = pullAt;
exports.nth = nth;
exports.last = last;
exports.join = join;
exports.intersection = intersection;
exports.initial = initial;
exports.indexOf = indexOf;
exports.fromPairs = fromPairs;
exports.flattenDepth = flattenDepth;
exports.flattenDeep = flattenDeep;
exports.flatten = flatten;
exports.head = head;
exports.fill = fill;
exports.dropRight = dropRight;
exports.drop = drop;
exports.difference = difference;
exports.concat = concat;
exports.compact = compact;
exports.chunk = chunk;
exports.pullAll = pullAll;
exports.pull = pull;