
function showname(x) {
    var classname = x.className
    const element = document.activeElement.tagName;
    document.getElementById("nametag").innerHTML = "<h1>"+classname+"</h1>";
    document.getElementById('myaudio').play()
}

function cut() {
    document.getElementById("nametag").innerHTML = " ";
}

/*
var $circle = $('.circle');

function moveCircle(e) {
	TweenLite.to($circle, 10, {
    css: {
      left: e.pageX - 250,
      top: e.pageY - 250
    }
  });
}

$(window).on('mousemove', moveCircle);

*/