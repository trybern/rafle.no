(function() {
    'use strict';

    // Terninger
    let antall = 5;
    const antallHTML = document.getElementById("antall-terninger");
    const myDice = document.getElementById("my-dice");
    const dieFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    let currentDice = [];

    function updateDiceCount() {
        antallHTML.textContent = antall;
    }

    function kastTerninger(noOfDice) {
        currentDice = [];
        let diceHTML = "";
        for (let i = 0; i < noOfDice; i++) {
            const randomDie = dieFaces[Math.floor(Math.random() * dieFaces.length)];
            currentDice.push(randomDie);
            diceHTML += `<p class="single-die">${randomDie}</p>`;
        }
        myDice.innerHTML = diceHTML;
        updateDiceCount();
    }

    kastTerninger(antall);

    document.getElementById("kasteknapp").addEventListener("click", () => kastTerninger(antall));

    // Quantity Picker
    const oneLess = document.getElementById("die-less");
    const oneMore = document.getElementById("die-more");

    oneMore.addEventListener("click", addDie);
    oneLess.addEventListener("click", removeDie);

    function addDie() {
        antall++;
        updateDiceCount();
    }

    function removeDie() {
        if (antall > 1) {
            antall--;
            updateDiceCount();
        }
    }

    // Sorting dice
    const sortButton = document.getElementById("sort-button");

    sortButton.addEventListener("click", function() {
        currentDice.sort((a, b) => a.localeCompare(b));
        
        let sortedDiceHTML = "";
        currentDice.forEach(die => {
            sortedDiceHTML += `<p class="single-die">${die}</p>`;
        });
        myDice.innerHTML = sortedDiceHTML;
    });

    // Sorting dice
    const hideButton = document.getElementById("hide-button");
    
    hideButton.addEventListener("click", function() {
        myDice.classList.toggle("hidden")
    });

})();
