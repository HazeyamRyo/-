const questions = [
    // 問題データ
    {
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0,
        difficulty: "easy",
        img: "./assets/img/三角形(θはB).svg"
    },
    // ... その他の問題
];

const difficultyLevels = ["easy", "normal", "hard"];

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
    choicesElement.appendChild(image);
}

function checkAnswer(selectedAnswer, question) {
    if (selectedAnswer === question.correctAnswer) {
        alert('正解！');
        correctAnswers++;
    } else {
        alert('不正解！');
    }
    displayResult();
    nextQuestion();
}

function displayResult() {
    const resultElement = document.getElementById('result');
    const correctRate = (correctAnswers / questions.length) * 100;
    resultElement.textContent = `あなたの正答率は${correctRate.toFixed(2)}%です。`;
}

function nextQuestion() {
    // 難易度をランダムに選択
    const randomDifficulty = difficultyLevels[Math.floor(Math.random() * difficultyLevels.length)];
    const filteredQuestions = questions.filter(q => q.difficulty === randomDifficulty);
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const nextQuestion = filteredQuestions[randomIndex];

    displayQuestion(nextQuestion);
}

function showHint(question) {
    // ヒントを表示するロジック
    const hintElement = document.getElementById('hint');
    hintElement.textContent = 'ヒント: 正解は、直角と最も遠い頂点と直角を挟む辺です。'; // 例
    hintElement.classList.remove('hidden');
}

// 初期化
let correctAnswers = 0;
displayQuestion(getRandomQuestion());

// ヒントボタンのイベントリスナー
const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', () => showHint(currentQuestion));