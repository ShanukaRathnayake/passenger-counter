let count = 0
let countEl = document.getElementById("count_txt")
let saveEl = document.getElementById("save_txt")

function increment(){
    count = count + 1
    countEl.textContent = count
    
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}