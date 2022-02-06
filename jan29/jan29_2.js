var num= prompt("Enter a number");
num = parseInt(num);

if(isNaN(num)){
    alert("Enter a valid number");
}

else{
    var flag=0;
    for(var i=2;i<num;i++){
        if(num%i==0){
            alert( num + " is not a prime number");
            flag=1;
            break;
        }
    }
    if(flag==0){
        alert(num + " is a prime number");
    }
}
