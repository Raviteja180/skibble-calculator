function add(){
    let a = document.getElementById('num1');
    let b = document.getElementById('num2');
    let res = document.getElementById('result');
    if(a.value == "" || b.value == "")
    res.value = NaN;
    else
    res.value = Number(a.value) + Number(b.value);
}
function mul(){
    let a = document.getElementById('num1');
    let b = document.getElementById('num2');
    let res = document.getElementById('result');
    if(a.value == "" || b.value == "")
    res.value = NaN;
    else
    // res.value = Number(a.value) * Number(b.value);
    res.value = a.value * b.value;
}
function sub(){
    let a = document.getElementById('num1');
    let b = document.getElementById('num2');
    let res = document.getElementById('result');
    if(a.value == "" || b.value == "")
    res.value = NaN;
    else
    // res.value = Number(a.value) - Number(b.value);
    res.value = a.value - b.value;
}
function div(){
    let a = document.getElementById('num1');
    let b = document.getElementById('num2');
    let res = document.getElementById('result');
    if(a.value == "" || b.value == "")
    res.value = NaN;
    else
    // res.value = Number(a.value) / Number(b.value);
    res.value = a.value / b.value;
}
document.getElementById('result').disabled = true;