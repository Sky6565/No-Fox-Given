// Dom Hooks for HTML continaers
const quoteContainer = document.getElementById("quote-box");
const popUpContent = document.getElementById("modal-card-body");
const popUp = document.querySelector(".modal");
const popUpCloseBtn = document.querySelector(".pop-up-btn");
const modalImage = document.getElementById("modal-image");

// Dom Hooks for text fields
const mondayEntry = document.getElementById("monday-entry");
const tuesdayEntry = document.getElementById("tuesday-entry");
const wednesdayEntry = document.getElementById("wednesday-entry");
const thursdayEntry = document.getElementById("thursday-entry");
const fridayEntry = document.getElementById("friday-entry");
const saturdayEntry = document.getElementById("saturday-entry");
const sundayEntry = document.getElementById("sunday-entry");

// Dom Hooks for buttons
const mondaySaveBtn = document.getElementById("monday-save-btn");
const tuesdaySaveBtn = document.getElementById("tuesday-save-btn");
const wednesdaySaveBtn = document.getElementById("wednesday-save-btn");
const thursdaySaveBtn = document.getElementById("thursday-save-btn");
const fridaySaveBtn = document.getElementById("friday-save-btn");
const saturdaySaveBtn = document.getElementById("saturday-save-btn");
const sundaySaveBtn = document.getElementById("sunday-save-btn");
const clearBtn = document.getElementById("clear-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

// API URLs
var getQuote = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
var randomFoxApi = "https://randomfox.ca/floof";

// [API-Example01] Function for generating a random inspirational quote on page load.
function inspirationalQuote() {
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
      quoteContainer.appendChild(randomQuote);
    });
}

inspirationalQuote();

// [API-Example02] Function for generating a random fox image when the user submits a journal entry.
function randomPicture() {
  fetch(randomFoxApi)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      var getFoxImage = data.image;
      var randomFoxImage = document.createElement("img");
      randomFoxImage.src = getFoxImage;
      modalImage.appendChild(randomFoxImage);
    });
}

// Logs user journal entries to local storage
mondaySaveBtn.addEventListener("click", () => {
  var mondayInputValue = mondayEntry.value;
  localStorage.setItem("mondayEntry", mondayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(mondayInputValue);
});

tuesdaySaveBtn.addEventListener("click", () => {
  var tuesdayInputValue = tuesdayEntry.value;
  localStorage.setItem("tuesdayEntry", tuesdayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(tuesdayInputValue);
});

wednesdaySaveBtn.addEventListener("click", () => {
  var wednesdayInputValue = wednesdayEntry.value;
  localStorage.setItem("wednesdayEntry", wednesdayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(wednesdayInputValue);
});

thursdaySaveBtn.addEventListener("click", () => {
  var thursdayInputValue = thursdayEntry.value;
  localStorage.setItem("thursdayEntry", thursdayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(thursdayInputValue);
});

fridaySaveBtn.addEventListener("click", () => {
  var fridayInputValue = fridayEntry.value;
  localStorage.setItem("fridayEntry", fridayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(fridayInputValue);
});

saturdaySaveBtn.addEventListener("click", () => {
  var saturdayInputValue = saturdayEntry.value;
  localStorage.setItem("saturdayEntry", saturdayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(saturdayInputValue);
});

sundaySaveBtn.addEventListener("click", () => {
  var sundayInputValue = sundayEntry.value;
  localStorage.setItem("sundayEntry", sundayInputValue);
  randomPicture();
  popUp.classList.add("is-active");
  console.log(sundayInputValue);
});

// Function to clear all journal entries
function clearText() {
  mondayEntry.value = "";
  tuesdayEntry.value = "";
  wednesdayEntry.value = "";
  thursdayEntry.value = "";
  fridayEntry.value = "";
  saturdayEntry.value = "";
  sundayEntry.value = "";
}

// Clears journal entries from local storage
clearBtn.addEventListener("click", function () {
  clearText();
  localStorage.clear();
});

closeModalBtn.addEventListener("click", function () {
  popUp.classList.remove("is-active");
  const firstImage = modalImage.querySelector("img:first-child");
  modalImage.removeChild(firstImage);
});

// Retrieves the user's journal entries from local storage
mondayEntry.value = localStorage.getItem("mondayEntry");
tuesdayEntry.value = localStorage.getItem("tuesdayEntry");
wednesdayEntry.value = localStorage.getItem("wednesdayEntry");
thursdayEntry.value = localStorage.getItem("thursdayEntry");
fridayEntry.value = localStorage.getItem("fridayEntry");
saturdayEntry.value = localStorage.getItem("saturdayEntry");
sundayEntry.value = localStorage.getItem("sundayEntry");

// Mood Button
const moodRadioButtons = document.querySelectorAll('input[type="radio"]');
const submitButton = document.getElementById("submit-button");

// Mood Event listeners
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

/// Function for getting the current time and date
function getCurrentTime() {
  var today = new Date();
  var time = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  var date = today.toLocaleDateString();
  // Display the current time and date in the HTML element with id "current-time"
  document.getElementById("current-time").innerHTML =
    "Today is " + date + " , " + time;
}
// Call the function once to display the time immediately when the page loads
getCurrentTime();

// Set up the interval to call the getCurrentTime function every minute
setInterval(getCurrentTime, 60000);

var infoButton = document.getElementById("info-btn");
var newParagraph = document.getElementById("new-paragraph");

infoButton.addEventListener("click", function () {
  if (
    newParagraph.style.display === "none" ||
    newParagraph.style.display === ""
  ) {
    newParagraph.style.display = "block";
  } else {
    newParagraph.style.display = "none";
  }
});

// Don't Delete Yet ==============================================

// // Retrieve journal entries from localStorage and populate the textareas
// window.addEventListener("DOMContentLoaded", () => {
//   mondayEntry.value = localStorage.getItem("mondayEntry") || "";
//   tuesdayEntry.value = localStorage.getItem("tuesdayEntry") || "";
//   wednesdayEntry.value = localStorage.getItem("wednesdayEntry") || "";
//   thursdayEntry.value = localStorage.getItem("thursdayEntry") || "";
//   fridayEntry.value = localStorage.getItem("fridayEntry") || "";
//   saturdayEntry.value = localStorage.getItem("saturdayEntry") || "";
//   sundayEntry.value = localStorage.getItem("sundayEntry") || "";
// });
