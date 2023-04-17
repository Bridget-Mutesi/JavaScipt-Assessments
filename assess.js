//Write a function that takes in a string and returns it when reversed
//let food = “eating”
function takeString(food){
    let x = food.split('').reverse().join('');
    return x
}
let food = "eating";
console.log(takeString(food));

//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function sort(num){
    if(num.length <= 1){
        return num
    }
    let middle = Math.floor(num.length /2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return mergeSort(sort(left),sort(right))
    
}
function mergeSort(left,right){
    let empty = [];
    while(right.length && left.length){
        if(left[0] < right[0]){
            empty.push(left.shift())
        }else{
            empty.push(right.shift())
        }
    }
    return[...empty,...left,...right]
}
let num = [2,8,0,23,5,45,76];
console.log(sort(num));


function binary(arr,target){
    let leftindex = 0;
    let rightindex = arr.length-1;

    while(leftindex <= rightindex){
        let middle = Math.floor(leftindex + rightindex / 2)
        if(arr[middle]===target){
            return target
        }else if(arr[middle] > target){
            right = middle-1
        }
        else{
            return null
        }

    }
}
let arr = [0,2,5,8,23,45,76];
let target = 23
console.log(binary(arr,target))

// function findTarget(arr,target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             console.log(target);
//             return;
//         }
//     }
//     console.log(null);
// }
// let arr = [0, 2, 5, 8, 23, 45, 76];
// let target = 23;
// console.log(findTarget(arr,target));

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for(let i = 2000; i <=2023; i++){
    if(i % 4 === 0){
        console.log(i + "is a leap year");
    }else{
        console.log(i + "is not a leap year")
    }
}
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(let numbers = 0; numbers <= 0; numbers++){
    if(numbers % 3 ==0 && numbers % 5 ==0){
        console.log('FizzBuzz');
    }
    else if(numbers % 3 ==0){
        console.log('Buzz')
    }
    else if(numbers % 5 ==0){
        console.log('Fizz')
    }else{
        console.log(number)
    }

}
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]

let numArray = [12,87,45,75,23,64,73];
let empty = [];
numArray.forEach(function(numarr){
    empty.push(numarr* 4);
});
console.log(empty);
//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
function turnToNumbers(arr){
    let emptyArray = [];
    for (let i = 0; i < arr.length; i++){
        emptyArray.push(parseInt(arr[i])); // extracts a number from a string to an actual number
    }
    return emptyArray;
}
let nums = ["10","24","45","56","67"]
console.log(turnToNumbers(nums));
//Anoter method
function change(){
    return nams.map(num=>+num)

}
let nams = ["10","24","45","56","67"]
console.log(change(nams));


