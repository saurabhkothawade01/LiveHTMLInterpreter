function typeHTML() {
    tarea = document.getElementById("tarea");
    d1 = document.getElementById("d1");
    d1.innerHTML = tarea.value;
}

function headingEventNormal() {
    heading = document.getElementById("heading");
    heading.style.color = "black";
    setTimeout(headingEventAfter, 800);
}

function headingEventAfter() {
    heading = document.getElementById("heading");
    heading.style.color = "blue";
    setTimeout(headingEventNormal, 800);
}



