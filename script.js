// Array of sample sentences
const sentences = [
  "The sun was shining brightly in the clear blue sky.",
  "She walked along the beach, feeling the sand between her toes.",
  "A gentle breeze rustled the leaves of the tall trees.",
  "The aroma of freshly baked bread filled the air.",
  "He sat by the window, lost in thought.",
  "Birds chirped melodiously as the day began.",
  "The city buzzed with activity as people hurried to work.",
  "A rainbow appeared after the rain, painting the sky with colors.",
  "The old book had a mysterious story to tell.",
  "Children laughed and played in the park, full of joy.",
  "The mountains stood tall, covered in a blanket of snow.",
  "She sipped her coffee, enjoying the quiet morning.",
  "Stars twinkled in the night sky, creating a magical scene.",
  "The river flowed gently, reflecting the golden sunset.",
  "He played the guitar, filling the room with beautiful music.",
];

// Function to generate a random paragraph
function generateParagraph(sentenceCount) {
  let paragraph = "";
  for (let i = 0; i < sentenceCount; i++) {
    // Pick a random sentence from the array
    const randomIndex = Math.floor(Math.random() * sentences.length);
    paragraph += sentences[randomIndex] + " ";
  }
  return paragraph.trim(); // Remove the trailing space
}

// Get references to DOM elements
const sentenceCountInput = document.getElementById("sentence-count");
const generateBtn = document.getElementById("generate-btn");
const generatedParagraph = document.getElementById("generated-paragraph");

// Add event listener to the generate button
generateBtn.addEventListener("click", () => {
  // Get the number of sentences
  const sentenceCount = parseInt(sentenceCountInput.value);

  // Validate input
  if (isNaN(sentenceCount) || sentenceCount < 1) {
    alert("Please enter a valid number of sentences.");
    return;
  }

  // Generate the paragraph
  const paragraph = generateParagraph(sentenceCount);

  // Display the generated paragraph
  generatedParagraph.textContent = paragraph;
});
