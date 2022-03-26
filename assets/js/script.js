const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start-btn");

function buildQuiz(){
    const output = [];

    questions.forEach(
      (currentQuestion. questionNumber) => {

          const answers = [];

          for(letter in currentQuestion.answers){
              answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                </label>`
              );
          }

          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
          );
      }
    );
    quizContainer.innerHTML = output.join('');
}



function showResults(){}
function startGame(){}

startButton.addEventListener("click", startGame);

startGame{
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");    
}

buildQuiz();

submitButton.addEventListener("click", showResults);

const questions = [
    {
        question: "Which player was sent off in his final game during the final of the 2006 Football World Cup",
        answers: {
        a: "Zinedine Zidane",
        b: "Marco Materazzi",
        c: "Michael Ballack"
        d: "Luis Figo"    
        },
        correctAnswer: "a"    
    },
    {
        question: "What was Wayne Gretzky's nickname?",
        answers: {
        a: "The Next One",
        b: "The Best One",
        c: "The Great One"
        d: "The First One"    
        },
        correctAnswer: "c"  
    },  
    {
        question: "There is a team in the NBA from Toronto, what are they called?",
        answers: {
        a: "The Maple Leafs",
        b: "The Pirates",
        c: "The Waterfalls"
        d: "The Raptors"    
        },
        correctAnswer: "d"  
    },  
    {
        question: "Where were the Olympic Summer Games of 1996 held?",
        answers: {
        a: "Sydney",
        b: "Athens",
        c: "Atlanta"
        d: "Los Angeles"    
        },
        correctAnswer: "c"  
    },  
    
];

