// check palindrome number
let str="vikas";

let bag="";

for(i=str.length-1;i>=0;i--){
    bag=bag+str[i];
}

if(bag===str){
    console.log("Yes");
}
else{
    console.log("No");
}