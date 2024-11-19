/**ternary condition maintain at least three parts 
 * ?   :
 * conditions ? do something when true : do something when false
 */

// const age = 11;
/**normal if else  */
// if(age >= 19){
//     console.log('you are the right way')
// }
// else{
//     console.log('correction your track')
// }


// Ternary conditions in a single line without if else or simple ternary

// age = 31;
// age >= 19 ? console.log('you are in the right path')  : console.log('go back to correction');

/** value setup with simple if else */
let price = 100;
const isLeader = false;

// if(isLeader === false){
//     price= 0;
// }
// else{
//     price = price +20;
// }
// console.log(price)

// above one convert into ternary 

// price = isLeader == true ? 0 : price + 100;

if(isLeader === true){
    if(price > 1000){
        price = price/2;
    }
    else{
        price = 0;
    }
    /**price > 1000 ? price /2:0 */
}
else{
    price =  price + 100;
}
// optional but semi-advance ternary
price = isLeader == true ?
 price > 1000 ?
        price /2: 0 
  : price + 100;
