import { checkWord } from './logic.js';

let wordForm = document.getElementById('input-form');

wordForm.addEventListener('submit', function(event){
    const newWord = event.target.word.value;
    event.preventDefault();
    checkWord(newWord);
});


// Check if letters are in solution

// Check which letters are in correct position

// Highlight used wrong letters

// Highlight used right letters




