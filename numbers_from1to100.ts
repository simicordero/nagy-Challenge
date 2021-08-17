console.log("hello")
let array = []

for (let i = 1 ; i<=100; i++){
    array.push(i)
}

console.log(doSomething(array))

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
