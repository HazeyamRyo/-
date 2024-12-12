const questionTexts = [
    { text : "次の三角形の\\(\\sin\\theta\\)の値を求めなさい。",
      id : 1,
    },
    { text : "次の三角形の\\(\\cos\\theta\\)の値を求めなさい。",
      id : 2,
    },
    { text : "次の三角形の\\(\\tan\\theta\\)の値を求めなさい。",
      id : 3,
    }
 ];
 
 const questions = [
     {
         normalImg : "./assets/img/normal/normal 1-1-√2.svg",
         hardImg : ["./assets/img/hard/hard 1-1-√2 90.svg","./assets/img/hard/hard 1-1-√2 180.svg","./assets/img/hard/hard 1-1-√2 270.svg"],
         id : 112,
     },
     {
         normalImg : "./assets/img/normal/normal 1-√3-2.svg",
         hardImg : ["./assets/img/hard/hard 1-√3-2 90.svg","./assets/img/hard/hard 1-√3-2 180.svg","./assets/img/hard/hard 1-√3-2 270.svg"],
         id : 132,
     },
     {
         normalImg : "./assets/img/normal/normal 2-√5-3.svg",
         hardImg : ["./assets/img/hard/hard 2-√5-3 90.svg","./assets/img/hard/hard 2-√5-3 180.svg","./assets/img/hard/hard 2-√5-3 270.svg"],
         id : 253,
     },
     {
         normalImg : "./assets/img/normal/normal 3-4-5.svg",
         hardImg : ["./assets/img/hard/hard 3-4-5 90.svg","./assets/img/hard/hard 3-4-5 180.svg","./assets/img/hard/hard 3-4-5 270.svg"],
         id : 345,
     },
     {
         normalImg : "./assets/img/normal/normal 5-12-13.svg",
         hardImg : ["./assets/img/hard/hard 5-12-13 90.svg","./assets/img/hard/hard 5-12-13 180.svg","./assets/img/hard/hard 5-12-13 270.svg"],
         id : 51213,
     }
 ];
 
 const choices = [
     {
         id : 112,
         choice : ["\\(\\frac{1}{\\sqrt{2}}\\)","\\(\\frac{1}{1}=1\\)", "\\(\\frac{\\sqrt{2}}{1}=\\sqrt{2}\\)"],
         correctNumberSin : 0,
         correctNumbercos : 0,
         correctNumbertan : 1
     },
     {
         id : 132,
         choice : [ "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)","\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{1}=\\sqrt{3}\\)", "\\(\\frac{2}{1}=2\\)", "\\(\\frac{2}{\\sqrt{3}}\\)"],
         correctNumberSin : 0,
         correctNumbercos : 1,
         correctNumbertan : 3
     },
     {
         id : 253,
         choice : [ "\\(\\frac{2}{3}\\)","\\(\\frac{2}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{2}\\)", "\\(\\frac{3}{2}\\)", "\\(\\frac{3}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{3}\\)"],
         correctNumberSin : 0, 
         correctNumbercos : 5,
         correctNumbertan : 1
     },  
     {
         id : 345,
         choice : [ "\\(\\frac{3}{5}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{4}{5}\\)", "\\(\\frac{5}{4}\\)","\\(\\frac{5}{3}\\)"],
         correctNumberSin : 0,
         correctNumbercos : 3,
         correctNumbertan : 1
     },
     {
         id : 51213,
         choice : ["\\(\\frac{5}{13}\\)","\\(\\frac{5}{12}\\)", "\\(\\frac{12}{5}\\)", "\\(\\frac{12}{13}\\)", "\\(\\frac{13}{12}\\)", "\\(\\frac{13}{5}\\)"],
         correctNumberSin : 0,
         correctNumbercos : 3,
         correctNumbertan : 1,
     }
 ];
 
 // 未選択の問題を追跡するための配列
 let remainingQuestions = [...questions];
 let selectedDifficulty = 'normal'; // 初期難易度
 let currentQuestion = null;
 let currentQuestionTextIndex = 0; // 現在のquestionTextのインデックス
 let scoreCount = 0; // 正解数
 let currentChoices = []; // 現在の選択肢を保持する変数
 
 // ボタンの配置をランダムにする
 function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
     }
     return array;
 }
 
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
     if (selectedAnswer === correctAnswer) {
        resultDiv.textContent = "Correct! 🎉";
        resultDiv.className = "correct visible";
         currentQuestionTextIndex++;
         if (currentQuestionTextIndex >= questionTexts.length) {
             currentQuestionTextIndex = 0;
             scoreCount++;
             currentQuestion = getNextQuestion();
         }
         setTimeout(() => {
             displayQuestion(currentQuestion);
             enableButtons(); // ボタンを再度有効化
         }, 1000);
     } else {
        resultDiv.textContent = "Wrong! 😢";
        resultDiv.className = "wrong visible";
         setTimeout(() => {
             enableButtons(); // ボタンを再度有効化
         }, 1000);
     }

     resultDiv.style.opacity = 1;
     resultDiv.style.transform = "scale(1)";

    // 一定時間後にリセット
    setTimeout(() => {
        resultDiv.style.opacity = 0;
        resultDiv.style.transform = "scale(0.8)";
        setTimeout(() => {
            resultDiv.className = "hidden";
        }, 500);
    }, 1000);
 }
 
 function getNextQuestion() {
     if (remainingQuestions.length === 0) {
         if (selectedDifficulty === 'normal') {
             alert('全ての問題が出題されました！難易度をhardに切り替えます。');
             selectedDifficulty = 'hard';
             remainingQuestions = [...questions]; // 問題をリセット
             scoreCount = 0; // 正解数をリセット
             displayDifficulty();
         } else {
             alert('全ての問題が出題されました！');
             return null;
         }
     }
     const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
     const nextQuestion = remainingQuestions[randomIndex];
     remainingQuestions.splice(randomIndex, 1); // 選ばれた問題を未選択の配列から削除
     return nextQuestion;
 }
 
 let currentImageSrc = ''; // 現在表示されている画像のソースを保持する変数
 
 function displayQuestion(question) {
     if (!question) return;
 
     // 問題文を表示
     const questionTextElement = document.getElementById("questionText");
     questionTextElement.innerHTML = questionTexts[currentQuestionTextIndex].text;
     const scoreElement = document.getElementById("score");
     scoreElement.textContent = scoreCount;
 
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
             checkAnswer(choice, question, questionTexts[currentQuestionTextIndex].id);
             disableButtons(); // ボタンを無効化
         });
         choicesButtons.appendChild(button);
     });
 
     // MathJaxのレンダリングを行う
     MathJax.typesetPromise();
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
     });
 }
 
 // ボタンを有効化
 function enableButtons() {
     const buttons = document.querySelectorAll('.choices-buttons button');
     buttons.forEach(button => {
         button.disabled = false;
     });
 }
 
 // 初期表示
 currentQuestion = getNextQuestion();
 displayQuestion(currentQuestion);
 displayDifficulty(); // 初期化時に難易度を表示