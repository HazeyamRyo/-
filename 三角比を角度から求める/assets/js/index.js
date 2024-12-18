//難易度normalの問題
normalQuestionsContaner = [{
    id: 1,
    angle: 30,
    choices: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{1}=\\sqrt{3}\\)", "\\(\\frac{2}{1}=2\\)", "\\(\\frac{2}{\\sqrt{3}}\\)"], 
    correctSin: 1,
    correctCos: 0,
    correctTan: 2,
},{
    id: 2,
    angle: 45,
    choices:["\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{1}{1}=1\\)", "\\(\\frac{\\sqrt{2}}{1}=\\sqrt{2}\\)"],
    correctSin: 0,
    correctCos: 0,
    correctTan: 1,
},
{
    id: 3,
    angle: 60,
    choices: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{1}=\\sqrt{3}\\)", "\\(\\frac{2}{1}=2\\)", "\\(\\frac{2}{\\sqrt{3}}\\)"],
    correctSin: 0,
    correctCos: 1,
    correctTan: 3,
}];


//難易度normalの問題を生成
const normalQuestions = [];
normalQuestionsContaner.forEach((question) => {
    const sinValue = question.choices[question.correctSin];
    const cosValue = question.choices[question.correctCos];
    const tanValue = question.choices[question.correctTan];
    const angle = question.angle;
    const choices = question.choices;

    push(sinValue,angle,"sin",choices);
    push(cosValue,angle,"cos",choices);
    push(tanValue,angle,"tan",choices);
   });
    

//難易度hardの問題を生成
//1°から89°までの問題を生成。正弦，余弦、正接をランダムに尋ねる。answerは小数点以下4桁まで表示
const hardQuestions = [];
for (let angle = 1; angle < 90; angle++) {
    const sinValue = Math.sin(angle * Math.PI / 180).toFixed(4);
    const cosValue = Math.cos(angle * Math.PI / 180).toFixed(4);
    const tanValue = Math.tan(angle * Math.PI / 180).toFixed(4);

    const { questionText, correctAnswer } = selectTextHard(sinValue,cosValue,tanValue,angle);

    hardQuestions.push({
        id: angle,
        angle: angle,
        question: questionText,
        correctAnswer: correctAnswer
    });
}

//normalの問題文を生成する関数たち
function selectTextNormal(value,angle,sct) {
    let questionText, correctAnswer;
        questionText = `\\(\\${sct}${angle}°\\)の値を求めなさい `;
        correctAnswer = value;
    return { questionText, correctAnswer };
}

function push(value,angle,sct,choices){
  let { questionText, correctAnswer } = selectTextNormal(value,angle,`${sct}`);
  normalQuestions.push({
      id: angle,
      angle: angle,
      question: questionText,
      correctAnswer: correctAnswer,
      choices: choices
  });
}

//hardの問題文を生成する関数
function selectTextHard(sinValue,cosValue,tanValue,angle) {
  const questionType = Math.floor(Math.random() * 3); // 0: sin, 1: cos, 2: tan
    let questionText, correctAnswer;

    if (questionType === 0) {
        questionText = `\\(\\sin${angle}°\\)の値を求めなさい`;
        correctAnswer = sinValue;
    } else if (questionType === 1) {
        questionText = `\\(\\cos${angle}°\\)の値を求めなさい`;
        correctAnswer = cosValue;
    } else {
        questionText = `\\(\\tan${angle}°\\)の値を求めなさい`;
        correctAnswer = tanValue;
    }

    return { questionText, correctAnswer };
}
   
console.log(normalQuestions);
console.log(hardQuestions);

//問題の難易度を取得し問題を選択する
function getNextQuestion(difficulty) {
    if (difficulty === "normal") {
        return selectQuestion(normalQuestions);
    } else {
        return selectQuestion(hardQuestions);
    }
}
//問題をランダムに選ぶ関数
function selectQuestion(questions) {
    const questionIndex = Math.floor(Math.random() * questions.length);
    return questions[questionIndex];
}

