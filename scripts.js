

// Terninger

let antall = 5
let antallHTML = document.getElementById("antall-terninger")
let myDice = document.getElementById("my-dice")


let die = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

function kastTerninger(noOfDice) {

    let diceArray = ""

    for (let i = 1; i <= noOfDice; i++) {
        diceArray += `<p class="single-die">` + die[Math.floor(Math.random() * 6)] + `</p>`
    }

    console.log("kaster " + antall + " terninger")

    myDice.innerHTML = diceArray;
    antallHTML.innerHTML = antall
}

kastTerninger(antall)

document.getElementById("kasteknapp").addEventListener("click", function() {kastTerninger(antall)})

// Quantity Picker

let oneLess = document.getElementById("die-less")
let oneMore = document.getElementById("die-more")

oneMore.addEventListener("click", addDie)
oneLess.addEventListener("click", removeDie)

function addDie() {
    antall = antall + 1
    antallHTML.innerHTML = antall;
    /* kastTerninger(antall) */
    console.log("Terning lagt til")
}

function removeDie() {
    if (antall > 1) {
        antall = antall - 1
        antallHTML.innerHTML = antall;
        /* kastTerninger(antall) */
        console.log("Terning fjernet")
    }
}

// Sorting dice
let sortButton = document.getElementById("sort-button")

sortButton.addEventListener("click", function() {
    let dice = document.querySelectorAll(".single-die")
    let diceArray = Array.from(dice)
    let sortedDice = diceArray.sort((a, b) => {
        return a.innerText.localeCompare(b.innerText)
    })
    myDice.innerHTML = ""
    sortedDice.forEach(die => {
        myDice.appendChild(die)
    })
})
