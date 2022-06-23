// stored infornation
let userName = "cory.fonteyne@sdgku.edu"
let userPassword = "Test1234"

//login functionality

    //get the username and password from the user using a prompt
let username = prompt("Enter your username: " );
let password = prompt("Enter your password: " );

    //compare the username and password with userName and userPassword
if ( username  == userName && password == userPassword ){
    //display welcome message  
    document.write(`<p>Welcome to system ${userName}!</p>`);
}else{
    //display invalid credentials
document.write(`<p>Invalid credentials</p>`);
}


