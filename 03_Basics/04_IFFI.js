// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 

/* 

If you add parenthesis around the function and at the end
the code will execute immediately and does not need
seperate execution

Also Semi colons are important at the end as it will not stop
executing everything until it

*/

( (name) => {
    //Unamed IFFI 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/* Similar to the previous page, when declaring an immediate 
callable function, provide the parameters in the declaration
then the arguments in the final parenthsis

i.e name is the parameters and the name is provided in the final
parenthisis as the argument hitesh

*/