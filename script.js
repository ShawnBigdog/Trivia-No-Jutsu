function flipTile(tile) {
    const tileInner = tile.querySelector('.tile-inner');
    console.log(tileInner, "has been clicked");
    // Toggle the flip effect when the tile is clicked
    tileInner.style.transform = tileInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
function checkEnter(event) {
    if (event.key === "Enter") {
        answer();
    }
}

function answer() {
    let correctAnswer = "Kushina Uzumaki"; // Correct answer
    let userAnswer = document.getElementById("answer").value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! Naruto's mother is Kushina Uzumaki.");
    } else {
        alert("Incorrect. Try again!");
    }
}