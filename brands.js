// script.js

const brands = {
    acer: {
        type: "Mobile",
        cost: "Low",
        quality: "Average",
        review: "A budget Android smartphone with a great camera",
        rating: "3.5",
        link: "https://rb.gy/acby8q"
    },
    alcatel: {
        type: "Mobile",
        cost: "Budget",
        quality: "Average",
        review: "Affordable smartphones with basic features and decent battery life",
        rating: "3.0",
        link: "https://www.alcatelmobile.com/"
    },
    allview: {
        type: "Mobile",
        cost: "Budget",
        quality: "Average",
        review: "Good value for the price, decent performance, mainly in Eastern Europe",
        rating: "3.1",
        link: "https://www.allviewmobile.com/"
    },
    amazon: {
        type: "Electronics",
        cost: "Budget",
        quality: "Good",
        review: "Wide range of devices, reliable for e-readers and smart speakers",
        rating: "4.0",
        link: "https://www.amazon.in/All-Brand-Mobile-Phones/s?k=All+Brand+Mobile+Phones"
    },
    amoi: {
        type: "Mobile",
        cost: "Budget",
        quality: "Low",
        review: "Basic features, mostly focused on emerging markets",
        rating: "2.8",
        link: "https://www.devicespecifications.com/en/brand/686457"
    },
    apple: {
        type: "Mobile",
        cost: "High-end",
        quality: "Premium",
        review: "Excellent design, top-notch performance, great ecosystem integration",
        rating: "4.8",
        link: "https://www.apple.com/in/iphone/"
    },
    archos: {
        type: "Electronics",
        cost: "Budget",
        quality: "Average",
        review: "Affordable tablets and smartphones, decent quality for price",
        rating: "3.2",
        link: "https://www.smartprix.com/mobiles/archos-brand"
    },
    asus: {
        type: "Electronics",
        cost: "Mid-range",
        quality: "Good",
        review: "Solid laptops and gaming phones, reliable performance, value for money",
        rating: "4.2",
        link: "https://www.asus.com/mobile-handhelds/phones/all-series/"
    },
    att: {
        type: "Mobile",
        cost: "Mid-range",
        quality: "Average",
        review: "Branded devices, decent performance, reliable network integration",
        rating: "3.5",
        link: "https://www.att.com/buy/phones/"
    },
    benefon: {
        type: "Mobile",
        cost: "High-end",
        quality: "Niche",
        review: "Specialized in GPS-integrated phones, focused on outdoor use",
        rating: "3.5",
        link: "https://www.gsmarena.com/benefon-phones-15.php"
    },
    zara: {
        type: "Fashion",
        cost: "Mid-range",
        quality: "Good",
        review: "Trendy clothing and accessories, known for its fast fashion",
        rating: "4.1",
        link: "https://www.zara.com/"
    },
    uspolo: {
        type: "Fashion",
        cost: "Mid-range",
        quality: "Good",
        review: "Classic and sporty clothing, well-known for its polo shirts",
        rating: "4.0",
        link: "https://www.uspoloassn.com/"
    },
    prada: {
        type: "Luxury Fashion",
        cost: "High-end",
        quality: "Premium",
        review: "High-fashion clothing, accessories, and luxury items",
        rating: "4.7",
        link: "https://www.prada.com/"
    },
    arrow: {
        type: "Fashion",
        cost: "Mid-range",
        quality: "Good",
        review: "Men's and women's clothing with a focus on classic styles",
        rating: "3.8",
        link: "https://www.arrow.com/"
    },
    levis: {
        type: "Fashion",
        cost: "Mid-range",
        quality: "Good",
        review: "Iconic denim and casual wear, known for its durability",
        rating: "4.2",
        link: "https://www.levi.com/"
    },
    cartier: {
        type: "Luxury Jewelry",
        cost: "High-end",
        quality: "Premium",
        review: "Elegant jewelry and timepieces, a symbol of luxury",
        rating: "4.8",
        link: "https://www.cartier.com/"
    },
    gucci: {
        type: "Luxury Fashion",
        cost: "High-end",
        quality: "Premium",
        review: "High-fashion clothing, accessories, and luxury goods",
        rating: "4.7",
        link: "https://www.gucci.com/"
    }
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatOutput = document.getElementById("chat-output");

    let response = "I'm sorry, I didn't understand that. You can ask me about acer.";

    if (userInput.includes("hi") || userInput.includes("hello") || userInput.includes("hey")) {
        response = "Hello! How can I assist you today?";
    } else if (userInput.includes("thank you")) {
        response = "You're welcome! If you have any further questions, feel free to ask.";
    } else if (userInput.includes("list of brands") || userInput.includes("brands")) {
        const brandList = Object.keys(brands).map(brand => brand.charAt(0).toUpperCase() + brand.slice(1)).join(", ");
        response = `Here is the list of brands: ${brandList}.`;
    } else if (userInput.includes("acer")) {
        response = `Type: ${brands.acer.type}<br>Cost: ${brands.acer.cost}<br>Quality: ${brands.acer.quality}<br>Review: ${brands.acer.review}<br>Rating: ${brands.acer.rating}<br>Link: <a href="${brands.acer.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("alcatel")) {
        response = `Type: ${brands.alcatel.type}<br>Cost: ${brands.alcatel.cost}<br>Quality: ${brands.alcatel.quality}<br>Review: ${brands.alcatel.review}<br>Rating: ${brands.alcatel.rating}<br>Link: <a href="${brands.alcatel.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("allview")) {
        response = `Type: ${brands.allview.type}<br>Cost: ${brands.allview.cost}<br>Quality: ${brands.allview.quality}<br>Review: ${brands.allview.review}<br>Rating: ${brands.allview.rating}<br>Link: <a href="${brands.allview.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("amazon")) {
        response = `Type: ${brands.amazon.type}<br>Cost: ${brands.amazon.cost}<br>Quality: ${brands.amazon.quality}<br>Review: ${brands.amazon.review}<br>Rating: ${brands.amazon.rating}<br>Link: <a href="${brands.amazon.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("amoi")) {
        response = `Type: ${brands.amoi.type}<br>Cost: ${brands.amoi.cost}<br>Quality: ${brands.amoi.quality}<br>Review: ${brands.amoi.review}<br>Rating: ${brands.amoi.rating}<br>Link: <a href="${brands.amoi.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("apple")) {
        response = `Type: ${brands.apple.type}<br>Cost: ${brands.apple.cost}<br>Quality: ${brands.apple.quality}<br>Review: ${brands.apple.review}<br>Rating: ${brands.apple.rating}<br>Link: <a href="${brands.apple.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("archos")) {
        response = `Type: ${brands.archos.type}<br>Cost: ${brands.archos.cost}<br>Quality: ${brands.archos.quality}<br>Review: ${brands.archos.review}<br>Rating: ${brands.archos.rating}<br>Link: <a href="${brands.archos.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("asus")) {
        response = `Type: ${brands.asus.type}<br>Cost: ${brands.asus.cost}<br>Quality: ${brands.asus.quality}<br>Review: ${brands.asus.review}<br>Rating: ${brands.asus.rating}<br>Link: <a href="${brands.asus.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("at&t")) {
        response = `Type: ${brands.att.type}<br>Cost: ${brands.att.cost}<br>Quality: ${brands.att.quality}<br>Review: ${brands.att.review}<br>Rating: ${brands.att.rating}<br>Link: <a href="${brands.att.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("benefon")) {
        response = `Type: ${brands.benefon.type}<br>Cost: ${brands.benefon.cost}<br>Quality: ${brands.benefon.quality}<br>Review: ${brands.benefon.review}<br>Rating: ${brands.benefon.rating}<br>Link: <a href="${brands.benefon.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("zara")) {
        response = `Type: ${brands.zara.type}<br>Cost: ${brands.zara.cost}<br>Quality: ${brands.zara.quality}<br>Review: ${brands.zara.review}<br>Rating: ${brands.zara.rating}<br>Link: <a href="${brands.zara.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("uspolo") || userInput.includes("us_polo")) {
        response = `Type: ${brands.uspolo.type}<br>Cost: ${brands.uspolo.cost}<br>Quality: ${brands.uspolo.quality}<br>Review: ${brands.uspolo.review}<br>Rating: ${brands.uspolo.rating}<br>Link: <a href="${brands.uspolo.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("prada")) {
        response = `Type: ${brands.prada.type}<br>Cost: ${brands.prada.cost}<br>Quality: ${brands.prada.quality}<br>Review: ${brands.prada.review}<br>Rating: ${brands.prada.rating}<br>Link: <a href="${brands.prada.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("arrow")) {
        response = `Type: ${brands.arrow.type}<br>Cost: ${brands.arrow.cost}<br>Quality: ${brands.arrow.quality}<br>Review: ${brands.arrow.review}<br>Rating: ${brands.arrow.rating}<br>Link: <a href="${brands.arrow.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("levis")) {
        response = `Type: ${brands.levis.type}<br>Cost: ${brands.levis.cost}<br>Quality: ${brands.levis.quality}<br>Review: ${brands.levis.review}<br>Rating: ${brands.levis.rating}<br>Link: <a href="${brands.levis.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("cartier")) {
        response = `Type: ${brands.cartier.type}<br>Cost: ${brands.cartier.cost}<br>Quality: ${brands.cartier.quality}<br>Review: ${brands.cartier.review}<br>Rating: ${brands.cartier.rating}<br>Link: <a href="${brands.cartier.link}" target="_blank">Click here for more details</a>`;
    } else if (userInput.includes("gucci")) {
        response = `Type: ${brands.gucci.type}<br>Cost: ${brands.gucci.cost}<br>Quality: ${brands.gucci.quality}<br>Review: ${brands.gucci.review}<br>Rating: ${brands.gucci.rating}<br>Link: <a href="${brands.gucci.link}" target="_blank">Click here for more details</a>`;
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
