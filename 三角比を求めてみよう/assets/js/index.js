// 直角三角形の辺の長さから、三角比を求めるクイズゲームアプリです。
// imgファイルに格納されている画像に対して、ユーザーが正しい三角比を選択することで、正解率を競います。
// ユーザーが間違えた場合は、ヒントを確認してもう一度挑戦することができます。
// また、ユーザーが正解した問題の履歴を確認することができます。
// jsファイルには、問題と選択肢の生成、正誤判定、ヒントの表示の実装が記述されています。
// 難易度は、normal, hard, very hardの3段階から選択できます。
// normalの問題では、./img/normalに格納されている画像からランダムに問題が出題されます。
// hardの問題では、./img/hardに格納されている画像からランダムに問題が出題されます。
// veryhardの問題では、./img/veryhardに格納されている画像からランダムに問題が出題されます。
// cssファイルには、画面のデザインが記述されています。
// htmlファイルには、画面の構成が記述されています。
// 5問正解するごとに難易度が上がり、メッセージが表示されます。



const questions = [
    {
        img :  "./assets/img/normal/normal 1-1-√2.svg",
        diff : "normal",
        id : 112,
    },
    {
        img : "img/normal/normal 1-√3-2.svg",
        diff : "normal",
        id : 132,
    },
    {
        img : "img/normal/normal 2-√5-3.svg",
        diff : "normal",
        id : 253,
    },
    {
        img : "img/normal/normal 3-4-5.svg",
        diff : "normal",
        id : 345,
    },
    {
        img : "img/normal/normal 5-12-13.svg",
        diff : "normal",
        id : 51213,
    },]

    const choices = [
        {
            id : 112,
            choice : ["\\(\\frac{1}{1}=2\\)", "\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{\\sqrt{2}}{1}=\\sqrt{2}\\)"]
        },
        {
            id : 132,
            choice : ["\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{1}=\\sqrt{3}\\)", "\\(\\frac{2}{1}=2\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{2}{\\sqrt{3}}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)"]
        },
        {
            id : 253,
            choice : ["\\(\\frac{2}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{2}\\)", "\\(\\frac{2}{3}\\)", "\\(\\frac{3}{2}\\)", "\\(\\frac{3}{\\sqrt{5}}\\)", "\\(\\frac{\\sqrt{5}}{3}\\)"]
        },
        {
            id : 345,
            choice : ["\\(\\frac{3}{4}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{4}{5}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{3}{5}\\)", "\\(\\frac{5}{3}\\)"]
        },
        {
            id : 51213,
            choice : ["\\(\\frac{5}{12}\\)", "\\(\\frac{12}{5}\\)", "\\(\\frac{12}{13}\\)", "\\(\\frac{13}{12}\\)", "\\(\\frac{5}{13}\\)", "\\(\\frac{13}{5}\\)"]
        }
    ];
    
    function displayQuestion(question) {
        const choicesElement = document.getElementById("choices");
    
        choicesElement.innerHTML = '';
        const choicesButtons = document.createElement('div');
        choicesButtons.className = 'choices-buttons';
        choicesElement.appendChild(choicesButtons);

    // 画像を表示
    const imgElement = document.createElement('img');
    imgElement.src = question.img;
    imgElement.alt = "問題の画像";
    imgElement.className = 'question-image';
    choicesElement.appendChild(imgElement);

    
        // 選択肢を表示
        const choiceData = choices.find(choice => choice.id === question.id);
        if (choiceData) {
            choiceData.choice.forEach(choice => {
                const button = document.createElement('button');
                button.innerHTML = choice; // innerHTMLを使用して数式を表示
                choicesButtons.appendChild(button);
            });
        }
    
        // MathJaxのレンダリングを行う
        MathJax.typesetPromise();
    }
    
    // 問題の表示
    displayQuestion(questions[0]);