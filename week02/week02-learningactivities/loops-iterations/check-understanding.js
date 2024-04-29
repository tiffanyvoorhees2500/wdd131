const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// 1. Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
// for(i=0; i < studentReport.length; i++){
//     if(studentReport[i] < LIMIT){
//         console.log(studentReport[i]);
//     }
// }

// 2. Repeat the previous programming snippet by using a while loop.
// let i = 0;
// while(i < studentReport.length){
//     if(studentReport[i] < LIMIT){
//         console.log(studentReport[i]);
//     }
//     i++;
// }

// 3. Repeat the previous programming snippet by using a forEach loop.
// studentReport.forEach(function(item){
//     if(item < LIMIT){
//         console.log(item);
//     }
// });

// 4. Repeat the previous programming snippet by using a for...in loop.
// for(let i in studentReport){
//     if(studentReport[i] < LIMIT){
//         console.log(studentReport[i]);
//     }
// }


const futureDaysElement = document.getElementsByTagName("ul");
const todayElement = document.querySelector("#today");
const options = { weekday: "long"};

const today =  new Date();
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
todayElement.innerHTML = `Today is ${todaystring}.`;

for(let i=1; i < DAYS; i++){
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);

    let nextDayString = new Intl.DateTimeFormat("en-US", options).format(nextDay);
    
    item = document.createElement("li");
    item.textContent = nextDayString;
    futureDaysElement[0].appendChild(item);
}