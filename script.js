const characters = [
    {
        name: "Dido",
        description: "Queen of Carthage, forsaken by Aeneas, seeking closure or vengeance.",
        story: [
            {
                text: "You sit beneath the myrtle trees, still haunted by Aeneas’s face. Do you…?",
                choices: [
                    { text: "Call on the Furies to curse him further", next: 1 },
                    { text: "Walk to the banks of Lethe to forget", next: 2 },
                    { text: "Speak to fellow betrayed souls", next: 3 }
                ]
            },
            {
                text: "Aeneas’s shadow passes near. He looks at you. Do you…?",
                choices: [
                    { text: "Ignore him and turn away", next: 4 },
                    { text: "Speak coldly, seeking justice", next: 5 },
                    { text: "Ask why he left", next: 6 }
                ]
            },
            {
                text: "A Harpy delivers a message from Sychaeus. Do you…",
                choices: [
                    { text: "Follow it to find peace", next: 7 },
                    { text: "Stay rooted in Carthage’s ruins", next: 8 },
                    { text: "Offer tribute to Persephone for clarity", next: 9 }
                ]
            },
            {
                text: "In the shadows of Tartarus, you glimpse Helen. Do you…?",
                choices: [
                    { text: "Approach with fury", next: 10 },
                    { text: "Let her pass", next: 11 },
                    { text: "Ask her what she lost too", next: 12 }
                ]
            },
            {
                text: "A child, lost and alone, reminds you of your son. Do you…",
                choices: [
                    { text: "Protect him", next: 13 },
                    { text: "Push him away", next: 14 },
                    { text: "Offer him to Persephone", next: 15 }
                ]
            },
            {
                text: "You stand at the Gates of Ivory. Do you…",
                choices: [
                    { text: "Exit to rebirth", next: 16 },
                    { text: "Remain in mourning", next: 17 },
                    { text: "Become a guide for other broken souls", next: 18 }
                ]
            }
        ]
    },
    {
        name: "Anchises",
        description: "Aeneas’s father, now a soul in Elysium with knowledge of Rome’s future.",
        story: [
            {
                text: "You see the unborn souls of Rome beyond Lethe. Do you…?",
                choices: [
                    { text: "Call out to Augustus", next: 1 },
                    { text: "Gaze silently, proud", next: 2 },
                    { text: "Wonder what your legacy truly is", next: 3 }
                ]
            },
            {
                text: "The Sibyl visits with a message from Aeneas. Do you…",
                choices: [
                    { text: "Send back prophecy", next: 4 },
                    { text: "Ask for a final meeting", next: 5 },
                    { text: "Stay silent", next: 6 }
                ]
            },
            {
                text: "You hear whispers of war from above. Do you…",
                choices: [
                    { text: "Call on Jupiter", next: 7 },
                    { text: "Send a dream to Aeneas", next: 8 },
                    { text: "Ignore it and rest", next: 9 }
                ]
            },
            {
                text: "Romulus and Remus argue beside a stream. Do you…",
                choices: [
                    { text: "Intervene", next: 10 },
                    { text: "Let fate unfold", next: 11 },
                    { text: "Tell them of their doom", next: 12 }
                ]
            },
            {
                text: "A vision of Dido appears. Do you…",
                choices: [
                    { text: "Apologize for your son's actions", next: 13 },
                    { text: "Turn away", next: 14 },
                    { text: "Show her a future where she is worshipped", next: 15 }
                ]
            },
            {
                text: "The Golden Bough blooms again in your hand. Do you…",
                choices: [
                    { text: "Use it to ascend", next: 16 },
                    { text: "Give it away", next: 17 },
                    { text: "Bury it in the soil of memory", next: 18 }
                ]
            }
        ]
    },
    {
        name: "The Sibyl",
        description: "Prophetic priestess of Apollo, guides heroes through the dark.",
        story: [
            {
                text: "Aeneas hesitates at the cave’s mouth. Do you…",
                choices: [
                    { text: "Push him forward", next: 1 },
                    { text: "Warn him of what lies ahead", next: 2 },
                    { text: "Let him choose freely", next: 3 }
                ]
            },
            {
                text: "The spirits whisper conflicting fates. Do you…",
                choices: [
                    { text: "Silence them", next: 4 },
                    { text: "Transcribe their prophecies", next: 5 },
                    { text: "Allow one to speak through you", next: 6 }
                ]
            },
            {
                text: "Apollo tightens his grip on your soul. Do you…",
                choices: [
                    { text: "Submit", next: 7 },
                    { text: "Fight", next: 8 },
                    { text: "Bargain", next: 9 }
                ]
            },
            {
                text: "Cerberus stands restless. Do you…",
                choices: [
                    { text: "Soothe him with song", next: 10 },
                    { text: "Drug him again", next: 11 },
                    { text: "Free him", next: 12 }
                ]
            },
            {
                text: "A shadow offers you freedom from divine servitude. Do you…",
                choices: [
                    { text: "Accept", next: 13 },
                    { text: "Reject", next: 14 },
                    { text: "Demand a price", next: 15 }
                ]
            },
            {
                text: "The hundred mouths of the cave open once more. Do you…",
                choices: [
                    { text: "Speak the end of the world", next: 16 },
                    { text: "Go silent forever", next: 17 },
                    { text: "Rewrite the prophecy", next: 18 }
                ]
            }
        ]
    },
    {
        name: "Achilles",
        description: "Once the greatest Greek warrior, now dwelling in the fields of Asphodel.",
        story: [
            {
                text: "Odysseus speaks of your son Neoptolemus. Do you…",
                choices: [
                    { text: "Weep", next: 1 },
                    { text: "Curse him", next: 2 },
                    { text: "Ask for more stories", next: 3 }
                ]
            },
            {
                text: "Patroclus’s shade flickers near. Do you…",
                choices: [
                    { text: "Embrace him", next: 4 },
                    { text: "Ask for forgiveness", next: 5 },
                    { text: "Turn away, ashamed", next: 6 }
                ]
            },
            {
                text: "A hero from Rome claims your glory. Do you…",
                choices: [
                    { text: "Challenge him", next: 7 },
                    { text: "Laugh", next: 8 },
                    { text: "Teach him", next: 9 }
                ]
            },
            {
                text: "You hear Hector’s voice. Do you…",
                choices: [
                    { text: "Seek battle", next: 10 },
                    { text: "Speak calmly", next: 11 },
                    { text: "Apologize", next: 12 }
                ]
            },
            {
                text: "A river calls you—Styx or Lethe. Do you…",
                choices: [
                    { text: "Drink to forget", next: 13 },
                    { text: "Swear a new oath", next: 14 },
                    { text: "Walk away", next: 15 }
                ]
            },
            {
                text: "Elysium opens. Patroclus waits. Do you…",
                choices: [
                    { text: "Join him", next: 16 },
                    { text: "Return to the fields", next: 17 },
                    { text: "Ask to be reborn as a poet", next: 18 }
                ]
            }
        ]
    },
    {
        name: "Tiresias",
        description: "Blind prophet, consulted by Odysseus to learn his fate.",
        story: [
            {
                text: "Odysseus calls you again. Do you…",
                choices: [
                    { text: "Speak in riddles", next: 1 },
                    { text: "Tell him plainly", next: 2 },
                    { text: "Refuse", next: 3 }
                ]
            },
            {
                text: "A young Roman girl seeks knowledge. Do you…",
                choices: [
                    { text: "Reveal her destiny", next: 4 },
                    { text: "Warn her not to ask", next: 5 },
                    { text: "Send her to Lethe", next: 6 }
                ]
            },
            {
                text: "The Sibyl debates you. Do you…",
                choices: [
                    { text: "Argue", next: 7 },
                    { text: "Praise her", next: 8 },
                    { text: "Ask to switch places", next: 9 }
                ]
            },
            {
                text: "You see visions of nuclear fire, metal wings, AI. Do you…",
                choices: [
                    { text: "Laugh", next: 10 },
                    { text: "Weep", next: 11 },
                    { text: "Chronicle it in ashes", next: 12 }
                ]
            },
            {
                text: "A god offers to restore your sight. Do you…",
                choices: [
                    { text: "Accept", next: 13 },
                    { text: "Refuse", next: 14 },
                    { text: "Ask for wisdom instead", next: 15 }
                ]
            },
            {
                text: "You reach the Elm of False Dreams. Do you…",
                choices: [
                    { text: "Sleep", next: 16 },
                    { text: "Tear it down", next: 17 },
                    { text: "Plant another", next: 18 }
                ]
            }
        ]
    },
    {
        name: "Anticlea",
        description: "Odysseus’s mother, bearer of familial wisdom and personal sorrow.",
        story: [
            {
                text: "Odysseus embraces you. Do you…",
                choices: [
                    { text: "Tell him of Penelope", next: 1 },
                    { text: "Beg him to stay", next: 2 },
                    { text: "Say nothing", next: 3 }
                ]
            },
            {
                text: "You see Telemachus’s face in the fog. Do you…",
                choices: [
                    { text: "Smile", next: 4 },
                    { text: "Cry", next: 5 },
                    { text: "Reach for him", next: 6 }
                ]
            },
            {
                text: "A nymph tempts your son again. Do you…",
                choices: [
                    { text: "Curse her", next: 7 },
                    { text: "Let fate decide", next: 8 },
                    { text: "Warn him in dreams", next: 9 }
                ]
            },
            {
                text: "The Sirens offer to sing you a lullaby. Do you…",
                choices: [
                    { text: "Listen", next: 10 },
                    { text: "Flee", next: 11 },
                    { text: "Sing back", next: 12 }
                ]
            },
            {
                text: "Penelope’s shade appears. Do you…",
                choices: [
                    { text: "Hug her", next: 13 },
                    { text: "Question her loyalty", next: 14 },
                    { text: "Thank her", next: 15 }
                ]
            },
            {
                text: "You stand at the gates. Odysseus sails again. Do you…",
                choices: [
                    { text: "Follow", next: 16 },
                    { text: "Wave goodbye", next: 17 },
                    { text: "Enter Lethe’s waters", next: 18 }
                ]
            }
        ]
    }
];

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('character-selection').classList.remove('hidden');
    displayCharacters();
    document.getElementById('background-music').play();
}

function displayCharacters() {
    const charactersDiv = document.getElementById('characters');
    characters.forEach((character, index) => {
        const characterDiv = document.createElement('div');
        characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
            <button onclick="selectCharacter(${index})">Select</button>
        `;
        charactersDiv.appendChild(characterDiv);
    });
}

function selectCharacter(index) {
    document.getElementById('character-selection').classList.add('hidden');
    document.getElementById('story').classList.remove('hidden');
    loadStory(index, 0);
}

function loadStory(characterIndex, storyIndex) {
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');
    const story = characters[characterIndex].story[storyIndex];

    storyText.innerText = story.text;
    choicesDiv.innerHTML = '';

    story.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => loadStory(characterIndex, choice.next);
        choicesDiv.appendChild(button);
    });
}