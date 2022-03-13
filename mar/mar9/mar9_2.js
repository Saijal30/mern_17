

{
    const todos = [];
    const render = function (id) {
        const parent_container = document.getElementById('fourth-list-item');
        parent_container.innerHTML = '';
        for (let i = 0; i < todos.length; i += 1) {
            const new_li = document.createElement('li');
            new_li.innerText = todos[i];
            parent_container.appendChild(new_li);
            parent_container.style.fontWeight = 'bold';
            parent_container.style.color = 'green';
            parent_container.style.padding = '6px';
            parent_container.style.margin = '5px 0px 0 5px';
            new_li.style.margin = '5px';
            new_li.style.padding = '6px';  
        }
    }
    const add_item = function () {
        const ip = document.getElementById('ip-fourth-text');
        const new_todo = ip.value;
        todos.push(new_todo);
        ip.value = "";
        render();
    }
    const buttn4 = document.getElementById('fourth-btn');
    buttn4.addEventListener('click', add_item);
    }

{
    const todos = [];
    const render = function (id) {
        const parent_container = document.getElementById('third-list-item');
        parent_container.innerHTML = '';
        for (let i = 0; i < todos.length; i += 1) {
            const new_li = document.createElement('li');
            new_li.innerText = todos[i];
            parent_container.appendChild(new_li);
            parent_container.style.fontWeight = 'bold';
            parent_container.style.color = 'green';
            parent_container.style.padding = '6px';
            parent_container.style.margin = '5px 0px 0 5px';
            new_li.style.margin = '5px';
            new_li.style.padding = '6px';  
        }
    }
    const add_item = function () {
        const ip = document.getElementById('ip-third-text');
        const new_todo = ip.value;
        todos.push(new_todo);
        ip.value = "";
        render();
    }
    const buttn3 = document.getElementById('third-btn');
    buttn3.addEventListener('click', add_item);
    }

const todos = [];
const render = function (id) {
    const parent_container = document.getElementById('first-list-item');
    parent_container.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
        const new_li = document.createElement('li');
        new_li.innerText = todos[i];
        parent_container.appendChild(new_li);
        parent_container.style.fontWeight = 'bold';
        parent_container.style.color = 'green';
        parent_container.style.padding = '6px';
        parent_container.style.margin = '5px 0px 0 5px';
        new_li.style.margin = '5px';
        new_li.style.padding = '6px';  
    }
}
const add_item = function () {
    const ip = document.getElementById('ip-first-text');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}
const buttn = document.getElementById('first-btn');
buttn.addEventListener('click', add_item);

{
const todos = [];
const render = function (id) {
    const parent_container = document.getElementById('second-list-item');
    parent_container.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
        const new_li = document.createElement('li');
        new_li.innerText = todos[i];
        parent_container.appendChild(new_li);
        parent_container.style.fontWeight = 'bold';
        parent_container.style.color = 'green';
        parent_container.style.padding = '6px';
        parent_container.style.margin = '5px 0px 0 5px';
        new_li.style.margin = '5px';
        new_li.style.padding = '6px';  
    }
}
const add_item = function () {
    const ip = document.getElementById('ip-second-text');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}
const buttn2 = document.getElementById('second-btn');
buttn2.addEventListener('click', add_item);
}
function close_div(id) {
    if( id == 'first'){
        document.getElementById('first').style.display = 'none';
    }else if( id == 'second') {
        document.getElementById('second').style.display = 'none';
    }else if(id == 'third') {
        document.getElementById('third').style.display = 'none';
    }
    else if(id == 'fourth') {
        document.getElementById('fourth').style.display = 'none';
    }
    
}

function clicked(n) {
    if (n == 'first') {

        document.getElementById('first').style.display = "inline";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
    
    }
    else if (n == 'second') {
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "inline";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
       
    }
    else if (n == 'third') {
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "initial";
        document.getElementById('fourth').style.display = "none";
       
    }
    else if (n == 'fourth') {
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "initial";
       
    }
   
}