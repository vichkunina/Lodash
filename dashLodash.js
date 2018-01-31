'use strict'

exports.chunk = function(array = [], size = 1){
    let resultArray = [];
    while (array.length) {
        resultArray.push(array.splice(0, size));
    }

    return resultArray;
};


exports.compact = function(array = []) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) resultArray.push(array[i]);
    }
    return resultArray;
}

exports.concat = function() {
    let resultArray = [];
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
        if (!(args[i] instanceof Array))
            resultArray.push(args[i])
        else {
            for (let j = 0; j < args[i].length; j++) {
                resultArray.push(args[i][j]);
            }
        }
    }

    return resultArray;
}

exports.difference = function(arrFrom = [], arrWhat) {
    let resultArray = [];
    for(let i = 0; i < arrFrom.length; i++)
        if (!(arrWhat.includes(arrFrom[i]))) {
            resultArray.push(arrFrom[i]);
            console.log(arrFrom[i]);
        }
    return resultArray;
}


exports.drop = function(arr = [], size = 1) {
    return arr.slice(size, arr.length);
}

exports.dropRight = function(arr = [], size = 1) {
    return arr.slice(0, arr.length-size);
}

exports.fill = function(arr = [], value, start = 0, end = arr.length) {
    for(start; start < end; start++)
        arr[start] = value;

    return arr;
}

exports.head = function(arr) {
    if(arguments.length == 0 || !(arguments[0] instanceof Array)) return undefined;
    return arr[0];
}

exports.flatten = function(arr = []) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array)
            for(let j = 0; j < arr[i].length; j++)
                resultArray.push(arr[i][j]);
        else resultArray.push(arr[i])
    }

    return resultArray;
}

function getRidOfDepth(arg, temp) {
    if(arg instanceof Array) {
        for (let i = 0; i < arg.length; i++) {
            if (!(arg[i] instanceof Array))
                temp.push(arg[i]);
            else getRidOfDepth(arg[i], temp);
        };
    } else temp.push(arg);
}

exports.flattenDeep = function(arr = []) {
    let resultArray = [];
    getRidOfDepth(arr, resultArray)
    return resultArray;
}

exports.flattenDepth = function(arr = [], depth = 1) {
    let resultArray = [];
    getRidOfDefDepth(arr, resultArray, depth);
    return resultArray;
}

function getRidOfDefDepth(arg, temp, depth) {
    for (let i = 0; i < arg.length; i++) {
        if ((arg[i] instanceof Array)) {
            if (depth)
                getRidOfDefDepth(arg[i], temp, depth - 1);
            else temp.push(arg[i]);
        } else temp.push(arg[i]);
    }
}


exports.fromPairs = function(pairs = {}) {
    var result = {};
    for (let i = 0; i < pairs.length; i++) {
        var onePair = pairs[i];
        result[onePair[0]] = onePair[1];
    }
    return result;
}

