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
        img : "img/normal/normal 1-1-√2.svg",
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
        id : 132,
    },
    {
        img : "img/normal/normal 5-12-13.svg",
        diff : "normal",
        id : 132,
    },]

const choices = [{
    id : 112,
    choice : []
},
{
    id : 132,
    choice : []
},
{
    id : 253,
    choice : []
},
{
    id : 345,
    choice :  []
},
{
    id : 51213,
    choice : []
}]
    