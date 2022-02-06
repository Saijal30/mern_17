var num = prompt("Enter number of elements:");
num=parseInt(num);
var i,max;
var arr=new Array();
for(i=0;i<num;i++){
   arr[i]= prompt("Enter element of array");
   if(isNaN(arr[i])){
       alert("Enter valid numbers");
       break;
   }
}
max=arr[0];
for(i=0;i<num;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
alert("maximum element is " + max );
