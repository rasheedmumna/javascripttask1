// const user = document.querySelector('#div');

// fetch('https://the-trivia-api.com/v2/questions')
// .then(response => response.json())
//   .then(res => {
//     console.log(res);

//     div.innerHTML += `
//       <h1>${res[0].category}</h1>
//       <button>Next</button>
    
     
//       <hr/>
//     `;
//   })
//   .catch(error => console.log('Error:', error));

const div = document.querySelector('#div');
let currentIndex = 0; 
let questions = []; 

// Fetch trivia questions from the API
fetch('https://the-trivia-api.com/v2/questions')
  .then(response => response.json() )
  .then(res => {
    console.log(res);
    questions = res; // Store fetched questions
    displayQuestion(currentIndex); 
  })
  .catch(error => console.log('Error:', error));


function displayQuestion(index) {
  if (index < questions.length) {
    div.innerHTML = `
      <h1>${questions[index].category}</h1>
  
      <button id="nextBtn">Next</button>
      <hr/>
    `;
    
  
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex++;
      if (currentIndex < questions.length) {
        displayQuestion(currentIndex); 
      } else {
        div.innerHTML += '<p>No more questions available.</p>'; 
      }
    });
  } else {
    div.innerHTML += '<p>No more questions available.</p>'; 
  }
}
