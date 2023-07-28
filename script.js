//Random Quote Generator
const quoteContainer = document.getElementById("quote-box");
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
const popUp = document.getElementById("modal-card-body");


function inspirationalQuote() {
  var getQuote = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

  fetch(getQuote, {
      headers: {
        "X-Api-Key": "nLVfqWBdJ/zrBvVXZNO0tA==arT9IvkXmI80V3yO",
      },
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var quoteData = data[0].quote;
      var randomQuote = document.createElement("span");
      randomQuote.textContent = quoteData;
      quoteContainer.innerHTML = "";
      quoteContainer.appendChild(randomQuote);
    });
}

inspirationalQuote();

function randomPicture() {
  var randomFoxApi = "https://randomfox.ca/floof";
  fetch(randomFoxApi)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      var getFoxImage = data.image;
      var randomFoxImage = document.createElement("img");
      randomFoxImage.src = getFoxImage;
      var imageContainer = document.createElement("div");
      imageContainer.appendChild(randomFoxImage);
      popUp.appendChild(imageContainer);
    });
}

randomPicture();


//Weekly Journal Entries
const mondayEntry = document.getElementById("monday-entry");
const tuesdayEntry = document.getElementById("tuesday-entry");
const wednesdayEntry = document.getElementById("wednesday-entry");
const thursdayEntry = document.getElementById("thursday-entry");
const fridayEntry = document.getElementById("friday-entry");
const saturdayEntry = document.getElementById("saturday-entry");
const sundayEntry = document.getElementById("sunday-entry");

// monday local storage
mondayEntry.addEventListener("input", () => {
  var mondayInputValue = mondayEntry.value;
  localStorage.setItem("mondayEntry", mondayInputValue);
  console.log(mondayInputValue);
});

mondayEntry.value = localStorage.getItem("mondayEntry");


// tuesday local storage
tuesdayEntry.addEventListener("input", () => {
  var tuesdayInputValue = tuesdayEntry.value;
  localStorage.setItem("tuesdayEntry", tuesdayInputValue);
  console.log(tuesdayInputValue);
});

tuesdayEntry.value = localStorage.getItem("tuesdayEntry");


// wednesday local storage
wednesdayEntry.addEventListener("input", () => {           
  var wednesdayInputValue = wednesdayEntry.value;
  localStorage.setItem("wednesdayEntry", wednesdayInputValue);
  console.log(wednesdayInputValue);
});

wednesdayEntry.value = localStorage.getItem("wednesdayEntry");


// thursday local storage
thursdayEntry.addEventListener("input", () => {           
  var thursdayInputValue = thursdayEntry.value;
  localStorage.setItem("thursdayEntry", thursdayInputValue);
  console.log(thursdayInputValue);
});

thursdayEntry.value = localStorage.getItem("thursdayEntry");


// friday local storage
fridayEntry.addEventListener("input", () => {           
  var fridayInputValue = fridayEntry.value;
  localStorage.setItem("fridayEntry", fridayInputValue);
  console.log(fridayInputValue);
});

fridayEntry.value = localStorage.getItem("fridayEntry");


// saturday local storage
saturdayEntry.addEventListener("input", () => {           
  var saturdayInputValue = saturdayEntry.value;
  localStorage.setItem("saturdayEntry", saturdayInputValue);
  console.log(saturdayInputValue);
});

saturdayEntry.value = localStorage.getItem("saturdayEntry");


// sunday local storage
sundayEntry.addEventListener("input", () => {           
  var sundayInputValue = sundayEntry.value;
  localStorage.setItem("sundayEntry", sundayInputValue);
  console.log(sundayInputValue);
});

sundayEntry.value = localStorage.getItem("sundayEntry");

// Retrieve journal entries from localStorage and populate the textareas
window.addEventListener("DOMContentLoaded", () => {
  mondayEntry.value = localStorage.getItem("mondayEntry") || "";
  tuesdayEntry.value = localStorage.getItem("tuesdayEntry") || "";
  wednesdayEntry.value = localStorage.getItem("wednesdayEntry") || "";
  thursdayEntry.value = localStorage.getItem("thursdayEntry") || "";
  fridayEntry.value = localStorage.getItem("fridayEntry") || "";
  saturdayEntry.value = localStorage.getItem("saturdayEntry") || "";
  sundayEntry.value = localStorage.getItem("sundayEntry") || "";
});

//Mood Button
const moodRadioButtons = document.querySelectorAll('input[type="radio"]');
const submitButton = document.getElementById("submit-button");

//Mood Event listeners
submitButton.addEventListener("click", () => {
  const selectedMood = document.querySelector('input[name="mood"]:checked');

  if (selectedMood) {
    const moodValue = selectedMood.value;
    // Save the mood value or perform desired actions
    console.log(`Selected mood: ${moodValue}`);
  } else {
    console.log("Please select a mood");
  }
});





