/**multilevel condition */

// const price = 5000;
const price = 4000;

if(price >= 5000){
    //10% condition
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >2500){
    //5% discount 
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}