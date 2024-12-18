const questions=[{
    question: "Who is known as the father of the computer ?",
    answers:[
        {text: "Alan Turing",correct: "false"},
        {text: "Charles Babbage",correct: "true"},
        {text: "John von Neumann",correct: "false"},
        {text: "Tim Berners-Lee",correct: "false"},
    ]},
    {
        question: "what does CPU stand for ?",
        answers:[
        {text: "Central Processing Unit",correct: "true"},
        {text: "Central Program",correct: "false"},
        {text: "Central Peripheral",correct: "false"},
        {text: "Central Performance Unit",correct: "false"},
    ]},
    {
        question: "Which of the following is a non-volatile memory ?",
        answers:[
        {text: "RAM",correct: "false"},
        {text: "Cache",correct: "false"},
        {text: "ROM",correct: "true"},
        {text: "Register",correct: "false"},
    ]},
    {
        question: "Which company developed the Java programming language ?",
        answers:[
        {text: "Microsoft",correct: "false"},
        {text: "Sun Microsystems",correct: "true"},
        {text: "Apple",correct: "false"},
        {text: "IBM",correct: "false"},
    ]},
    {
        question: "What is the HTTP stand for ?",answers:[
        {text: "HyperText Transfer Protocol",correct: "true"},
        {text: "High Transmission Text Protocol",correct: "false"},
        {text: "Hyper Transfer Text Program",correct: "false"},
        {text: "High Traffic Transfer Protocol",correct: "false"},
    ]},
    {
        question: "What is the main function of an Operating System ?",
        answers:[
        {text: "Database Management",correct: "false"},
        {text: "Networking",correct: "false"},
        {text: "Software development",correct: "false"},
        {text: "Resourse management",correct: "true"},
    ]},
    {
        question: "Which data stucture works on the principle of FIFO(First IN,First Out) ?",
        answers:[
        {text: "Tree",correct: "false"},
        {text: "Stack",correct: "false"},
        {text: "Queue",correct: "true"},
        {text: "Linked List",correct: "false"},
    ]},
    {
        question: "What is the full form of SQL in databases ?",
        answers:[
        {text: "Structured Question Language",correct: "false"},
        {text: "Standard Query language",correct: "false"},
        {text: "Simple Query Language",correct: "false"},
        {text: "Structured Query Language",correct: "true"},
    ]},
    {
        question: "Which protocol is used to send emails ?",
        answers:[
        {text: "FTP",correct: "false"},
        {text: "SMTP",correct: "true"},
        {text: "HTTP",correct: "false"},
        {text: "SNMP",correct: "false"},
    ]},
    {
        question: "Which programming language is primarily used for Artificial Intelligence ?",
        answers:[
        {text: "Python",correct: "true"},
        {text: "Java",correct: "false"},
        {text: "HTML",correct: "false"},
        {text: "c",correct: "false"},
    ]}  
    ]
const questionElement=document.getElementById("question")
const answerButtons=document.getElementById("answers")
const nextBtn=document.getElementById("nextBtn")

let currentQuestionIndex=0;
let score=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestions();

}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;  
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display="none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
})


function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block"
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}
startQuiz();