let obj = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: 2
    }
}

function _isObject(o) {
    return typeof o === 'object' && o != null
}
function observe(obj) {
    const proxy = new Proxy(obj, {
        get(target, k) {
            const v = target[k]
            console.log(k, '读取', v, _isObject(v))
            if (_isObject(v)) {
                observe(v)
            }
            return v
        },
        set(target, k, val) {
            if (val !== target[k]) {
                console.log(k, '更改')
                target[k] = val
            }
        },
        deleteProperty(target, k) {
            console.log(k, '删除')
        }
    })
    return proxy
}
const proxy = observe(obj)

proxy.c
proxy.c.a = 3
console.log(obj)
