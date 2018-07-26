const multiplier = {
    numbers: [3, 6, 8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());