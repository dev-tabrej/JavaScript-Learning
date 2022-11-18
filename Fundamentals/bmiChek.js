let markMass=78,johnMass=92,markHeight=1.69,johnHeight=1.95;
let bmiMark=markMass/markHeight**2;
let bmiJohn=johnMass/johnHeight**2;

console.log(bmiJohn,bmiMark);

const markHigherBmi=bmiJohn<bmiMark; // set higher bmi to True/False
console.log(markHigherBmi);

if(markHigherBmi){
    console.log(`Marks BMI is ${bmiMark} and is  higher than ${bmiJohn} john's bmi`)
}
else
console.log(`John BMI is ${bmiJohn} and is  higher than ${bmiMark} marks bmi `)

// let a=prompt("Enter any value\n");
// console.log(a);
