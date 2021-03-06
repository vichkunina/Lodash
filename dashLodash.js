'use strict'

/* Array */
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
    return arr[arr.length - 1];
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

    array.forEach(el => {
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

function differenceBy(array = [], values = [], iteratee) {
    var result = [], array2 = [], values2 = [], result;
    if (!(arguments[0] instanceof Array)) {

        return result;
    }

    array.forEach (el => array2.push(iteratee(el)));
    values.forEach (el => values2.push(iteratee(el)));
    array.forEach(el => {
        if(iteratee(el) ==  difference(array2, values2)) {
            result = el;
        }});

    return result;
}

function intersectionBy(array = [], values = [], iteratee) {
    var result = [], array2 = [], values2 = [], result;
    if (!(arguments[0] instanceof Array)) {

        return result;
    }

    array.forEach (el => array2.push(iteratee(el)));
    values.forEach (el => values2.push(iteratee(el)));
    array.forEach(el => {
        if(iteratee(el) == intersection(array2, values2)) {
            result = el;
    }});

    return result;
}

function sortedIndex(array, value, maxIndex) {
    var start = 0, end = array.length;
    while (start < end) {
        var middle = Math.floor((start + end) / 2),
            data = array[middle];
        var criterion = maxIndex? data <= value : data < value;
        if (criterion) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return end;
}

function sortedIndexBy(array, value, iteratee) {
    value = iteratee(value);
    var start = 0, end = array.length;
    while (start < end) {
        var middle = Math.floor((start + end) / 2), data = iteratee(array[middle]);
        if (data < value) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return end;
}

function sortedIndexOf(array, value) {
    if(array) {
        var index = sortedIndex(array, value);
        if (value == array[index]) {
            return index;
        }
    }

    return -1;
}

function sortedLastIndex(array = [], value) {
    var maxIndex = true;

    return sortedIndex(array, value, maxIndex);
}

function tail(array = []) {
    if(array instanceof Array) {
        return array.slice(1, array.length);
    }

    return [];
}

function take(array = [], n = 1) {
    if(array instanceof Array) {
        return array.slice(0, n);
    }

    return [];
}

function takeRight(array = [], n = 1) {
    if(array instanceof Array) {
        if(n > array.length) {
            n = array.length;
        }

        return array.slice(array.length - n, array.length);
    }

    return [];
}


function union(arrays) {
    var resultArray = [];
    for(var i = 0; i < arguments.length; i++) {
        arguments[i].forEach(el => resultArray.push(el));
    }

    resultArray = uniq(resultArray);
    return resultArray;
}

function unionBy(...args) {
    let arr = [], arr2 = [], result = [], iteratee = last(args), i = 0, j = 0;

    if (typeof iteratee != 'function') {
        iteratee = undefined;
    }

    arr = flatten(initial(args));
    arr.forEach(el => arr2.push(iteratee(el)));
    arr2 = uniq(arr2);
    while(j != arr2.length) {
        if(iteratee(arr[i]) == arr2[j]) {
            result.push(arr[i]);
            i++; j++;
        } else i++;
    }

    return result;
}


function uniq(array) {
    var resultArray = [];
    array.forEach(el => {
        if (resultArray.indexOf(el) == -1) {
            resultArray.push(el);
        }
    });

    return resultArray;
}

function unzip(arr) {
    arr = zip(arr);
    return arr;
}

function zip(...args) {

    var arr = args, result = [];
    if(arr.length == 1 && arr[0] instanceof Array){
        arr = flatten(arr);
    }

    let maxIndex = maxAmountOfIndex(arr);
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            while(result.length <= j) {
                result.push([]);
            }
            result[j][i] = arr[i][j];
        }
    }

    return result;
}


function zipObject(props = [], values = []) {
    return fromPairs(zip(props, values));
}


function maxAmountOfIndex(args) {
    let result = [];
    for(let i = 0; i < arguments.length; i++) {
        result.push(arguments[i].length);
    }
    return max(result);
}


/* Lang */

var isArray = Array.isArray;

function isObject(value) {
    return value != null && (typeof value == 'object' || typeof value == 'function');
}

function castArray(value = []) {
    if(value instanceof Array) {
        return value;
    }
    let result = [];
    result.push(value);
    return result;
}


function max(array) {
    return array.reduce((a, b) => {
        return Math.max(a, b);
    });
}


exports.zipObject = zipObject;
exports.isObject = isObject;
exports.castArray = castArray;
exports.max = max;
exports.zip = zip;
exports.unzip = unzip;
exports.unionBy = unionBy;
exports.uniq = uniq;
exports.union = union;
exports.takeRight = takeRight;
exports.take = take;
exports.tail = tail;
exports.sortedLastIndex = sortedLastIndex;
exports.sortedIndexOf = sortedIndexOf;
exports.intersectionBy = intersectionBy;
exports.sortedIndexBy = sortedIndexBy;
exports.sortedIndex = sortedIndex;
exports.differenceBy = differenceBy;
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