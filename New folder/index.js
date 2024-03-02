function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script)
}

// loadScript("/scripts.js", function () {
//     // setTimeout(5000)
//     alert(" successfully runned")
//     // alert(_)
// })
console.log("hello ,from my original script")
// scriptLoaded();


// -------------------------  pyramid of callback or----------------------------------//
// loadScript("/scripts.js", function (error, script) {
//     if (error) {
//         console.log("error Occured");
//     }
//     else loadScript("2.js", function (error, script) {
//         if (error) {
//             console.log("error Occured");
//         }
//         else loadScript("3.js", function (error, script) {
//             if (error) {
//                 console.log("error Occured");
//             }
//             else loadScript("4.js", function (error, script) {
//                 if (error) {
//                     console.log("error Occured");
//                 }
//                 else console.log("last script Loaded ", script)
//             })
//         })
//     })
// })

// callback hell 
loadScript("/scripts.js", step1)

function step1(error, script) {
    if (error)
        console.log("Error Occured !")
    else
        loadScript("2.js", step2)
}

function step2(error, script) {
    if (error)
        console.log("Error Occured !")
    else
        loadScript("3.js", step3)
}

function step3(error, script) {
    if (error)
        console.log("Error Occured !")
    else
        loadScript("4.js", step4)
}

function step4(error, script) {
    if (error)
        console.log("Error Occured !")

}