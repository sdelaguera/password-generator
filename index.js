
let generateButton = document.getElementById("generate-button")

let passwordbox = document.getElementsByClassName("password-box");
generateButton.addEventListener("click", generatePassword)

console.log(passwordbox)
function generatePassword() {
    
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for (i = 0; i < passwordbox.length; i++) {

        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        passwordbox[i].textContent = password
        password = ""
    }

}