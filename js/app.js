var menu = document.getElementById ('menu');
var hamburger = document.getElementById ('hamburger');

function toggle () {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
    }
    else {
        menu.classList.add("show-menu");
    }
}
function finished() {
    //wait 3000ms before calling the showPage()
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    //hide the loader
    document.getElementById('loaderScreen').style.display = "none";
}
function finished() {
    //wait 3000ms before calling the showPage()
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    //hide the loader
    document.getElementById('loaderScreen').style.display = "none";
}


