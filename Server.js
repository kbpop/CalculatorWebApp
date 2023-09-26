


const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")

const add = document.getElementById("+")
const sub = document.getElementById("-")
const mult = document.getElementById("*")
const div = document.getElementById("/")

const result = document.getElementById("=")
const reset = document.getElementById("reset")

const text = document.getElementById("current-text")


one.addEventListener("click",() => numberFunc(one))
two.addEventListener("click",() => numberFunc(two))
three.addEventListener("click",() => numberFunc(three))
four.addEventListener("click",() => numberFunc(four))
five.addEventListener("click",() => numberFunc(five))
six.addEventListener("click",() => numberFunc(six))
seven.addEventListener("click",() => numberFunc(seven))
eight.addEventListener("click",() => numberFunc(eight))
nine.addEventListener("click",() => numberFunc(nine))
zero.addEventListener("click",() => numberFunc(zero))

add.addEventListener("click",() => passFunction("add"))
sub.addEventListener("click",() => passFunction("sub"))
mult.addEventListener("click",() => passFunction("mult"))
div.addEventListener("click",() => passFunction("div"))
result.addEventListener("click",() => res(previous,func))
reset.addEventListener("click",() => burn())


resultBox = document.getElementById("calculations")
// one.addEventListener("click",() => numberFunc(one))
let calculations = []
let previous = 0
let func = null

function numberFunc(type) {
    if (text.innerHTML == "0")
    {
        text.innerHTML = type.id
    }
    else
    {
        text.innerHTML += type.id;
        console.log(type)
    }
}

function passFunction (type) {
    if(text.innerHTML != "0"){
        previous = parseInt(text.innerHTML)
        text.innerHTML = "0"
        func = type
        console.log(func)
    }
}   

function res(previous,type){

    if(type == "add")
    {
        output = previous + Number(text.innerHTML);
    }
    else if(type == "sub")
    {
        output = previous - Number(text.innerHTML);
    }
    else if(type == "div")
    {
        output = previous / Number(text.innerHTML);
    }
    else if(type == "mult")
    {
        output = previous * Number(text.innerHTML);
    }
    
    func = null
    console.log(output)

    let calc = new Calculations(previous,type,parseInt(text.innerHTML),output)
    text.innerHTML = output;

    var temp = document.createElement('div');
    temp.innerHTML = calc.display()
    console.log(calc)
    
    resultBox.prepend(temp)
    calculations.push(calc);
}

function burn(){    
    previous = 0
    func = null
    text.innerHTML = "0"
}

class Calculations{ 
    constructor(previous, type, latest, result) {
        const funDic = {"add":"+","sub":"-","mult":"*","div":"/"}
        this.pre = previous
        this.type = funDic[type]
        this.post = latest 
        this.result = result
        }

    display(){
        return this.pre + " " + this.type + " " + this.post + " = "+ this.result;
    }
    }



