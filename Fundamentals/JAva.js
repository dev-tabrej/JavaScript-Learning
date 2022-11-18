// let markMass=78,johnMass=92,markHeight=1.69,johnHeight=1.95;
// let bmiMark=markMass/markHeight**2;
// let bmiJohn=johnMass/johnHeight**2;

// console.log(bmiJohn,bmiMark);
// const markHigherBmi=bmiJohn<bmiMark;
// console.log(markHigherBmi);

// if(markHigherBmi){
//     console.log(`Marks BMI is ${bmiMark} and is  higher than ${bmiJohn} john's bmi`)
// }
// else
// console.log(`John BMI is ${bmiJohn} and is  higher than ${bmiMark} marks bmi `)
// let a=prompt("Enetr any value\n");
// console.log(a);



// let dolphinsAvg=(88+91+110)/3;
// let koalasAvg=(96+108+89)/3;
// if(dolphinsAvg===koalasAvg)
// console.log("it's a Draw");
// else if(dolphinsAvg>koalasAvg)
// console.log("Dolphins won the game")
// else
// console.log("koalas won the game");

// let tip=0;
// let bill=270;

// tip=(bill>=50 && bill<=300)?((15/100)*bill):(20/100)*bill;
// console.log(`the bill was ${bill},the tip was ${tip},and the final value is ${bill + tip}`) 

// //  test value 2
// bill=40;
// tip=(bill>=50 && bill<=300)?((15/100)*bill):(20/100)*bill;
// console.log(`the bill was ${bill},the tip was ${tip},and the final value is ${bill + tip}`) 

// // bill value 3
// bill=430;
// tip=(bill>=50 && bill<=300)?((15/100)*bill):(20/100)*bill;
// console.log(`the bill was ${bill},the tip was ${tip},and the final value is ${bill + tip}`) 



//     Coding challenge 
// const calcAverage=(a,b,c)=>(a+b+c)/3;

// const scoreKoalas=calcAverage(44,23,71);
// const scoreDolphins=calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas)
// function winner(avgDolphins,avgKoalas){
//     if(avgDolphins>= 2*avgKoalas)
//     console.log(`Dolphins Wins the game !`)
//     else if(2*avgDolphins<=avgKoalas)
//     console.log(`Dolphins Wins the game !`)
//     else
//     console.log(`nobody won`)
// }
// winner(scoreDolphins,scoreKoalas);

// const arr=new Array("john","jonh2","john3");
// console.log(`${arr} \n`);

// // push
// const pushed=arr.push("pushed_name")
// console.log(`${arr} \n`);
// console.log(pushed)

// // unshift
// const unshifted=arr.unshift("unshifted_name")
// console.log(`${arr} \n`);
// console.log(unshifted)

// const popped=arr.pop()
// console.log(`${arr} \n`);
// console.log(popped)

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


// -------------------------------------------- // type-conversion

// let a="23";
// console.log(typeof(a));
// a=Number(a);
// console.log(typeof(a))

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

// --------------------------------- objects
// ------------------------1 instance of an object 
// let obj = new Object();
// obj.id=34;
// obj.name="tabrej";
// console.log(obj)

// 2-------------------------------- 2 object challenge
// tabrej={
//     firstName:"Tabrej",
//     lastName:'ali',
//     age:22,
//     friends:['Uzaif','Motasim','Ahkam','danish','shuaib'],
//     hasDriversLicence:true
// }

// console.log(`${tabrej['firstName']} have ${tabrej.friends.length} friends and his best friend is ${tabrej.friends[2]}`)

// -------------------------- Challenge 2 objects 
// tabrej={
//     firstName:"Tabrej",
//     lastName:'ali',
//     age:22,
//     friends:['Uzaif','Motasim','Ahkam','danish','shuaib'],
//     hasDriversLicence:true,
//     job:"student"
// }

// console.log(`${tabrej['firstName']} is a ${tabrej.age} years old ${tabrej.job} and have ${tabrej.hasDriversLicence?"a":"No"} Drivers Licence and his best friend is ${tabrej.friends[2]}`)

// Coding challenge 3 

// john={
//     fullName:"John smith",
//     height:1.95,
//     weight:92,
//     bmi:function(){
//         return (this.weight)/(this.height**2)
//     }
// }
// console.log(john.bmi())

// mark={
//     fullName:"Mark killer",
//     height:1.69,
//     weight:78,
//     bmi:function(){
//         return (this.weight)/(this.height**2)
//     }
// }
// console.log(mark.fullName)
// if(mark.bmi()>john.bmi()){
//     console.log(`${mark.fullName},s BMI ${mark.bmi()} is higher than ${john.fullName},s BMI ${john.bmi()}`)

// }


// ------------------------ coding challenge 4

// let bills=[22,297,176,440,37,105,10,1100,86,52];

// let tips=[]
// let totals=[]
// function calcTip(bill){
//     if(bill>=50 & bill<=300)
//     return bill*(0.15);
//     else
//     return bill *(0.20)
// }
// for(let i=0;i<bills.length;i++){
//     tips[i]=calcTip(bills[i]);
//     totals[i]=bills[i]+tips[i];
//     console.log(`tips is ${tips[i]} and total bill is ${bills[i]}`)
// }

// const calcAverage = function(arr){
// sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// return sum/arr.length
// }
// console.log(calcAverage(bills))
// console.log(calcAverage(totals))
// console.log(calcAverage(tips))

// ----------------------- coding challenge 
// const arr=new Array(17,21,23);
// function printForcast(Array){
//     let str='';
//     for(let i=0;i<Array.length;i++){
//         str+=`...${Array[i]}C in the ${i+1} days`
//     }
// return str;

// }
// console.log(printForcast(arr)+"...")
