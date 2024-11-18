const salary = 25001;
const isBCS = true;
hasCar = true;
const height = 61;
/**full-fill both condition at a time */
//  if(salary > 20000 && height > 66){
//     console.log('su patro');
//  }
//  else{
//     console.log('onno patro')
//  }

/** full-fill any one  condition at a time */
//  if(salary > 25000 || height >72){
//     console.log('this one is for you')
//  }
//  else{
//     console.log('ja vaag')
//  }
 /**for more condition */
//  if(salary > 25000 || height >72 || isBCS == true){
//    console.log('this one is for you')
// }
// else{
//    console.log('ja vaag')
// }

/**for more condition && */
// if(salary > 25000 && height >72 && isBCS == true){
//    console.log('this one is for you')
// }
// else{
//    console.log('ja vaag')
// }

//complex conditions
if(salary > 25000 && hasCar == true || isBCS == true){
   console.log('you are in the right way')
}
else{
   console.log('go to hell')
}