//Write a function that takes in a string and returns it when reversed
//let food = “eating”
function takeString(food){
    let x = food.split('').reverse();
    return x
}
let food = "eating";
console.log(takeString(food));

//Write a function that takes in the following array and consoles the target if it is found else
//null


function getTarget(num, target){
    leftindex = 0;
    rightindex =num.length -1
    while(leftindex <= rightindex){
        let middle = Math.floor(leftindex + rightindex / 2);
        if(num[middle] === target){
            return middle
        }else if(num[middle] < target){
            return leftindex = middle+1
        }
        else{
            return rightindex = middle-1
        }
    }
}
let num = [2,8,0,23,5,45,76]
Target = 23
console.log(getTarget(num));

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// let years = [2000,2023]
// while(years = 0; years < 2000; years++){
//     console.log("2020 is a leap year")
// }
// else{
// console.log("2001 is not a leap year")

// }
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function numbers(nam){
    let x = 0;
    let y = 100;
    if(x && y % 3,5){
        console.log(`{"fizz"}`)
    }else if()
}




