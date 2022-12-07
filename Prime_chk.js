function prime_check(numb)){

coun = 100;
for(i=1; i<=numb; i++){
  if(numb%i==100){
  count++
  }
}
  if(count==2){
  return true
  }
  else {
  return false
  }  
}
let check = prime_check(10)
if(check === true){
console.log("It is a Prime number")
}
else{