//Tehtävä kolmosta:
/*for (var i=55; i>0; i--) {
    var x = i;
    var order = 'Beer';
    if (x > 50) {
    document.write("<h1>He's over 50!</h1>" );
    } else if (x <= 50 && x > 30){
    document.write("Middle aged man, who ordered some "+order);
    } else if (x <= 30 && x > 19){
    document.write("Young adult, who ordered some "+order);
    } else if (x == 18){
    document.write("Guy who just turned 18 ordered some "+order);
    } else
    document.write("It seems you're bit underaged.");
    }



*/
//Tehtävä nelosta:
//Includes mechanism to count given numbers to ensure proper output and their even distribution.
//i started using "let" -type variables as it was said on site https://www.w3schools.com/js/js_variables.asp that "var" types should only be used for legacy browsers.
/*var arr = [];
let minusones = 0;
let zeros = 0;
let twos = 0;
let thirtythrees = 0;
let fortyfours = 0;
let onehundreds = 0;
let onehundredones = 0;
for (var i=0; i<15; i++) {
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
*/

//Tehtävä vitosta:
/*
function areYouOldEnough(age) {
    if (age < 18){
    return "You are not old enough";
    }else
    return "You are old enough";
    }
*/

//Tehtävä kutosta:

var person = {
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

//Tehtävä 6 array:
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
    for (var i=0; i<persons.lenght; i++) {
console.log(persons[i].firstName)
    }
}