//問題を表示する関数
function showQuestion(question) {
    const questionElement = document.getElementById("questionText");
    questionElement.innerHTML = question.question;  
} 

//答え合わせをする関数
function checkAnswer(question, selectedAnswer) {
    const correctAnswer = question.correctAnswer;
    const resultDiv = document.getElementById("result");
    const questionHintElement = document.getElementById("questionHint")
    
    if (selectedAnswer === correctAnswer) {
        resultDiv.textContent = "大正解 🎉";
        resultDiv.className = "correct visible";
        questionHintElement.textContent = "";
        setTimeout(() => {
            resultDiv.className = "visibility-hidden";
            generateQuestion(selectedDifficulty); // 次の問題を生成
            enableButtons(); // ボタンを再度有効化
        }, 2000);
    } else {
        resultDiv.textContent = "不正解 😢";
        resultDiv.className = "wrong visible";
        MathJax.typesetPromise();
        setTimeout(() => {
            resultDiv.className = "visibility-hidden";
            enableButtons(); // ボタンを再度有効化
        }, 2000);
    }
}

// ボタンについての関数

// ボタンを無効化
function disableButtons() {
    const buttons = document.querySelectorAll('.choices-buttons button');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });
}
// ボタンを有効化
function enableButtons() {
    const buttons = document.querySelectorAll('.choices-buttons button');
    buttons.forEach(button => {
        button.disabled = false;
        button.style.cursor = 'pointer';
    });
}
//ボタンを生成する
function createButtons(currentQuestion) {
    const buttonsContainer = document.getElementById("choicesButtons");
    if (!buttonsContainer) {
        console.error("buttonContainer is not found");
        return;
    }
    buttonsContainer.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            disableButtons();
            checkAnswer(currentQuestion, choice);
        });
        buttonsContainer.appendChild(button);
        buttonsContainer.classList.add("choices-buttons");
    });
}

//問題を生成する処理
function generateQuestion(difficulty) {
    if (scoreCount === numberOfQuestions-1) {
    resetGame();
    return;
    };//問題数が終わっていたらリセット
    scoreCount++;
    displayScore();
    const userAnswer = document.getElementById("userAnswer");
    const checkButton = document.getElementById("checkButton");
    if(difficulty === "normal"){
        const currentQuestion = getNextQuestion("normal");
        showQuestion(currentQuestion);
        createButtons(currentQuestion);
        userAnswer.classList.add("hidden");
        checkButton.classList.add("hidden");
    }
    if(difficulty === "hard"){
        const currentQuestion = getNextQuestion("hard");
        showQuestion(currentQuestion);
        const button =document.getElementById("checkButton");
        button.addEventListener("click", () => {
        checkAnswer(currentQuestion, userAnswer.value);
        });
    }
    
     // MathJaxのレンダリングを行う
     MathJax.typesetPromise();
}

//ステータスを表示する関数たち
// 現在の難易度を表示
function displayDifficulty() {
    const difficultyElement = document.getElementById('difficulty');
    if (selectedDifficulty === "normal") {
        difficultyElement.textContent = "30°, 45°, 60°の三角比の値";
    } else {
        difficultyElement.textContent = "1°から89°までの三角比の値";
    }
}
// 現在の問題数を表示
function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = scoreCount+1;
}
// ヒントを表示
function showHint() {
    const hintElement = document.getElementById('hint');
    hintElement.classList.toggle('hidden');
}

// ヒントボタンのイベントリスナー
const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', showHint);

// settingの処理
// モード選択のイベントリスナー
const modeInputs = document.getElementsByName('mode');
modeInputs.forEach(input => {
    input.addEventListener('change', () => {
        const numberOfQuestionsContainer = document.getElementById('numberOfQuestionsContainer');
        const timeAttackInfo = document.getElementById('timeAttackInfo');
        if (input.value === 'timeattack' && input.checked) {
            numberOfQuestionsContainer.classList.add('hidden');
            timeAttackInfo.classList.remove('hidden');
        } else {
            numberOfQuestionsContainer.classList.remove('hidden');
            timeAttackInfo.classList.add('hidden');
        }
    });
});

