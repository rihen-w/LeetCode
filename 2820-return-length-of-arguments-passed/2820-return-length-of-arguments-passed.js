/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let length = args.length
    return length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */