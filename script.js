var sum = 0;
var emp = ""
console.log("Hello");
function add() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum+value;
    emp = emp + ` + ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function sub() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum-value;
    emp = emp + ` - ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function mul() {
    value = parseInt(document.getElementById("num1").value)
    if(sum == 0) sum = 1*value;
    else sum = sum*value;
    emp = emp + ` * ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function div() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum/value;
    emp = emp + ` / ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function equals() {
    console.log(emp.substring(2,emp.length))
    document.getElementById("demo").innerHTML = `${emp.substring(2,emp.length)} = ${sum}`
}




