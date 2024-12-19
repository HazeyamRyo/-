// 問題文とヒントのテキスト
const questionTexts = [
    { text: "次の三角形の\\(\\sin\\theta\\)の値を求めなさい。", hint: "\\(\\sin\\theta = \\frac{\\text{対辺}}{\\text{斜辺}}\\)です！", id: 1 },
    { text: "次の三角形の\\(\\cos\\theta\\)の値を求めなさい。", hint: "\\(\\cos\\theta = \\frac{\\text{隣辺}}{\\text{斜辺}}\\)です！", id: 2 },
    { text: "次の三角形の\\(\\tan\\theta\\)の値を求めなさい。", hint: "\\(\\tan\\theta = \\frac{\\text{対辺}}{\\text{隣辺}}\\)です！", id: 3 }
];

// 問題のデータ
const questions = [
    { normalImg: "./assets/img/normal/normal 1-1-√2.svg", hardImg: ["./assets/img/hard/hard 1-1-√2 90.svg", "./assets/img/hard/hard 1-1-√2 180.svg", "./assets/img/hard/hard 1-1-√2 270.svg"], id: 112 },
    { normalImg: "./assets/img/normal/normal 1-√3-2.svg", hardImg: ["./assets/img/hard/hard 1-√3-2 90.svg", "./assets/img/hard/hard 1-√3-2 180.svg", "./assets/img/hard/hard 1-√3-2 270.svg"], id: 132 },
    { normalImg: "./assets/img/normal/normal 1-2-√3.svg", hardImg: ["./assets/img/hard/hard 1-2-√3 90.svg", "./assets/img/hard/hard 1-2-√3 180.svg", "./assets/img/hard/hard 1-2-√3 270.svg"], id: 123 },
    { normalImg: "./assets/img/normal/normal 2-√5-3.svg", hardImg: ["./assets/img/hard/hard 2-√5-3 90.svg", "./assets/img/hard/hard 2-√5-3 180.svg", "./assets/img/hard/hard 2-√5-3 270.svg"], id: 253 },
    { normalImg: "./assets/img/normal/normal 2-3-√5.svg", hardImg: ["./assets/img/hard/hard 2-3-√5 90.svg", "./assets/img/hard/hard 2-3-√5 180.svg", "./assets/img/hard/hard 2-3-√5 270.svg"], id: 235 },
    { normalImg: "./assets/img/normal/normal 3-4-5.svg", hardImg: ["./assets/img/hard/hard 3-4-5 90.svg", "./assets/img/hard/hard 3-4-5 180.svg", "./assets/img/hard/hard 3-4-5 270.svg"], id: 345 },
    { normalImg: "./assets/img/normal/normal 3-5-4.svg", hardImg: ["./assets/img/hard/hard 3-5-4 90.svg", "./assets/img/hard/hard 3-5-4 180.svg", "./assets/img/hard/hard 3-5-4 270.svg"], id: 354 },
    { normalImg: "./assets/img/normal/normal 5-12-13.svg", hardImg: ["./assets/img/hard/hard 5-12-13 90.svg", "./assets/img/hard/hard 5-12-13 180.svg", "./assets/img/hard/hard 5-12-13 270.svg"], id: 51213 },
    { normalImg: "./assets/img/normal/normal 5-13-12.svg", hardImg: ["./assets/img/hard/hard 5-13-12 90.svg", "./assets/img/hard/hard 5-13-12 180.svg", "./assets/img/hard/hard 5-13-12 270.svg"], id: 51312 }
];

