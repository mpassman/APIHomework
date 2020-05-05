//Declare variable to hold the date and time to countdown to
var countDownDate = new Date("May 10, 2018 12:30:39").getTime();
//Create one second interval for timer


//Calculate remaining time
var now = new Date().getTime();
var timeLeft = 300;

var min = Math.floor((timeLeft/60));
var secs = Math.floor((timeLeft % (1000 * 60)) / 1000); 
var interval; 

function clock() { 
  //Clock Timer Function
  interval = setInterval (function(){
    min = Math.floor((timeLeft/60));
    secs = Math.floor((timeLeft % (1000 * 60)) / 1000); 
    timeLeft --;

  if (timeLeft > 0) {

    document.getElementById("output").innerHTML = min + "0:" + secs;
          // secs = parseInt(secs) - 1;                
          // timeLeft = setTimeout("clock()", 1000);
      }
      else {
  
  //Display message when timer is over
    if (min == 0 && secs==0){
      document.getElementById("output").innerHTML = min + ":" + secs;
      alert("Time Up");
  
     }
    }
  
      
    }, 1000)
    console.log("click");
}






  


//Output
// document.getElementById("output").innerHTML = minutes + ":" + seconds;;
//   }




//Create start questions, add function printQuestions at line 25, add the question itself and choices into dom, 
/* printQuestions();
} */

//Define global variables "question one is zero"
/* [
{
question : "What does HTML stand for?",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        imgSrc : "img/css.png",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"

    },{

        question : "What does JS stand for?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"
 */
       /*const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

//temp code:     if (distance < 0) {
      clearInterval(x);
        document.getElementById("demo");
        demo.value= "EXPIRED";
    }
*/