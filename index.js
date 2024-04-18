
let homeCount = 0
let homePts = document.getElementById("home-score")
let guestCount = 0
let guestPts = document.getElementById("guest-score")


function incrementOne(){
    homeCount += 1
    homePts.innerHTML = homeCount
}
function incrementTwo(){
    homeCount += 2
    homePts.innerHTML = homeCount
}
function incrementThree(){
    homeCount += 3
    homePts.innerHTML = homeCount
}
resetScore.addEventListener("click", function () {
  homePts.textContent = 0;
});


function incrementOne2(){
    guestCount += 1
    guestPts.innerHTML = guestCount
}
function incrementTwo2(){
    guestCount += 2
    guestPts.innerHTML = guestCount
}
function incrementThree2(){
    guestCount += 3
    guestPts.innerHTML = guestCount
}
