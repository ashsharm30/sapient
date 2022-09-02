type containsF = (
    x: (number | string | boolean)[],
    y: number | string | boolean
) => boolean;

const contains: containsF = function (x, y) {
    return x.includes(y);
};

console.log(contains([1, 'hello', 3, true], 3));
console.log(contains([1, 'hello', 3, true], 5));
export {};