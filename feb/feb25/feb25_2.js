function anagram(str1,str2){
    flag=0;
    var str1 = str1.split('');
    var str2 = str2.split('');
    str1=str1.sort();
    str2=str2.sort();
    for(var i=0,j=0;i<str1.length;i++,j++){

        if(str1[i]!=str2[j]){
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

var input1=prompt("enter first string");
var input2=prompt("enter second string");

document.write(anagram(input1,input2));