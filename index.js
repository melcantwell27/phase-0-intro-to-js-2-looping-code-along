// Code your solutions in this file
const CardNames = [];
function writeCards (names, event) {
    CardNames.length = 0;
    for (let i = 0; i < names.length; i++){
        CardNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    debugger;
    console.log(CardNames);
    return CardNames; 
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

writeCards(names,event);

function countDown (number){
    let i = number
    while (i >= 0){
        console.log(i--)
    }
    return i
}
