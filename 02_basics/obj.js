// //objects
// //singleton 
// //object literals
// const jsuser={
//     name:"safar",
//     age:32,
//     sex:"male",
// }

// console.log(jsuser.name)
// console.log(jsuser["sex"])

// jsuser.emai="abc@gmail.com"
// //Object.freeze(jsuser)

// jsuser.greet=function( ){
//     console.log(`hello user ${this.name}`)
// }

// jsuser.sex="female"
// console.log(jsuser.greet())

//declearation via constructor

//const tinderuser=new Object()

//non-singleton
// const tinderuser={}
// tinderuser.id="123qwe"
// tinderuser.name="Ranveer"
// tinderuser.age=23

// const regularuser={
//     email:"abc@123gmail.com",
//     fullName :{
//         userfullname:{
//             firstname:"Kumod",
//             lastname:"singh"
//         }

//     }

// }


// let obj1={1:"a",2:"w",3:"d"}
// let obj2={5:"s",9:"u",10:"x"
// }


// //let obj3=Object.assign(obj1,obj2)
// let obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))


const course={
    course:"js in hindi",
    price:"999",
    courseIns:"Ravi"
}

const {courseIns:c}=course

console.log(c)