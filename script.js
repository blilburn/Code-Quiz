/* List of Questions */
const questions = [
    {
        title: 'What is Javascript?',
        choices: [
            'A user-defined or built-in set of statements that perform a task',
            'An object that is a form element',
            'A scripting language developed by Netscape for HTML documents',
            'A text object suppressed from appearing on an HTML form'],
        answer: 'A scripting language developed by Netscape for HTML documents'
    },
    {
        title: 'What is a document?',
        choices: [
            'A text object suppressed from appearing on an HTML form',
            'An attribute of HTML tags embedded in documents',
            'A symbol representing a quantity that assumes a range of values',
            'An object name that refers specifically to the HTML document that contains the Javascript'
        ],
        answer: 'An object name that refers specifically to the HTML document that contains the Javascript'
    },
    {
        title: 'What is a variable?',
        choices: [
            'A command that tells how an object is to be acted upon',
            'A symbol representing a quantity that assumes a range of values',
            'A function assigned to an object',
            'A user-defined or built-in set of statements that perform a task'
        ],
        answer: 'A symbol representing a quantity that assumes a range of values'
    },
    {
        title: 'What is a method?',
        choices: [
            "An attribute of HTML tags embedded in documents",
            "A command that tells how an object is to be acted upon",
            "Orderliness of thought or behavior",
            "The best type of acting"
        ],
        answer: "A command that tells how an object is to be acted upon"
    },
    {
        title: "What is a function?",
        choices: [
            "A symbol representing a quantity that assumes a range of values",
            "A user-defined or built-in set of statements that perform a task",
            "Performs a function on one or more operands or variables",
            "A window that contains HTML subdocuments"
        ],
        answer: "A user-defined or built-in set of statements that perform a task"
    },
    {
        title: "What is a literal?",
        choices: [
            "A user-defined or built-in set of statements that perform a task",
            "An absolute value not assigned to a variable",
            "A window that contains HTML subdocuments",
            "An Attribute of HTML tags embedded in documents"
        ],
        answer: "An absolute value not assigned to a variable"
    },
    {
        title: "What is a string?",
        choices: [
            "A function assigned to an object",
            "Text which is denoted by being surrounded with either single or double quotes",
            "Performs a function on one or more operands or variables",
            "A user-defined or built-in set of statements that perform a task"
        ],
        answer: "Text which is denoted by being surrounded with either single or double quotes"
    },
    {
        title: "What is a property?",
        choices: [
            "Used to describe an object and is defined by assigning it a value",
            "Performs a function on one or more operands or variables",
            "An object that is a form element",
            "A symbol representing a quantity that assumes a range of values"
        ],
        answer: "Used to describe an object and is defined by assigning it a value"
    },
    {
        title: "What is an instance?",
        choices: [
            "A user-defined or built-in set of statements that perform a task",
            "It contains information about what an object is to do or how a method is to be carried out",
            "A window that contains HTML subdocuments",
            "A symbol representing a quantity that assumes a range of values"
        ],
        answer: "It contains information about what an object is to do or how a method is to be carried out"
    },
    {
        title: "Are you excited to learn more about programming?",
        choices: [
            "Yes!",
            "Yes!",
            "Yes!",
            "Yes!"
        ],
        answer: "Yes!"
    }
]
/* Code Quiz */

