//date

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


let created_date=new Date(2023,0,23,5,56,)
console.log(created_date.toLocaleString())
console.log(myDate.toDateString())


let timestamp=Date.now()

console.log( timestamp)
console.log(created_date.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate=new Date()

console.log(newdate.getMonth())
console.log(newdate.getDay())