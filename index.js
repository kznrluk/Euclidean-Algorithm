const Euclidean = (x, y) => !(x % y) ? y : Euclidean(y, x % y);

console.log(Euclidean(3355, 2379));
// => 61