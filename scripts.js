

// Terninger

let antall = 5

let myDice = document.getElementById("my-dice")

let die = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

function kastTerninger(noOfDice) {

    let diceArray = ""

    for (let i = 1; i <= noOfDice; i++) {
            diceArray += `<p class="single-die">` + die[Math.floor(Math.random() * 6)] + `</p>`
    }

    myDice.innerHTML = diceArray;
}

kastTerninger(antall)

// Quantity Picker

console.log(antall)

let oneLess = document.getElementById("die-less")
let oneMore = document.getElementById("die-more")
