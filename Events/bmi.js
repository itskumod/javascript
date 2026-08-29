//BMI INDEX
//weight/height*height(m)  form

document.querySelector('form')

FormData.addEventListener("submit",function(e){
    e.preventDefault();
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const res=document.querySelector('#result')

    res.innerHTML=w/(h*h)

})