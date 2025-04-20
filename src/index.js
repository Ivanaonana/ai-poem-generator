function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "oh no try again",
    autoStart: true,
    delay: 3,
    cursor: "|",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
