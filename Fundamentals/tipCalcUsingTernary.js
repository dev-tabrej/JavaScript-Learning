let tip=0;
let bill=270;

tip=(bill>=50 && bill<=300)?((15/100)*bill):(20/100)*bill;
console.log(`the bill was ${bill},the tip was ${tip},and the final value is ${bill + tip}`) 

//  test value 2
bill=40;
tip=(bill>=50 && bill<=300)?((15/100)*bill):(20/100)*bill;
console.log(`the bill was ${bill},the tip was ${tip},and the final value is ${bill + tip}`) 

// bill value 3
bill=430;
tip=(bill>=50 && bill<=300)?((15/100)*bill):(20/100)*bill;
console.log(`the bill was ${bill},the tip was ${tip},and the final value is ${bill + tip}`) 