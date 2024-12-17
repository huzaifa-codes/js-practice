
let quizzes = [
    {
      question: "What is the primary use of JavaScript?",
      options: ["Server-side scripting", "Client-side scripting", "Database management", "Network security"],
      answer: "Client-side scripting"
    },
    {
      question: "Which of the following is a valid JavaScript variable declaration?",
      options: ["var x = 5;", "let x = 5;", "const x = 5;", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["To refer to the global object", "To refer to the current object", "To refer to the parent object", "To refer to the child object"],
      answer: "To refer to the current object"
    },
    {
      question: "Which of the following is a valid JavaScript array declaration?",
      options: ["var arr = [1, 2, 3];", "let arr = [1, 2, 3];", "const arr = [1, 2, 3];", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of the 'forEach' method in JavaScript?",
      options: ["To iterate over an array and perform a function on each element", "To iterate over an object and perform a function on each property", "To iterate over a string and perform a function on each character", "To iterate over a number and perform a function on each digit"],
      answer: "To iterate over an array and perform a function on each element"
    },
    {
      question: "What is the difference between 'null' and 'undefined' in JavaScript?",
      options: ["'null' is an object, while 'undefined' is a primitive value", "'null' is a primitive value, while 'undefined' is an object", "'null' and 'undefined' are the same thing", "None of the above"],
      answer: "'null' is an object, while 'undefined' is a primitive value"
    },
    {
      question: "What is the purpose of the 'switch' statement in JavaScript?",
      options: ["To perform different actions based on different conditions", "To repeat a block of code for a specified number of times", "To skip over a block of code if a certain condition is met", "To exit a loop or a function"],
      answer: "To perform different actions based on different conditions"
    },
    {
      question: "What is the purpose of the 'for' loop in JavaScript?",
      options: ["To repeat a block of code for a specified number of times", "To perform different actions based on different conditions", "To skip over a block of code if a certain condition is met", "To exit a loop or a function"],
      answer: "To repeat a block of code for a specified number of times"
    },
    {
      question: "What is the purpose of the 'while' loop in JavaScript?",
      options: ["To repeat a block of code while a certain condition is met", "To perform different actions based on different conditions", "To skip over a block of code if a certain condition is met", "To exit a loop or a function"],
      answer: "To repeat a block of code while a certain condition is met"
    },
    {
      question: "What is the purpose of the 'break' statement in JavaScript?",
      options: ["To exit a loop or a function", "To skip over a block of code if a certain condition is met", "To perform different actions based on different conditions", "To repeat a block of code for a specified number of times"],
      answer: "To exit a loop or a function"
    },
    {
      question: "What is the purpose of the 'continue' statement in JavaScript?",
      options: ["To skip over a block of code if a certain condition is met", "To exit a loop or a function", "To perform different actions based on different conditions", "To repeat a block of code for a specified number of times"],
      answer: "To skip over a block of code if a certain condition is met"
    },
    {
      question: "What is the purpose of the 'return' statement in JavaScript?",
      options: ["To exit a function and return a value", "To skip over a block of code if a certain condition is met", "To perform different actions based on different conditions", "To repeat a block of code for a specified number of times"],
      answer: "To exit a function and return a value"
    },
]

let input;

let div = document.querySelector("#div")
// let num = 2

let caunt = 0
let e = 0
quizzes.map((item , index)=>{
    
    if(index === caunt){
        div.innerHTML += `
        <div class = "quiz">
        <h3> ${item.question}</h3>
        
         <input type="checkbox" id="value1" value="${item.options[0]}"> 
      <label for="value1">${item.options[0]}</label><br> 
   <input type="checkbox" id="value2" ${item.options[1]}>
   <label for="value2">${item.options[1]}</label><br>
   <input type="checkbox" id="value3" ${item.options[2]}>
   <label for="value3">${item.options[2]}</label><br>
   <input type="checkbox" id="value4" ${item.options[3]}>
   <label for="value4">${item.options[3]}</label><br>
   <button  id="btn"   onclick="btn()">NEXT</button> 
   </div>`
         
    }

    
})


function btn() {
   
   let div2 = document.querySelector("#div-2")
   input = document.querySelector('input[type="checkbox"]:checked')
   if(input === null){
    alert("Please chose one an option")
  }
     if(input.value === quizzes[caunt].answer){
        
         e += 1
        

        }
        caunt++
       


          if(caunt < quizzes.length) {
            div.innerHTML = `
            <div class = "quiz">
              <h3> ${quizzes[caunt].question}</h3>
             
              <input type="checkbox" id="value1" value="${quizzes[caunt].options[0]}">
              <label for="value1">${quizzes[caunt].options[0]}</label><br>
               <input type="checkbox" id="value2" value="${quizzes[caunt].options[1]}">
              <label for="value2">${quizzes[caunt].options[1]}</label><br>
               <input type="checkbox" id="value3" value="${quizzes[caunt].options[2]}">
              <label for="value3">${quizzes[caunt].options[2]}</label><br>
               <input type="checkbox" id="value4" value="${quizzes[caunt].options[3]}">
              <label for="value4">${quizzes[caunt].options[3]}</label><br>
              <button id="btn" onclick="btn()">NEXT</button> 
              </div>
              
            
            `
            
          }

       
       
             
         
          else {
            
            div2.innerHTML += `<h1>your score ${e} equal to  ${quizzes.length}</h1>`
          }
       
      }



       