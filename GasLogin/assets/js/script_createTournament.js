//script untuk menu gamelist
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
            "./assets/images/freefireportrait.jpg",
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

// script untuk tampilan active platform button
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".platformbutt");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(platformbutton) {
                platformbutton.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});

// script untuk menu lokasi turnamen
 const offlineBtn = document.getElementById("offlinebtn");
 const onlineBtn = document.getElementById("onlinebtn");
 const hybridBtn = document.getElementById("hybridbtn");
 const namaTempatInputs = document.getElementsByClassName("namatempat");
 const lokasi1 = document.querySelector(".lokasi-line1");
 const lokasi2 = document.querySelector(".lokasi-line2");
 const detailAlamatInput = document.querySelector(".detailalamat");
 const detailAlamatHeader = document.querySelector(".detailalamat h6");
 const keteranganInput = document.getElementById("keterangan");

 function showInputBasedOnButton(buttonId) {
    lokasi1.style.display = "none";
    lokasi2.style.display = "none";
    for (let input of namaTempatInputs) {
      input.style.display = "none";
    }
    detailAlamatInput.style.display = "none";
    keteranganInput.style.display = "none";

    if (buttonId === "offlinebtn") {
      lokasi1.style.display = "flex";
      lokasi2.style.display = "flex";
      for (let input of namaTempatInputs) {
        input.style.display = "block";
      }
      detailAlamatInput.style.display = "block";
      detailAlamatHeader.textContent = "Detail Alamat";
      keteranganInput.style.display = "block";
      keteranganInput.setAttribute("placeholder", "Detail alamat");
    } else if (buttonId === "onlinebtn") {
      detailAlamatInput.style.display = "block";
      detailAlamatHeader.textContent = "Silahkan lanjut ke langkah berikutnya";
      keteranganInput.style.display = "none";
    } else if (buttonId === "hybridbtn") {
      lokasi1.style.display = "flex";
      lokasi2.style.display = "flex";
      for (let input of namaTempatInputs) {
        input.style.display = "block";
      }
      detailAlamatInput.style.display = "block";
      detailAlamatHeader.textContent = "Keterangan Hybrid";
      keteranganInput.style.display = "block";
      keteranganInput.setAttribute("placeholder", "Keterangan untuk turnamen hybrid");
    }
 }

 offlineBtn.addEventListener("click", () => showInputBasedOnButton("offlinebtn"));
 onlineBtn.addEventListener("click", () => showInputBasedOnButton("onlinebtn"));
 hybridBtn.addEventListener("click", () => showInputBasedOnButton("hybridbtn"));

 window.addEventListener("load", function() {
    showInputBasedOnButton("offlinebtn");
});

// script untuk lokasi button
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".lokasi-buttons");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(lokasibuttons) {
                lokasibuttons.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});
