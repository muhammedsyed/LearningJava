function say_Name () 
{
    console.log("Huzaifa");
    console.log("Huzaifa");
    console.log("Huzaifa");
    console.log("Huzaifa");
}

// say_Name() // Writing just say_Name without parenthesis will do nothing.

// function add_numbers (number1 , number2) 
// {  
//     if (number1 === Number) 
//     {
//         console.log(number1 + number2)
//     } 
//     else 
//     {
//         console.log("Not possible");
//     }
    
// }


// add_numbers("a" , 4)

function add_Two_Numbers (number1, number2) 
{
    let result = number1 + number2
    return result
     console.log("Result: " , result); // If u put code after a result, it will never work, result is always the last
}
console.log(result = add_Two_Numbers( 4, 7))

function login_User_Message (username) 
{
    return `${username} just logged in`
}

console.log (login_User_Message ("Huzaifa"))

function calculate_total_cost (...num1) 
{
    return num1
}
  
// console.log(calculate_total_cost(400, 500, 100))

const user = 
{
    username: "Huzaifa",
    price: "300"
}

function handleUser (anyUser) 
{
    console.log(`The name you entered is ${anyUser.username} and the price is ${anyUser.price}`)
}

handleUser (user)