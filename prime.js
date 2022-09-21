function check_prime(num){
let count =0;
  if(num==1||num==undefined){
    return false
  }
for(i=1;i<=num;i++){
  if(num%i==0){
    count++

  }
} 
  if(count==2){
    return true;
  }
  return false
}
let ans=check_prime(5);
console.log(ans)
