const balance=new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2))

const other=23.234554
console.log(other.toPrecision(3))
const hundred=1000000000
console.log(hundred.toLocaleString('en-IN'))

console.log(Math.abs(-5))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(4.5,5,67,3,2))
console.log(Math.max(4.5,45,65.45,53,45))
console.log(Math.random()*10)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
