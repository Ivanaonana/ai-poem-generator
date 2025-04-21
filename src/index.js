function displayPoem(response) {
  console.log("Generation Poem");
  let formattedPoem = response.data.answer.replace(/\n/g, "<br>");
  new Typewriter("#poem", {
    strings: formattedPoem,
    autoStart: true,
    delay: 3,
    cursor: "|",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "od09fc3b1tf767828aa0a0c334481a88";
  let context =
    "You are a poet specializing in writing 4 line short poems in Magical Realism in poem format. Make sure to break lines and follow user instructions. You only write the poem. You can sign if you want";
  let prompt = `Generate a 4-line Magical Realist poem about ${instructionsInput.value} with each line separated by a newline character (\n).`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${encodeURIComponent(apiKey)}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating...</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
