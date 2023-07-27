//Random Quote Generator 
const quoteContainer = document.getElementById('quote-box');
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

// function getRandomQuote() {
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       quoteContainer.textContent = data.content;
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
// }

function inspirationalQuote() {

  var getQuote = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

  fetch(getQuote, {
      headers: {
        'X-Api-Key': "nLVfqWBdJ/zrBvVXZNO0tA==arT9IvkXmI80V3yO"
      }
    })

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var quoteData = data[0].quote;
      var randomQuote = document.createElement('span');
      randomQuote.textContent = quoteData;
      quoteContainer.innerHTML = '';
      quoteContainer.appendChild(randomQuote)

    });
}

inspirationalQuote();

function randomPicture() {
  var randomFoxApi = 'https://randomfox.ca/floof';
  fetch(randomFoxApi)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      var getFoxImage = data.image;
      var randomFoxImage = document.createElement('img');
      randomFoxImage.src = getFoxImage;
      var imageContainer = document.createElement('div');
      imageContainer.appendChild(randomFoxImage);
      quoteContainer.appendChild(imageContainer);
    });
}

randomPicture();

generateBtn.addEventListener('click', getRandomQuote);


//Weekly Journal Entries 
const mondayEntry = document.getElementById('monday-entry');
const tuesdayEntry = document.getElementById('tuesday-entry');
const wednesdayEntry = document.getElementById('wednesday-entry');
const thursdayEntry = document.getElementById('thursday-entry');
const fridayEntry = document.getElementById('friday-entry');
const saturdayEntry = document.getElementById('saturday-entry');
const sundayEntry = document.getElementById('sunday-entry');


// Saving journal entries to localStorage 
mondayEntry.addEventListener('input', () => {
  localStorage.setItem('mondayEntry', mondayEntry.value);
});

tuesdayEntry.addEventListener('input', () => {
  localStorage.setItem('tuesdayEntry', tuesdayEntry.value);
});

wednesdayEntry.addEventListener('input', () => {
  localStorage.setItem('tuesdayEntry', wednesdayEntry.value);
});

thursdayEntry.addEventListener('input', () => {
  localStorage.setItem('tuesdayEntry', thursdayEntry.value);
});

fridayEntry.addEventListener('input', () => {
  localStorage.setItem('tuesdayEntry', fridayEntry.value);
});

saturdayEntry.addEventListener('input', () => {
  localStorage.setItem('tuesdayEntry', saturdayEntry.value);
});

sundayEntry.addEventListener('input', () => {
  localStorage.setItem('tuesdayEntry', sundayEntry.value);
});

// Retrieve journal entries from localStorage and populate the textareas
window.addEventListener('DOMContentLoaded', () => {
  mondayEntry.value = localStorage.getItem('mondayEntry') || '';
  tuesdayEntry.value = localStorage.getItem('tuesdayEntry') || '';
  wednesdayEntry.value = localStorage.getItem('wednesdayEntry') || '';
  thursdayEntry.value = localStorage.getItem('thursdayEntry') || '';
  fridayEntry.value = localStorage.getItem('fridayEntry') || '';
  saturdayEntry.value = localStorage.getItem('saturdayEntry') || '';
  sundayEntry.value = localStorage.getItem('sundayEntry') || '';
});

//Mood Button
const moodRadioButtons = document.querySelectorAll('input[type="radio"]');
const submitButton = document.getElementById('submit-button');

//Mood Event listeners
submitButton.addEventListener('click', () => {
  const selectedMood = document.querySelector('input[name="mood"]:checked');

  if (selectedMood) {
    const moodValue = selectedMood.value;
    // Save the mood value or perform desired actions
    console.log(`Selected mood: ${moodValue}`);
  } else {
    console.log('Please select a mood');
  }
});


