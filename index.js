// // //Sabika Work
let userinput = process.argv.map(Number);

function sum(){

  let add=0;
  
  for (let i=2; i<userinput.length; i++){
     add = add + userinput[i]; 
    //  console.log(add);
  }
  return add;
  }
  let mysum = sum();





// //subtraction Function

function sub(){
  let num=0;
  for (let i=2; i < userinput.length ; i++){
    num = num - userinput[i];
    // console.log(num);
  }
 return num;
}
let result = sub();

//Multiplication Function

function Multi(){
  let num=1;
  for (let i=2; i < userinput.length ; i++){
    num = num * userinput[i];
    // console.log(num);
  }
 return num;
}
let multiply = Multi();

function mymaths(){
    console.log("Total sum is  " + mysum);


  console.log("Your result of subtraction is " + result);


  console.log("Your result of multiplication is  " + multiply);

}
 mymaths();
// console.log(myresult);
