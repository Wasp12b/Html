let l = 12;

if(l == 3)
{
  console.log("Hello");
}
//else
{
  console.log("No");
}

const number1 = prompt("Enter a number: ");

if(number1 > 0)
{
  console.log("The number is positive");
}
else
{
  console.log("The number is negative");
}

userLoggedIn = true;

if(userLoggedIn != true)
{
  console.log("Welcome user");
}
else if (userLoggedIn == true)
{
  console.log("Please LogIn");
}

const number3 = prompt("Enter a number: ");

if(number3 > 0)
{
  console.log("The number is positive");
}
else if(number3 === 0)
{
  console.log("The number is 0");
}
else
{
  console.log("The number is negative");
}
console.log("Elhamdülillah")
console.log("*************")

let grade = prompt("Enter your score : ");

let result = grade > 50 ? 'pass' : 'fail';

console.log(`you ${result} the exam.`);


const operator = prompt("işlem giriniz \n + ,- ,* ,/");
const num1 = prompt("Sayı1 Giriniz");
const num2 = prompt("Sayı2 giriniz");
let result;
switch(operator)
{
  case "+":
    result = parseFloat(num1) + parseFloat(num2);
    break;

  case "-":
    result = parseFloat(num1) - parseFloat(num2);
    break;
  
  case "*":
    result = parseFloat(num1) * parseFloat(num2);
    break;
  
  case "/":
    result = parseFloat(num1) / parseFloat(num2);
  
    default:
     console.log("invalid op");
}
alert(`the result of ${num1} ${operator} ${num2} = ${result}`);
console.log(`the result of ${num1} ${operator} ${num2} = ${result}`);