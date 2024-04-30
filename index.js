let homeScore = document.getElementById("homeScr")
let guestScore = document.getElementById("guestScr")

function addPoints(team, score, points) {
    score += points
    displayScore(team, score)
}

function displayScore(dteam, dscore) {
    if(dteam == "home") {
        homeScore.textContent = dscore
    } else {
        guestScore.textContent = dscore
    } 
}