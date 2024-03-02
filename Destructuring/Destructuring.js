// const MyCircle={
//     name:"Tabrej",
//     friends : ['uzaif','danish','ahkam','motasim','shiba'],
//     batch:2023,
//     cgpa:7.6
// };

// 1. It will create a new variable myName but it remains undefined as it will not take any reference from any property of object  
// const{myName}=MyCircle;
// console.log(myName);

// // it will create a pointer to the object
// const obj=MyCircle;
// console.log(obj);

// obj.cgpa=7.8; //it will change the original value
// console.log(obj.cgpa);
// console.log(MyCircle.cgpa);

// // create a copy of object 
// const objCopy=Object.assign({},MyCircle);
// console.log(objCopy);
// objCopy.cgpa=8;
// console.log(objCopy.cgpa,MyCircle.cgpa);



// // 2. It will create a new variable fisrtName referenced from name in the object and a variable batch that will point directly to the batch property of object 
// const {name:firstName,batch
// }=MyCircle;
// console.log(firstName,batch);

// 
// let a=3,b=4;
// console.log(a,b);
// const obj={a:12,b:16,c:28};

// //won't work because brackets represent a blocked scope to make this work we have to put the expression inside parenthesis
//   {a,b}=Obj;

// //work
// ({a,b,c,d}=obj); 
// console.log(a,b,c,d)

const MyCircle={
    name:"Tabrej",
    friends : ['uzaif','danish','ahkam','motasim','shiba'],
    batch:2023,
    cgpa:7.6,
    studies:{
        btech:{
            branch:'cse',
            rollNo:"19134501037"
        },
    },
    result: function(obj){
        console.log(`${this.name} is a student of ${this.studies.btech.branch} branch with roll no ${this.studies.btech.rollNo} he passed his btech with ${this.cgpa} CGPA and secured ${obj.position} position`)
    }
};
MyCircle.result({
    position:"first",
    captain:true
});

// const objCopy=Object.assign(MyCircle);
// console.log("coppy of ob is ",objCopy);

// console.log(MyCircle.studies);

// //  nested objects destructuring

// // it will take the whole btech object in course
// const {studies:{btech:course}}=MyCircle;
// console.log(course);

// //it will create a variable called specification and it will point to branch 
// let {studies:{btech:{branch:specification}}}=MyCircle;
// console.log(specification);

// // assigning a different value to specification will not change original variable inside the object
// specification="EIE";
// console.log(specification);

// console.log(MyCircle.studies.btech.branch);


