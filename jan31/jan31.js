var num =parseInt( prompt("Enter marks to filter names: "));

if(isNaN(num)){
    alert("Enter valid number.");
}
else{

    var obj = {
        "first_name":"Aayush",
        "last_name":"Sinha",
        "email":"aayush@gmail.com",
        "website":"dfded",
        "k":"This is k's value",
        "students": [
            {"name":"NAME_1",
              "marks":15
            },
            {
                "name":"NAME_2",
                 "marks":17
            },
            {
                "name":"NAME_3",
                 "marks":21
            },
            {
                "name":"NAME_4",
                 "marks":9
            },
            {
                "name":"NAME_5",
                 "marks":47
            },
            {
                "name":"NAME_6",
                 "marks":30
            },
            {
                "name":"NAME_7",
                 "marks":10
            },
            {
                "name":"NAME_8",
                 "marks":50
            },
        ]
    };

    for(var i=0;i< obj.students.length;i++){
        if(obj.students[i].marks >= num){
            console.log(obj.students[i].name);
        }

    }







}
