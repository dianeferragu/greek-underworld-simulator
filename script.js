const characters = [
    {
        name: "Dido",
        description: "Queen of Carthage, forsaken by Aeneas, seeking closure or vengeance.",
        image: "Photos/dido.png",
        story: [
            {
                text: "You sit beneath the myrtle trees, still haunted by Aeneas's face. Do you…?",
                choices: [
                    { text: "Call on the Furies to curse him further", next: "dido_1" },
                    { text: "Walk to the banks of Lethe to forget", next: "dido_2" },
                    { text: "Speak to fellow betrayed souls (e.g., Phaedra, Eriphyle)", next: "dido_3" }
                ]
            },
            {
                text: "Aeneas's shadow passes near. He looks at you. Do you…?",
                choices: [
                    { text: "Ignore him and turn away", next: "dido_4" },
                    { text: "Speak coldly, seeking justice", next: "dido_5" },
                    { text: "Ask why he left", next: "dido_6" }
                ]
            },
            {
                text: "A Harpy delivers a message from Sychaeus. Do you…",
                choices: [
                    { text: "Follow it to find peace", next: "dido_7" },
                    { text: "Stay rooted in Carthage's ruins", next: "dido_8" },
                    { text: "Offer tribute to Persephone for clarity", next: "dido_9" }
                ]
            },
            {
                text: "In the shadows of Tartarus, you glimpse Helen. Do you…?",
                choices: [
                    { text: "Approach with fury", next: "dido_10" },
                    { text: "Let her pass", next: "dido_11" },
                    { text: "Ask her what she lost too", next: "dido_12" }
                ]
            },
            {
                text: "A child, lost and alone, reminds you of your son. Do you…",
                choices: [
                    { text: "Protect him", next: "dido_13" },
                    { text: "Push him away", next: "dido_14" },
                    { text: "Offer him to Persephone", next: "dido_15" }
                ]
            },
            {
                text: "You stand at the Gates of Ivory. Do you…",
                choices: [
                    { text: "Exit to rebirth", next: "dido_16" },
                    { text: "Remain in mourning", next: "dido_17" },
                    { text: "Become a guide for other broken souls", next: "dido_18" }
                ]
            }
        ]
    },
    {
        name: "Anchises",
        description: "Aeneas's father, now a soul in Elysium with knowledge of Rome's future.",
        image: "Photos/anchises.png",
        story: [
            {
                text: "You see the unborn souls of Rome beyond Lethe. Do you…?",
                choices: [
                    { text: "Call out to Augustus", next: "anchises_1" },
                    { text: "Gaze silently, proud", next: "anchises_2" },
                    { text: "Wonder what your legacy truly is", next: "anchises_3" }
                ]
            },
            {
                text: "The Sibyl visits with a message from Aeneas. Do you…",
                choices: [
                    { text: "Send back prophecy", next: "anchises_4" },
                    { text: "Ask for a final meeting", next: "anchises_5" },
                    { text: "Stay silent", next: "anchises_6" }
                ]
            },
            {
                text: "You hear whispers of war from above. Do you…",
                choices: [
                    { text: "Call on Jupiter", next: "anchises_7" },
                    { text: "Send a dream to Aeneas", next: "anchises_8" },
                    { text: "Ignore it and rest", next: "anchises_9" }
                ]
            },
            {
                text: "Romulus and Remus argue beside a stream. Do you…",
                choices: [
                    { text: "Intervene", next: "anchises_10" },
                    { text: "Let fate unfold", next: "anchises_11" },
                    { text: "Tell them of their doom", next: "anchises_12" }
                ]
            },
            {
                text: "A vision of Dido appears. Do you…",
                choices: [
                    { text: "Apologize for your son's actions", next: "anchises_13" },
                    { text: "Turn away", next: "anchises_14" },
                    { text: "Show her a future where she is worshipped", next: "anchises_15" }
                ]
            },
            {
                text: "The Golden Bough blooms again in your hand. Do you…",
                choices: [
                    { text: "Use it to ascend", next: "anchises_16" },
                    { text: "Give it away", next: "anchises_17" },
                    { text: "Bury it in the soil of memory", next: "anchises_18" }
                ]
            }
        ]
    },
    {
        name: "The Sibyl",
        description: "Prophetic priestess of Apollo, guides heroes through the dark.",
        image: "Photos/sibyl.png",
        story: [
            {
                text: "Aeneas hesitates at the cave's mouth. Do you…",
                choices: [
                    { text: "Push him forward", next: "sibyl_1" },
                    { text: "Warn him of what lies ahead", next: "sibyl_2" },
                    { text: "Let him choose freely", next: "sibyl_3" }
                ]
            },
            {
                text: "The spirits whisper conflicting fates. Do you…",
                choices: [
                    { text: "Silence them", next: "sibyl_4" },
                    { text: "Transcribe their prophecies", next: "sibyl_5" },
                    { text: "Allow one to speak through you", next: "sibyl_6" }
                ]
            },
            {
                text: "Apollo tightens his grip on your soul. Do you…",
                choices: [
                    { text: "Submit", next: "sibyl_7" },
                    { text: "Fight", next: "sibyl_8" },
                    { text: "Bargain", next: "sibyl_9" }
                ]
            },
            {
                text: "Cerberus stands restless. Do you…",
                choices: [
                    { text: "Soothe him with song", next: "sibyl_10" },
                    { text: "Drug him again", next: "sibyl_11" },
                    { text: "Free him", next: "sibyl_12" }
                ]
            },
            {
                text: "A shadow offers you freedom from divine servitude. Do you…",
                choices: [
                    { text: "Accept", next: "sibyl_13" },
                    { text: "Reject", next: "sibyl_14" },
                    { text: "Demand a price", next: "sibyl_15" }
                ]
            },
            {
                text: "The hundred mouths of the cave open once more. Do you…",
                choices: [
                    { text: "Speak the end of the world", next: "sibyl_16" },
                    { text: "Go silent forever", next: "sibyl_17" },
                    { text: "Rewrite the prophecy", next: "sibyl_18" }
                ]
            }
        ]
    },
    {
        name: "Achilles",
        description: "Once the greatest Greek warrior, now dwelling in the fields of Asphodel.",
        image: "Photos/achilles.png",
        story: [
            {
                text: "Odysseus speaks of your son Neoptolemus. Do you…",
                choices: [
                    { text: "Weep", next: "achilles_1" },
                    { text: "Curse him", next: "achilles_2" },
                    { text: "Ask for more stories", next: "achilles_3" }
                ]
            },
            {
                text: "Patroclus's shade flickers near. Do you…",
                choices: [
                    { text: "Embrace him", next: "achilles_4" },
                    { text: "Ask for forgiveness", next: "achilles_5" },
                    { text: "Turn away, ashamed", next: "achilles_6" }
                ]
            },
            {
                text: "A hero from Rome claims your glory. Do you…",
                choices: [
                    { text: "Challenge him", next: "achilles_7" },
                    { text: "Laugh", next: "achilles_8" },
                    { text: "Teach him", next: "achilles_9" }
                ]
            },
            {
                text: "You hear Hector's voice. Do you…",
                choices: [
                    { text: "Seek battle", next: "achilles_10" },
                    { text: "Speak calmly", next: "achilles_11" },
                    { text: "Apologize", next: "achilles_12" }
                ]
            },
            {
                text: "A river calls you—Styx or Lethe. Do you…",
                choices: [
                    { text: "Drink to forget", next: "achilles_13" },
                    { text: "Swear a new oath", next: "achilles_14" },
                    { text: "Walk away", next: "achilles_15" }
                ]
            },
            {
                text: "Elysium opens. Patroclus waits. Do you…",
                choices: [
                    { text: "Join him", next: "achilles_16" },
                    { text: "Return to the fields", next: "achilles_17" },
                    { text: "Ask to be reborn as a poet", next: "achilles_18" }
                ]
            }
        ]
    },
    {
        name: "Tiresias",
        description: "Blind prophet, consulted by Odysseus to learn his fate.",
        image: "Photos/tiresias.png",
        story: [
            {
                text: "Odysseus calls you again. Do you…",
                choices: [
                    { text: "Speak in riddles", next: "tiresias_1" },
                    { text: "Tell him plainly", next: "tiresias_2" },
                    { text: "Refuse", next: "tiresias_3" }
                ]
            },
            {
                text: "A young Roman girl seeks knowledge. Do you…",
                choices: [
                    { text: "Reveal her destiny", next: "tiresias_4" },
                    { text: "Warn her not to ask", next: "tiresias_5" },
                    { text: "Send her to Lethe", next: "tiresias_6" }
                ]
            },
            {
                text: "The Sibyl debates you. Do you…",
                choices: [
                    { text: "Argue", next: "tiresias_7" },
                    { text: "Praise her", next: "tiresias_8" },
                    { text: "Ask to switch places", next: "tiresias_9" }
                ]
            },
            {
                text: "You see visions of nuclear fire, metal wings, AI. Do you…",
                choices: [
                    { text: "Laugh", next: "tiresias_10" },
                    { text: "Weep", next: "tiresias_11" },
                    { text: "Chronicle it in ashes", next: "tiresias_12" }
                ]
            },
            {
                text: "A god offers to restore your sight. Do you…",
                choices: [
                    { text: "Accept", next: "tiresias_13" },
                    { text: "Refuse", next: "tiresias_14" },
                    { text: "Ask for wisdom instead", next: "tiresias_15" }
                ]
            },
            {
                text: "You reach the Elm of False Dreams. Do you…",
                choices: [
                    { text: "Sleep", next: "tiresias_16" },
                    { text: "Tear it down", next: "tiresias_17" },
                    { text: "Plant another", next: "tiresias_18" }
                ]
            }
        ]
    },
    {
        name: "Anticlea",
        description: "Odysseus's mother, bearer of familial wisdom and personal sorrow.",
        image: "Photos/anticlea.png",
        story: [
            {
                text: "Odysseus embraces you. Do you…",
                choices: [
                    { text: "Tell him of Penelope", next: "anticlea_1" },
                    { text: "Beg him to stay", next: "anticlea_2" },
                    { text: "Say nothing", next: "anticlea_3" }
                ]
            },
            {
                text: "You see Telemachus's face in the fog. Do you…",
                choices: [
                    { text: "Smile", next: "anticlea_4" },
                    { text: "Cry", next: "anticlea_5" },
                    { text: "Reach for him", next: "anticlea_6" }
                ]
            },
            {
                text: "A nymph tempts your son again. Do you…",
                choices: [
                    { text: "Curse her", next: "anticlea_7" },
                    { text: "Let fate decide", next: "anticlea_8" },
                    { text: "Warn him in dreams", next: "anticlea_9" }
                ]
            },
            {
                text: "The Sirens offer to sing you a lullaby. Do you…",
                choices: [
                    { text: "Listen", next: "anticlea_10" },
                    { text: "Flee", next: "anticlea_11" },
                    { text: "Sing back", next: "anticlea_12" }
                ]
            },
            {
                text: "Penelope's shade appears. Do you…",
                choices: [
                    { text: "Hug her", next: "anticlea_13" },
                    { text: "Question her loyalty", next: "anticlea_14" },
                    { text: "Thank her", next: "anticlea_15" }
                ]
            },
            {
                text: "You stand at the gates. Odysseus sails again. Do you…",
                choices: [
                    { text: "Follow", next: "anticlea_16" },
                    { text: "Wave goodbye", next: "anticlea_17" },
                    { text: "Enter Lethe's waters", next: "anticlea_18" }
                ]
            }
        ]
    }
];

