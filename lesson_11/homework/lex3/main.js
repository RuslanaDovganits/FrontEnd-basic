const obj = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const valueOfObject = (n) =>{
    const res = Object.values(n);
    let line = '';
    res.forEach((func)=>{
        line = res.join(", ");
    })
    
    return line;
    
}
valueOfObject(obj);
console.log(valueOfObject(obj));