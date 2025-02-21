const translations = {
    km: {
        welcomeText: "សូមស្វាគមន៍មកកាន់ហាង MYTHICH SHOP",
        viewProductsBtn: "ចូលមើលឥវ៉ាន់",
        product1Title: "កាបូបស្ពាយ",
        product1Price: "តម្លៃ: $10",
        product2Title: "នាឡិកាដៃ",
        product2Price: "តម្លៃ: $15",
        buyBtn: "ទិញ"
    },
    en: {
        welcomeText: "Welcome to MYTHICH SHOP",
        viewProductsBtn: "View Shop",
        product1Title: "Backpack",
        product1Price: "Price: $10",
        product2Title: "Wrist Watch",
        product2Price: "Price: $15",
        buyBtn: "BUY"
    }
};

// Function to change language
function changeLanguage(lang) {
    localStorage.setItem("language", lang); // Save language preference
    updateLanguage();
}

// Function to update text content based on the selected language
function updateLanguage() {
    let lang = localStorage.getItem("language") || "km"; // Default to Khmer if not set

    document.getElementById("welcome-text")?.textContent = translations[lang].welcomeText;
    document.getElementById("view-products-btn")?.textContent = translations[lang].viewProductsBtn;
    document.getElementById("product1-title")?.textContent = translations[lang].product1Title;
    document.getElementById("product1-price")?.textContent = translations[lang].product1Price;
    document.getElementById("product2-title")?.textContent = translations[lang].product2Title;
    document.getElementById("product2-price")?.textContent = translations[lang].product2Price;

    let buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.textContent = translations[lang].buyBtn;
    });
}

// Apply language settings on page load
document.addEventListener("DOMContentLoaded", updateLanguage);