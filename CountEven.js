function countEven(arr) {
    if (arr.length === 0) {
        return 0
    }

    if (arr[0] % 2 === 0) {
        return 1 + countEven(arr.slice(1))
    } else {
        return countEven(arr.slice(1))
    }
}

function countEvenV2(arr) {
    if (arr.length === 0) {
        return 0
    } 
    return (arr[0] % 2 ? 0 : 1) + countEvenV2(arr.slice(1))
}

console.log(countEven([1, 2, 3, 4, 5, 6, 6, 6, 6]))
console.log(countEvenV2([1, 2, 3, 4, 5, 6, 6, 6, 6]))