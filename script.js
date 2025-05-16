const adventures = {
    dido: {
        openingPrompt: "You sit beneath the myrtle trees in the Underworld. Aeneas has just passed you by, silent. Your grief flares like embers. Do you…",
        choices: {
            A: {
                prompt: "Curse Aeneas aloud, summoning the Furies.",
                next: {
                    A1: {
                        prompt: "The Furies answer. Do you…",
                        choices: {
                            A1a: "Demand vengeance for your death.",
                            A1b: "Ask them to curse his future line.",
                            A1c: "Bargain your soul for revenge."
                        }
                    }
                }
            },
            B: {
                prompt: "Turn away and head toward the River Lethe.",
                next: {
                    B1: {
                        prompt: "The waters shimmer. Do you…",
                        choices: {
                            B1a: "Drink deeply to forget him.",
                            B1b: "Dip a hand and remember only Sychaeus.",
                            B1c: "Refuse the water and meditate on your pain."
                        }
                    }
                }
            },
            C: {
                prompt: "Follow the path toward Sychaeus's soul.",
                next: {
                    C1: {
                        prompt: "You find him waiting. Do you…",
                        choices: {
                            C1a: "Fall into his arms.",
                            C1b: "Confess your betrayal by loving Aeneas.",
                            C1c: "Ask for forgiveness."
                        }
                    }
                }
            },
            D: {
                prompt: "Seek out Helen among the dead.",
                next: {
                    D1: {
                        prompt: "You find her near the gates of Tartarus. Do you…",
                        choices: {
                            D1a: "Accuse her of your downfall.",
                            D1b: "Listen to her regrets.",
                            D1c: "Challenge her to speak the truth."
                        }
                    }
                }
            },
            E: {
                prompt: "Approach Phaedra and the betrayed.",
                next: {
                    E1: {
                        prompt: "The grove of grieving women welcomes you. Do you…",
                        choices: {
                            E1a: "Sit beside them and tell your tale.",
                            E1b: "Call them to rise in rebellion.",
                            E1c: "Walk among them silently."
                        }
                    }
                }
            },
            F: {
                prompt: "Cry out to the gods for justice.",
                next: {
                    F1: {
                        prompt: "Persephone answers your cry. Do you…",
                        choices: {
                            F1a: "Ask to be judge of men's hearts.",
                            F1b: "Beg for your own peace.",
                            F1c: "Request that Carthage rise again."
                        }
                    }
                }
            },
            G: {
                prompt: "Offer yourself as a guardian to other women lost to love.",
                next: {
                    G1: {
                        prompt: "A shade of a young girl approaches, weeping. Do you…",
                        choices: {
                            G1a: "Embrace her and tell your story.",
                            G1b: "Lead her away from Aeneas's path.",
                            G1c: "Swear to protect her forever."
                        }
                    }
                }
            }
        }
    },
    anchises: {
        openingPrompt: "From your place in Elysium, you watch the souls of the unborn stir near the River Lethe. Rome waits. Aeneas approaches. Do you…",
        choices: {
            A: {
                prompt: "Summon Aeneas to your side.",
                next: {
                    A1: {
                        prompt: "He approaches, unsure. Do you…",
                        choices: {
                            A1a: "Show him the glories of future Rome.",
                            A1b: "Tell him of the wars he must fight.",
                            A1c: "Embrace him and say nothing."
                        }
                    }
                }
            },
            B: {
                prompt: "Wait in silence and watch.",
                next: {
                    B1: {
                        prompt: "Aeneas seeks you, but you delay. Do you…",
                        choices: {
                            B1a: "Reveal yourself only at the last moment.",
                            B1b: "Watch him pass you by.",
                            B1c: "Send a vision instead."
                        }
                    }
                }
            },
            C: {
                prompt: "Call out to the spirit of Augustus.",
                next: {
                    C1: {
                        prompt: "The soul of Rome's future emperor stirs. Do you…",
                        choices: {
                            C1a: "Bless him with wisdom.",
                            C1b: "Warn him of pride.",
                            C1c: "Reveal the cost of empire."
                        }
                    }
                }
            },
            D: {
                prompt: "Visit the shades of Priam and Hector.",
                next: {
                    D1: {
                        prompt: "They await in noble sorrow. Do you…",
                        choices: {
                            D1a: "Speak of Troy's fall again.",
                            D1b: "Tell them of Aeneas's journey.",
                            D1c: "Ask if it was all worth it."
                        }
                    }
                }
            },
            E: {
                prompt: "Walk among the unborn souls.",
                next: {
                    E1: {
                        prompt: "So many heroes wait. Do you…",
                        choices: {
                            E1a: "Speak with Romulus.",
                            E1b: "Comfort a crying soul not yet named.",
                            E1c: "Ask them what they remember of the world above."
                        }
                    }
                }
            },
            F: {
                prompt: "Gaze upon Dido's ghost.",
                next: {
                    F1: {
                        prompt: "She burns still with silence. Do you…",
                        choices: {
                            F1a: "Apologize for your son's betrayal.",
                            F1b: "Justify Aeneas's mission.",
                            F1c: "Offer her remembrance in Roman rites."
                        }
                    }
                }
            },
            G: {
                prompt: "Pluck the Golden Bough once more.",
                next: {
                    G1: {
                        prompt: "It glows again in your hand. Do you…",
                        choices: {
                            G1a: "Offer it to another soul.",
                            G1b: "Use it to cross the gates again.",
                            G1c: "Bury it in the soil of memory."
                        }
                    }
                }
            }
        }
    },
    sibyl: {
        openingPrompt: "You stand once more at the gates of Dis, the hundred mouths of your cave silent behind you. Your service to Apollo weighs heavily. Aeneas lingers at the threshold. Do you…",
        choices: {
            A: {
                prompt: "Push Aeneas forward without warning.",
                next: {
                    A1: {
                        prompt: "He stumbles, frightened. Do you…",
                        choices: {
                            A1a: "Leave him to face the spirits alone.",
                            A1b: "Guide him silently from behind.",
                            A1c: "Sing the old chants to give him courage."
                        }
                    }
                }
            },
            B: {
                prompt: "Let him choose whether to enter.",
                next: {
                    B1: {
                        prompt: "He hesitates. Do you…",
                        choices: {
                            B1a: "Wait without speaking.",
                            B1b: "Give him a riddle to solve.",
                            B1c: "Walk away until he follows."
                        }
                    }
                }
            },
            C: {
                prompt: "Whisper a secret prophecy to him alone.",
                next: {
                    C1: {
                        prompt: "Your voice is soft as leaves. Do you…",
                        choices: {
                            C1a: "Tell him of Lavinia's future.",
                            C1b: "Speak of Dido's soul.",
                            C1c: "Foretell the death of Turnus."
                        }
                    }
                }
            },
            D: {
                prompt: "Challenge Apollo's hold on your body.",
                next: {
                    D1: {
                        prompt: "The god tightens his grip. Do you…",
                        choices: {
                            D1a: "Beg for freedom.",
                            D1b: "Curse his name aloud.",
                            D1c: "Offer him a bargain."
                        }
                    }
                }
            },
            E: {
                prompt: "Speak with the dead before you guide the living.",
                next: {
                    E1: {
                        prompt: "You walk among the shades. Do you…",
                        choices: {
                            E1a: "Seek Tiresias.",
                            E1b: "Call on the spirit of Deiphobe.",
                            E1c: "Speak to the silent crowd."
                        }
                    }
                }
            },
            F: {
                prompt: "Hide your scrolls of fate deep in the rock.",
                next: {
                    F1: {
                        prompt: "You dig into the obsidian wall. Do you…",
                        choices: {
                            F1a: "Bury the prophecies you hate.",
                            F1b: "Hide your visions of Rome's end.",
                            F1c: "Seal the names of unborn heroes."
                        }
                    }
                }
            },
            G: {
                prompt: "Offer a prophecy to someone else, not Aeneas.",
                next: {
                    G1: {
                        prompt: "A Roman soul waits by the Lethe. Do you…",
                        choices: {
                            G1a: "Speak to Caesar.",
                            G1b: "Speak to Camilla's unborn shade.",
                            G1c: "Speak to the weeping mother of a future general."
                        }
                    }
                }
            }
        }
    },
    tiresias: {
        openingPrompt: "You dwell at the edge of Hades, where blood calls prophecy and gods call pain. A mortal approaches once more — Odysseus, seeking truth. Around you swirl futures. Do you…",
        choices: {
            A: {
                prompt: "Greet Odysseus with riddles.",
                next: {
                    A1: {
                        prompt: "He furrows his brow. Do you…",
                        choices: {
                            A1a: "Lead him on a journey of guessing.",
                            A1b: "Hide the truth to test his wit.",
                            A1c: "Speak in metaphors about Ithaca."
                        }
                    }
                }
            },
            B: {
                prompt: "Tell him plainly what he must do.",
                next: {
                    B1: {
                        prompt: "You speak the whole truth. Do you…",
                        choices: {
                            B1a: "Emphasize the suitors' deaths.",
                            B1b: "Warn of Poseidon's wrath.",
                            B1c: "Tell of his lonely journey ahead."
                        }
                    }
                }
            },
            C: {
                prompt: "Refuse to speak to him.",
                next: {
                    C1: {
                        prompt: "Odysseus offers blood. Do you…",
                        choices: {
                            C1a: "Remain silent still.",
                            C1b: "Accept only after a deeper sacrifice.",
                            C1c: "Leave the ritual circle."
                        }
                    }
                }
            },
            D: {
                prompt: "Seek the will of Hades before you answer.",
                next: {
                    D1: {
                        prompt: "You kneel in the dark. Do you…",
                        choices: {
                            D1a: "Listen for Persephone's voice.",
                            D1b: "Call upon Hades himself.",
                            D1c: "Wait for an omen in silence."
                        }
                    }
                }
            },
            E: {
                prompt: "Whisper truths only to the dead.",
                next: {
                    E1: {
                        prompt: "You gather forgotten souls. Do you…",
                        choices: {
                            E1a: "Tell Achilles about Neoptolemus.",
                            E1b: "Warn Agamemnon of his death.",
                            E1c: "Speak to Ajax at last."
                        }
                    }
                }
            },
            F: {
                prompt: "Recall your own cursed transformation.",
                next: {
                    F1: {
                        prompt: "You relive your days as both man and woman. Do you…",
                        choices: {
                            F1a: "Pity the past.",
                            F1b: "Embrace both halves of your life.",
                            F1c: "Curse the gods for meddling."
                        }
                    }
                }
            },
            G: {
                prompt: "Offer your sight to another.",
                next: {
                    G1: {
                        prompt: "A lost soul pleads for vision. Do you…",
                        choices: {
                            G1a: "Give them your prophetic power.",
                            G1b: "Teach them one vision only.",
                            G1c: "Lie to protect them from pain."
                        }
                    }
                }
            }
        }
    },
    achilles: {
        openingPrompt: "You roam the fields of Asphodel, far from the rage of war. Odysseus approaches to speak of your son, your legacy, and your sorrow. A thousand memories stir. Do you…",
        choices: {
            A: {
                prompt: "Ask about Neoptolemus.",
                next: {
                    A1: {
                        prompt: "Odysseus praises his strength. Do you…",
                        choices: {
                            A1a: "Weep for your son's bloodlust.",
                            A1b: "Boast of his victories.",
                            A1c: "Wish you had raised him yourself."
                        }
                    }
                }
            },
            B: {
                prompt: "Seek the shade of Patroclus.",
                next: {
                    B1: {
                        prompt: "He flickers near the tall reeds. Do you…",
                        choices: {
                            B1a: "Embrace him at last.",
                            B1b: "Ask for forgiveness for leaving him alone.",
                            B1c: "Stay silent beside him."
                        }
                    }
                }
            },
            C: {
                prompt: "Call for Hector to speak.",
                next: {
                    C1: {
                        prompt: "His shade rises, still marked by war. Do you…",
                        choices: {
                            C1a: "Challenge him again.",
                            C1b: "Apologize for your rage.",
                            C1c: "Ask him what he saw in death."
                        }
                    }
                }
            },
            D: {
                prompt: "Wander toward the River Lethe.",
                next: {
                    D1: {
                        prompt: "The waters shine with soft oblivion. Do you…",
                        choices: {
                            D1a: "Drink deeply.",
                            D1b: "Gaze without touching.",
                            D1c: "Cast your shield into the river."
                        }
                    }
                }
            },
            E: {
                prompt: "Challenge Roman heroes who claim your glory.",
                next: {
                    E1: {
                        prompt: "Aeneas steps forth. Do you…",
                        choices: {
                            E1a: "Demand he prove himself.",
                            E1b: "Test him in combat.",
                            E1c: "Ask about his sorrow."
                        }
                    }
                }
            },
            F: {
                prompt: "Cry to the gods for another life.",
                next: {
                    F1: {
                        prompt: "Your voice reaches Olympus. Do you…",
                        choices: {
                            F1a: "Beg to be a shepherd, not a warrior.",
                            F1b: "Ask for the life of a poet.",
                            F1c: "Swear you would rather be no one."
                        }
                    }
                }
            },
            G: {
                prompt: "Sit beneath the poplar tree and wait for silence.",
                next: {
                    G1: {
                        prompt: "Time passes slowly. Do you…",
                        choices: {
                            G1a: "Watch other shades move past.",
                            G1b: "Carve memories into the tree's bark.",
                            G1c: "Let your spear turn to dust."
                        }
                    }
                }
            }
        }
    },
    anticlea: {
        openingPrompt: "You wait in the misty fields of the Underworld. Odysseus approaches the trench of blood and weeps at the sight of you. Your heart aches through the veil of death. Do you…",
        choices: {
            A: {
                prompt: "Call out to him with joy.",
                next: {
                    A1: {
                        prompt: "He rushes toward you. Do you…",
                        choices: {
                            A1a: "Try to embrace him.",
                            A1b: "Smile and recount home's stories.",
                            A1c: "Warn him about the suitors."
                        }
                    }
                }
            },
            B: {
                prompt: "Say nothing and watch him weep.",
                next: {
                    B1: {
                        prompt: "His grief deepens. Do you…",
                        choices: {
                            B1a: "Remain silent still.",
                            B1b: "Whisper his childhood name.",
                            B1c: "Turn and walk into the mist."
                        }
                    }
                }
            },
            C: {
                prompt: "Speak of Penelope's faithfulness.",
                next: {
                    C1: {
                        prompt: "Odysseus listens carefully. Do you…",
                        choices: {
                            C1a: "Reassure him of her loyalty.",
                            C1b: "Question her silence.",
                            C1c: "Ask why he delayed so long."
                        }
                    }
                }
            },
            D: {
                prompt: "Ask about Telemachus.",
                next: {
                    D1: {
                        prompt: "His face lights with pride. Do you…",
                        choices: {
                            D1a: "Press him for detail.",
                            D1b: "Smile and say you saw him in dreams.",
                            D1c: "Lament never meeting the man he's become."
                        }
                    }
                }
            },
            E: {
                prompt: "Curse the war that took you both.",
                next: {
                    E1: {
                        prompt: "The sky above darkens. Do you…",
                        choices: {
                            E1a: "Name the gods who doomed Troy.",
                            E1b: "Curse Agamemnon and Menelaus.",
                            E1c: "Ask why he had to leave."
                        }
                    }
                }
            },
            F: {
                prompt: "Beg him to stay.",
                next: {
                    F1: {
                        prompt: "He is torn. Do you…",
                        choices: {
                            F1a: "Offer your arms again.",
                            F1b: "Ask him to abandon his journey.",
                            F1c: "Tell him this is where he belongs."
                        }
                    }
                }
            },
            G: {
                prompt: "Turn away before he can speak.",
                next: {
                    G1: {
                        prompt: "He calls to you. Do you…",
                        choices: {
                            G1a: "Disappear into shadow.",
                            G1b: "Glance back one last time.",
                            G1c: "Sit at the banks of the Lethe."
                        }
                    }
                }
            }
        }
    }
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