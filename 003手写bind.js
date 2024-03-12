
Function.prototype.myBind = function (ctx) {
    // 收集参数
    // 存储this
    /**
     * 返回一个函数
     * 收集函数内的所有参数
     * 和上一步收集的参数合并
     * 判断返回函数的调用方式是使用new关键字还是直接调用
     * 如果是使用new调用，返回函数内也使用new调用，并使用扩展运算符传入合并的参数
     * 如果是直接调用，使用apply绑定ctx，并传入合并的参数
     */

    let args = Array.prototype.slice.call(arguments, 1)
    let fn = this

    return function A() {
        let restArgs = Array.prototype.slice.call(arguments)
        let allArgs = args.concat(restArgs)
        if (Object.getPrototypeOf(this) === A.prototype) {
            return new fn(...allArgs)
        } else {
            return fn.apply(ctx, allArgs)
        }
    }
}

