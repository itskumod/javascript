//chaining

let n=[23,5,4,56,32,55,65,11]

const mynum=n.map((num)=>num+10).map((sec)=>sec*5).filter((th)=>th<300)

//console.log(mynum)

//reduce
const rednum=n.reduce((acc,curr)=>{
      return acc+curr;
},0)

console.log(rednum)