//primitive
//7 type->String ,Number,Boolean,null,undefined,Symbol,BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outside_temp=null

const id=Symbol('123')
const anotherId=Symbol('123')

const bigint=37846648625436845;

//console.log(id===anotherId)

//refrence(non premative)
//Array,Object,Function

const heros=["batman","Iron man","Spider man","Pad man"]


let myobj={
    name:"subhash",
    age: 21,
    gen: "male",
}

const myfun=function(){
    console.log("hello world")

}

//console.log(typeof bigint)


//************************************** */
//stack(primitive) //heap(non premative)

let name="ravi";
let anothername=name;
anothername="Ram"
console.log(name)
console.log(anothername)

let userone={
    name:"Ravi",
    age:31,
    sex:"male",

}
let usertwo=userone

usertwo.name="krishna"
console.log(userone)
console.log(usertwo)
