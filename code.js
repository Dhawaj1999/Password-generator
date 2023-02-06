else if(firstCheckbox.checked == true && secondCheckbox.checked == true){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "
    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * upperAndLower.length)
        document.querySelector(".password1").innerHTML += upperAndLower[random]
        }
    
    for(let j = 0; j < 15; j++){
        let random = Math.floor(Math.random() * upperAndLower.length)
        document.querySelector(".password2").innerHTML += upperAndLower[random]
        }  
}

else if(firstCheckbox.checked == true && thirdCheckbox.checked == true){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "

    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * upperAndNumber.length)
        document.querySelector(".password1").innerHTML += upperAndNumber[random]
    }

    for(let j = 0; j < 15; j++){
        let random = Math.floor(Math.random() * upperAndNumber.length)
        document.querySelector(".password2").innerHTML += upperAndNumber[random]
    }

}

























else if(firstCheckbox.checked == true){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "
    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * upperCase.length)
        document.querySelector(".password1").innerHTML += upperCase[random]
    }

    for(let j = 0; j < 15; j++){
        let random = Math.floor(Math.random() * upperCase.length)
        document.querySelector(".password2").innerHTML += upperCase[random]
    }  
}

else if(secondCheckbox.checked == true){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "
    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * lowerCase.length)
        document.querySelector(".password1").innerHTML += lowerCase[random]
        }
    
    for(let j = 0; j < 15; j++){
        let random = Math.floor(Math.random() * lowerCase.length)
        document.querySelector(".password2").innerHTML += lowerCase[random]
        }  
}

else if(thirdCheckbox.checked == true){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "
    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * number.length)
        document.querySelector(".password1").innerHTML += number[random]
        }
    
    for(let j = 0; j < 15; j++){
        let random = Math.floor(Math.random() * number.length)
        document.querySelector(".password2").innerHTML += number[random]
        }  
}

else if(fourthCheckbox.checked == true){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "
    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * symbols.length)
        document.querySelector(".password1").innerHTML += symbols[random]
        }
    
    for(let j = 0; j < 15; j++){
        let random = Math.floor(Math.random() * symbols.length)
        document.querySelector(".password2").innerHTML += symbols[random]
        }  
}