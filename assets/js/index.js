const questions = [
    // 問題データ
    {
        id: 1,
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0,
        img: "./assets/img/三角形(θはB).svg"
    },
    {
        id: 1,
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 1, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはC).svg",
    
    }, 
    {
        id: 1,
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 2, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはA).svg"
    
    }, {
        id: 1,
        question: "次の直角三角形において、対辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはC).svg",
    },
    {
        id: 1,
        question: "次の直角三角形において、対辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 1, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはA).svg",
    
    }, 
    {
        id: 1,
        question: "次の直角三角形において、対辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 2, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはB).svg",
    
    }, 
    {
        id: 1,
        question: "次の直角三角形において、隣辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはA).svg",
    }, 
    {
        id: 1,
        question: "次の直角三角形において、隣辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 1, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはB).svg",
    
    }, 
    {
        id: 1,
        question: "次の直角三角形において、隣辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 2, // 0から始まるインデックスで指定
        img: "./assets/img/三角形(θはC).svg"
    
    }
    // ... その他の問題
];



// 初期化
let correctAnswers = 0;
let selectedDifficulty = 'easy'; // 初期難易度を設定
let difficultyMessageShown = false; // フラグ変数を追加
displayQuestion(nextQuestion());
displayScore();
displayDifficulty(); // 初期化時に難易度を表示

// 問題を表示
function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';

    // 選択肢を表示
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(index, question));
        choicesElement.appendChild(button);
    });

    // 画像を表示
    const image = document.createElement('img');
    image.src = question.img;

    // 難易度に応じた回転
    if (question.difficulty === 'easy') {
        image.style.transform = 'rotate(0deg)';
    } else {
        const randomAngle = Math.floor(Math.random() * 360);
        image.style.transform = `rotate(${randomAngle}deg)`;
    }

    choicesElement.appendChild(image);
}

function checkAnswer(selectedAnswer, question) {
    const resultDiv = document.getElementById("result");
    if (selectedAnswer === question.correctAnswer) {
        resultDiv.textContent = "Correct! 🎉";
        resultDiv.className = "correct";
        correctAnswers++;
        setTimeout(() => {
            displayQuestion(nextQuestion());
        }, 2000);
    } else {
        resultDiv.textContent = "Wrong! 😢";
        resultDiv.className = "wrong";
    }
    resultDiv.classList.remove("hidden");
    resultDiv.style.display = "block"; // 表示する

    // 次の問題に進む場合の例（一定時間後リセット）
    setTimeout(() => {
        resultDiv.className = "hidden";
        resultDiv.style.display = "none"; // 非表示にする
    }, 2000);
    displayScore();
}

//正答数を表示
function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `正解数: ${correctAnswers}`;
}

// 正答数が10問に達したら終了
if (correctAnswers === 10) {
    alert('終了！');
}

// 次の問題を取得
function nextQuestion() {
    // 正答数が5問に達するまで難易度は「easy」
    if (correctAnswers >= 5) {
        if (selectedDifficulty !== 'normal' && !difficultyMessageShown) {
            const difficultyMessageElement = document.createElement('div');
            difficultyMessageElement.textContent = '難易度が normalになります。ここからは図形が回転します。';
            difficultyMessageElement.className = 'difficulty-message';
            document.body.appendChild(difficultyMessageElement);
            setTimeout(() => {
                difficultyMessageElement.remove();
            }, 2000);
            difficultyMessageShown = true; // フラグを更新
        }
        selectedDifficulty = 'normal';
    } else {
        selectedDifficulty = 'easy';
    }
    displayDifficulty(); // 難易度が変更された後に表示

    return getNextQuestion();
}
    
// ランダムに次の問題を取得
function getNextQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const nextQuestion = questions[randomIndex];
    nextQuestion.difficulty = selectedDifficulty;
    console.log(nextQuestion);
    return nextQuestion;
}

//現在の難易度を表示
function displayDifficulty() {
    const difficultyElement = document.getElementById('difficulty');
    difficultyElement.textContent = selectedDifficulty;
}

function showHint() {
    // ヒントを表示するロジック
    const hintElement = document.getElementById('hint');
    hintElement.classList.toggle('hidden');
}

// ヒントボタンのイベントリスナー
const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', () => showHint());