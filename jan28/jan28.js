var num= prompt("Enter a number to print reverse:");
if(isNaN(num)){
    alert("Enter a valid number");
}
while(num>=0){
    console.log(num);
    num=num-1;
}
