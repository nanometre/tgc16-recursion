function myFindIndex(arr, n){
    if (arr.length === 0) {
        return -1
    }

    if (arr.pop() === n) {
        return arr.length
    } else {
        return myFindIndex(arr, n)
    }
}

function findIndex(arr, wanted) {
    if (arr.length === 0) {
        return -1 // not found
    }

    if (arr[arr.length -1] === wanted) {
        return arr.length
    }
    return findIndex(arr.slice(0, arr.length - 1), wanted)
}

console.log(findIndex([1, 5, 6, 7], 7))