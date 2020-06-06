// const intervalID = window.setInterval(myCallBack, 1000);

document.addEventListener("DOMContentLoaded", () => {
    openFunction()
})


function myCallBack() {   
    let counter = document.querySelector("#counter") 
    let pause = document.querySelector('#pause')
    if (pause.innerText === 'Pause') {
        let number = counter.innerHTML 
        number++ 
        counter.innerHTML = number 
    }   
}


function openFunction(){
    const intervalID = window.setInterval(myCallBack, 1000);
    let minus = document.querySelector("#minus")
    minus.addEventListener("click", handleMinus)

    let plus = document.querySelector("#plus")
    plus.addEventListener("click", myCallBack)

    let pause = document.querySelector("#pause")
    pause.innerText = 'Pause'
    pause.addEventListener("click", function () {handlePause(intervalID)})
}

function handleMinus(e){
    let counter = document.querySelector("#counter")
    let pause = document.querySelector('#pause')
    if (pause.innerText === 'Pause') {
        let number = counter.innerHTML 
        number--
        counter.innerHTML = number 
    }    
     
}

function handlePause (id){
    
    let pausing = clearInterval(id)
    

    let pause = document.querySelector("#pause")
    pause.parentNode.removeChild(pause)

    let stopp = document.createElement('button')
    stopp.setAttribute('id', 'pause')

    stopp.innerText = 'Resume'
    document.body.appendChild(stopp)

    stopp.addEventListener("click", openFunction)
    

}

// function handleResume (e) {
//     debugger
    
//     let pause = document.querySelector("#pause")
//     pause.innerText = 'Pause'
//     return openFunction()

    
    

// }









