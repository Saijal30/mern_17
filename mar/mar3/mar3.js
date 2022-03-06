function hide() {
    var un = document.getElementById('undo');
    un.classList.remove('popup');
    un.classList.add('d-none');
}

function show(){
    document.getElementById('undo').classList.replace('d-none','popup');
}