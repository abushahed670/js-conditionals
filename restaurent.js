const age = 17;
const price = 500;
 if(age < 12){
    console.log('you can eat for free')
 }
 else if(age >= 60){
    //5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount)
 }
 else{
    console.log(price)
 }