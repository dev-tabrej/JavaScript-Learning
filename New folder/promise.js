// let promise = new promise(function (resolve, reject) {
//     setTimeout(() => resolve("done"), 1000);
// });

// let promise = new Promise(function (resolve, reject) {
//     resolve("done") //a promise will only return an error or result can't return both
//     // it will get ignored  
//     reject(new Error("whoops")) 
//     // setTimeout(() => reject(new Error("whoops")), 1000);
// });
let newPromise = new Promise(resolve => { resolve("Donnnnnneee") }, reject => { reject(new Error("me sirf tumhe dost manta hu")) })



// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// )

console.log(newPromise)
// promise2.resolve

// promise.catch(alert)

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
// })
// .finally(() => alert("Promise ready")) // triggers first
// .then(result => alert(result)); // <-- .then shows "value"



// function loadScript(src, callback) {

// let script = document.createElement("script");
// script.src = src;

// script.onload = () => callback(null, script)
// script.onerror = () => callback(new Error(`script load error for ${src}`))
// document.head.append(script)
// }
// loadScript('/scripts.js', (...load) => { console.log(load) })


function loadScript_promise(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`script load error for ${src}`))
        document.head.append(script)
    })

}
console.log(loadScript_promise('scripts.js'))

let promise = loadScript_promise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));