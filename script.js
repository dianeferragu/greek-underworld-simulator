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