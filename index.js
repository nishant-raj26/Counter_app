// SCRIMBA

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0
console.log(countEl)

function increment() {
    count = count + 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + "  - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}
