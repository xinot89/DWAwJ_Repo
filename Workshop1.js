//Task 3:
var x = 36;
var order = 'Beer';
if (x > 50) {
    document.write("<h1>He's over 50!</h1>");
    console.log("He's over 50!");
} else if (x <= 50 && x > 30){
    document.write("Middle aged man, who ordered some "+order);
    console.log("Middle aged man, who ordered some "+order);
} else if (x <= 30 && x > 19){
    document.write("Young adult, who ordered some "+order);
    console.log("Young adult, who ordered some "+order);
} else if (x == 18){
    document.write("Guy who just turned 18 ordered some "+order);
    console.log("Guy who just turned 18 ordered some "+order);
} else {
    document.write("It seems you're bit underaged.");
    console.log("It seems you're bit underaged.");
}


//Task 4:
//As extra, includes mechanism to count given numbers to ensure proper output and their even distribution.
//i started using "let" -type variables as it was said on site https://www.w3schools.com/js/js_variables.asp that "var" types should only be used for legacy browsers.
//Tested with up to 300000 iterations, numbers distribute evenly enough and there isn't any -1 or 101 -values.
let arr = [];
let minusones = 0;
let zeros = 0;
let twos = 0;
let thirtythrees = 0;
let fortyfours = 0;
let onehundreds = 0;
let onehundredones = 0;
for (let i=0; i<15; i++) {
//arr.push( Math.random()*100 ).toFixed(0);
arr.push(Math.floor(Math.random() * 101));
document.write("<p style=\"color:red;\">Here's one random number between 0-100 without decimals: " + (arr[i]) + "</p>");
if (arr[i] == -1) {
    minusones++;
} else if (arr[i] == 0) {
    zeros++;
} else if (arr[i] == 2){
    twos++;
} else if (arr[i] == 33){
    thirtythrees++;
} else if (arr[i] == 44){
    fortyfours++;
} else if (arr[i] == 100){
    onehundreds++;
} else if (arr[i] == 101){
    onehundredones++;
}
//console.log(arr[i]);
}
document.write("<br>Count of selected numbers:");
document.write("<br>-1: " + minusones);
document.write("<br>0: " + zeros);
document.write("<br>2: " + twos);
document.write("<br>33: " + thirtythrees);
document.write("<br>44: " + fortyfours);
document.write("<br>100: " + onehundreds);
document.write("<br>101: " + onehundredones);

//Task 5:
function areYouOldEnough(age) {
    if (age < 18){
    return "You are not old enough";
    }else
    return "You are old enough";
    }

//Task 6:
/*Variables print their values into console as instructed and function printinfo 
gives variable's contenst when variable is defined: "printInfo(person)"*/
let person = {
    firstName:"John",
    lastName:"Doe",
    address:"Back alley 15",
    telephone:"756838956",
    age:50,
    eyeColor:"blue"
    };
function printInfo(who) {
    console.log(who)
}

//Task 6 array:
//Gives each entry's firstname + lastname when printInfo() is called.
let persons = [{
    firstName:"John",
    lastName:"Doe",
    address:"Back alley 15",
    telephone:"756838956",
    age:50,
    eyeColor:"blue"
},
{
    firstName:"bob",
    lastName:"The builder",
    address:"front alley 15",
    telephone:"986666",
    age:32,
    eyeColor:"blue",
},
{
    firstName:"John",
    lastName:"Lennon",
    address:"Side alley 85",
    telephone:"125156",
    age:67,
    eyeColor:"green"
},
{
    firstName:"Stuart",
    lastName:"Mulligan",
    address:"Nearby street 35",
    telephone:"18556465",
    age:41,
    eyeColor:"brown"
    },]
function printInfo() {
    for (var i=0; i<persons.length; i++) {
console.log(persons[i].firstName,persons[i].lastName)
    }
}