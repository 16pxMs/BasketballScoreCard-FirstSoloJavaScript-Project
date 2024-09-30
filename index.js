let count = 0;
let homeScore = document.getElementById('homeScore')

function addOnePoint() {
    count += 1
    homeScore.textContent = count 
}

function addTwoPoint() {
    count += 2
    homeScore.textContent = count 
}

function addThreePoint() {
    count += 3
    homeScore.textContent = count
}

let score = 0
let guestScore = document.getElementById('guestScore')

function addPointOne() {
    score += 1
    guestScore.textContent = score
} 

function addPointTwo() {
    score += 2
    guestScore.textContent = score

}

function addPointThree() {
    score += 3
    guestScore.textContent = score
}