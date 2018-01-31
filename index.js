var test = require('./dashLodash');
console.log(test.chunk([1, 3, 6, 7, 3, 6, 5], 2));
console.log(test.concat([1, 6, 8], 2, [3], [[4]]));
console.log(test.compact([0, 1, false, 2, '', NaN, null, 'rt', undefined]));
console.log(test.difference([1, 3, 1], [1, 6, 7]));
console.log(test.drop([1, 2, 3], 2));
console.log(test.dropRight([1, 2, 3]));
console.log(test.fill([4, 6, 8, 10], '*', 1, 3));
console.log(test.head([1, 4, 5]));
console.log(test.flatten([1, [2, [3, [4]], 5]]))
console.log(test.flattenDeep([1, [2, [3, [4]], 5]]));
console.log(test.flattenDepth([1, [2, [3, [4]], 5]], 2));
console.log(test.fromPairs([['a', 1], ['b', 2]]));