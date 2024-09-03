const medicine = {
    tylenol: {
        type: "Pain reliever",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.5",
        uses: "Pain relief, fever reduction",
        causes: "Pain, fever, headaches",
        sideEffects: "Liver damage (overdose), allergic reactions",
        diseases: "Headaches, fever, mild pain"
    },

    advil: {
        type: "Pain reliever, anti-inflammatory",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.4",
        uses: "Pain relief, inflammation reduction",
        causes: "Pain, inflammation",
        sideEffects: "Stomach irritation, ulcers, kidney issues",
        diseases: "Headaches, arthritis, muscle pain"
    },

    benadryl: {
        type: "Antihistamine",
        cost: "Low",
        quality: "Medium",
        review: "Mixed",
        rating: "3.8",
        uses: "Allergy relief, cough suppression",
        causes: "Allergic reactions, cough",
        sideEffects: "Drowsiness, dry mouth, dizziness",
        diseases: "Allergies, common cold"
    },

    zyrtec: {
        type: "Antihistamine",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.2",
        uses: "Allergy relief",
        causes: "Allergic reactions",
        sideEffects: "Drowsiness, headache, dry mouth",
        diseases: "Allergies, rhinitis"
    },

    claritin: {
        type: "Antihistamine",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.1",
        uses: "Allergy relief",
        causes: "Allergic reactions",
        sideEffects: "Headache, dry mouth, fatigue",
        diseases: "Allergies, hay fever"
    },

    peptoBismol: {
        type: "Antacid, anti-diarrheal",
        cost: "Low",
        quality: "Medium",
        review: "Positive",
        rating: "4.0",
        uses: "Stomach upset relief, diarrhea control",
        causes: "Gastrointestinal issues",
        sideEffects: "Black stool, constipation, nausea",
        diseases: "Indigestion, diarrhea, nausea"
    },

    imodium: {
        type: "Anti-diarrheal",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.3",
        uses: "Diarrhea relief",
        causes: "Diarrhea, gastrointestinal issues",
        sideEffects: "Constipation, dizziness, nausea",
        diseases: "Acute diarrhea"
    },

    prilosec: {
        type: "Proton pump inhibitor",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.2",
        uses: "Acid reflux, GERD relief",
        causes: "Acid reflux, peptic ulcer disease",
        sideEffects: "Headache, abdominal pain, nausea",
        diseases: "GERD, peptic ulcers"
    },

    nexium: {
        type: "Proton pump inhibitor",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.3",
        uses: "Acid reflux, GERD relief",
        causes: "Acid reflux, peptic ulcer disease",
        sideEffects: "Headache, abdominal pain, nausea",
        diseases: "GERD, peptic ulcers"
    },

    cipro: {
        type: "Antibiotic",
        cost: "High",
        quality: "High",
        review: "Positive",
        rating: "4.1",
        uses: "Bacterial infections",
        causes: "Bacterial infections",
        sideEffects: "Nausea, diarrhea, dizziness",
        diseases: "Urinary tract infections, respiratory infections"
    },

    amoxicillin: {
        type: "Antibiotic",
        cost: "Medium",
        quality: "High",
        review: "Positive",
        rating: "4.0",
        uses: "Bacterial infections",
        causes: "Bacterial infections",
        sideEffects: "Allergic reactions, nausea, diarrhea",
        diseases: "Ear infections, respiratory infections"
    }
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatOutput = document.getElementById("chat-output");

    let response = "I'm sorry, I didn't understand that. You can ask me about a specific medicine.";

    if (userInput.includes("hi") || userInput.includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (userInput.includes("thank you")) {
        response = "You're welcome! If you have any further questions, don't hesitate to ask.";
    } else if (userInput.includes("list of medicines")) {
        response = `
            <strong>Here is the list of medicines:</strong><br>
            - Tylenol<br>
            - Advil<br>
            - Benadryl<br>
            - Zyrtec<br>
            - Claritin<br>
            - PeptoBismol<br>
            - Imodium<br>
            - Prilosec<br>
            - Nexium<br>
            - Cipro<br>
            - Amoxicillin
        `;
    } else if (userInput.includes("tylenol")) {
        response = `Type: ${medicine.tylenol.type}<br>Cost: ${medicine.tylenol.cost}<br> Quality: ${medicine.tylenol.quality}<br> Review: ${medicine.tylenol.review}<br> Rating: ${medicine.tylenol.rating}<br> Uses: ${medicine.tylenol.uses} <br> Causes: ${medicine.tylenol.causes} <br> Side Effects: ${medicine.tylenol.sideEffects} <br> Diseases: ${medicine.tylenol.diseases}`;
    } else if (userInput.includes("advil")) {
        response = `Type: ${medicine.advil.type}<br>Cost: ${medicine.advil.cost}<br> Quality: ${medicine.advil.quality}<br> Review: ${medicine.advil.review}<br> Rating: ${medicine.advil.rating}<br> Uses: ${medicine.advil.uses} <br> Causes: ${medicine.advil.causes} <br> Side Effects: ${medicine.advil.sideEffects} <br> Diseases: ${medicine.advil.diseases}`;
    } else if (userInput.includes("benadryl")) {
        response = `Type: ${medicine.benadryl.type}<br>Cost: ${medicine.benadryl.cost}<br> Quality: ${medicine.benadryl.quality}<br> Review: ${medicine.benadryl.review}<br> Rating: ${medicine.benadryl.rating}<br> Uses: ${medicine.benadryl.uses} <br> Causes: ${medicine.benadryl.causes} <br> Side Effects: ${medicine.benadryl.sideEffects} <br> Diseases: ${medicine.benadryl.diseases}`;
    } else if (userInput.includes("zyrtec")) {
        response = `Type: ${medicine.zyrtec.type}<br>Cost: ${medicine.zyrtec.cost}<br> Quality: ${medicine.zyrtec.quality}<br> Review: ${medicine.zyrtec.review}<br> Rating: ${medicine.zyrtec.rating}<br> Uses: ${medicine.zyrtec.uses} <br> Causes: ${medicine.zyrtec.causes} <br> Side Effects: ${medicine.zyrtec.sideEffects} <br> Diseases: ${medicine.zyrtec.diseases}`;
    } else if (userInput.includes("claritin")) {
        response = `Type: ${medicine.claritin.type}<br>Cost: ${medicine.claritin.cost}<br> Quality: ${medicine.claritin.quality}<br> Review: ${medicine.claritin.review}<br> Rating: ${medicine.claritin.rating}<br> Uses: ${medicine.claritin.uses} <br> Causes: ${medicine.claritin.causes} <br> Side Effects: ${medicine.claritin.sideEffects} <br> Diseases: ${medicine.claritin.diseases}`;
    } else if (userInput.includes("peptobismol")) {
        response = `Type: ${medicine.peptoBismol.type}<br>Cost: ${medicine.peptoBismol.cost}<br> Quality: ${medicine.peptoBismol.quality}<br> Review: ${medicine.peptoBismol.review}<br> Rating: ${medicine.peptoBismol.rating}<br> Uses: ${medicine.peptoBismol.uses} <br> Causes: ${medicine.peptoBismol.causes} <br> Side Effects: ${medicine.peptoBismol.sideEffects} <br> Diseases: ${medicine.peptoBismol.diseases}`;
    } else if (userInput.includes("imodium")) {
        response = `Type: ${medicine.imodium.type}<br>Cost: ${medicine.imodium.cost}<br> Quality: ${medicine.imodium.quality}<br> Review: ${medicine.imodium.review}<br> Rating: ${medicine.imodium.rating}<br> Uses: ${medicine.imodium.uses} <br> Causes: ${medicine.imodium.causes} <br> Side Effects: ${medicine.imodium.sideEffects} <br> Diseases: ${medicine.imodium.diseases}`;
    } else if (userInput.includes("prilosec")) {
        response = `Type: ${medicine.prilosec.type}<br>Cost: ${medicine.prilosec.cost}<br> Quality: ${medicine.prilosec.quality}<br> Review: ${medicine.prilosec.review}<br> Rating: ${medicine.prilosec.rating}<br> Uses: ${medicine.prilosec.uses} <br> Causes: ${medicine.prilosec.causes} <br> Side Effects: ${medicine.prilosec.sideEffects} <br> Diseases: ${medicine.prilosec.diseases}`;
    } else if (userInput.includes("nexium")) {
        response = `Type: ${medicine.nexium.type}<br>Cost: ${medicine.nexium.cost}<br> Quality: ${medicine.nexium.quality}<br> Review: ${medicine.nexium.review}<br> Rating: ${medicine.nexium.rating}<br> Uses: ${medicine.nexium.uses} <br> Causes: ${medicine.nexium.causes} <br> Side Effects: ${medicine.nexium.sideEffects} <br> Diseases: ${medicine.nexium.diseases}`;
    } else if (userInput.includes("cipro")) {
        response = `Type: ${medicine.cipro.type}<br>Cost: ${medicine.cipro.cost}<br> Quality: ${medicine.cipro.quality}<br> Review: ${medicine.cipro.review}<br> Rating: ${medicine.cipro.rating}<br> Uses: ${medicine.cipro.uses} <br> Causes: ${medicine.cipro.causes} <br> Side Effects: ${medicine.cipro.sideEffects} <br> Diseases: ${medicine.cipro.diseases}`;
    } else if (userInput.includes("amoxicillin")) {
        response = `Type: ${medicine.amoxicillin.type}<br>Cost: ${medicine.amoxicillin.cost}<br> Quality: ${medicine.amoxicillin.quality}<br> Review: ${medicine.amoxicillin.review}<br> Rating: ${medicine.amoxicillin.rating}<br> Uses: ${medicine.amoxicillin.uses} <br> Causes: ${medicine.amoxicillin.causes} <br> Side Effects: ${medicine.amoxicillin.sideEffects} <br> Diseases: ${medicine.amoxicillin.diseases}`;
    } else {
        response = "Sorry, I couldn't find information about that brand.";
    }

    chatOutput.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatOutput.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus(); 
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        sendMessage();
    }
});
