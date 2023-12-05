function showname(x) {
    var classname = x.className
    const element = document.activeElement.tagName;
    document.getElementById("nametag").innerHTML = "<h1>"+classname+"</h1>";
}

function cut() {
    document.getElementById("nametag").innerHTML = " ";
}

