function palindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true
    }

    if (str.slice(0, 1) === str.slice(-1)) {
        return palindrome(str.slice(1, -1))
    } else {
        return false
    }
}

console.log(palindrome('tenet'))