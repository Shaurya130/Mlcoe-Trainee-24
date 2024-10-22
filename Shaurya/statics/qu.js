const questions = [
    {
        question: "Who was the creator of NodeJS",
      answers: [
            {Text: "Hughie Reynolds", correct: false},
            {Text: "Ryan Dahl", correct: true},
            {Text: "Alfred Molina", correct: false},
            {Text: "Light Yagami", correct: false},
        ]
    },
    {
        question: "Which company develops the famous games franchise Grand theft Auto",
        answers: [
            {Text: "Rockstar games", correct: true},
            {Text: "Insomniac", correct: false},
            {Text: "Tencent Studios", correct: false},
            {Text: "Riot Games", correct: false},
        ]
    },
    {
        question: "Which company develops Visual Studio Code",
        answers: [
            {Text: "Apple", correct: false},
            {Text: "Google", correct: false},
            {Text: "Microsoft", correct: true},
            {Text: "Mozilla", correct: false},
        ]
    },
    {
        question: "Did this Quiz impress you",
        answers: [
            {Text: "YES", correct: false},
            {Text: "DEFINETELY YES", correct: false},
            {Text: "console.log('YES')", correct: false},
            {Text: "NOO", correct: true},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerbtn=document. getElementById("answer-btn");
const nextbtn = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML= "Next";
    showquestion();
}

function showquestion(){
    resetstate()
    let currentquestion = questions[currentquestionindex];
    let questionNo = currentquestionindex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer)
    });
}

function resetstate(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswer(e){
   const selectedbtn = e.target;
   const iscorrect = selectedbtn.dataset.correct === "true";
   if(iscorrect){
    selectedbtn.classList.add("correct");
    score++
    }
   else{
    selectedbtn.classList.add("incorrect");
 }
 Array.from(answerbtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
 });
 nextbtn.style.display = "block";
}

function showscore(){
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}! `;
    nextbtn.innerHTML = "play again"
    nextbtn.style.display = "block";
}
function handlenextbtn(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showquestion();
    }else{
        showscore();
    }
}


nextbtn.addEventListener('click', ()=>{
    if(currentquestionindex < questions.length){
        handlenextbtn();
    }
    else{
        startquiz();
    }
})
startquiz();