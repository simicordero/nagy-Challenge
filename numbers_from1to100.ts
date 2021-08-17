console.log("hello")
let array = []

for (let i = 1 ; i<=100; i++){
    array.push(i)
}

console.log(doSomething(array))

function Determinar (number) {
    while((number%3 == 0) && (number%5 == 0))
    return "MUSICAL";
    while((number%5 == 0))
    return "TI";
    while((number%3 == 0))
    return "MUSIC";
    if(number!=""){
        return number
    }
}

function doSomething(obj) {
  for(let i = 1;i<=100;i++){
    if ((i%3 == 0) && (i%5==0)){
        obj[i-1] = "MUSICAL"
    }
    obj[(3*i)-1] = "MUSIC"
    obj[(5*i)-1] = "IT"
    
}
return obj.slice(0, [100])
}