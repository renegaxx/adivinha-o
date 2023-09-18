
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 5; 
let gameOver = false;

 const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
  const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

submitButton.addEventListener('click', () => {
    if (!gameOver) {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            setMessage('Coloca um Número de 1 à 100 meu lindo, fora disso não vai funcionar seu gay.', 'red');
            return;
        }

        attempts--;
        attemptsDisplay.textContent = attempts;

        if (guess === randomNumber) {
            setMessage(`Boa parceiro, você acertou o número ${randomNumber}.`, 'green');
            gameOver = true;
        } else if (attempts === 0) {
            setMessage(`Suas tentativas acabaram☹️, O número correto era ${randomNumber} recarrega a página e tente de novo.`, 'red');
            gameOver = true;
        } else {
            const hint = guess < randomNumber ? 'maior' : 'menor';
            setMessage(`Tente novamente. O número correto é ${hint} que ${guess}.`, 'blue');
        }

        guessInput.value = '';
    }
});

function setMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}