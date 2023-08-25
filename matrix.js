const matrix = [
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0]
];

let zeroCount = 0;
for (let row of matrix) {
    for (let num of row) {
        if (num === 0) {
            zeroCount++;
        }
    }
}

console.log(`Count of occurrences of "0": ${zeroCount}`);