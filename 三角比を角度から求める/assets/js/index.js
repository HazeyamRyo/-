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

    push(sinValue,angle,"sin");
    push(cosValue,angle,"cos");
    push(tanValue,angle,"tan");
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
        questionText = `次の角度の\\(\\${sct}\\theta\\)の値を求めなさい: ${angle}°`;
        correctAnswer = value;
    return { questionText, correctAnswer };
}

function push(value,angle,sct){
  let { questionText, correctAnswer } = selectTextNormal(value,angle,`${sct}`);
  normalQuestions.push({
      id: angle,
      angle: angle,
      question: questionText,
      correctAnswer: correctAnswer
  });
}

//hardの問題文を生成する関数
function selectTextHard(sinValue,cosValue,tanValue,angle) {
  const questionType = Math.floor(Math.random() * 3); // 0: sin, 1: cos, 2: tan
    let questionText, correctAnswer;

    if (questionType === 0) {
        questionText = `次の角度の\\(\\sin\\theta\\)の値を求めなさい: ${angle}°`;
        correctAnswer = sinValue;
    } else if (questionType === 1) {
        questionText = `次の角度の\\(\\cos\\theta\\)の値を求めなさい: ${angle}°`;
        correctAnswer = cosValue;
    } else {
        questionText = `次の角度の\\(\\tan\\theta\\)の値を求めなさい: ${angle}°`;
        correctAnswer = tanValue;
    }

    return { questionText, correctAnswer };
}
   
console.log(normalQuestions);
console.log(hardQuestions);
