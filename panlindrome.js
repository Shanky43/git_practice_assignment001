function palindrome(str){
  let bag="";
  for(i=str.length-1;i>=0;i--){
    bag+=str[i];
 // return true  
  }
  if(str==bag){
    return true
  }
  return false;
}
let reverse_str=palindrome("madam")
console.log(reverse_str)