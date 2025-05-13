function showCharacter(character) {
    let info = document.getElementById('info');
    switch (character) {
        case 'hercules':
            info.innerHTML = `
                <h3>Hercules</h3>
                <p>Purpose: Retrieve Cerberus as part of his Twelve Labors.</p>
                <p>Lessons Learned: Courage, acceptance of fate, and perseverance.</p>
            `;
            break;
        case 'orpheus':
            info.innerHTML = `
                <h3>Orpheus</h3>
                <p>Purpose: Retrieve his wife, Eurydice, from the underworld.</p>
                <p>Lessons Learned: Love transcends death, trust, and the consequences of doubt.</p>
            `;
            break;
        case 'persephone':
            info.innerHTML = `
                <h3>Persephone</h3>
                <p>Purpose: Queen of the underworld, representing the cycle of life and death.</p>
                <p>Lessons Learned: Duality of existence and the importance of choices.</p>
            `;
            break;
        default:
            info.innerHTML = '';
    }
}

function startAdventure(character) {
    const choicesDiv = document.getElementById('choices');
    let storyText = '';
    let choices = '';

    switch (character) {
        case 'hercules':
            storyText = "You are Hercules, tasked with retrieving Cerberus from the underworld. Do you:";
            choices = `
                <button onclick="herculesChoice('retrieve')">Retrieve Cerberus</button>
                <button onclick="herculesChoice('explore')">Explore the Underworld</button>
            `;
            break;
        case 'orpheus':
            storyText = "You are Orpheus, seeking to bring back your beloved Eurydice. Do you:";
            choices = `
                <button onclick="orpheusChoice('sing')">Sing to Hades</button>
                <button onclick="orpheusChoice('fight')">Fight for her</button>
            `;
            break;
        case 'persephone':
            storyText = "You are Persephone, queen of the underworld. Do you:";
            choices = `
                <button onclick="persephoneChoice('stay')">Stay in the Underworld</button>
                <button onclick="persephoneChoice('return')">Return to the Surface</button>
            `;
            break;
    }

    choicesDiv.innerHTML = `<h3>${storyText}</h3>${choices}`;
    choicesDiv.classList.remove('hidden');
}

function herculesChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'retrieve') {
        choicesDiv.innerHTML = "<p>You bravely retrieve Cerberus and return to the surface. You have completed your task!</p>";
    } else {
        choicesDiv.innerHTML = "<p>You explore the underworld and meet many souls. You learn valuable lessons about life and death.</p>";
    }
}

function orpheusChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'sing') {
        choicesDiv.innerHTML = "<p>Your music softens Hades' heart, and he allows you to take Eurydice back. But remember, do not look back!</p>";
    } else {
        choicesDiv.innerHTML = "<p>You fight fiercely, but Hades is too powerful. You learn that love requires patience and trust.</p>";
    }
}

function persephoneChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'stay') {
        choicesDiv.innerHTML = "<p>You embrace your role as queen and learn to balance both worlds.</p>";
    } else {
        choicesDiv.innerHTML = "<p>You return to the surface, bringing spring with you, but you must return to the underworld each year.</p>";
    }
}

function chooseUnderworld(underworld) {
    const optionsDiv = document.getElementById('options');
    const choicesDiv = document.getElementById('choices');
    optionsDiv.classList.add('hidden');
    choicesDiv.classList.remove('hidden');

    let characterChoices = '';

    if (underworld === 'aeneid') {
        characterChoices = `
            <h3>You chose the Aeneid. Select a character:</h3>
            <button onclick="chooseCharacter('anchises')">Anchises</button>
            <button onclick="chooseCharacter('dido')">Dido</button>
            <button onclick="chooseCharacter('sibyl')">Sibyl</button>
        `;
    } else {
        characterChoices = `
            <h3>You chose the Odyssey. Select a character:</h3>
            <button onclick="chooseCharacter('tiresias')">Tiresias</button>
            <button onclick="chooseCharacter('achilles')">Achilles</button>
            <button onclick="chooseCharacter('anticlea')">Anticlea</button>
        `;
    }

    choicesDiv.innerHTML = characterChoices;
}

