//on click of start button: start the timer, & go to quiz.html
//on quiz.html: generate question and answers for that question
//on click of answer (right or wrong) let them know underneath
//add certain amount of points to score if time is less than 60 but greater than 50, the do the rest till 0 (think grading system)
// if answer is wrong subtract from the clock
// if all questions are answered or the timer reaches 0 the game is over
// then take them to the score-input.html
// once at score-input.html then present them with a form where they can save their username and are presented with there score (saved to local storage)
// after they save their username/score take them to the highscore.html page
// once at the highscore.html page then show them list of high scores and allow them to clear highscores (from local storage) and go back to the home.html page.

var startButtonEl = document.querySelector(".start-button");

startButtonEl.addEventListener("click", function () {
    // start timer
    location.href = "./quiz.html"
});