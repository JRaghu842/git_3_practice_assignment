function prime_check(number){
let factor_count = 0;
for(i=1; i<=number; i++){
  if(number%i==0){
  factor_count++
  }
}
  if(factor_count==2){
  return true
  }
  else {
  return false
  }
  
}
let check = prime_check(10)
if(check == true){
console.log("It is a Prime number")
}
else {
console.log("It is not a Prime number")
}