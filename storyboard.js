const segments = [
  { speaker: "narrator", text: "Aeneas and Odysseus meet in the Underworld through divine anomaly..." },
  { speaker: "narrator", text: "A breach in time—where Lethe’s waters cross the blood pit—draws both heroes..." },
  { speaker: "odysseus", text: "How didst thou dare to come down to Hades…? – Odyssey 11.474" },
  { speaker: "aeneas", text: "Begin thy journey! Now, all thy courage! – Aeneid 6.261" },
  { speaker: "narrator", text: "Dido emerges first from the shadows." },
  { speaker: "dido", text: "Not by choice I fled thy shores… – Aeneid 6.456\nHer frowning brow… changeless flint. – Aeneid 6.469" },
  { speaker: "odysseus", text: "Who was she?" },
  { speaker: "sibyl", text: "The downward path is easy for mortal feet... – Aeneid 6.128–131" },
  { speaker: "sibyl", text: "This convergence disturbs the order. Shadows are stirred who should not yet speak..." },
  { speaker: "tiresias", text: "Give place from the pit... – Odyssey 11.95\nNew Achilles now in Latium... – Aeneid 6.89\nThou shalt find woes... – Odyssey 11.114" },
  { speaker: "anticlea", text: "It was longing for thee… that robbed me of honey-sweet life. – Odyssey 11.200" },
  { speaker: "achilles", text: "I would rather serve another man... – Odyssey 11.488–491\nThe glory of arms is hollow in this realm." },
  { speaker: "anchises", text: "I cherished long this hope... – Aeneid 6.687\nBehold Marcellus… – Aeneid 6.884" },
  { speaker: "sibyl", text: "Now Sleep has portals twain… – Aeneid 6.893" },
  { speaker: "narrator", text: "The breach closes. The pit dries. Aeneas and Odysseus part..." }
];

let index = 0;
let isTyping = false;

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const storyScreen = document.getElementById("story-screen");
const endScreen = document.getElementById("end-screen");
const textBox = document.getElementById("story-text");
const characterBox = document.getElementById("character-box");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const skipBtn = document.getElementById("skip-btn");

function typeText(text, i = 0) {
  isTyping = true;
  if (i < text.length) {
    textBox.textContent += text.charAt(i);
    setTimeout(() => typeText(text, i + 1), 20);
  } else {
    isTyping = false;
  }
}

function renderSegment() {
  if (index >= segments.length) {
    storyScreen.style.display = "none";
    endScreen.style.display = "block";
    return;
  }

  const { speaker, text } = segments[index];
  textBox.textContent = "";
  typeText(text);

  if (speaker === "narrator") {
    characterBox.innerHTML = `
      <div class="narrator-dialogue">
        <div class="speech-bubble narrator-bubble">Narrator speaks...</div>
      </div>
    `;
  } else {
    characterBox.innerHTML = `
      <div class="character-dialogue">
        <img src="photos/${speaker.toLowerCase()}.png" alt="${speaker}" class="character-img" />
        <div class="speech-bubble character-bubble">${text}</div>
      </div>
    `;
  }
}

function showNextSegment() {
  if (isTyping || index >= segments.length) return;
  index++;
  renderSegment();
}

function showPreviousSegment() {
  if (isTyping || index <= 0) return;
  index--;
  renderSegment();
}

function skipAnimation() {
  if (!isTyping) return;
  isTyping = false;
  textBox.textContent = segments[index].text;
}

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  storyScreen.style.display = "block";
  renderSegment();
});

restartBtn.addEventListener("click", () => {
  endScreen.style.display = "none";
  index = 0;
  storyScreen.style.display = "block";
  renderSegment();
});

nextBtn.addEventListener("click", showNextSegment);
prevBtn.addEventListener("click", showPreviousSegment);
skipBtn.addEventListener("click", skipAnimation);

renderSegment();
