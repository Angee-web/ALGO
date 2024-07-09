function checkSentence(sentence) {
    // Initialize counters
    let length = 0;
    let letterCount = 0;
    let vowelCount = 0;
    
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Increment length counter for every character including spaces and point
        length++;

        // Check if character is a vowel (case-insensitive)
        if (isVowel(char)) {
            vowelCount++;
        }

        // Check if character is a letter (excluding spaces and the point)
        if (isLetter(char)) {
            letterCount++;
        }
    }

    return {
        length: length,
        letterCount: letterCount,
        vowelCount: vowelCount
    };
}

// Helper function to check if a character is a vowel (case-insensitive)
function isVowel(char) {
    return 'aeiouAEIOU'.indexOf(char) !== -1;
}

// function to check if a character is a letter (excluding whitespaces and point)
function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

// Example:
let sentence = "Hello world. This is a test sentence.";
let check = checkSentence(sentence);

console.log("Sentence:", sentence);
console.log("Length of the sentence:", check.length);
console.log("Number of letters:", check.letterCount);
console.log("Number of vowels:", check.vowelCount);
