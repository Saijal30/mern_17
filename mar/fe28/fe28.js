function fizz(){
    var num = prompt("Enter a nnumber: ");
    if(isNaN(num)){
        alert("Enter valid number.");
    }
    else{
        for(var i=1;i<=num;i++){
            if(i%3==0 && i%5==0){
                document.write("FizzBuzz  ");
            }
            else if(i%3==0){
                document.write("Fizz  ");
            }
            else if(i%5==0){
                document.write("Buzz  ");
            }
             else{

                document.write(i+"  ");
             }
        }
    }
}