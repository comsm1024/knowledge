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
    for (const k in obj) {
        let v = obj[k]
        if(_isObject(v)) {
            observe(v)
        }
        Object.defineProperty(obj, k, {
            get() {
                console.log(k, '读取')
                return v
            },
            set(val) {
                if (v !== val) {
                    console.log(k, '更改')
                    v = val
                }
            }
        })
    }
}

observe(obj)

obj.a = 3