const storyPaths = {
    "Dido": {
        "start": {
            "text": "You sit beneath the myrtle trees, still haunted by Aeneas's face. Do you…?",
            "choices": [
                { "text": "Call on the Furies to curse him further", "next": "dido_1" },
                { "text": "Walk to the banks of Lethe to forget", "next": "dido_2" },
                { "text": "Speak to fellow betrayed souls", "next": "dido_3" }
            ]
        },
        "dido_1": {
            "text": "The Furies appear, their eyes blazing. Do you…?",
            "choices": [
                { "text": "Demand vengeance", "next": "dido_ending_1" },
                { "text": "Ask for guidance", "next": "dido_ending_2" }
            ]
        },
        "dido_2": {
            "text": "You feel the weight of your memories fade. Do you…?",
            "choices": [
                { "text": "Stay in Lethe", "next": "dido_ending_3" },
                { "text": "Return to the Vale", "next": "dido_3" }
            ]
        },
        "dido_3": {
            "text": "You find Phaedra weeping. Do you…?",
            "choices": [
                { "text": "Comfort her", "next": "dido_ending_4" },
                { "text": "Join her in mourning", "next": "dido_ending_5" }
            ]
        },
        "dido_ending_1": {
            "text": "You unleash the Furies upon Aeneas. Your vengeance is complete.",
            "isEnding": true
        },
        "dido_ending_2": {
            "text": "The Furies guide you to a new path of power.",
            "isEnding": true
        },
        "dido_ending_3": {
            "text": "You forget your past, but at what cost?",
            "isEnding": true
        },
        "dido_ending_4": {
            "text": "You find solace in shared grief.",
            "isEnding": true
        },
        "dido_ending_5": {
            "text": "You remain trapped in sorrow, forever mourning.",
            "isEnding": true
        }
    },
    "Anchises": {
        "start": {
            "text": "You stand in Elysium, surrounded by golden fields. Do you…?",
            "choices": [
                { "text": "Reveal Rome's destiny to Aeneas", "next": "anchises_1" },
                { "text": "Keep the knowledge to yourself", "next": "anchises_2" }
            ]
        },
        "anchises_1": {
            "text": "Aeneas listens intently. Do you…?",
            "choices": [
                { "text": "Show him the future of Rome", "next": "anchises_ending_1" },
                { "text": "Warn him of the dangers ahead", "next": "anchises_ending_2" }
            ]
        },
        "anchises_2": {
            "text": "You choose silence. Do you…?",
            "choices": [
                { "text": "Reflect on your past", "next": "anchises_ending_3" },
                { "text": "Seek out other souls", "next": "anchises_ending_4" }
            ]
        },
        "anchises_ending_1": {
            "text": "Aeneas is inspired and leads his people to greatness.",
            "isEnding": true
        },
        "anchises_ending_2": {
            "text": "Your warning saves Aeneas from disaster.",
            "isEnding": true
        },
        "anchises_ending_3": {
            "text": "You are left with your memories, a bittersweet existence.",
            "isEnding": true
        },
        "anchises_ending_4": {
            "text": "You find companionship among the souls of the past.",
            "isEnding": true
        }
    },
    "Sibyl": {
        "start": {
            "text": "You stand at the entrance of the Underworld. Do you…?",
            "choices": [
                { "text": "Guide Aeneas through the gates", "next": "sibyl_1" },
                { "text": "Seek knowledge for yourself", "next": "sibyl_2" }
            ]
        },
        "sibyl_1": {
            "text": "Aeneas looks to you for guidance. Do you…?",
            "choices": [
                { "text": "Show him the path to the dead", "next": "sibyl_ending_1" },
                { "text": "Reveal the trials he must face", "next": "sibyl_ending_2" }
            ]
        },
        "sibyl_2": {
            "text": "You delve into the mysteries of the Underworld. Do you…?",
            "choices": [
                { "text": "Seek the truth of fate", "next": "sibyl_ending_3" },
                { "text": "Consult the spirits for wisdom", "next": "sibyl_ending_4" }
            ]
        },
        "sibyl_ending_1": {
            "text": "Aeneas successfully navigates the Underworld, guided by your wisdom.",
            "isEnding": true
        },
        "sibyl_ending_2": {
            "text": "He faces trials but emerges stronger.",
            "isEnding": true
        },
        "sibyl_ending_3": {
            "text": "You uncover dark truths that haunt you.",
            "isEnding": true
        },
        "sibyl_ending_4": {
            "text": "The spirits grant you insight, but at a cost.",
            "isEnding": true
        }
    },
    "Tiresias": {
        "start": {
            "text": "You sit in the shadows, waiting for visitors. Do you…?",
            "choices": [
                { "text": "Share your prophecies with Odysseus", "next": "tiresias_1" },
                { "text": "Remain silent and observe", "next": "tiresias_2" }
            ]
        },
        "tiresias_1": {
            "text": "Odysseus approaches. Do you…?",
            "choices": [
                { "text": "Reveal his fate", "next": "tiresias_ending_1" },
                { "text": "Warn him of the dangers ahead", "next": "tiresias_ending_2" }
            ]
        },
        "tiresias_2": {
            "text": "You watch as souls pass by. Do you…?",
            "choices": [
                { "text": "Reflect on your own life", "next": "tiresias_ending_3" },
                { "text": "Seek out a lost soul", "next": "tiresias_ending_4" }
            ]
        },
        "tiresias_ending_1": {
            "text": "Odysseus heeds your words and survives his journey.",
            "isEnding": true
        },
        "tiresias_ending_2": {
            "text": "Your warning saves him from disaster.",
            "isEnding": true
        },
        "tiresias_ending_3": {
            "text": "You are left with your memories, a bittersweet existence.",
            "isEnding": true
        },
        "tiresias_ending_4": {
            "text": "You find closure with a lost soul.",
            "isEnding": true
        }
    },
    "Achilles": {
        "start": {
            "text": "You wander the fields of Asphodel. Do you…?",
            "choices": [
                { "text": "Seek glory in the afterlife", "next": "achilles_1" },
                { "text": "Reflect on your past battles", "next": "achilles_2" }
            ]
        },
        "achilles_1": {
            "text": "You encounter other heroes. Do you…?",
            "choices": [
                { "text": "Challenge them to a contest", "next": "achilles_ending_1" },
                { "text": "Share tales of your glory", "next": "achilles_ending_2" }
            ]
        },
        "achilles_2": {
            "text": "You remember your life. Do you…?",
            "choices": [
                { "text": "Long for the living", "next": "achilles_ending_3" },
                { "text": "Accept your fate", "next": "achilles_ending_4" }
            ]
        },
        "achilles_ending_1": {
            "text": "You regain your glory, but at a cost.",
            "isEnding": true
        },
        "achilles_ending_2": {
            "text": "Your tales inspire others, but you remain unsatisfied.",
            "isEnding": true
        },
        "achilles_ending_3": {
            "text": "You are left with a longing for life.",
            "isEnding": true
        },
        "achilles_ending_4": {
            "text": "You find peace in acceptance.",
            "isEnding": true
        }
    },
    "Anticlea": {
        "start": {
            "text": "You wait for Odysseus in the shadows. Do you…?",
            "choices": [
                { "text": "Call out to him", "next": "anticlea_1" },
                { "text": "Reflect on your life", "next": "anticlea_2" }
            ]
        },
        "anticlea_1": {
            "text": "Odysseus appears. Do you…?",
            "choices": [
                { "text": "Share your wisdom", "next": "anticlea_ending_1" },
                { "text": "Express your sorrow", "next": "anticlea_ending_2" }
            ]
        },
        "anticlea_2": {
            "text": "You think of your family. Do you…?",
            "choices": [
                { "text": "Long for the living", "next": "anticlea_ending_3" },
                { "text": "Accept your fate", "next": "anticlea_ending_4" }
            ]
        },
        "anticlea_ending_1": {
            "text": "Your wisdom guides Odysseus on his journey.",
            "isEnding": true
        },
        "anticlea_ending_2": {
            "text": "You share a moment of connection, but it is fleeting.",
            "isEnding": true
        },
        "anticlea_ending_3": {
            "text": "You are left with a longing for your family.",
            "isEnding": true
        },
        "anticlea_ending_4": {
            "text": "You find peace in acceptance.",
            "isEnding": true
        }
    }
};

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
            <img src="${character.image}" alt="${character.name}">
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

// Function to handle character selection and navigation
function selectCharacter(character) {
    const startPath = storyPaths[character].start;
    displayScene(startPath);
}

// Function to display the scene based on the current path
function displayScene(path) {
    // Update the HTML with the path text and choices
    document.getElementById('scene-text').innerText = path.text;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ''; // Clear previous choices

    path.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            const nextPath = storyPaths[character][choice.next];
            displayScene(nextPath);
        };
        choicesContainer.appendChild(button);
    });

    // Handle ending scenarios
    if (path.isEnding) {
        // Display ending message
        document.getElementById('scene-text').innerText = path.text;
        choicesContainer.innerHTML = ''; // Clear choices
    }
}