function show(imgSource, title, description, e) {
    var display = document.getElementById("display");
    var x = event.clientX;
    var y = event.clientY;
    document.addEventListener(e, follow);
    display.style.left = x + "px";
    display.style.top = y + "px";
    display.style.position = 'absolute';
    display.style.display = '';
    display.innerHTML = 
        "<div class='card shadow-lg bg-dark text-white' style='width: 18rem;'><img class='card-img-top' src='" + imgSource + "'>"
        + "<div class='card-body'> <h5 class='card-title>'>" + title + "</h5> <p class='card-text'>" + description + "</p></div></div>"
}

function follow() {
    var displayCamera = document.getElementById("display");
    displayCamera.style.left = event.clientX + 5 + "px";
    displayCamera.style.top = event.clientY + -100 + "px";
}

function remove() {
    var display = document.getElementById("display");
    var body = document.getElementById("body");
    display.removeAttribute("style");
    body.removeAttribute("style");
    document.removeEventListener('mouseover', follow);
    display.removeChild(display.childNodes[0]);
}