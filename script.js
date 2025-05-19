const journeys = {
        anchises: {
            title: "Anchises' Journey",
            prompts: [
                {
                    text: "You stand in Elysium, surrounded by golden fields and the spirits of the blessed. Do you…?",
                    choices: [
                        { text: "Reveal Rome's destiny to Aeneas", next: "A" },
                        { text: "Call forth other Roman spirits", next: "B" },
                        { text: "Grant Aeneas clarity or mystery", next: "C" },
                        { text: "Reflect on your past life", next: "D" },
                        { text: "Seek guidance from the gods", next: "E" },
                        { text: "Prepare Aeneas for his journey ahead", next: "F" },
                        { text: "Contemplate the fate of your descendants", next: "G" }
                    ]
                },
                // Path A: Reveal Rome's destiny
                {
                    id: "A",
                    text: "You decide to share the future of Rome with Aeneas. Do you…?",
                    choices: [
                        { text: "Speak of glory and triumph", next: "A1" },
                        { text: "Warn him of the challenges ahead", next: "A2" },
                        { text: "Encourage him to embrace his fate", next: "A3" }
                    ]
                },
                {
                    id: "A1",
                    text: "Aeneas is filled with pride and determination. **Ending: The Glorious Path**",
                    choices: []
                },
                {
                    id: "A2",
                    text: "He listens intently, understanding the weight of his journey. **Ending: The Burden of Destiny**",
                    choices: []
                },
                {
                    id: "A3",
                    text: "Aeneas feels empowered to face his fate. **Ending: Embracing Destiny**",
                    choices: []
                },
                // Path B: Call forth Roman spirits
                {
                    id: "B",
                    text: "You summon the spirits of great Romans. Do you…?",
                    choices: [
                        { text: "Show Caesar Augustus", next: "B1" },
                        { text: "Show Romulus", next: "B2" },
                        { text: "Show Marcellus", next: "B3" }
                    ]
                },
                {
                    id: "B1",
                    text: "Augustus inspires Aeneas with visions of glory. **Ending: The Legacy of Rome**",
                    choices: []
                },
                {
                    id: "B2",
                    text: "Romulus speaks of the founding of the city. **Ending: The Birth of a Nation**",
                    choices: []
                },
                {
                    id: "B3",
                    text: "Marcellus's tragic fate reminds Aeneas of the cost of greatness. **Ending: The Price of Glory**",
                    choices: []
                },
                // Path C: Grant clarity or mystery
                {
                    id: "C",
                    text: "Do you grant Aeneas clarity or mystery? Choose wisely.",
                    choices: [
                        { text: "Grant him clarity", next: "C1" },
                        { text: "Grant him mystery", next: "C2" }
                    ]
                },
                {
                    id: "C1",
                    text: "Aeneas gains insight into his path. **Ending: The Clear Vision**",
                    choices: []
                },
                {
                    id: "C2",
                    text: "He is led astray by illusions. **Ending: The Path of Shadows**",
                    choices: []
                },
                // Path D: Reflect on your past life
                {
                    id: "D",
                    text: "You ponder your life on Earth. Do you…?",
                    choices: [
                        { text: "Regret your choices", next: "D1" },
                        { text: "Celebrate your legacy", next: "D2" },
                        { text: "Seek forgiveness for your mistakes", next: "D3" }
                    ]
                },
                {
                    id: "D1",
                    text: "Your regrets weigh heavily on you. **Ending: The Burden of Regret**",
                    choices: []
                },
                {
                    id: "D2",
                    text: "You find peace in your accomplishments. **Ending: The Joy of Legacy**",
                    choices: []
                },
                {
                    id: "D3",
                    text: "You are granted forgiveness by the gods. **Ending: Redemption**",
                    choices: []
                },
                // Path E: Seek guidance from the gods
                {
                    id: "E",
                    text: "You call upon the gods for wisdom. Do you…?",
                    choices: [
                        { text: "Ask for guidance on Aeneas's journey", next: "E1" },
                        { text: "Request a sign of approval", next: "E2" },
                        { text: "Inquire about your own fate", next: "E3" }
                    ]
                },
                {
                    id: "E1",
                    text: "The gods provide clarity for Aeneas. **Ending: Divine Guidance**",
                    choices: []
                },
                {
                    id: "E2",
                    text: "You receive a sign, but it is cryptic. **Ending: The Ambiguous Sign**",
                    choices: []
                },
                {
                    id: "E3",
                    text: "You learn of your eternal rest. **Ending: The Peace of the Afterlife**",
                    choices: []
                },
                // Path F: Prepare Aeneas for his journey
                {
                    id: "F",
                    text: "You decide to prepare Aeneas. Do you…?",
                    choices: [
                        { text: "Teach him the ways of leadership", next: "F1" },
                        { text: "Share the stories of his ancestors", next: "F2" },
                        { text: "Equip him with knowledge of the Underworld", next: "F3" }
                    ]
                },
                {
                    id: "F1",
                    text: "Aeneas becomes a wise leader. **Ending: The Leader of Men**",
                    choices: []
                },
                {
                    id: "F2",
                    text: "He feels connected to his heritage. **Ending: The Legacy of Ancestors**",
                    choices: []
                },
                {
                    id: "F3",
                    text: "He navigates the Underworld with ease. **Ending: The Knowledgeable Hero**",
                    choices: []
                },
                // Path G: Contemplate the fate of your descendants
                {
                    id: "G",
                    text: "You think of your descendants. Do you…?",
                    choices: [
                        { text: "Hope for their greatness", next: "G1" },
                        { text: "Fear for their future", next: "G2" },
                        { text: "Pray for their protection", next: "G3" }
                    ]
                },
                {
                    id: "G1",
                    text: "You see a bright future for them. **Ending: The Hopeful Ancestor**",
                    choices: []
                },
                {
                    id: "G2",
                    text: "You worry about the challenges they will face. **Ending: The Anxious Guardian**",
                    choices: []
                },
                {
                    id: "G3",
                    text: "Your prayers are answered. **Ending: The Blessed Lineage**",
                    choices: []
                }
            ]
        },
    dido: {
        title: "Dido's Journey",
        prompts: [
            {
                text: "You sit beneath the myrtle trees in the Underworld. Aeneas has just passed you by, silent. Do you…?",
                choices: [
                    { text: "Curse Aeneas aloud, summoning the Furies", next: "A" },
                    { text: "Turn away and head toward the River Lethe", next: "B" },
                    { text: "Follow the path toward Sychaeus's soul", next: "C" },
                    { text: "Seek out Helen among the dead", next: "D" },
                    { text: "Approach the shade of Phaedra and other betrayed women", next: "E" },
                    { text: "Cry out to the gods for justice", next: "F" },
                    { text: "Offer yourself as a guardian to other women lost to love", next: "G" }
                ]
            },
            // Path A: Curse Aeneas
            {
                id: "A",
                text: "The Furies answer your call. Do you…?",
                choices: [
                    { text: "Demand vengeance for your death", next: "A1a" },
                    { text: "Ask them to curse his future line", next: "A1b" },
                    { text: "Bargain your soul for revenge", next: "A1c" }
                ]
            },
            {
                id: "A1a",
                text: "You become a whisper in Lavinia's nightmares. **Ending: Haunting the Bride**",
                choices: []
            },
            {
                id: "A1b",
                text: "The Furies foretell civil war in Rome. **Ending: Bloodline Cursed**",
                choices: []
            },
            {
                id: "A1c",
                text: "They make you their servant. **Ending: Fury's Apprentice**",
                choices: []
            },
            // Path B: Turn away to Lethe
            {
                id: "B",
                text: "The waters shimmer. Do you…?",
                choices: [
                    { text: "Drink deeply to forget him", next: "B1a" },
                    { text: "Dip a hand and remember only Sychaeus", next: "B1b" },
                    { text: "Refuse the water and meditate on your pain", next: "B1c" }
                ]
            },
            {
                id: "B1a",
                text: "You lose all memory — even your own name. **Ending: Oblivion's Peace**",
                choices: []
            },
            {
                id: "B1b",
                text: "Sychaeus speaks your name again. **Ending: Reunion in Memory**",
                choices: []
            },
            {
                id: "B1c",
                text: "Your pain forms into poetry sung by nearby shades. **Ending: Queen of Sorrows**",
                choices: []
            },
            // Path C: Follow Sychaeus
            {
                id: "C",
                text: "You find him waiting. Do you…?",
                choices: [
                    { text: "Fall into his arms", next: "C1a" },
                    { text: "Confess your betrayal by loving Aeneas", next: "C1b" },
                    { text: "Ask for forgiveness", next: "C1c" }
                ]
            },
            {
                id: "C1a",
                text: "He welcomes you back with no words. **Ending: Silent Embrace**",
                choices: []
            },
            {
                id: "C1b",
                text: "He weeps and forgives you. **Ending: Honest Reunion**",
                choices: []
            },
            {
                id: "C1c",
                text: "You are granted a second death — rebirth above. **Ending: Lethean Rebirth**",
                choices: []
            },
            // Path D: Seek out Helen
            {
                id: "D",
                text: "You confront Helen. Do you…?",
                choices: [
                    { text: "Demand an explanation for her role in your suffering", next: "D1a" },
                    { text: "Challenge her to a duel", next: "D1b" },
                    { text: "Forgive her and seek peace", next: "D1c" }
                ]
            },
            {
                id: "D1a",
                text: "Helen reveals her own pain. **Ending: Shared Suffering**",
                choices: []
            },
            {
                id: "D1b",
                text: "You fight, but both are lost in the shadows. **Ending: Eternal Conflict**",
                choices: []
            },
            {
                id: "D1c",
                text: "You find solace in forgiveness. **Ending: Peaceful Resolution**",
                choices: []
            },
            // Path E: Approach Phaedra
            {
                id: "E",
                text: "You find Phaedra weeping. Do you…?",
                choices: [
                    { text: "Comfort her", next: "E1a" },
                    { text: "Share your own story of betrayal", next: "E1b" },
                    { text: "Encourage her to seek revenge", next: "E1c" }
                ]
            },
            {
                id: "E1a",
                text: "You bond over shared grief. **Ending: Sisterhood in Sorrow**",
                choices: []
            },
            {
                id: "E1b",
                text: "Your story inspires her to find strength. **Ending: Empowered Spirits**",
                choices: []
            },
            {
                id: "E1c",
                text: "You both plot revenge, but it leads to despair. **Ending: Vengeful Shadows**",
                choices: []
            },
            // Path F: Cry out for justice
            {
                id: "F",
                text: "Your voice echoes through the Underworld. Do you…?",
                choices: [
                    { text: "Call upon the gods for vengeance", next: "F1a" },
                    { text: "Seek guidance from the dead", next: "F1b" },
                    { text: "Accept your fate and find peace", next: "F1c" }
                ]
            },
            {
                id: "F1a",
                text: "The gods ignore your pleas. **Ending: Forgotten Fury**",
                choices: []
            },
            {
                id: "F1b",
                text: "You gain wisdom from the lost souls. **Ending: Knowledge of the Damned**",
                choices: []
            },
            {
                id: "F1c",
                text: "You find solace in acceptance. **Ending: Peaceful Resignation**",
                choices: []
            },
            // Path G: Guardian of Lost Women
            {
                id: "G",
                text: "You take on the role of a guardian. Do you…?",
                choices: [
                    { text: "Guide them to safety", next: "G1a" },
                    { text: "Share your story to warn them", next: "G1b" },
                    { text: "Lead them in rebellion against fate", next: "G1c" }
                ]
            },
            {
                id: "G1a",
                text: "You become a beacon of hope. **Ending: Guardian of the Lost**",
                choices: []
            },
            {
                id: "G1b",
                text: "Your story inspires them to seek their own paths. **Ending: Legacy of Strength**",
                choices: []
            },
            {
                id: "G1c",
                text: "You lead a rebellion, but it ends in tragedy. **Ending: Fallen Guardian**",
                choices: []
            }
        ]
    },
    sibyl: {
        title: "The Sibyl's Journey",
        prompts: [
            {
                text: "You stand at the entrance of the Underworld, the dark waters of Avernus before you. Do you…?",
                choices: [
                    { text: "Guide Aeneas through the gates", next: "A" },
                    { text: "Consult the spirits for wisdom", next: "B" },
                    { text: "Seek the truth about your own fate", next: "C" },
                    { text: "Prepare offerings for the gods", next: "D" },
                    { text: "Reflect on the souls you have guided", next: "E" },
                    { text: "Call upon Apollo for insight", next: "F" },
                    { text: "Challenge the Furies to reveal their secrets", next: "G" }
                ]
            },
            // Path A: Guide Aeneas
            {
                id: "A",
                text: "You decide to guide Aeneas. Do you…?",
                choices: [
                    { text: "Lead him to the Fields of Elysium", next: "A1" },
                    { text: "Show him the horrors of Tartarus", next: "A2" },
                    { text: "Reveal the path to the River Lethe", next: "A3" }
                ]
            },
            {
                id: "A1",
                text: "Aeneas finds peace among the blessed. **Ending: The Elysian Reward**",
                choices: []
            },
            {
                id: "A2",
                text: "He witnesses the punishment of the damned. **Ending: The Weight of Knowledge**",
                choices: []
            },
            {
                id: "A3",
                text: "He learns the importance of memory and forgetfulness. **Ending: The Balance of Life**",
                choices: []
            },
            // Path B: Consult the spirits
            {
                id: "B",
                text: "You consult the spirits for guidance. Do you…?",
                choices: [
                    { text: "Ask about Aeneas's destiny", next: "B1" },
                    { text: "Seek knowledge of the future", next: "B2" },
                    { text: "Inquire about your own fate", next: "B3" }
                ]
            },
            {
                id: "B1",
                text: "The spirits reveal a glorious future for Aeneas. **Ending: The Prophetic Vision**",
                choices: []
            },
            {
                id: "B2",
                text: "You glimpse the trials that await. **Ending: The Burden of Sight**",
                choices: []
            },
            {
                id: "B3",
                text: "You learn of your eternal role as a guide. **Ending: The Eternal Guide**",
                choices: []
            },
            // Path C: Seek the truth about your fate
            {
                id: "C",
                text: "You ponder your own fate. Do you…?",
                choices: [
                    { text: "Accept your role as a guide", next: "C1" },
                    { text: "Desire to escape your fate", next: "C2" },
                    { text: "Seek redemption for past mistakes", next: "C3" }
                ]
            },
            {
                id: "C1",
                text: "You find peace in your purpose. **Ending: Embracing Destiny**",
                choices: []
            },
            {
                id: "C2",
                text: "You attempt to flee, but the Underworld binds you. **Ending: The Trapped Seer**",
                choices: []
            },
            {
                id: "C3",
                text: "You are granted a chance for redemption. **Ending: The Redeemed Spirit**",
                choices: []
            },
            // Path D: Prepare offerings for the gods
            {
                id: "D",
                text: "You prepare offerings. Do you…?",
                choices: [
                    { text: "Offer fruits and flowers", next: "D1" },
                    { text: "Sacrifice a lamb", next: "D2" },
                    { text: "Burn incense and pray", next: "D3" }
                ]
            },
            {
                id: "D1",
                text: "The gods are pleased with your offerings. **Ending: The Favor of the Gods**",
                choices: []
            },
            {
                id: "D2",
                text: "The sacrifice is accepted, but at a cost. **Ending: The Price of Sacrifice**",
                choices: []
            },
            {
                id: "D3",
                text: "Your prayers are heard, granting you insight. **Ending: The Enlightened Seer**",
                choices: []
            },
            // Path E: Reflect on the souls you have guided
            {
                id: "E",
                text: "You think of the souls you have guided. Do you…?",
                choices: [
                    { text: "Recall their stories", next: "E1" },
                    { text: "Wish to reunite with them", next: "E2" },
                    { text: "Seek to help more souls", next: "E3" }
                ]
            },
            {
                id: "E1",
                text: "Their stories inspire you. **Ending: The Legacy of Guidance**",
                choices: []
            },
            {
                id: "E2",
                text: "You long for their company. **Ending: The Lonely Guide**",
                choices: []
            },
            {
                id: "E3",
                text: "You find purpose in helping others. **Ending: The Compassionate Seer**",
                choices: []
            },
            // Path F: Call upon Apollo
            {
                id: "F",
                text: "You call upon Apollo for insight. Do you…?",
                choices: [
                    { text: "Ask for wisdom in guiding Aeneas", next: "F1" },
                    { text: "Request a vision of the future", next: "F2" },
                    { text: "Seek clarity about your own fate", next: "F3" }
                ]
            },
            {
                id: "F1",
                text: "Apollo grants you wisdom. **Ending: The Wise Guide**",
                choices: []
            },
            {
                id: "F2",
                text: "You receive a cryptic vision. **Ending: The Ambiguous Prophecy**",
                choices: []
            },
            {
                id: "F3",
                text: "You learn of your eternal role. **Ending: The Eternal Oracle**",
                choices: []
            },
            // Path G: Challenge the Furies
            {
                id: "G",
                text: "You challenge the Furies. Do you…?",
                choices: [
                    { text: "Demand their secrets", next: "G1" },
                    { text: "Bargain for knowledge", next: "G2" },
                    { text: "Defy them outright", next: "G3" }
                ]
            },
            {
                id: "G1",
                text: "They reveal dark truths. **Ending: The Burden of Knowledge**",
                choices: []
            },
            {
                id: "G2",
                text: "You gain insight, but at a cost. **Ending: The Price of Truth**",
                choices: []
            },
            {
                id: "G3",
                text: "You are punished for your defiance. **Ending: The Wrath of the Furies**",
                choices: []
            }
        ]
    },
    achilles: {
        title: "Achilles' Journey",
        prompts: [
            {
                text: "You find yourself in the Fields of Asphodel, surrounded by shades of the fallen. Do you…?",
                choices: [
                    { text: "Seek out Patroclus's spirit", next: "A" },
                    { text: "Confront the ghosts of your enemies", next: "B" },
                    { text: "Reflect on your glory and choices", next: "C" },
                    { text: "Challenge the Fates for a second chance", next: "D" },
                    { text: "Guide the souls of the fallen warriors", next: "E" },
                    { text: "Search for the meaning of your legacy", next: "F" },
                    { text: "Embrace the peace of the afterlife", next: "G" }
                ]
            },
            // Path A: Seek out Patroclus
            {
                id: "A",
                text: "You call for Patroclus. Do you…?",
                choices: [
                    { text: "Ask him about his time in the Underworld", next: "A1" },
                    { text: "Express your regret for his death", next: "A2" },
                    { text: "Seek his guidance for your own fate", next: "A3" }
                ]
            },
            {
                id: "A1",
                text: "Patroclus shares his wisdom. **Ending: The Bond of Friendship**",
                choices: []
            },
            {
                id: "A2",
                text: "He forgives you, and you find peace. **Ending: The Healing of Grief**",
                choices: []
            },
            {
                id: "A3",
                text: "His advice leads you to clarity. **Ending: The Wise Warrior**",
                choices: []
            },
            // Path B: Confront the ghosts
            {
                id: "B",
                text: "You face the spirits of your enemies. Do you…?",
                choices: [
                    { text: "Demand an explanation for their actions", next: "B1" },
                    { text: "Challenge them to a duel", next: "B2" },
                    { text: "Seek to understand their perspectives", next: "B3" }
                ]
            },
            {
                id: "B1",
                text: "They reveal their regrets. **Ending: The Weight of War**",
                choices: []
            },
            {
                id: "B2",
                text: "You engage in a futile battle. **Ending: The Cycle of Violence**",
                choices: []
            },
            {
                id: "B3",
                text: "You find common ground. **Ending: The Shared Suffering**",
                choices: []
            },
            // Path C: Reflect on glory
            {
                id: "C",
                text: "You ponder your past glories. Do you…?",
                choices: [
                    { text: "Celebrate your victories", next: "C1" },
                    { text: "Regret your choices", next: "C2" },
                    { text: "Seek redemption for your wrath", next: "C3" }
                ]
            },
            {
                id: "C1",
                text: "You revel in your legacy. **Ending: The Hero's Pride**",
                choices: []
            },
            {
                id: "C2",
                text: "Your regrets haunt you. **Ending: The Burden of Glory**",
                choices: []
            },
            {
                id: "C3",
                text: "You find a path to redemption. **Ending: The Redeemed Warrior**",
                choices: []
            },
            // Path D: Challenge the Fates
            {
                id: "D",
                text: "You confront the Fates. Do you…?",
                choices: [
                    { text: "Demand a second chance at life", next: "D1" },
                    { text: "Ask for knowledge of your legacy", next: "D2" },
                    { text: "Seek to change your fate", next: "D3" }
                ]
            },
            {
                id: "D1",
                text: "They refuse, reminding you of your choices. **Ending: The Immutable Fate**",
                choices: []
            },
            {
                id: "D2",
                text: "You learn of the impact of your actions. **Ending: The Legacy Revealed**",
                choices: []
            },
            {
                id: "D3",
                text: "You are punished for your hubris. **Ending: The Wrath of the Fates**",
                choices: []
            },
            // Path E: Guide the souls
            {
                id: "E",
                text: "You decide to guide the fallen warriors. Do you…?",
                choices: [
                    { text: "Help them find peace", next: "E1" },
                    { text: "Share your stories of valor", next: "E2" },
                    { text: "Encourage them to seek their own paths", next: "E3" }
                ]
            },
            {
                id: "E1",
                text: "You become a beacon of hope. **Ending: The Guardian of Souls**",
                choices: []
            },
            {
                id: "E2",
                text: "Your stories inspire them. **Ending: The Legacy of Valor**",
                choices: []
            },
            {
                id: "E3",
                text: "You empower them to find their own way. **Ending: The Empowered Spirits**",
                choices: []
            },
            // Path F: Search for meaning
            {
                id: "F",
                text: "You seek the meaning of your legacy. Do you…?",
                choices: [
                    { text: "Ask the gods for insight", next: "F1" },
                    { text: "Reflect on your life's impact", next: "F2" },
                    { text: "Seek counsel from other heroes", next: "F3" }
                ]
            },
            {
                id: "F1",
                text: "The gods grant you clarity. **Ending: The Enlightened Hero**",
                choices: []
            },
            {
                id: "F2",
                text: "You find peace in your contributions. **Ending: The Respected Legacy**",
                choices: []
            },
            {
                id: "F3",
                text: "You gain wisdom from their experiences. **Ending: The Council of Heroes**",
                choices: []
            },
            // Path G: Embrace peace
            {
                id: "G",
                text: "You choose to embrace the peace of the afterlife. Do you…?",
                choices: [
                    { text: "Accept your fate with grace", next: "G1" },
                    { text: "Reflect on your life's journey", next: "G2" },
                    { text: "Guide others to find peace", next: "G3" }
                ]
            },
            {
                id: "G1",
                text: "You find solace in acceptance. **Ending: The Peaceful Warrior**",
                choices: []
            },
            {
                id: "G2",
                text: "Your reflections bring you clarity. **Ending: The Wise Sage**",
                choices: []
            },
            {
                id: "G3",
                text: "You help others find their peace. **Ending: The Guardian of Tranquility**",
                choices: []
            }
        ]
    },
};