// 選択肢のデータ
const choices = [
    { id: 112, choice: ["\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{1}{1}=1\\)", "\\(\\frac{\\sqrt{2}}{1}=\\sqrt{2}\\)"], correctNumberSin: 0, correctNumbercos: 0, correctNumbertan: 1 },
    { id: 132, choice: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{1}=\\sqrt{3}\\)", "\\(\\frac{2}{1}=2\\)", "\\(\\frac{2}{\\sqrt{3}}\\)"], correctNumberSin: 0, correctNumbercos: 1, correctNumbertan: 3 },
    { id: 123, choice: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{1}=\\sqrt{3}\\)", "\\(\\frac{2}{1}=2\\)", "\\(\\frac{2}{\\sqrt{3}}\\)"], correctNumberSin: 1, correctNumbercos: 0, correctNumbertan: 2 },
    { id: 253, choice: ["\\(\\frac{2}{3}\\)", "\\(\\frac{2}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{2}\\)", "\\(\\frac{3}{2}\\)", "\\(\\frac{3}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{3}\\)"], correctNumberSin: 0, correctNumbercos: 5, correctNumbertan: 1 },
    { id: 235, choice: ["\\(\\frac{2}{3}\\)", "\\(\\frac{2}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{2}\\)", "\\(\\frac{3}{2}\\)", "\\(\\frac{3}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{3}\\)"], correctNumberSin: 5, correctNumbercos: 0, correctNumbertan: 2 },
    { id: 345, choice: ["\\(\\frac{3}{5}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{4}{5}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{5}{3}\\)"], correctNumberSin: 0, correctNumbercos: 3, correctNumbertan: 1 },
    { id: 354, choice: ["\\(\\frac{3}{5}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{4}{5}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{5}{3}\\)"], correctNumberSin: 3, correctNumbercos: 0, correctNumbertan: 2 },
    { id: 51213, choice: ["\\(\\frac{5}{13}\\)", "\\(\\frac{5}{12}\\)", "\\(\\frac{12}{5}\\)", "\\(\\frac{12}{13}\\)", "\\(\\frac{13}{12}\\)", "\\(\\frac{13}{5}\\)"], correctNumberSin: 0, correctNumbercos: 3, correctNumbertan: 1 },
    { id: 51312, choice: ["\\(\\frac{5}{13}\\)", "\\(\\frac{5}{12}\\)", "\\(\\frac{12}{5}\\)", "\\(\\frac{12}{13}\\)", "\\(\\frac{13}{12}\\)", "\\(\\frac{13}{5}\\)"], correctNumberSin: 3, correctNumbercos: 0, correctNumbertan: 2 }
];

// 未選択の問題を追跡するための配列
let remainingQuestions = [...questions];
let currentQuestion = null;
let currentQuestionTextIndex = 0; // 現在のquestionTextのインデックス
let scoreCount = 0; // 正解数
let currentChoices = []; // 現在の選択肢を保持する変数
let startTime, endTime, timerInterval; // タイマー用の変数
let isTimeAttackMode = false; // タイムアタックモードのフラグ

// ボタンの配置をランダムにする
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 現在の難易度を表示
function displayDifficulty() {
    const difficultyElement = document.getElementById('difficulty');
    difficultyElement.textContent = selectedDifficulty;
}

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

// ヒントを表示
function showHint() {
    const hintElement = document.getElementById('hint');
    hintElement.classList.toggle('hidden');
}

// ヒントボタンのイベントリスナー
const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', showHint);

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
        const timerElement = document.querySelector('.timer');
        timerElement.classList.remove('hidden');
    } else {
        startGame();
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
            startGame();
        }
    }, 1000);
}

// ゲームを開始
function startGame() {
    startTime = Date.now(); // タイマーを開始
    if (isTimeAttackMode) {
        timerInterval = setInterval(updateTimer, 100); // タイマーを更新
    }
    remainingQuestions = [...questions]; // 問題をリセット
    scoreCount = 0; // 正解数をリセット
    displayDifficulty();
    currentQuestion = getNextQuestion();
    displayQuestion(currentQuestion);

    if ((numberOfQuestions >= 1 && numberOfQuestions <= 9) | isTimeAttackMode) {
        // question-containerを表示
        document.querySelector('.container').classList.remove('hidden');
        document.querySelector('.setting').classList.add('hidden');
        startButton.disabled = true;
    } else {
        alert("題数の上限は9問です。");
        startButton.disabled = false;
    }
}

// タイマーを更新
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const elapsedTime = (Date.now() - startTime) / 1000;
    timerElement.textContent = `${elapsedTime.toFixed(1)}秒`;
}

// 次の問題を取得
function getNextQuestion() {
    if (scoreCount === numberOfQuestions) {
        if (isTimeAttackMode) {
            endTime = Date.now(); // タイマーを終了
            clearInterval(timerInterval); // タイマーを停止
            const elapsedTime = (endTime - startTime) / 1000; // 経過時間を秒で計算
            alert(`タイムアタックモード終了！経過時間: ${elapsedTime}秒`);
        }
        startButton.disabled = false;
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = "Correct! すべての問題が終わりました 🎉";
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
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const nextQuestion = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1); // 選ばれた問題を未選択の配列から削除
    return nextQuestion;
}

