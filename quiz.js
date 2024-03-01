const questions = [
    {
        question: "What is your favorite color?",
        options: ["Blue", "Red", "Green", "Yellow"]
    },
    {
        question: "What is your preferred temperature range?",
        options: ["Warm", "Cool", "Neutral"]
    },
    {
        question: "How much space do you need?",
        options: ["Small tank", "Medium tank", "Large tank"]
    }
];

const fishMap = {
    "Blue Cool Large tank": "Bass",
    "Blue Cool Medium tank": "Goldfish",
    "Blue Cool Small tank": "White Cloud Mountain Minnow",
    "Blue Warm Large tank": "Discus Fish",
    "Blue Warm Medium tank": "Angelfish",
    "Blue Warm Small tank": "Guppy",
    "Blue Neutral Large tank": "Koi Fish",
    "Blue Neutral Medium tank": "Tetra Fish",
    "Blue Neutral Small tank": "Platy Fish",
    "Red Cool Large tank": "Shrimp",
    "Red Cool Medium tank": "Arowana",
    "Red Cool Small tank": "Cichlid",
    "Red Warm Large tank": "Oscar Fish",
    "Red Warm Medium tank": "Parrotfish",
    "Red Warm Small tank": "Gourami",
    "Red Neutral Large tank": "Mollies",
    "Red Neutral Medium tank": "Swordtails",
    "Red Neutral Small tank": "Barbs",
    "Green Cool Large tank": "Plecostomus",
    "Green Cool Medium tank": "Rainbowfish",
    "Green Cool Small tank": "Tiger Barb",
    "Green Warm Large tank": "Axolotl",
    "Green Warm Medium tank": "Danio",
    "Green Warm Small tank": "Rasbora",
    "Green Neutral Large tank": "Catfish",
    "Green Neutral Medium tank": "Loach",
    "Green Neutral Small tank": "Turtle",
    "Yellow Cool Large tank": "Bristlenose Pleco",
    "Yellow Cool Medium tank": "Bumblebee Goby",
    "Yellow Cool Small tank": "Kuhli Loach",
    "Yellow Warm Large tank": "Killifish",
    "Yellow Warm Medium tank": "Mystery Snail",
    "Yellow Warm Small tank": "White Cloud Mountain Minnow",
    "Yellow Neutral Large tank": "Ghost Shrimp",
    "Yellow Neutral Medium tank": "Cherry Shrimp",
    "Yellow Neutral Small tank": "Zebra Danio"
};

// Function to create and display the quiz
function displayQuiz() {
    const quizSection = document.getElementById("quiz");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `Question ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionTitle);

        q.options.forEach(option => {
            const optionLabel = document.createElement("label");
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index}`;
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));

            questionDiv.appendChild(optionLabel);
        });

        quizSection.appendChild(questionDiv);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Quiz";
    submitButton.addEventListener("click", submitQuiz);

    quizSection.appendChild(submitButton);
}

// Function to submit the quiz and display results
function submitQuiz() {
    const quizSection = document.getElementById("quiz");
    const resultSection = document.createElement("div");
    resultSection.classList.add("results");

    let result = "";
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            result += selectedOption.value + " ";
        } else {
            result = "Please answer all questions.";
            return;
        }
    });

    const fishType = fishMap[result.trim()];
    resultSection.textContent = fishType ? `Your fish type is: ${fishType}` : "Could not determine fish type.";
    quizSection.parentNode.insertBefore(resultSection, quizSection.nextSibling);
    quizSection.parentNode.removeChild(quizSection);
}

// Call the function to display the quiz when the page loads
document.addEventListener("DOMContentLoaded", displayQuiz);