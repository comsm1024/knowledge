
// Array.prototype.myUnshift = function () {
//     this.splice(0, 0, ...arguments)
//     return this.length
// }

Array.prototype.myUnshift = function () {
    const len = arguments.length
    for (let i = len - 1; i >= 0; i--) {
        this.splice(0, 0, arguments[i])
    }
    return this.length
}

let arr = [1, 2]
arr.myUnshift(3, 4)
console.log(arr)