var str= prompt("Enter a string:");
var arr= str.split("");
var count = 0;
for(var i=0;i<arr.length; i++){
    switch(arr[i]){
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            count=count+1;
            break;
    }
}

alert("number of vowels: "+ count);
