
const userPrompt = () =>{

  let userValue = prompt('Enter ice cream by commas :  ');
  let userOrderString = userValue.split(',');
  return userOrderString;

}


let userData = userPrompt();

const iceCream = {}

for(let index in userData){

if(iceCream[index]){
  iceCream[index] = userData[index];
}

}

console.log(iceCream);