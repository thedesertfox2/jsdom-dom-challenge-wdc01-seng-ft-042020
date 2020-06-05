document.addEventListener("DOMContentLoaded", openFunction)


function myCallBack()
{   
    let counter = document.querySelector("#counter") 
    let number = counter.innerHTML 
        number++ 
    counter.innerHTML = number    
}


function openFunction(){
    let intervalID = window.setInterval(myCallBack, 1000);

    let minus = document.querySelector("#minus")
    minus.addEventListener("click", handleMinus)

    let plus = document.querySelector("#plus")
    plus.addEventListener("click", myCallBack)

    let pause = document.querySelector("#pause")
    pause.addEventListener("click", handlePause)
}

function handleMinus(e){
    let counter = document.querySelector("#counter") 
    let number = counter.innerHTML 
        number--
    counter.innerHTML = number  
}

function handlePause(e){
    let pause = document.querySelector("#pause")
    pause.innerHTML = 

}