function loadCharacterPrompts(character) {
    const adventure = adventures[character];
    
    // Clear the character selection area
    document.getElementById("characterSelection").innerHTML = '';

    // Display the opening prompt
    const promptElement = document.createElement('h2');
    promptElement.textContent = adventure.openingPrompt;
    document.getElementById("characterSelection").appendChild(promptElement);

    // Display choices
    for (const choice in adventure.choices) {
        const choiceElement = document.createElement('div');
        choiceElement.innerHTML = `<strong>${choice}:</strong> ${adventure.choices[choice].prompt}`;
        document.getElementById("characterSelection").appendChild(choiceElement);
    }
}

// Event listeners for buttons
document.getElementById("didoButton").addEventListener("click", function() {
    loadCharacterPrompts("dido");
});
document.getElementById("achillesButton").addEventListener("click", function() {
    loadCharacterPrompts("achilles");
});
document.getElementById("anchisesButton").addEventListener("click", function() {
    loadCharacterPrompts("anchises");
});
document.getElementById("anticleaButton").addEventListener("click", function() {
    loadCharacterPrompts("anticlea");
});
document.getElementById("sibylButton").addEventListener("click", function() {
    loadCharacterPrompts("sibyl");
});
document.getElementById("tiresiasButton").addEventListener("click", function() {
    loadCharacterPrompts("tiresias");
});

// Assuming you have a global variable to track the current character
let currentCharacter = '';

document.getElementById("anticleaButton").addEventListener("click", function() {
    currentCharacter = 'anticlea'; // Set the current character
    startJourney(currentCharacter); // Call the function to start the journey
});

// Function to start the journey
function startJourney(character) {
    const journey = journeys[character]; // Get the journey for the selected character
    document.getElementById("character-selection").style.display = "none"; // Hide character selection
    document.getElementById("journey").style.display = "block"; // Show journey section
    displayPrompt(journey.prompts[0]); // Display the first prompt of the selected character
}

// Function to display the prompt and choices
function displayPrompt(prompt) {
    document.getElementById("journey-title").innerText = prompt.text;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear previous choices

    prompt.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => handleChoice(choice.next);
        choicesDiv.appendChild(button);
    });
}

// Function to handle the choice made by the user
function handleChoice(next) {
    const currentJourney = journeys[currentCharacter]; // Get the current character's journey
    const nextPrompt = currentJourney.prompts.find(p => p.id === next); // Find the next prompt
    displayPrompt(nextPrompt); // Display the next prompt
}