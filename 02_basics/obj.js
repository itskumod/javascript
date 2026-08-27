//objects
//singleton 
//object literals
const jsuser={
    name:"safar",
    age:32,
    sex:"male",
}

console.log(jsuser.name)
console.log(jsuser["sex"])

jsuser.emai="abc@gmail.com"
//Object.freeze(jsuser)

jsuser.greet=function( ){
    console.log(`hello user ${this.name}`)
}

jsuser.sex="female"
console.log(jsuser.greet())