const cupidContainer = document.querySelector('.cupid-container');
const cupid = document.getElementById('cupid');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const message = document.getElementById('message');
const questionContainer = document.querySelector('.question'); // Select the question container
let moving = true;

// Function to move the cupid container to a random position 
function moveCupidContainer() {
    if (moving) {
        const containerWidth = cupidContainer.offsetWidth;
        const containerHeight = cupidContainer.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const x = Math.random() * (windowWidth - containerWidth);
        const y = Math.random() * (windowHeight - containerHeight);

        cupidContainer.style.left = `${x}px`;
        cupidContainer.style.top = `${y}px`;
    }
}

// Move cupid and show anger GIF when NO is clicked
noBtn.addEventListener('click', () => {
    cupid.src = 'cupid_angry.gif'; // Change to the anger GIF
    moveCupidContainer(); // Move to a random position
});

// Stop cupid, show message, and hide question when YES is clicked
yesBtn.addEventListener('click', () => {
    moving = false; // Stop moving
    message.style.display = 'block'; // Show the "I like you too!" message
    cupid.src = 'cupid_smiling.gif'; // Change cupid's image to the smiling GIF
    questionContainer.style.display = 'none'; // Hide the question and buttons
});
