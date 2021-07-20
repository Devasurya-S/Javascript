//Pass in argument
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

// listen for clicks
function increment() {
    count += 1
    countEL.innerText = count
}

//on clicking save button
function save() {
    let precount = count + " - " 
    saveEl.textContent += precount
    count = 0
    countEL.innerText = count
}

