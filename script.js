let userName=prompt("Enter your Name");userEmail=prompt("Enter your Email");userSalary=prompt("Enter your monthly salary");
userName="Cory"
userEmail="corymfonteyne@gmail"
userSalary="$10,000"
const SERVER_NAME = "canvas.com/students"; 

console.log(userName);
console.log(`welcome to the system ${userName}.`);
document.write(`
        <p>Welcome to ${SERVER_NAME} ${userName}!</p> 
        <p> email: ${userEmail}</p>
        <p> salary: ${userSalary}</p>
        `)

        if (confirm("Are you" +userName + "?")){
            console.log("Hello, " + userName);
        }else{
            console.log("Then what is your name?");
        }

        //---example 2 --
        letnumber=98;
        if(Number == 99){
            console.log("The number is correct");
        }

        //---example 3 ---(get the numbers from the prompt) ---
        let num1 = Number(prompt("Enter num1: "));
        let num2 = Number(prompt("Enter num2: "));
        let num3 = Number(prompt("Enter num3: "));
        let notTrue = false;

        if(num1<num2 && num3<num2){
            console.log("num1 is smaller than num2 AND num3 is larger than num2"); 
        }
        
        if(num1==1 || num2 ==1 || num3 ==1){
            console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
        }

        if(!notTrue){
            console.log("not not true is true!");
        } 
