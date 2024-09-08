const name = "Huzaifa"

const repo_count = 50

// console.log (name + repo_count + " Value");

// console.log (`Hello my name is ${name} and my rep count is ${repo_count}`);

const game_Name = new String ("HuzaifaCOD")
// This creates a new Strong object, where each character in the string has a reference
// such as H holds position 1, U is position 2
// It does not form an array, just keep that in mind

// console.log(game_Name[0]);
// console.log(game_Name[1]);
// console.log(game_Name[2]);

// To access all the letters in the object:
// console.log(game_Name.__proto__);

// console.log(game_Name.toLowerCase());

console.log (game_Name.charAt(2));
console.log (game_Name.indexOf("f"));

const newString = game_Name.substring(0, 4)
console.log(newString);

const anotherString = game_Name.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   huzaifa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://huzaifa.com/huzaifa%20syed"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(game_Name.split('-'));