/* 
    
    let time = "${hrs}:${mins}:${secs}";
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
}*/

var clock = function() {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    var time = hrs + ":" + mins +":"+ secs;
    document.getElementById("clock").innerText = time;

    setTimeout (clock, 1000);
}

clock();