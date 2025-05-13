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