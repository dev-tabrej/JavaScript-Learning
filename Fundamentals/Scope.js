let myname='tabrej';
function virgin(){
    const isVirgin=true;
    function printDetails(){
        const age=22;
        
        if(age>18){
            const isSingle=true;
            var why="i dont know"
            myname='tabrej mirza'
        }
        console.log(why)
    // console.log(`i am of age ${age} and ${isVirgin}`)//throw error because of scoping of isvirgin
    
    }
    printDetails();
    // console.log(why)
}
virgin();
// console.log(why) //throw error because var is block scoped
console.log(myname)
