const messages = [
    "Sure kana diyan beh?",
    "weh di nga?",
    "Hindi na talaga?",
    "eee...",
    "wag naman uy",
    "Wawa naman ako😟...",
    "aray ko...",
    "sad na si chaddy niyan😟",
    "Okay sige...",
    "kk 😟"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}