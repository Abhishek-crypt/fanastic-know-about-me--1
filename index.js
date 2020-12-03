var readlineSync = require ('readline-sync');

var score = 0 ;
// input

var userAnswerAge= readlineSync.question ("Am I elder than 5? ") ;

console.log ("you entered"+userAnswerAge);

//processing

if (userAnswerAge=="yes") {
  //output

  console.log("you are right");
   score=score +2;
   console.log ("Score is: " + score )
} else {
  //output
  console.log ("You are wrong!");
  score= score -2
  console.log ("Score is: " + score )
}
var questions = [
  {
  question: "what is my name??? ",
  answer: "Abhishek"
}, {
  question: "What game i play ?",
  answer: "cricket"
},
{
  question: "In which city I live?",
  answer: "lucknow"
}
];

function quiz(question, answer) 
{
  var userAnswer = game.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())//creates answer to upper case so it will not give caseSensitive erorrs.
   { 
    console.log("Thats Corrects... Bingo! ");
    score++;
    
  } else {
    console.log("Really?!!! You should be in touch with me and know me... lol..!");
  }
  console.log('your score is: '+score);
  console.log("-----x-----");
}


for (var i=0; i<questions.length; i++)
 {
  quiz(questions[i].question, questions[i].answer);
 }
