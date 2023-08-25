const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const n = unsortedArray.length;

for (let i = 1; i < n; i++) {
    let key = unsortedArray[i];
    let j = i - 1;
    while (j >= 0 && unsortedArray[j] > key) {
        unsortedArray[j + 1] = unsortedArray[j];
        j--;
    }
    unsortedArray[j + 1] = key;
}

console.log(unsortedArray);
