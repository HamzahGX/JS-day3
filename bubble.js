const inputArray = [64, 34, 25, 12, 22, 11, 90];

const n = inputArray.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (inputArray[j] > inputArray[j + 1]) {
            [inputArray[j], inputArray[j + 1]] = [inputArray[j + 1], inputArray[j]];
        }
    }
}

console.log("Original array:", inputArray);