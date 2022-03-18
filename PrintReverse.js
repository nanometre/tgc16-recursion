function myPrintReverse(str){
    if (str.length === 0) {
        return ""
    }
    return str.slice(-1) + myPrintReverse(str.slice(0, str.length - 1)); 
}

function printReverse(str) {
    if (str.length === 1) {
        return str
    }
    return str[str.length - 1] + printReverse(str.slice(0, str.length -1))
}

console.log(myPrintReverse('hello'))
console.log(printReverse('hello'))