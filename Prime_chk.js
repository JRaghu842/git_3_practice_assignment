function prime_check(number){

let count = 0;
for(i=2; i<=number; i++){
  if(number%i==0){
  count++;
  }
}
  if(count==1){
  return true;
  }
  else {
  return false;
  }  
}
let check = prime_check(11)
if(check === true){
console.log("It is a Prime number")
}
else{
console.log("It is not a Prime number")
}