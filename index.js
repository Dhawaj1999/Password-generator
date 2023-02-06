const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

const upperCase = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z"]

const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z"]

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

const upperAndLower = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z"]

const upperAndNumber = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const upperAndSymbols = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

const lowerAndNumber = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const lowerAndSymbols = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

const numberAndSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

const upperLowerNumber = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const upperNumberSymbols = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

const upperLowerSymbol = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

const lowerNumberSymbols = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]

let firstCheckbox = document.querySelector(".first")
let secondCheckbox = document.querySelector(".second")
let thirdCheckbox = document.querySelector(".third")
let fourthCheckbox = document.querySelector(".fourth")

function generatePassword(){
    reset()
    
    if(firstCheckbox.checked == true && secondCheckbox.checked == true && thirdCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * upperLowerNumber.length)
            document.querySelector(".password1").innerHTML += upperLowerNumber[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * upperLowerNumber.length)
            document.querySelector(".password2").innerHTML += upperLowerNumber[random]
        }
    
    }

    else if(firstCheckbox.checked == true && thirdCheckbox.checked == true && fourthCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * upperNumberSymbols.length)
            document.querySelector(".password1").innerHTML += upperNumberSymbols[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * upperNumberSymbols.length)
            document.querySelector(".password2").innerHTML += upperNumberSymbols[random]
        }
    
    }

    else if(firstCheckbox.checked == true && fourthCheckbox.checked == true && secondCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * upperLowerSymbol.length)
            document.querySelector(".password1").innerHTML += upperLowerSymbol[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * upperLowerSymbol.length)
            document.querySelector(".password2").innerHTML += upperLowerSymbol[random]
        }
    
    }

    else if(secondCheckbox.checked == true && thirdCheckbox.checked == true && fourthCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * lowerNumberSymbols.length)
            document.querySelector(".password1").innerHTML += lowerNumberSymbols[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * lowerNumberSymbols.length)
            document.querySelector(".password2").innerHTML += lowerNumberSymbols[random]
        }
    
    }


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
    
    else if(firstCheckbox.checked == true && fourthCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * upperAndSymbols.length)
            document.querySelector(".password1").innerHTML += upperAndSymbols[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * upperAndSymbols.length)
            document.querySelector(".password2").innerHTML += upperAndSymbols[random]
        }
    
    }
    
    else if(secondCheckbox.checked == true && thirdCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * lowerAndSymbols.length)
            document.querySelector(".password1").innerHTML += lowerAndSymbols[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * lowerAndSymbols.length)
            document.querySelector(".password2").innerHTML += lowerAndSymbols[random]
        }
    
    }
    
    else if(secondCheckbox.checked == true && fourthCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * lowerAndNumber.length)
            document.querySelector(".password1").innerHTML += lowerAndNumber[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * lowerAndNumber.length)
            document.querySelector(".password2").innerHTML += lowerAndNumber[random]
        }
    
    }
    
    else if(thirdCheckbox.checked == true && fourthCheckbox.checked == true){
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * numberAndSymbols.length)
            document.querySelector(".password1").innerHTML += numberAndSymbols[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * numberAndSymbols.length)
            document.querySelector(".password2").innerHTML += numberAndSymbols[random]
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
       
    
    else {
        document.querySelector(".password1").innerHTML = " "
        document.querySelector(".password2").innerHTML = " "
    
        for(let i = 0; i < 15; i++){
            let random = Math.floor(Math.random() * characters.length)
            document.querySelector(".password1").innerHTML += characters[random]
        }
    
        for(let j = 0; j < 15; j++){
            let random = Math.floor(Math.random() * characters.length)
            document.querySelector(".password2").innerHTML += characters[random]
        }
    
        }

}

function reset(){
    document.querySelector(".password1").innerHTML = " "
    document.querySelector(".password2").innerHTML = " "
}