// 初期設定するイベントリスナー
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    scoreCount = -1; // 正解数をリセット
    const scoreInput = document.getElementById('numberOfQuestionsInput');
    numberOfQuestions = parseInt(scoreInput.value, 10);

    const difficultyInputs = document.getElementsByName('difficulty');
    difficultyInputs.forEach(input => {
        if (input.checked) {
            selectedDifficulty = input.value;
        }
    });

    const modeInputs = document.getElementsByName('mode');
    modeInputs.forEach(input => {
        if (input.checked) {
            isTimeAttackMode = input.value === 'timeattack';
        }
    });

    if (isTimeAttackMode) {
        numberOfQuestions = 5; // タイムアタックモードでは問題数を5問に固定
        startCountdown(); // カウントダウンを開始
    } else {
        startGame(selectedDifficulty); // ゲームを開始
        const timerElement = document.querySelector('.timer');
        timerElement.classList.add('hidden');
    }
});

// カウントダウンを開始
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.classList.remove('hidden');
    let countdown = 3;
    countdownElement.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            countdownElement.classList.add('hidden');
            startGame(selectedDifficulty);
        }
    }, 1000);
}

// ゲームを開始
function startGame(difficulty) {
    startTime = Date.now(); // タイマーを開始
    if (isTimeAttackMode) {
        timerInterval = setInterval(updateTimer, 100); // タイマーを更新
    }
    displayDifficulty();//難易度を表示
    displayScore();//問題数を表示
    generateQuestion(difficulty);//問題を生成
    if ((numberOfQuestions >= 1 && numberOfQuestions <= 9) | isTimeAttackMode) {
        // question-containerを表示
        document.querySelector('.container').classList.remove('hidden');
        document.querySelector('.setting').classList.add('hidden');
        startButton.disabled = true;
    } else {
        alert("問題数を入力してください。問題数の上限は9問です。");
        startButton.disabled = false;
    }
}

function resetGame() {
    if (isTimeAttackMode) {
        endTime = Date.now(); // タイマーを終了
        clearInterval(timerInterval); // タイマーを停止
        const elapsedTime = (endTime - startTime) / 1000; // 経過時間を秒で計算
        alert(`タイムアタックモード終了！経過時間: ${elapsedTime}秒`);
    }
    startButton.disabled = false;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "すべての問題が終わりました 🎉お疲れ様でした。";
    resultDiv.className = "correct visible";
    // 一定時間後にリセット
    setTimeout(() => {
        setTimeout(() => {
            resultDiv.className = "visibility-hidden";
            resetGameElements();
        }, 500);
    }, 1000);
    return null;
}

// ゲーム要素をリセット
function resetGameElements() {
    const questionTextElement = document.getElementById("questionText");
    const choicesElement = document.getElementById("choicesButtons");
    const scoreElement = document.getElementById("score");
    const difficultyElement = document.getElementById('difficulty');
    const resultDiv = document.getElementById("result");

    if (questionTextElement) questionTextElement.innerHTML = '';
    if (choicesElement) choicesElement.innerHTML = '';
    if (scoreElement) scoreElement.textContent = '';
    if (difficultyElement) difficultyElement.textContent = '';
    if (resultDiv) resultDiv.className = "visibility-hidden"; 

    // question-containerを非表示
    const containerElement = document.querySelector('.container');
    if (containerElement) containerElement.classList.add('hidden');
    
    // settingを表示
    const settingElement = document.querySelector('.setting');
    if (settingElement) settingElement.classList.remove('hidden');
}

// タイマーを更新
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const elapsedTime = (Date.now() - startTime) / 1000;
    timerElement.textContent = `${elapsedTime.toFixed(1)}秒`;
}
