//on click of start button: start the timer, & go to quiz.html ✅ 
//on quiz.html: generate question and answers for that question
//on click of answer (right or wrong) let them know underneath
//add certain amount of points to score if time is less than 60 but greater than 50, the do the rest till 0 (think grading system)
// if answer is wrong subtract from the clock
// if all questions are answered or the timer reaches 0 the game is over
// then take them to the score-input.html
// once at score-input.html then present them with a form where they can save their username and are presented with there score (saved to local storage)
// after they save their username/score take them to the highscore.html page
// once at the highscore.html page then show them list of high scores and allow them to clear highscores (from local storage) and go back to the home.html page.

var timerEl = document.querySelector(".timer");
var timeLeft = 60;
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var choice1 = document.querySelector(".choice-1");
var choice2 = document.querySelector(".choice-2");
var choice3 = document.querySelector(".choice-3");
var choice4 = document.querySelector(".choice-4");
var indicationEl = document.querySelector(".indication");

var questions = [
    {
        id: 0,
        question: "What is Monkey D. Luffys goal?",
        answers: [
            { choice: "Become the King of the Pirates", correct: true },
            { choice: "Become Hokage", correct: false },
            { choice: "To find the All Blue", correct: false },
            { choice: "Become the Number One Hero", correct: false }
        ],
    },
    {
        id: 1,
        question: "What is Sasuke Uchihas brothers name?",
        answers: [
            { choice: "Madara Uchiha", correct: false },
            { choice: "Obito Uchiha", correct: false },
            { choice: "Itachi Uchiha", correct: true },
            { choice: "Shisui Uchiha", correct: false }
        ],
    },
    {
        id: 2,
        question: "In which book did Harry Potter give the sock to Dobby the Elf?",
        answers: [
            { choice: "Harry Potter and the Goblet of Fire", correct: false },
            { choice: "Harry Potter and the Chamber of Secrets", correct: true },
            { choice: "Harry Potter and the Order of the Phoenix", correct: false },
            { choice: "Harry Potter and the Prizoner of Azkaban", correct: false }
        ],
    },
    {
        id: 3,
        question: "What is Naruto Uzumakis favorite food?",
        answers: [
            { choice: "Tonkatsu", correct: false },
            { choice: "Meat", correct: false },
            { choice: "Burgers", correct: false },
            { choice: "Ramen", correct: true }
        ],
    },
    {
        id: 4,
        question: "Who did Allmight lose his quirk fighting against",
        answers: [
            { choice: "Black Beard", correct: false },
            { choice: "All For One", correct: true },
            { choice: "Tenko Shimura", correct: false },
            { choice: "Fuhrer King Bradley", correct: false }
        ],
    },
];


function countdown() {
    timerEl.textContent = timeLeft + " seconds remaining";

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";

        if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
        } else if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Game Over";
            // TODO: window.location to highscore page 
            // GAME OVER
        }

    }, 1000)
}

countdown();

var start = true;

function iterate(id) {

    questionEl.textContent = questions[id].question;

    choice1.textContent = questions[id].answers[0].choice;
    choice2.textContent = questions[id].answers[1].choice;
    choice3.textContent = questions[id].answers[2].choice;
    choice4.textContent = questions[id].answers[3].choice;
    
    choice1.value = questions[id].answers[0].correct;
    choice2.value = questions[id].answers[1].correct;
    choice3.value = questions[id].answers[2].correct;
    choice4.value = questions[id].answers[3].correct;

    var selected = "";

    choice1.addEventListener("click", function() {
        
        selected = choice1.value;
        console.log(selected)

        if (selected === 1) {
            console.log("correct");
            // indicationEl.textContent = "correct!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            id++;
            iterate(id);
        } else if (selected ==! 1){
            console.log("incorrect");
            // indicationEl.textContent = "wrong!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            // timeLeft -= 10;
            id++;
            iterate(id);
        } else {
            console.log("error");
        }
    });
    
    choice2.addEventListener("click", function() {
        
        selected = choice2.value;
        console.log(selected)

        if (selected === 1) {
            console.log("correct");
            // indicationEl.textContent = "correct!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            id++;
            iterate(id);
        } else if (selected ==! 1) {
            console.log("incorrect");
            // indicationEl.textContent = "wrong!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            // timeLeft -= 10;
            id++;
            iterate(id);
        } else {
            console.log("error");
        }
    });
    
    choice3.addEventListener("click", function() {
        
        selected = choice3.value;
        console.log(selected)
        
        if (selected === 1) {
            console.log("correct");
            // indicationEl.textContent = "correct!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            id++;
            iterate(id);
        } else if (selected ==! 1) {
            console.log("incorrect");
            // indicationEl.textContent = "wrong!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            // timeLeft -= 10;
            id++;
            iterate(id);
        } else {
            console.log("error");
        }
    });
    
    choice4.addEventListener("click", function() {
        
        selected = choice4.value;
        console.log(selected)

        if (selected === 1) {
            console.log("correct");
            // indicationEl.textContent = "correct!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            id++;
            iterate(id);
        } else if (selected ==! 1) {
            console.log("incorrect");
            // indicationEl.textContent = "wrong!";
            // setTimeout(function () {
            //     indicationEl.textContent = "";
            // }, 825);
            // timeLeft -= 10;
            id++;
            iterate(id);
        } else {
            console.log("error");
        }
    });

}

if (start) {
    iterate(0);
}






// function displayQuestions(question) {
//     questionEl.textContent = question.question
//     question.answers.forEach(answer => {
//         var button = document.createElement("button");
//         button.textContent = answer.choice;
//         answersEl.appendChild(button);
//         button.classList.add("btn"); //create a btn class in css
//         button.setAttribute("style", "margin: 12px; padding: 12px;") //delete later 
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", function () {
//             if (answer.correct) {
//                 currentQuestionIndex++;
//                 console.log(questions[currentQuestionIndex])
//                 console.log("correct answer");
//             } else {
//                 currentQuestionIndex++;
//                 console.log("wrong answer");
//                 timeLeft -= 10;
//             }
//         });
//     })
// }


// indicationEl.textContent = "correct!";
//             setTimeout(function () {
//                 indicationEl.textContent = "";
//             }, 825);

// indicationEl.textContent = "wrong!";
//             setTimeout(function () {
//                 indicationEl.textContent = "";
//             }, 825);
//             timeLeft -= 10;