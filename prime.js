function check_prime(number){
let factor =0;
  if(number==1||number==undefined){
    return false
  }
for(i=1;i<=number;i++){
  if(number%i==0){
    factor+
  }
} 
  if(factor==2){
    return true;
  }
  return false
}
let answer=check_prime(101);
console.log(answer)
