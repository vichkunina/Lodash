'use srtict'

var test = require('./dashLodash');
console.log(test.chunk([1, 3, 6, 7, 3, 6, 5], 2));
console.log(test.concat([1, 6, 8], 2, [3], [[4]]));
console.log(test.compact([0, 1, false, 2, '', NaN, null, 'rt', undefined]));
console.log(test.difference([2, 1], [1], []));
console.log(test.drop([1, 2, 3], 2));
console.log(test.dropRight([1, 2, 3]));
console.log(test.fill([4, 6, 8, 10], '*', 1, 3));
console.log(test.head([1, 4, 5]));
console.log(test.flatten([1, [2, [3, [4]], 5]]))
console.log(test.flattenDeep([1, [2, [3, [4]], 5]]));
console.log(test.flattenDepth([1, [2, [3, [4]], 5]], 2));
console.log(test.fromPairs([['a', 1], ['b', 2]]));
console.log(test.indexOf([1, 2, 7, 1, 2, 7, 7], 7, 3));
console.log(test.initial([1, 2, 3, 5]));
console.log(test.intersection([2, 3], [1, 3], [ 3, 6], [3, 3]));
console.log(test.join(['a', 'b', 'c'], ','));
console.log(test.last([2, 5, 7, 4]));
console.log(test.nth(['a', 'b', 'c', 'd'], 1));
console.log(test.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'b'));
console.log(test.pullAll(['c', 'a', 'a', 'a'], ['a', 'c']));
console.log(test.pullAt([1, 2, 3, 4], [1, 3]));
console.log(test.remove([1, 2, 3, 4], function(n) {
    return n % 2 == 0;
}));
console.log(test.reverse([1, 2, 3, 4, 5]));
console.log(test.slice([1, 2, 3, 4, 5], 1, 3));
// console.log(test.sortedIndex([30, 50], 40));