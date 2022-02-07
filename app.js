let teamOneScore = 0
let teamTwoScore = 0

function drawTeamOneScore(){
    console.log(teamOneScore);
    document.getElementById('teamOneScore').innerText = teamOneScore 
    
}
function increaseTeamOneScore() {
    teamOneScore++
    drawTeamOneScore()
}
function decreaseTeamOneScore() {
    teamOneScore--
    drawTeamOneScore()
}

drawTeamOneScore()

function drawTeamTwoScore(){
    console.log(teamTwoScore);
    document.getElementById('teamTwoScore').innerText = teamTwoScore 
    
}
function increaseTeamTwoScore() {
    teamTwoScore++
    drawTeamTwoScore()
}
function decreaseTeamTwoScore() {
    teamTwoScore--
    drawTeamTwoScore()
}

function resetBothScores(){
    teamOneScore = 0
    teamTwoScore = 0
    drawTeamOneScore()
    drawTeamTwoScore()
}

drawTeamTwoScore()