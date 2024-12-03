//高校数学の三角比の問題を出題するアプリの一部を作成します。
//このページでは、三角形の辺の名前に関連する問題を出題します。
//問題の画像はassets/imgフォルダに保存されています。
//画像は、直角三角形の各辺に関連する角度を示しています。
//各問題には、正しい答えがあります。ユーザーが選択した答えが正しいかどうかを確認します。
//難易度が３つあります。easyとnormalとhardです。
//easyの場合、画像は回転しません。normalの場合、画像はランダムな角度で回転します。hardの場合、画像はランダムな角度で回転し、画像は鏡写しになります。
//正解数が5問に達すると、難易度がnormalに変更されます。
//正解数が10問に達すると、難易度がhardに変更されます。
//正解数が15問に達すると、ゲームが終了します。
//難易度が変更されると、画面にメッセージが表示されます。
//ヒントボタンをクリックすると、ヒントが表示されます。



const questions = [
    // 問題データ
    {
        id: 1,
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0,
        img: "./assets/img/三角形.svg"
    },
    {
        id: 2,
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 1, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg",
    
    }, 
    {
        id: 3,
        question: "次の直角三角形において、斜辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 2, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg"
    
    }, {
        id: 2,
        question: "次の直角三角形において、対辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg",
    },
    {
        id: 3,
        question: "次の直角三角形において、対辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 1, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg",
    
    }, 
    {
        id: 1,
        question: "次の直角三角形において、対辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 2, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg",
    
    }, 
    {
        id: 3,
        question: "次の直角三角形において、隣辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 0, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg",
    }, 
    {
        id: 1,
        question: "次の直角三角形において、隣辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 1, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg",
    
    }, 
    {
        id: 2,
        question: "次の直角三角形において、隣辺はどの辺ですか？",
        choices: ["AB", "BC", "AC"],
        correctAnswer: 2, // 0から始まるインデックスで指定
        img: "./assets/img/三角形.svg"
    
    }
    // ... その他の問題
];



// 初期化
let correctAnswers = 0;
let selectedDifficulty = 'easy'; // 初期難易度を設定
let difficultyMessageNormalShown = false; // フラグ変数を追加
let difficultyMessageHardShown = false; // フラグ変数を追加
displayQuestion(nextQuestion());
displayScore();
displayDifficulty(); // 初期化時に難易度を表示

function nextQuestion() {
    // 難易度に応じて処理を変更
    //難易度hardの場合、画像はランダムな角度で回転し、鏡写しになります。
    if (correctAnswers >= 15) {
        alert('終了！');
        return;
    } else if (correctAnswers >= 10) {
        if (selectedDifficulty !== 'hard' && !difficultyMessageHardShown) {
            const difficultyMessageElement = document.createElement('div');
            difficultyMessageElement.textContent = '難易度が hardになります。ここからは図形が回転し、さらに反転します。';
            difficultyMessageElement.className = 'difficulty-message';

            // 他の要素を非表示にする
            const elementsToHide = document.querySelectorAll('#score, #result, #difficulty, #question, #choices, #hintButton');
            elementsToHide.forEach(element => {
                element.style.display = 'none';
            });

            document.body.appendChild(difficultyMessageElement);
            setTimeout(() => {
                difficultyMessageElement.remove();

                // 他の要素を再表示する
                elementsToHide.forEach(element => {
                    element.style.display = '';
                });
            }, 2000);
            difficultyMessageHardShown = true; // フラグを更新
        }
        selectedDifficulty = 'hard';
    } 
    //難易度normalの場合、画像はランダムな角度で回転します。
    else if (correctAnswers >= 5) {
        if (selectedDifficulty !== 'normal' && !difficultyMessageNormalShown) {
            const difficultyMessageElement = document.createElement('div');
            difficultyMessageElement.textContent = '難易度が normalになります。ここからは図形が回転します。';
            difficultyMessageElement.className = 'difficulty-message';

            // 他の要素を非表示にする
            const elementsToHide = document.querySelectorAll('#score, #result, #difficulty, #question, #choices, #hintButton');
            elementsToHide.forEach(element => {
                element.style.display = 'none';
            });

            document.body.appendChild(difficultyMessageElement);
            setTimeout(() => {
                difficultyMessageElement.remove();

                // 他の要素を再表示する
                elementsToHide.forEach(element => {
                    element.style.display = '';
                });
            }, 2000);
            difficultyMessageNormalShown = true; // フラグを更新
        }
        selectedDifficulty = 'normal';
    } 
    //難易度easyの場合、画像は回転しません。
    else {
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

    
    
    // 画像を生成して表示
    const canvas = generateTriangleImage(question);

    // 難易度に応じた回転と鏡写し
    if (question.difficulty === 'easy') {
        canvas.style.transform = 'rotate(0deg)';
    } else if (question.difficulty === 'normal') {
        const randomAngle = Math.floor(Math.random() * 360);
        canvas.style.transform = `rotate(${randomAngle}deg)`;
    } else if (question.difficulty === 'hard') {
        const randomAngle = Math.floor(Math.random() * 360);
        canvas.style.transform = `rotate(${randomAngle}deg) scaleX(-1)`;
    }

    choicesElement.appendChild(canvas);
}

function generateTriangleImage(question) {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');

    // 画像を描画
    const img = new Image();
    img.src = question.img;
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 頂点に記号を割り振る
    ctx.font = 'bold 30px Arial'; // フォントサイズを30pxにし、太字にする
    ctx.fillStyle = 'black';
    if (question.id === 1) {
        ctx.fillText('A', 260, 40); // 右上にA
        ctx.fillText('C', 260, 280); // 右下にC
        ctx.fillText('B', 20, 280); // 左下にB
    } else if (question.id === 2) {
        ctx.fillText('B', 260, 40); // 右上にB
        ctx.fillText('A', 260, 280); // 右下にA
        ctx.fillText('C', 20, 280); // 左下にC
    } else if (question.id === 3) {
        ctx.fillText('C', 260, 40); // 右上にC
        ctx.fillText('B', 260, 280); // 右下にB
        ctx.fillText('A', 20, 280); // 左下にA
    }
    };

    return canvas;
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
if (correctAnswers === 15) {
    alert('終了！');
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