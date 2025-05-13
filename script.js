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
                <button onclick="anchisesChoice('guide')">Guide Aeneas</button>
                <button onclick="anchisesChoice('warn')">Warn him of dangers</button>
            `;
            break;
        case 'dido':
            storyText = "You are Dido, queen of Carthage. Do you:";
            choices = `
                <button onclick="didoChoice('love')">Pursue love</button>
                <button onclick="didoChoice('revenge')">Seek revenge</button>
            `;
            break;
        case 'sibyl':
            storyText = "You are the Sibyl, the prophetess. Do you:";
            choices = `
                <button onclick="sibylChoice('foretell')">Foretell the future</button>
                <button onclick="sibylChoice('silence')">Remain silent</button>
            `;
            break;
        case 'tiresias':
            storyText = "You are Tiresias, the blind prophet. Do you:";
            choices = `
                <button onclick="tiresiasChoice('advise')">Advise Odysseus</button>
                <button onclick="tiresiasChoice('warn')">Warn him of dangers</button>
            `;
            break;
        case 'achilles':
            storyText = "You are Achilles, the great warrior. Do you:";
            choices = `
                <button onclick="achillesChoice('fight')">Fight for glory</button>
                <button onclick="achillesChoice('retreat')">Retreat from battle</button>
            `;
            break;
        case 'anticlea':
            storyText = "You are Anticlea, Odysseus' mother. Do you:";
            choices = `
                <button onclick="anticleaChoice('reveal')">Reveal secrets</button>
                <button onclick="anticleaChoice('comfort')">Comfort Odysseus</button>
            `;
            break;
    }

    choicesDiv.innerHTML = `<h3>${storyText}</h3>${choices}`;
}

// Define character choice functions here
function anchisesChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'guide') {
        choicesDiv.innerHTML = "<p>You guide Aeneas to his destiny, ensuring the future of Rome!</p>";
    } else {
        choicesDiv.innerHTML = "<p>You warn him of the dangers ahead, but he must face them alone.</p>";
    }
}

function didoChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'love') {
        choicesDiv.innerHTML = "<p>You pursue love, but it leads to heartbreak and tragedy.</p>";
    } else {
        choicesDiv.innerHTML = "<p>You seek revenge, but it consumes you.</p>";
    }
}

function sibylChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'foretell') {
        choicesDiv.innerHTML = "<p>You foretell the future, guiding heroes with your wisdom.</p>";
    } else {
        choicesDiv.innerHTML = "<p>Your silence leaves many questions unanswered.</p>";
    }
}

function tiresiasChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'advise') {
        choicesDiv.innerHTML = "<p>Your advice helps Odysseus navigate the challenges ahead.</p>";
    } else {
        choicesDiv.innerHTML = "<p>Your warning goes unheeded, leading to dire consequences.</p>";
    }
}

function achillesChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'fight') {
        choicesDiv.innerHTML = "<p>You fight valiantly, earning eternal glory.</p>";
    } else {
        choicesDiv.innerHTML = "<p>You retreat, but your legacy is forever tarnished.</p>";
    }
}

function anticleaChoice(action) {
    const choicesDiv = document.getElementById('choices');
    if (action === 'reveal') {
        choicesDiv.innerHTML = "<p>You reveal secrets that change Odysseus' fate.</p>";
    } else {
        choicesDiv.innerHTML = "<p>You comfort him, providing the strength he needs to continue.</p>";
    }
}