function buildQuiz() {
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                </label>`
                );
            }

            output.push(
                `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
             </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = "lightblue";
        } 
        else {
            answerContainers[questionNumber].style.color = "red";
        }
    });
    resultContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length-1){
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide(){
    showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const questions = [{
        question: "Which player was sent off in his final game during the final of the 2006 Football World Cup",
        answers: {
            a: "Zinedine Zidane",
            b: "Marco Materazzi",
            c: "Michael Ballack",
            d: "Luis Figo"
        },
        correctAnswer: "a"
    },
    {
        question: "What was Wayne Gretzky's nickname?",
        answers: {
            a: "The Next One",
            b: "The Best One",
            c: "The Great One",
            d: "The First One"
        },
        correctAnswer: "c"
    },
    {
        question: "There is a team in the NBA from Toronto, what are they called?",
        answers: {
            a: "The Maple Leafs",
            b: "The Pirates",
            c: "The Waterfalls",
            d: "The Raptors"
        },
        correctAnswer: "d"
    },
    {
        question: "Where were the Olympic Summer Games of 1996 held?",
        answers: {
            a: "Sydney",
            b: "Athens",
            c: "Atlanta",
            d: "Los Angeles"
        },
        correctAnswer: "c"
    },
    {
        question: "LeBron James has plays for the Los Angeles Lakers, whitch other gteams did he play for before?",
        answers: {
            a: "Chicago Bulls & Atlanta Hawks",
            b: "Indiana Pacers & Miami Heat",
            c: "Chicago Bulls & Golden State Warriors ",
            d: "Miami Heat & Cleveland Cavaliers"
        },
        correctAnswer: "d"
    },
    {
        question: "?",
        answers: {
            a: "Sydney",
            b: "Athens",
            c: "Atlanta",
            d: "Los Angeles"
        },
        correctAnswer: "c"
    },

];

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);