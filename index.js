let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let countHome = 0
let countGuest = 0

// Home Score Counter
function plusOneHome() {
    countHome += 1
    scoreHomeEl.textContent = countHome
}

function plusTwoHome() {
    countHome += 2
    scoreHomeEl.textContent = countHome
}

function plusthreeHome() {
    countHome += 3
    scoreHomeEl.textContent = countHome
}

// Guest Score Counter
function plusOneGuest() {
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}

function plusTwoGuest() {
    countGuest += 2
    scoreGuestEl.textContent = countGuest
}

function plusthreeGuest() {
    countGuest += 3
    scoreGuestEl.textContent = countGuest
}

let saveCountHome;
let saveCountGuest;

let saveHomeEl = document.getElementById("save-home-el")
let saveGuestEl = document.getElementById("save-guest-el") 

function saveEl() {
    saveCountHome = countHome + "--"
    saveHomeEl.textContent += saveCountHome

    saveCountGuest = countGuest + "--"
    saveGuestEl.textContent += saveCountGuest

    scoreHomeEl.textContent = 0
    countHome = 0
    scoreGuestEl.textContent = 0
    countGuest = 0
}