    // -------------------------------- function expression
// const age = function(birthyear){
//     return 2022-1998;
// }
// console.log(age(1998))

// -------------------------- function declaration
// console.log(age(1998))

// function age(birthyear){
//     return 2022-1998;
// }

// -------------------- Arrow functions\

// const Add=(a,b)=>a+b;
// console.log(Add(3,4));


    // ---------------------------------------------------// Coding challenge 

const calcAverage=(a,b,c)=>(a+b+c)/3;

const scoreKoalas=calcAverage(44,23,71);
const scoreDolphins=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas)
function winner(avgDolphins,avgKoalas){
    if(avgDolphins>= 2*avgKoalas)
    console.log(`Dolphins Wins the game !`)
    else if(2*avgDolphins<=avgKoalas)
    console.log(`Dolphins Wins the game !`)
    else
    console.log(`nobody won`)
}
winner(scoreDolphins,scoreKoalas);



// function challenge2(){
//     const bills=[125,555,44]
// function calcTip(bill){
//     if(bill>=50 & bill<=300)
//     return bill*(0.15);
//     else
//     return bill *(0.20)
// }
// const tip = calcTip(100);
// console.log(tip);
// const tipArr=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// console.log(tipArr);
// const total=[bills[0]+calcTip(bills[0]),bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2])]
// console.log(total);
// }
// challenge2();
// console.log(Boolean(true))