const codeQuiz = () => {

    /* Variables declared for time */
    let totalTime = 120;
    let gameTime = 0;

    /* Variables declared for score*/
    let correct = 0;
    let wrong = 0;
    const total = questions.length;

    const initialize = () => {
        $(document).ready(function () {
            $('.html').on('click', quizCards);
            $('.scores_nav').on('click', checkRankingSubmit);
            $('.scores').on('click', checkRankingSubmit);
        })
    }
    /* Start game */
    const startGame = (e) => {
        $('.quiz_cards').hide();
        $('.scores').show();
        $('.time').show();
        $('.quiz').show();

        /* Nav bar and body background color */
        document.getElementsByTagName('nav')[0].style.borderBottom = '1px solid #97e8a3';
        document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(18, 18, 180)';
        displayQuestion();

        $('.time').text(totalTime);
        theTimer();
    }

    const quizCards = () => {
        /* Created object future quizzes to store the properties of each quiz */
        const beginnerQuizzes = [
            {
            },
        ];
        /* Once quiz begins hides anything unrelated to quiz questions*/
        $('.catalog').hide();
        $('.tests').hide();
        $('.quiz_cards').show();

        beginnerQuizzes.forEach(quiz => {
            $('.quiz_cards .container').append(`<div class="card intro mt-">
            <div class="card-footer">
              <p id="${quiz.id}" class="start">Start Quiz!</p>
            </div><br><br>`);
            $('#' + quiz.id).on('click', startGame);
            /* Placeholders for quizzes to be added in the future*/
            $('.quiz_cards .container').append(`<div class="card intro mt-">
            <div class="card-footer">
                <p id="${quiz.id}" class="start">Quiz Under Construction</p>
            </div><br><br>`);
            /*Changed event handler to comment until additional quizzes created */
            /*  $('#' + quiz.id).on('click', startGame); */

            $('.quiz_cards .container').append(`<div class="card intro mt-">
            <div class="card-footer">
                <p id="${quiz.id}" class="start">Quiz Under Construction</p>
            </div><br><br>`);
            /*  $('#' + quiz.id).on('click', startGame); */

            $('.quiz_cards .container').append(`<div class="card intro mt-">
            <div class="card-footer">
                <p id="${quiz.id}" class="start">Quiz Under Construction</p>
            </div><br><br>`);
            /*  $('#' + quiz.id).on('click', startGame); */
        })
    }
    /* Created to display questions */
    const displayQuestion = () => {
        const question = questions.shift();
        // console.log(questions);
        const quiz = $(`<div class="card quiz_card text-white">
                        <div class= "card-header">
                          ${question.title}
                        </div>
                      </div >`);

        const choicesList = $('<ul class="list-group"></ul>');

        choicesList.on('click', (e) => { clickResult(e, question.answer) })

        question['choices'].forEach(choice => {
            choicesList.append(`<li  class="list-group-item mt-3">${choice}</li>`);
        })
        quiz.append(choicesList);
        $('.quiz').append(quiz);
    }
    /* Created to respond to the answer the player selected. 
    Correct answers are green. Incorrect answers are red and deduct time */
    const clickResult = (e, answer) => {
        e.preventDefault();

        if ($(e.target).html() === answer) {
            /*Green color for correct answers*/
            e.target.style.borderColor = '#0b3125';
            e.target.style.backgroundColor = '#144736';
            correct++;
            totalTime++;
            setTimeout(() => {
                $('.quiz').empty();
                if (questions.length !== 0) {
                    displayQuestion();
                } else {
                    gameTime = totalTime;
                    quizEnd();
                    $('.time').text(totalTime);
                    totalTime = 0;
                }
            }, 1000);
        } else {
            wrong++;
            /*red color for incorrect answers*/
            e.target.style.borderColor = '#f64f4b';
            e.target.style.backgroundColor = '#6b110f';
            setTimeout(() => {
                /*5 second time deduction for incorrect answer*/
                totalTime -= 5;
                if (totalTime <= 0) {
                    totalTime = 0
                }
                $('.quiz').empty();
                displayQuestion();
            }, 1000);
        }
    }

    /*Setting time and game conclusion conditions*/
    const theTimer = () => {
        if (totalTime === 0) {
            // gameTime = totalTime;
            quizEnd();
            $('.time').text(totalTime);
        }
        if (totalTime > 0) {
            $('.time').text(totalTime--);
            setTimeout(theTimer, 1000);
        }
    }
    /*event handler for name submition*/
    const quizEnd = () => {
        displayScorecard();
        $('#nameSubmit').on('click', submitInfo);
    }
    /* Created object to display list of scores and hide anything unrelated to score display*/
    const displayScorecard = () => {
        $('.quiz').hide();
        $('.scores').hide();
        $('.time').hide();

        $('.score_card').html(
            `<div class="card score">
          <h1 class="title text-white text-center pt-5 pb-3 pl-4 pr-4">Quiz Scorecard</h1>
          <div class="card-header">
            <p class="result py-4">Score: ${gameTime}</p>
          </div>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">${wrong}</li>
            <li class="list-group-item">${correct}</li>
            <li class="list-group-item">${(correct / total * 100).toFixed(0)}%</li>
          </ul>
        </div>
        <div class="input-group mt-5">
          <input type="text" class="form-control player" placeholder="Type Your Initials Here" aria-label="Username" aria-describedby="basic-addon1">
          <div class="input-group-append">
            <button class="btn btn-outline-success" type="button" id="nameSubmit">Submit</button>
          </div>
        </div>`);
    }
    /* Created object to submit the score and the name of the player */
    const submitInfo = (e) => {

        e.preventDefault();

        $('.score_card').hide();
        // $('.score_table').show();

        const playerName = $('.player').val();
        const player = {
            name: playerName,
            score: gameTime
        }
        // console.log(player);
        saveLocalStorage(player);
        playerRankings(player);
    }
    /*Created object for showing rankings of quiz players */
    const playerRankings = (currentPlayer = {}) => {
        const players = JSON.parse(localStorage.getItem('players'));

        const rankings = $(`<div class="card">
                                <div class= "card-header">
                                    <h3>List of High Scores</h3>
                                </div>
                            </div >`);

        const listOfPlayers = $('<ul class="list-group list-group-flush"></ul>');

        if (players !== null) {
            scoreArrangement(players);
            players.forEach((player, index) => {
                if (currentPlayer.name === player.name && currentPlayer !== {}) {
                    listOfPlayers.append(`<li class="list-group-item font-weight-bold mt-1">${index + 1}. ${player.name} <span class="player_score">${player.score}</span></li>`);
                } else {
                    listOfPlayers.append(`<li class="list-group-item mt-1">${index + 1}. ${player.name} <span class="player_score">${player.score}</span></li>`);
                }
            })
        }

        rankings.append(listOfPlayers);
        $('.score_table').append(rankings);
    }

    /* Sorting the players by their score */
    const scoreArrangement = (arr) => {
        arr.sort((a, b) => {
            const scoreA = a.score;
            const scoreB = b.score;
            if (scoreA < scoreB)
                return 1
            if (scoreA > scoreB)
                return -1
            return 0
        })
    }

    /* The player is saved to the local storage*/
    const saveLocalStorage = (player) => {
        if (localStorage.getItem('players') === null) {
            const players = [];
            players.push(player);
            localStorage.setItem('players', JSON.stringify(players));
        } else {
            const players = JSON.parse(localStorage.getItem('players'));
            players.push(player);
            localStorage.setItem('players', JSON.stringify(players));
        }
    }

    initialize();
}

codeQuiz();


