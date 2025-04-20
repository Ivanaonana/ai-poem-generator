function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "|",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build the API URL
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "od09fc3b1tf767828aa0a0c334481a88";
  let prompt = `User instructions: Generate a Magical Realism poem about ${instructionsInput.value}`;
  let context =
    "You are a Magical Realist poem expert and love to write short poems. Your mission is to generate an 8-line poem with each line separated by a newline character (\\n). Make sure to follow the user instructions. Sign the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  // Fetch the poem from the API
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
