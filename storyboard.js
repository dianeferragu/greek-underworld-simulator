const segments = [
  {
    speaker: "narrator",
    text: "Aeneas and Odysseus meet in the Underworld through divine anomaly. While Aeneas journeys with the Sibyl (Aeneid 6) and Odysseus seeks Tiresias’s prophecy (Odyssey 11), their paths mysteriously converge. A breach in time—where Lethe’s waters cross the blood pit—draws both heroes into the same mythic space."
  },
  {
    speaker: "narrator",
    text: "This convergence is sanctioned by Persephone, manipulated by Apollo and Hecate, and opens a liminal gateway where the living can see across destinies. At the edge of the pit of blood, the two heroes meet—silent, wary, respectful. Their eyes lock. The dead stir."
  },
  {
    speaker: "odysseus",
    text: "How didst thou dare to come down to Hades…? – Odyssey 11.474"
  },
  {
    speaker: "aeneas",
    text: "Begin thy journey! Now, all thy courage! – Aeneid 6.261"
  },
  {
    speaker: "narrator",
    text: "Dido emerges first from the shadows."
  },
  {
    speaker: "dido",
    text: "Not by choice I fled thy shores… – Aeneid 6.456\nHer frowning brow… changeless flint. – Aeneid 6.469"
  },
  {
    speaker: "odysseus",
    text: "Who was she?"
  },
  {
    speaker: "sibyl",
    text: "The downward path is easy for mortal feet. But to retrace thy steps… Few, favored by the gods, may win that grace. – Aeneid 6.128–131"
  },
  {
    speaker: "sibyl",
    text: "This convergence disturbs the order. Shadows are stirred who should not yet speak. The price of prophecy may be memory itself."
  },
  {
    speaker: "tiresias",
    text: "Give place from the pit and draw back thy sharp sword… – Odyssey 11.95\nNew Achilles now in Latium breathes… – Aeneid 6.89\nThou shalt find woes in thy house… – Odyssey 11.114"
  },
  {
    speaker: "anticlea",
    text: "It was longing for thee… that robbed me of honey-sweet life. – Odyssey 11.200"
  },
  {
    speaker: "achilles",
    text: "I would rather serve another man as a field-hand… than be lord of all the dead. – Odyssey 11.488–491\nThe glory of arms is hollow in this realm."
  },
  {
    speaker: "anchises",
    text: "I cherished long this hope… What perils manifold assailed thee… – Aeneid 6.687\nBehold Marcellus… if thou evade thy evil star… – Aeneid 6.884"
  },
  {
    speaker: "sibyl",
    text: "Now Sleep has portals twain… through ivory let him rise. – Aeneid 6.893"
  },
  {
    speaker: "narrator",
    text: "The breach closes. The pit dries. Aeneas and Odysseus part, carrying with them echoes not meant for mortal minds."
  }
];

let index = 0;
let isTyping = false;
let currentAudio = null;

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

function playAudio(index) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  const audio = new Audio(`audio/segment${index}.mp3`);
  audio.play();
  currentAudio = audio;
}

function renderSegment() {
  const { speaker, text } = segments[index];
  textBox.textContent = "";
  typeText(text);
  playAudio(index);

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
  if (isTyping || index >= segments.length - 1) return;
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

nextBtn.addEventListener("click", showNextSegment);
prevBtn.addEventListener("click", showPreviousSegment);
skipBtn.addEventListener("click", skipAnimation);

renderSegment();
