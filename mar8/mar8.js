function show(n) {
    document.getElementById('popup').classList.replace('none' ,'popup');
    document.getElementById('img').src = document.getElementById(`img${n}`).src;

}

function cross() {
    document.getElementById('popup').classList.replace('popup' ,'none');
}
