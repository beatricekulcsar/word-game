import words from './all-words.json';

// Check if word is in list

function checkWordLength(word) {
    return word.length == 5;
};

function wordInList(word) {
    return words.includes(word)
};

function checkWord(word) {
// Alert if incorrect length
    if (checkWordLength(word)==false) {
        console.warn(`${word} is not five characters long.`);
        return false;
    };
// Alert if word is not in list
    if (wordInList(word) == false) {
        console.warn(`${word} does not exist in the list.`);
        return false;
    };
    console.info(`${word} is a correct word!:)`);
    return true;
};

export {
    checkWord
};