let obj = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: 2
    }
}
let v = obj.a
Object.defineProperty(obj, 'a', {
    get(k) {
        console.log(k)
    },
    set(val) {
        if (v !== val) {
            
            console.log(val)
        }
    }
})
obj.a
obj.a = 3
