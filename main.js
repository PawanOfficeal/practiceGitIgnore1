//main js file
//window.addEventListener('DOMContentLoaded',changeBG)
let btn = document.getElementById('btn')
let mainClass = document.querySelector('.mainClass')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    mainClass.classList.add('changeBgMain')


})