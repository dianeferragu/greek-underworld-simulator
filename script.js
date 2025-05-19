// file: storyboard.js

const segments = [
    "\uD83C\uDF12 FRAME STORY: Aeneas and Odysseus meet in the Underworld through divine anomaly\nWhile Aeneas journeys through the Underworld with the Sibyl (Aeneid 6), and Odysseus seeks Tiresias's prophecy (Odyssey 11), the two paths mysteriously intersect. The cause? A convergence between Lethe and the blood-filled pit draws both heroes into the same spiritual domain—a rare breach in time and myth, sanctioned by Persephone.\n\nThis allows a mythically justified single narrative where Aeneas and Odysseus can witness or interact with the same souls.",
  
    "\uD83E\uDDF5 SEAMLESS NARRATIVE THREAD:\nEntry Point: The Meeting of Aeneas and Odysseus\n\nOdysseus guards the pit of blood. Aeneas arrives with the Sibyl. They lock eyes, confused but respectful.\n(“How didst thou dare to come down to Hades…?” – Od. 11.474)\n(“Begin thy journey! Now, all thy courage!” – Aen. 6.261)",
  
    "\uD83D\uDD00 This improbable overlap becomes a divine moment—Apollo and Hecate conspire to allow both men to witness shadows across time.\n\nDido appears first\nShe turns from Aeneas, her silence echoing in the air. Odysseus, unfamiliar, asks Aeneas who she was.\n“Not by choice I fled thy shores…” – Aen. 6.456\nHer “frowning brow… changeless flint” – Aen. 6.469",
  
    "The Sibyl prophesies the cost of knowing\nSensing the imbalance, she warns that too many shadows may distort the future.\n“The downward path is easy… but to retrace thy steps…” – Aen. 6.128–131",
  
    "Tiresias rises and speaks\nHe drinks the blood and faces both men.\n“Give place from the pit and draw back thy sharp sword…” – Od. 11.95\n“New Achilles now in Latium breathes…” – Aen. 6.89\n“Thou shalt find woes in thy house…” – Od. 11.114",
  
    "Anticlea emerges from the mist\nShe speaks of Ithaca, of Penelope and Laertes, and of death from grief.\n“It was longing for thee… that robbed me of honey-sweet life.” – Od. 11.200",
  
    "Achilles speaks to both heroes\n“I would rather serve another man… than be lord of all the dead.” – Od. 11.488–491\n“The glory of arms is hollow in this realm.”",
  
    "Anchises greets Aeneas\nHe recognizes Odysseus and praises his endurance.\n“I cherished long this hope… What perils manifold assailed thee…” – Aen. 6.687\n“Behold Marcellus… if thou evade thy evil star…” – Aen. 6.884",
  
    "The Sibyl ends it\nTime is collapsing. Both must return.\n“Now Sleep has portals twain… through ivory let him rise.” – Aen. 6.893"
  ];
  
  const characterImages = [
    "photos/achilles.png",
    "photos/anchises.png",
    "photos/anticlea.png",
    "photos/dido.png",
    "photos/sibyl.png",
    "photos/tiresias.png",
  ];
  
  const characterNames = [
    "Aeneas",
    "Odysseus",
    "Dido",
    "Sibyl",
    "Tiresias",
    "Anticlea",
    "Achilles",
    "Anchises",
    "Sibyl"
  ];
  
  let index = 0;
  let isTyping = false;
  let currentAudio = null;
  
  const textBox = document.getElementById("story-text");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const skipBtn = document.getElementById("skip-btn");
  const characterBox = document.getElementById("character-box");
  
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
    textBox.textContent = "";
    typeText(segments[index]);
    playAudio(index);
  
    // Update character bubble
    characterBox.innerHTML = `
      <div class="character-dialogue">
        <img src="${characterImages[index]}" alt="${characterNames[index]}" />
        <div class="speech-bubble">${characterNames[index]} speaks...</div>
      </div>
    `;
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
    textBox.textContent = segments[index];
  }
  
  nextBtn.addEventListener("click", showNextSegment);
  prevBtn.addEventListener("click", showPreviousSegment);
  skipBtn.addEventListener("click", skipAnimation);