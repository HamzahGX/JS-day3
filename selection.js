const inputArray = [64, 25, 12, 22, 11];

for (let i = 0; i < inputArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < inputArray.length; j++) {
        if (inputArray[j] < inputArray[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        [inputArray[i], inputArray[minIndex]] = [inputArray[minIndex], inputArray[i]]; 
    }
}

console.log("Original array:", inputArray);