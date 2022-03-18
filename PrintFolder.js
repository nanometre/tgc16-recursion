function printFolder(str) {
    let newStr = str.slice(1)
    if (str.length === 0) {
        return;
    }
    if (newStr.indexOf('/') != -1) {
        console.log(newStr.slice(0, newStr.indexOf('/')))
        return printFolder(newStr.slice(newStr.indexOf('/')))
    } else {
        return newStr.slice()
    }
    
}

console.log(printFolder('/images/dogs/cute/snoopy.png'))