// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const nouns1 = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a braking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Event Listeners
-------------------------------------------------- */
// Event listeners for buttons
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);

// Concatenate the story components and display
function concatenateStory() {
    const story = [
        document.getElementById('choosenNoun1').textContent,
        document.getElementById('choosenVerb').textContent,
        document.getElementById('choosenAdjective').textContent,
        document.getElementById('choosenNoun2').textContent,
        document.getElementById('choosenSetting').textContent
    ].join(' ');

    document.getElementById('story').textContent = story;
}

/* Functions
-------------------------------------------------- */
// Function for handling 'noun1' button click
function noun1_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    document.getElementById('choosenNoun1').textContent = randomNoun1;
    concatenateStory();
}

// Function for handling 'verb' button click
function verb_on_click() {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById('choosenVerb').textContent = randomVerb;
    concatenateStory();
}

// Function for handling 'adjective' button click
function adjective_on_click() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById('choosenAdjective').textContent = randomAdjective;
    concatenateStory();
}

// Function for handling 'noun2' button click
function noun2_on_click() {
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    document.getElementById('choosenNoun2').textContent = randomNoun2;
    concatenateStory();
}

// Function for handling 'setting' button click
function setting_on_click() {
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    document.getElementById('choosenSetting').textContent = randomSetting;
    concatenateStory();
}

// Function for handling 'playback' button click
function playback_on_click() {
    concatenateStory();
}

// Function for generating a random story
function random_on_click() {
    document.getElementById('choosenNoun1').textContent = nouns1[Math.floor(Math.random() * nouns1.length)];
    document.getElementById('choosenVerb').textContent = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById('choosenAdjective').textContent = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById('choosenNoun2').textContent = nouns2[Math.floor(Math.random() * nouns2.length)];
    document.getElementById('choosenSetting').textContent = settings[Math.floor(Math.random() * settings.length)];

    concatenateStory();
}

// Function to add student ID/name
function addStudentId() {
    const studentIdElement = document.getElementById('studentId');
    studentIdElement.textContent = "";
}

// Add student ID/name when the page loads
addStudentId();