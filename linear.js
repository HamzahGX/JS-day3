const array = [64, 34, 25, 12, 22, 11, 90];
const target = 22;
let position = -1;

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log(`Element found at position ${position}`);
} else {
    console.log(`Element not found in the array`);
}
