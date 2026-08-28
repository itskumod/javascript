//arrow function
const user={
    username:"kumod",
    price:999,
    welcomeMessage: function(){
        console.log(`welcome ${this.username}`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username="radha"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     username="kumod"
//     console.log(this.username);
// }

// chai()

//Arrow function

const chai=()=>{
    username="kumod"
    console.log(this)

}

//chai()

// const addtwo=(n1,n2)=>{
//     return n1+n2;
// }

//implicit return 
const addtwo=(n1,n2)=> n1+n2
const addtwo2=()=>({username:"kumod"})


console.log(addtwo2(4,7))