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

const difficultyLevels = ["easy", "normal"];

function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const hintElement = document.getElementById('hint');
    const resultElement = document.getElementById('result');

    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';
    hintElement.textContent = '';
    resultElement.textContent = '';

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
    if (selectedAnswer === question.correctAnswer) {
        alert('正解！');
        correctAnswers++;
        displayQuestion(nextQuestion());
    } else {
        alert('不正解！');
    }
    displayResult();
    
;
}

function displayResult() {
    const resultElement = document.getElementById('result');
    const correctRate = (correctAnswers / questions.length) * 100;
    resultElement.textContent = `あなたの正答率は${correctRate.toFixed(2)}%です。`;
}

function nextQuestion() {
     // 難易度を取得
     const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

     // ランダムに選択に問題を選択
     const randomIndex = Math.floor(Math.random() * questions.length);
     const nextQuestion = questions[randomIndex];
     nextQuestion.difficulty= selectedDifficulty;
 
     return nextQuestion;
}


// 初期化
let correctAnswers = 0;
displayQuestion(nextQuestion());

function showHint() {
    // ヒントを表示するロジック
    const hintElement = document.getElementById('hint');
    hintElement.classList.remove('hidden');
}

// ヒントボタンのイベントリスナー
const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', () => showHint());