// ゲーム要素をリセット
function resetGameElements() {
    const questionTextElement = document.getElementById("questionText");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");
    const difficultyElement = document.getElementById('difficulty');
    const resultDiv = document.getElementById("result");

    questionTextElement.innerHTML = '';
    choicesElement.innerHTML = '';
    scoreElement.textContent = '';
    difficultyElement.textContent = '';
    resultDiv.className = "visibility-hidden"; 

    // question-containerを非表示
    document.querySelector('.container').classList.add('hidden');
    // settingを表示
    document.querySelector('.setting').classList.remove('hidden');
}

// 問題を表示
function displayQuestion(question) {
    if (!question) return;

    // 問題文を表示
    const questionTextElement = document.getElementById("questionText");
    questionTextElement.innerHTML = questionTexts[currentQuestionTextIndex].text;
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = scoreCount+1;

    // 選択肢を表示
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = '';
    const choicesButtons = document.createElement('div');
    choicesButtons.className = 'choices-buttons';
    choicesElement.appendChild(choicesButtons);

    // 画像を表示
    const imgElement = document.createElement('img');
    if (currentQuestionTextIndex === 0) {
        if (selectedDifficulty === 'normal') {
            currentImageSrc = question.normalImg;
        } else if (selectedDifficulty === 'hard') {
            const randomIndex = Math.floor(Math.random() * question.hardImg.length);
            currentImageSrc = question.hardImg[randomIndex];
        }
        // 選択肢をシャッフル
        const choiceData = choices.find(choice => choice.id === question.id);
        if (choiceData) {
            currentChoices = shuffleArray([...choiceData.choice]); // 選択肢をシャッフルして保持
        }
    }
    imgElement.src = currentImageSrc;
    imgElement.alt = "問題の画像";
    imgElement.className = 'question-image';
    choicesElement.appendChild(imgElement);

    // 選択肢を表示
    currentChoices.forEach(choice => {
        const button = document.createElement('button');
        button.innerHTML = choice; // innerHTMLを使用して数式を表示
        button.addEventListener('click', () => {
            disableButtons(); // ボタンを無効化
            checkAnswer(choice, question, questionTexts[currentQuestionTextIndex].id);
        });
        choicesButtons.appendChild(button);
    });
    // MathJaxのレンダリングを行う
    MathJax.typesetPromise();
}

// 答えをチェック
function checkAnswer(selectedAnswer, question, questionTextId) {
    const choiceData = choices.find(choice => choice.id === question.id);
    if (!choiceData) return;

    // 正解のインデックスを取得
    let correctAnswerIndex;
    if (questionTextId === 1) {
        correctAnswerIndex = choiceData.correctNumberSin;
    } else if (questionTextId === 2) {
        correctAnswerIndex = choiceData.correctNumbercos;
    } else if (questionTextId === 3) {
        correctAnswerIndex = choiceData.correctNumbertan;
    }

    const correctAnswer = choiceData.choice[correctAnswerIndex];
    const resultDiv = document.getElementById("result");
    const questionHintElement = document.getElementById("questionHint");

    if (selectedAnswer === correctAnswer) {
        resultDiv.textContent = "大正解 🎉";
        resultDiv.className = "correct visible";
        currentQuestionTextIndex++;
        questionHintElement.textContent = "";
        if (currentQuestionTextIndex >= questionTexts.length) {
            currentQuestionTextIndex = 0;
            scoreCount++;
            currentQuestion = getNextQuestion();
        }
        setTimeout(() => {
            resultDiv.className = "visibility-hidden";
            displayQuestion(currentQuestion);
            enableButtons(); // ボタンを再度有効化
        }, 2000);
    } else {
        resultDiv.textContent = "不正解 😢";
        resultDiv.className = "wrong visible";
        questionHintElement.textContent = questionTexts[currentQuestionTextIndex].hint;
        MathJax.typesetPromise();
        modetime =  (isTimeAttackMode) ? 4000 : 2000;
        setTimeout(() => {
            resultDiv.className = "visibility-hidden";
            enableButtons(); // ボタンを再度有効化
        }, modetime);
    }
}
   
//resetボタンの処理
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    resetGameElements();
    startButton.disabled = false;
});

