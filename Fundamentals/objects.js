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

john={
    fullName:"John smith",
    height:1.95,
    weight:92,
    bmi:function(){
        return (this.weight)/(this.height**2)
    }
}
console.log(john.bmi())

mark={
    fullName:"Mark killer",
    height:1.69,
    weight:78,
    bmi:function(){
        return (this.weight)/(this.height**2)
    }
}
console.log(mark.fullName)
if(mark.bmi()>john.bmi()){
    console.log(`${mark.fullName},s BMI ${mark.bmi()} is higher than ${john.fullName},s BMI ${john.bmi()}`)

}