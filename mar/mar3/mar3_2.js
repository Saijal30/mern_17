function swap(){
    var num1=document.getElementById("num1").value;
    var num2= document.getElementById("num2").value;
   
   var a=parseInt(num1);
   var b=parseInt(num2);
   
    a=a+b;
    b=a-b;
    a=a-b;
   
    document.getElementById("ans1").innerText=parseInt(a);
    document.getElementById("ans2").innerText=parseInt(b);
}