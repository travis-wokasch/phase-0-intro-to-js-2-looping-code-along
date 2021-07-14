for (let age = 30; age < 40; age++){
console.log(`I am ${age} years old. Happy birthday to me!`);
}

//const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event){
    // Create empty array
    let message = []
    // Loop over array, add message to arryay
    for (let i = 0; i < names.length; i++){
       message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    // Return array
    return message
}

//write function countDown
function countDown(){
   let i = 10
    while (i >= 0){
        console.log(i);
        i--
    }
}
//takes in positive integer and counts down to zero using console.log()

//countDown(10) actually logs 11 times
