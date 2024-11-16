

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

console.log(kastTerninger(antall))


