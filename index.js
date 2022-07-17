var readlineSync = require("readline-sync");

var name=readlineSync.question("Take this quiz by entering your name: ")
console.log("-----------------------------------------")

var quiz=[{question: "Monica organises her into serveral categories, How many? a)11 b)13 ", answer:"11"},
          {question: "Joey's acting agent's name? a)Andrea b)Estelle ", answer:"Estelle"},
           {question: "Which job did Rachel’s fiancé Barry Farber do? a)Dentist b)Lawyer ", answer:"Dentist"},
           {question: "How many times has Ross been married? a)2 b)3 ", answer:"3"},
           {question: " True or false, Monica ate macaroni off a jewelry box she made.", answer:"True"}
         ]

function game() {
  for (var i=0; i<quiz.length; i++) {
    var question = quiz[i];
    
    check(question.question, question.answer)
  }
}

var count=0;
function check(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase())
  {
    count++;
    console.log("You are Correctt!!")
  } else{
    console.log("Nahhhh :(, Better luck next time")
  }
    console.log("Your current score: "+count)
    console.log("-----------------------------------------")
}

function showScores() {

  if(count>=3){
    console.log("Wohooooo! "+name+", You are a true fan. Your score: ", count);
  }else{
    console.log("Try again! "+name+". Your score is "+count)
  }
}

game();
showScores();