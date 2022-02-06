var num1=prompt("Enter first number :");
var num2 = prompt("Enter second number :");
var num3 = prompt("Enter third number:");
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);

if(num1<num2){
    if(num1<num3){
        alert(num1 + " is the smallest number");
    }
    else if(num1>num3){
        alert(num3 + " is the smallest number");
    }
}
else if(num1>num2){
    if(num2<num3){
        alert(num2+ " is the smallest number");
    }
    else if(num2>num3){
        alert(num3 + " is the smallest number");
    }
}
 else{
     alert("please put three different numbers");
 }