function chooseCharacter(character) {
    const choicesDiv = document.getElementById('choices');
    let storyText = '';
    let choices = '';

    switch (character) {
        case 'anchises':
            storyText = "You are Anchises, guiding Aeneas. Do you:";
            choices = `
                <button onclick="anchisesChoice('reveal')">Reveal Rome's destiny</button>
                <button onclick="anchisesChoice('call')">Call forth Roman spirits</button>
                <button onclick="anchisesChoice('grant')">Grant Aeneas clarity</button>
            `;
            break;
        case 'dido':
            storyText = "You are Dido, queen of Carthage. Do you:";
            choices = `
                <button onclick="didoChoice('speak')">Speak to Aeneas</button>
                <button onclick="didoChoice('choose')">Choose your afterlife path</button>
                <button onclick="didoChoice('haunt')">Haunt Aeneas</button>
            `;
            break;
        case 'sibyl':
            storyText = "You are the Sibyl, the prophetess. Do you:";
            choices = `
                <button onclick="sibylChoice('path')">Choose a path through the Underworld</button>
                <button onclick="sibylChoice('let')">Let Aeneas confront Cerberus</button>
                <button onclick="sibylChoice('lead')">Lead Aeneas to the true gate</button>
            `;
            break;
        case 'tiresias':
            storyText = "You are Tiresias, the blind prophet. Do you:";
            choices = `
                <button onclick="tiresiasChoice('prophecy')">Give a clear prophecy</button>
                <button onclick="tiresiasChoice('reveal')">Reveal dangers ahead</button>
                <button onclick="tiresiasChoice('predict')">Predict Odysseus's death</button>
            `;
            break;
        case 'achilles':
            storyText = "You are Achilles, the great warrior. Do you:";
            choices = `
                <button onclick="achillesChoice('speak')">Speak with Odysseus</button>
                <button onclick="achillesChoice('seek')">Seek reincarnation</button>
                <button onclick="achillesChoice('challenge')">Challenge a dead rival</button>
            `;
            break;
        case 'anticlea':
            storyText = "You are Anticlea, Odysseus' mother. Do you:";
            choices = `
                <button onclick="anticleaChoice('truth')">Speak the truth to Odysseus</button>
                <button onclick="anticleaChoice('tell')">Tell him how you died</button>
                <button onclick="anticleaChoice('stay')">Stay with Odysseus</button>
            `;
            break;
    }

    choicesDiv.innerHTML = `<h3>${storyText}</h3>${choices}`;
}

// Define character choice functions here
function anchisesChoice(action) {
    const resultDiv = document.getElementById('result');
    if (action === 'reveal') {
        resultDiv.innerHTML = "<p>You reveal Rome's destiny, ensuring Aeneas's success!</p>";
    } else if (action === 'call') {
        resultDiv.innerHTML = "<p>You call forth spirits, but they warn of impending doom.</p>";
    } else {
        resultDiv.innerHTML = "<p>You grant clarity, helping Aeneas avoid the dangers of the underworld.</p>";
    }
    showResult();
}

function didoChoice(action) {
    const resultDiv = document.getElementById('result');
    if (action === 'speak') {
        resultDiv.innerHTML = "<p>You confront Aeneas, leading to a tragic end.</p>";
    } else if (action === 'choose') {
        resultDiv.innerHTML = "<p>You choose to journey toward Lethe, risking your memories.</p>";
    } else {
        resultDiv.innerHTML = "<p>You haunt Aeneas, forever tied to his fate.</p>";
    }
    showResult();
}

function sibylChoice(action) {
    const resultDiv = document.getElementById('result');
    if (action === 'path') {
        resultDiv.innerHTML = "<p>You choose the secret Tartarus shortcut, facing great dangers.</p>";
    } else if (action === 'let') {
        resultDiv.innerHTML = "<p>You let Aeneas confront Cerberus, leading to a fierce battle.</p>";
    } else {
        resultDiv.innerHTML = "<p>You lead Aeneas to the Gate of Horn, ensuring his success.</p>";
    }
    showResult();
}

function tiresiasChoice(action) {
    const resultDiv = document.getElementById('result');
    if (action === 'prophecy') {
        resultDiv.innerHTML = "<p>Your clear prophecy guides Odysseus safely home.</p>";
    } else if (action === 'reveal') {
        resultDiv.innerHTML = "<p>You reveal dangers, helping him avoid disaster.</p>";
    } else {
        resultDiv.innerHTML = "<p>Your vague prediction leads to uncertainty and peril.</p>";
    }
    showResult();
}

function achillesChoice(action) {
    const resultDiv = document.getElementById('result');
    if (action === 'speak') {
        resultDiv.innerHTML = "<p>Your conversation shifts Odysseus's outlook on heroism.</p>";
    } else if (action === 'seek') {
        resultDiv.innerHTML = "<p>You seek reincarnation, but face the unknown.</p>";
    } else {
        resultDiv.innerHTML = "<p>You challenge Ajax, leading to a fierce duel.</p>";
    }
    showResult();
}

function anticleaChoice(action) {
    const resultDiv = document.getElementById('result');
    if (action === 'truth') {
        resultDiv.innerHTML = "<p>Your honesty fuels Odysseus's determination to return home.</p>";
    } else if (action === 'tell') {
        resultDiv.innerHTML = "<p>You reveal your grief, deepening his resolve.</p>";
    } else {
        resultDiv.innerHTML = "<p>You stay with him, providing comfort in his darkest hour.</p>";
    }
    showResult();
}

function showResult() {
    const choicesDiv = document.getElementById('choices');
    const resultDiv = document.getElementById('result');
    choicesDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    document.getElementById('restart').classList.remove('hidden');
}

function restartGame() {
    const optionsDiv = document.getElementById('options');
    const choicesDiv = document.getElementById('choices');
    const resultDiv = document.getElementById('result');
    optionsDiv.classList.remove('hidden');
    choicesDiv.classList.add('hidden');
    resultDiv.classList.add('hidden');
    document.getElementById('restart').classList.add('hidden');
}