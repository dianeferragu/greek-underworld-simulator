const extendedStoryPaths = {
    Dido: {
      start: {
        text: "You sit beneath the myrtle trees, still haunted by Aeneas's face. Do you…?",
        choices: [
          { text: "Call on the Furies to curse him further", next: "dido_1" },
          { text: "Walk to the banks of Lethe to forget", next: "dido_2" },
          { text: "Speak to fellow betrayed souls", next: "dido_3" }
        ]
      },
      dido_1: {
        text: "The Furies appear, their eyes blazing. Do you…?",
        choices: [
          { text: "Demand vengeance", next: "dido_4" },
          { text: "Ask for guidance", next: "dido_5" },
          { text: "Offer them a token from Aeneas", next: "dido_6" }
        ]
      },
      dido_2: {
        text: "The river Lethe flows silently. Do you…?",
        choices: [
          { text: "Drink deeply", next: "dido_7" },
          { text: "Dip your hand only", next: "dido_8" },
          { text: "Turn away", next: "dido_3" }
        ]
      },
      dido_3: {
        text: "You find Phaedra weeping in the dark. Do you…?",
        choices: [
          { text: "Comfort her", next: "dido_9" },
          { text: "Share your sorrow", next: "dido_10" },
          { text: "Leave her alone", next: "dido_11" }
        ]
      },
      dido_4: { text: "The Furies rise, tearing into the sky.", isEnding: true },
      dido_5: { text: "The Furies show you a new path to power.", isEnding: true },
      dido_6: { text: "The token seals your revenge in Tartarus.", isEnding: true },
      dido_7: { text: "You fade into oblivion, memories gone.", isEnding: true },
      dido_8: { text: "You remember pain and purpose.", isEnding: true },
      dido_9: { text: "You find strength through shared sorrow.", isEnding: true },
      dido_10: { text: "Your grief echoes, gaining divine attention.", isEnding: true },
      dido_11: { text: "You continue wandering, unresolved.", isEnding: true }
    },
    Anchises: {
      start: {
        text: "You see the unborn souls of Rome beyond Lethe. Do you…?",
        choices: [
          { text: "Call out to Augustus", next: "anchises_1" },
          { text: "Gaze silently, proud", next: "anchises_2" },
          { text: "Wonder what your legacy truly is", next: "anchises_3" }
        ]
      },
      anchises_1: {
        text: "Augustus glows with divine light. Do you…?",
        choices: [
          { text: "Bless him", next: "anchises_4" },
          { text: "Warn of power's cost", next: "anchises_5" },
          { text: "Show him war's end", next: "anchises_6" }
        ]
      },
      anchises_2: {
        text: "Aeneas kneels before you. Do you…?",
        choices: [
          { text: "Reveal his purpose", next: "anchises_7" },
          { text: "Hug him", next: "anchises_8" },
          { text: "Dismiss him", next: "anchises_9" }
        ]
      },
      anchises_3: {
        text: "You walk alone in Elysium. Do you…?",
        choices: [
          { text: "Speak with past kings", next: "anchises_10" },
          { text: "Speak to Dido's shade", next: "anchises_11" },
          { text: "Rest beneath the trees", next: "anchises_12" }
        ]
      },
      anchises_4: { text: "Rome flourishes in your vision.", isEnding: true },
      anchises_5: { text: "Augustus heeds your words.", isEnding: true },
      anchises_6: { text: "Peace echoes from your prophecy.", isEnding: true },
      anchises_7: { text: "Aeneas finds his strength.", isEnding: true },
      anchises_8: { text: "You share a moment of family.", isEnding: true },
      anchises_9: { text: "Aeneas walks away confused.", isEnding: true },
      anchises_10: { text: "The kings advise you.", isEnding: true },
      anchises_11: { text: "Dido curses you.", isEnding: true },
      anchises_12: { text: "You rest in peace.", isEnding: true }
    },
    Sibyl: {
      start: {
        text: "Aeneas hesitates at the cave's mouth. Do you…?",
        choices: [
          { text: "Push him forward", next: "sibyl_1" },
          { text: "Warn him", next: "sibyl_2" },
          { text: "Let him choose", next: "sibyl_3" }
        ]
      },
      sibyl_1: {
        text: "The cave opens with a howl. Do you…?",
        choices: [
          { text: "Lead the way", next: "sibyl_4" },
          { text: "Read the signs", next: "sibyl_5" },
          { text: "Light a torch", next: "sibyl_6" }
        ]
      },
      sibyl_2: {
        text: "He turns back. Do you…?",
        choices: [
          { text: "Leave him", next: "sibyl_7" },
          { text: "Call to Apollo", next: "sibyl_8" },
          { text: "Enter alone", next: "sibyl_9" }
        ]
      },
      sibyl_3: {
        text: "The winds shift. Do you…?",
        choices: [
          { text: "Divine the path", next: "sibyl_10" },
          { text: "Ask the spirits", next: "sibyl_11" },
          { text: "Wait silently", next: "sibyl_12" }
        ]
      },
      sibyl_4: { text: "You guide him safely.", isEnding: true },
      sibyl_5: { text: "Your wisdom uncovers traps.", isEnding: true },
      sibyl_6: { text: "The torch shows your own death.", isEnding: true },
      sibyl_7: { text: "Aeneas is lost.", isEnding: true },
      sibyl_8: { text: "Apollo reveals a riddle.", isEnding: true },
      sibyl_9: { text: "You face Hades alone.", isEnding: true },
      sibyl_10: { text: "You see futures collapse.", isEnding: true },
      sibyl_11: { text: "The spirits mislead you.", isEnding: true },
      sibyl_12: { text: "Time forgets you.", isEnding: true }
    },
    Achilles: {
      start: {
        text: "Odysseus speaks of your son. Do you…?",
        choices: [
          { text: "Weep", next: "achilles_1" },
          { text: "Curse him", next: "achilles_2" },
          { text: "Ask for tales", next: "achilles_3" }
        ]
      },
      achilles_1: { text: "You drown in regret.", isEnding: true },
      achilles_2: { text: "A storm stirs.", isEnding: true },
      achilles_3: {
        text: "His deeds unfold. Do you…?",
        choices: [
          { text: "Pride rises", next: "achilles_4" },
          { text: "Jealousy burns", next: "achilles_5" },
          { text: "Silence remains", next: "achilles_6" }
        ]
      },
      achilles_4: { text: "You smile in peace.", isEnding: true },
      achilles_5: { text: "You fade in fury.", isEnding: true },
      achilles_6: { text: "You walk alone.", isEnding: true }
    },
    Tiresias: {
      start: {
        text: "Odysseus calls again. Do you…?",
        choices: [
          { text: "Speak in riddles", next: "tiresias_1" },
          { text: "Tell him plainly", next: "tiresias_2" },
          { text: "Refuse", next: "tiresias_3" }
        ]
      },
      tiresias_1: { text: "He misreads fate.", isEnding: true },
      tiresias_2: { text: "He survives.", isEnding: true },
      tiresias_3: { text: "He sails blind.", isEnding: true }
    },
    Anticlea: {
      start: {
        text: "Odysseus embraces you. Do you…?",
        choices: [
          { text: "Tell him of Penelope", next: "anticlea_1" },
          { text: "Beg him to stay", next: "anticlea_2" },
          { text: "Say nothing", next: "anticlea_3" }
        ]
      },
      anticlea_1: { text: "He smiles.", isEnding: true },
      anticlea_2: { text: "He weeps and departs.", isEnding: true },
      anticlea_3: { text: "You vanish in mist.", isEnding: true }
    }
  };
  