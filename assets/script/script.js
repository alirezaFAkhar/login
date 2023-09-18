let emailPattern = (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/);
let passwordPattern = (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
function myForm(e){
    
    let flag = 0;
    let _email = document.forms["signup"]["email"].value;
    let _password = document.querySelector("#password").value;
    document.forms["signup"]["email"].style.border = "1px solid #EFD0F8"
    document.forms["signup"]["password"].style.border = "1px solid #EFD0F8";
   
    if (
        _email == null ||
        _email == ""||
        _email.search(emailPattern)||
        (_email.search(/<script/)) >= 0 ||
        (_email.search(/&lt;script/)) >= 0 ||
        (_email.search(/script/)) >= 0
       
    ){
        console.log("aaaaa")
        document.forms["signup"]["email"].style.border = "3px solid red";
        flag++
    }
    if(_password ==null||
        _password == ""||
        _password.search(passwordPattern)||
        (_password.search(/<script/)) >= 0 ||
        (_password.search(/&lt;script/)) >= 0 ||
        (_password.search(/script/)) >= 0
        ){
            document.forms["signup"]["password"].style.border = "3px solid red";
            flag++;
        }
    
    if (flag > 0){
            e.preventDefault();
     }
   
}