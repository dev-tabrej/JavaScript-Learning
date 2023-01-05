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

// // pop
// const popped=arr.pop()
// console.log(`${arr} \n`);
// console.log(popped)

// // shift
// const shifted=arr.shift()
// console.log(`${arr} \n`);
// console.log(shifted)

const array1=["tabrej","ali"]
const array2=["ahmed","danish",array1]
console.log(array2)

// capture index of array element using index of function
const index=array2.indexOf("danish");// returns -1 if not present


console.log(`${index} is index of danish`)

// includes Method to find out if present in array
console.log(array1.includes("tabrej"))// returns boolean i.e True or False

// console.log(Boolean(1))