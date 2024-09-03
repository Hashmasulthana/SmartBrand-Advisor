const fertilizers = {
    miraclegro: {
        purpose: "General-purpose plant food",
        crops: "Vegetables, Flowers, Shrubs",
        harmfulness: "Can cause nutrient imbalances if overused",
        efficiency: "High",
        reviews: "Highly rated for promoting growth"
    },
    osmacote: {
        purpose: "Slow-release fertilizer",
        crops: "Vegetables, Flowers, Trees",
        harmfulness: "Minimal when used as directed",
        efficiency: "High",
        reviews: "Excellent for long-term feeding"
    },
    scottsturfbuilder: {
        purpose: "Lawn fertilizer",
        crops: "Grass, Lawns",
        harmfulness: "Overuse can lead to lawn burn",
        efficiency: "High",
        reviews: "Great for lush, green lawns"
    },
    jobesorganic: {
        purpose: "Organic general-purpose fertilizer",
        crops: "Vegetables, Flowers, Trees",
        harmfulness: "Safe for the environment",
        efficiency: "Moderate",
        reviews: "Effective with steady application"
    },
    espoma: {
        purpose: "Organic plant food",
        crops: "Vegetables, Flowers, Trees",
        harmfulness: "Safe, eco-friendly",
        efficiency: "Moderate",
        reviews: "Well-regarded for organic gardening"
    },
    greenview: {
        purpose: "Lawn fertilizer",
        crops: "Grass, Lawns",
        harmfulness: "Minimal when used as directed",
        efficiency: "High",
        reviews: "Good results for thick, green lawns"
    },
    planttone: {
        purpose: "Organic plant food",
        crops: "Vegetables, Fruits, Flowers",
        harmfulness: "Safe, organic",
        efficiency: "Moderate",
        reviews: "Good for improving soil health"
    },
    naturescare: {
        purpose: "Organic fertilizer",
        crops: "Vegetables, Flowers, Trees",
        harmfulness: "Safe, natural",
        efficiency: "Moderate",
        reviews: "Effective for sustainable gardening"
    },
    superthrive: {
        purpose: "Growth stimulant",
        crops: "Vegetables, Flowers, Trees",
        harmfulness: "Safe in recommended doses",
        efficiency: "High",
        reviews: "Boosts plant health and growth"
    },
    bonemeal: {
        purpose: "Organic phosphorus source",
        crops: "Vegetables, Flowers, Trees",
        harmfulness: "Minimal when used as directed",
        efficiency: "Moderate",
        reviews: "Enhances root development"
    }
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatOutput = document.getElementById("chat-output");

    let response = "I'm sorry, I didn't understand that. You can ask me about Miracle-Gro.";

    if (userInput.includes("hi") || userInput.includes("hello")) {
        response = "Hello! How can I assist you today?";
    }
    else if (userInput.includes("thank you")) {
        response = "You're welcome! If you have any further questions, don't hesitate to ask.";
    }
    else if (userInput.includes("fertilizers")) {
        response = "Here are the fertilizers I can provide information about:<br>" +
            "<ul>" +
            "<li>Miracle-Gro</li>" +
            "<li>Osmacote</li>" +
            "<li>Scotts Turf Builder</li>" +
            "<li>Jobes Organic</li>" +
            "<li>Espoma</li>" +
            "<li>GreenView</li>" +
            "<li>Plant-Tone</li>" +
            "<li>Natures Care</li>" +
            "<li>Super Thrive</li>" +
            "<li>Bone Meal</li>" +
            "</ul>";
    }
    else if (userInput.includes("miraclegro")) {
        response = `Purpose: ${fertilizers.miraclegro.purpose}<br>Crops: ${fertilizers.miraclegro.crops}<br> Harmfulness: ${fertilizers.miraclegro.harmfulness}<br> Efficiency: ${fertilizers.miraclegro.efficiency}<br> Reviews: ${fertilizers.miraclegro.reviews}`;
    }
    else if (userInput.includes("osmacote")) {
        response = `Purpose: ${fertilizers.osmacote.purpose}<br>Crops: ${fertilizers.osmacote.crops}<br> Harmfulness: ${fertilizers.osmacote.harmfulness}<br> Efficiency: ${fertilizers.osmacote.efficiency}<br> Reviews: ${fertilizers.osmacote.reviews}`;
    }
    else if (userInput.includes("scottsturfbuilder")) {
        response = `Purpose: ${fertilizers.scottsturfbuilder.purpose}<br>Crops: ${fertilizers.scottsturfbuilder.crops}<br> Harmfulness: ${fertilizers.scottsturfbuilder.harmfulness}<br> Efficiency: ${fertilizers.scottsturfbuilder.efficiency}<br> Reviews: ${fertilizers.scottsturfbuilder.reviews}`;
    }
    else if (userInput.includes("jobesorganic")) {
        response = `Purpose: ${fertilizers.jobesorganic.purpose}<br>Crops: ${fertilizers.jobesorganic.crops}<br> Harmfulness: ${fertilizers.jobesorganic.harmfulness}<br> Efficiency: ${fertilizers.jobesorganic.efficiency}<br> Reviews: ${fertilizers.jobesorganic.reviews}`;
    }
    else if (userInput.includes("espoma")) {
        response = `Purpose: ${fertilizers.espoma.purpose}<br>Crops: ${fertilizers.espoma.crops}<br> Harmfulness: ${fertilizers.espoma.harmfulness}<br> Efficiency: ${fertilizers.espoma.efficiency}<br> Reviews: ${fertilizers.espoma.reviews}`;
    }
    else if (userInput.includes("greenview")) {
        response = `Purpose: ${fertilizers.greenview.purpose}<br>Crops: ${fertilizers.greenview.crops}<br> Harmfulness: ${fertilizers.greenview.harmfulness}<br> Efficiency: ${fertilizers.greenview.efficiency}<br> Reviews: ${fertilizers.greenview.reviews}`;
    }
    else if (userInput.includes("planttone")) {
        response = `Purpose: ${fertilizers.planttone.purpose}<br>Crops: ${fertilizers.planttone.crops}<br> Harmfulness: ${fertilizers.planttone.harmfulness}<br> Efficiency: ${fertilizers.planttone.efficiency}<br> Reviews: ${fertilizers.planttone.reviews}`;
    }
    else if (userInput.includes("naturescare")) {
        response = `Purpose: ${fertilizers.naturescare.purpose}<br>Crops: ${fertilizers.naturescare.crops}<br> Harmfulness: ${fertilizers.naturescare.harmfulness}<br> Efficiency: ${fertilizers.naturescare.efficiency}<br> Reviews: ${fertilizers.naturescare.reviews}`;
    }
    else if (userInput.includes("superthrive")) {
        response = `Purpose: ${fertilizers.superthrive.purpose}<br>Crops: ${fertilizers.superthrive.crops}<br> Harmfulness: ${fertilizers.superthrive.harmfulness}<br> Efficiency: ${fertilizers.superthrive.efficiency}<br> Reviews: ${fertilizers.superthrive.reviews}`;
    }
    else if (userInput.includes("bonemeal")) {
        response = `Purpose: ${fertilizers.bonemeal.purpose}<br>Crops: ${fertilizers.bonemeal.crops}<br> Harmfulness: ${fertilizers.bonemeal.harmfulness}<br> Efficiency: ${fertilizers.bonemeal.efficiency}<br> Reviews: ${fertilizers.bonemeal.reviews}`;
    }
    else {
        response = "Sorry, I couldn't find information about that fertilizer.";
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
