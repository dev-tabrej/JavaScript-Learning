const arr=new Array(2,3,4,5);

let [x,y,z]=arr;
// console.log(x,y,z)

// --------------------- Leaving or skipping a value
let [a,b, , c]=arr;
console.log(a,b,c);

// let a=23;

// let b=20;
// console.log(a,b)
// --------------- swapping using destructuring 
// [a , b] = [b ,a];
// console.log(a,b)

[x,y]=[y,x];
console.log(x,y);

// ---------------------------- Default values
// let arr2=[20,21,54]
// let [p=1,q=1,r=1,s=1]=arr2;
// console.log("values after swap ",p,q,r,s)

