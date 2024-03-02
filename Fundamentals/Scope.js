let myname='tabrej';
function canMarry(){
    const isMarried=false;
    function printDetails(){
        const age=22;
        
        if(age>18){
            const isSingle=true;
            var why="i dont know"
            myname='tabrej mirza'
        }
        // console.log(why);
        console.log(`i am of age ${age} and ${isMarried}`)//throw error because of scoping of isvirgin
    }
    printDetails();
    // console.log(why)
}
canMarry();
// console.log(why) //throw error because var is block scoped
console.log(myname)
