document.addEventListener("DOMContentLoaded", function() {
    var pcbutton = document.getElementById("pc");
    var mobilebutton = document.getElementById("mobile");
    var ps4button = document.getElementById("ps4");
    var consolebutton = document.getElementById("console");

    var img1 = document.getElementById("game1");
    var img2 = document.getElementById("game2");
    var img3 = document.getElementById("game3");
    var img4 = document.getElementById("game4");

    function changeImageSrc(newSrc) {
        img1.src = newSrc[0];
        img2.src = newSrc[1];
        img3.src = newSrc[2];
        img4.src = newSrc[3];
    }

    pcbutton.addEventListener('click', function() {
         changeImageSrc([
            "./assets/images/valorant.jpg",
            "./assets/images/cs2.jpg",
            "./assets/images/dota2.jpg",
            "./assets/images/pubgg.jpg"
        ]);
    });

    mobilebutton.addEventListener('click', function() {
        changeImageSrc([
            "./assets/images/lolwr.jpg",
            "./assets/images/mlbbportrait.jpg",
            "./assets/images/freefire.jpg",
            "./assets/images/pubgm.jpg"
        ]);
    });

    ps4button.addEventListener('click', function() {
        changeImageSrc([
            "./assets/images/efootball.jpg",
            "./assets/images/fifa.jpg",
            "./assets/images/rocket.jpg",
            "./assets/images/codwwii.jpg"
        ]);
    });

    consolebutton.addEventListener('click', function() {
        changeImageSrc([
            "./assets/images/haloinf.jpg",
            "./assets/images/mariokart.jpg",
            "./assets/images/sports.jpg",
            "./assets/images/smash.jpg"
        ]);
    });
});