const darkmodebutton = document.getElementById('darkmodebutton');

darkmodebutton.onchange = function() {
    if (this.checked) {
        document.documentElement.classList.add('darkmode');
    } else {
        document.documentElement.classList.remove('darkmode');
    }
}

if (darkmodebutton.checked) {
    document.documentElement.classList.add('darkmode');
}