let my_date = new Date()
// console.log(my_date)
// console.log(my_date.toString());
// console.log(my_date.toLocaleString());
// console.log(typeof my_date)

let my_created_date = new Date(2023, 0 ,2 , 5 , 3)
console.log(my_created_date.toDateString());
console.log(my_created_date.toLocaleString());

let my_timestamp = Date.now();

// console.log(my_timestamp());
// console.log(my_created_date.getTime());

//console.log(Math.floor(my_timestamp / 1000)); // No decimal point left

let new_date = new Date();
// console.log(new_date);
// console.log(new_date.getMonth()); // Remember it is n-1
console.log(new_date.toLocaleString ('default' , {
    weekday:"long",
    hour: "2-digit"
}))
