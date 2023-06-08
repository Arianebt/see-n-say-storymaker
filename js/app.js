// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// Get references to the HTML elements
var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var secondNounButton = document.getElementById('secondNounButton');
var placeButton = document.getElementById('placeButton');
var generateButton = document.getElementById('generateButton');
var resetButton = document.getElementById('resetButton');
var storyDisplay = document.getElementById('storyDisplay');

// Define the phrases for different parts of the story
var phrases = {
	nouns: ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'],
	verbs: ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'],
	adjectives: ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
	secondNouns: ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
	places: ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']
};

var generatedStory = '';

// Event listeners for each button
subjectButton.addEventListener('click', function () {
	var randomIndex = Math.floor(Math.random() * phrases.nouns.length);
	var selectedNoun = phrases.nouns[randomIndex];
	generatedStory += '<span class="noun">' + selectedNoun + '</span> ';
	storyDisplay.innerHTML = generatedStory;
	speakNow(selectedNoun);
});

verbButton.addEventListener('click', function () {
	var randomIndex = Math.floor(Math.random() * phrases.verbs.length);
	var selectedVerb = phrases.verbs[randomIndex];
	generatedStory += '<span class="verb">' + selectedVerb + '</span> ';
	storyDisplay.innerHTML = generatedStory;
	speakNow(selectedVerb);
});

adjectiveButton.addEventListener('click', function () {
	var randomIndex = Math.floor(Math.random() * phrases.adjectives.length);
	var selectedAdjective = phrases.adjectives[randomIndex];
	generatedStory += '<span class="adjective">' + selectedAdjective + '</span> ';
	storyDisplay.innerHTML = generatedStory;
	speakNow(selectedAdjective);
});

secondNounButton.addEventListener('click', function () {
	var randomIndex = Math.floor(Math.random() * phrases.secondNouns.length);
	var selectedSecondNoun = phrases.secondNouns[randomIndex];
	generatedStory += '<span class="second-noun">' + selectedSecondNoun + '</span> ';
	storyDisplay.innerHTML = generatedStory;
	speakNow(selectedSecondNoun);
});

placeButton.addEventListener('click', function () {
	var randomIndex = Math.floor(Math.random() * phrases.places.length);
	var selectedPlace = phrases.places[randomIndex];
	generatedStory += '<span class="place">' + selectedPlace + '</span> ';
	storyDisplay.innerHTML = generatedStory;
	speakNow(selectedPlace);
});

generateButton.addEventListener('click', function () {
	var randomSubjectIndex = Math.floor(Math.random() * phrases.nouns.length);
	var randomVerbIndex = Math.floor(Math.random() * phrases.verbs.length);
	var randomAdjectiveIndex = Math.floor(Math.random() * phrases.adjectives.length);
	var randomSecondNounIndex = Math.floor(Math.random() * phrases.secondNouns.length);
	var randomPlaceIndex = Math.floor(Math.random() * phrases.places.length);

	var subject = phrases.nouns[randomSubjectIndex];
	var verb = phrases.verbs[randomVerbIndex];
	var adjective = phrases.adjectives[randomAdjectiveIndex];
	var secondNoun = phrases.secondNouns[randomSecondNounIndex];
	var place = phrases.places[randomPlaceIndex];

	generatedStory = subject + ' ' + verb + ' ' + adjective + ' ' + secondNoun + ' ' + place;
	textToSpeak = generatedStory;
	speakNow(textToSpeak);
	storyDisplay.innerHTML = '<span class="generated-story">' + generatedStory + '</span>';
});

var speakButton = document.getElementById('speakButton');
speakButton.addEventListener('click', function () {
	speakNow(generatedStory);
});

resetButton.addEventListener('click', function () {
	generatedStory = '';
	storyDisplay.textContent = '';
});

