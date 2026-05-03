const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const overlay = document.querySelector(".overlay");
const sheet = document.querySelector(".a4sheet");

// STEP 1 → Envelope click
envelope.addEventListener("click", () => {
  envelope.classList.add("flaps-open");  // flaps open
  letter.classList.add("visible");       // mini letter
});

// STEP 2 → Mini letter click
letter.addEventListener("click", () => {
  overlay.classList.add("show");  // background dark
  sheet.classList.add("grow");    // A4 open
});