// Select the elements from the DOM
const para = document.getElementById("sall");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit";

// Function to fetch and display a joke
const getjoke = () => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the response as JSON
    })
    .then((hata) => {
      if (hata.type === "single") {
        // For single jokes
        para.innerText = hata.joke;
      } else if (hata.type === "twopart") {
        // For two-part jokes
        para.innerText = `${hata.setup}\n${hata.delivery}`;
      } else {
        para.innerText = "No joke found!";
      }
    })
    .catch((error) => {
      console.error(error);
      para.innerText = "Failed to fetch a joke. Please try again.";
    });
};

// Add a click event listener to the button
btn.addEventListener("click", () => {
  getjoke();
});
