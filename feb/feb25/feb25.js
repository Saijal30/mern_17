function palindrome(string){
    var flag=0;
    for(var i=0;i<string.length;i++){
        var back=string.length-1;
        if(string[i]!= string[back-i]){
            flag=1;
        }
    }
    if(flag==1){
        return 'False';
    }
    else{
        return 'True';
    }
}
var input=prompt("Enter a string:");
document.write(palindrome(input));


