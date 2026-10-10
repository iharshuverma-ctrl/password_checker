
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPassword(password) {
    let score = 0;
    const suggestions = [];

    if (password.length >= 8) {
        score++;
    } else {
        suggestions.push("Use at least 8 characters.");
    }

    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        suggestions.push("Add an uppercase letter.");
    }

    if (/[a-z]/.test(password)) {
        score++;
    } else {
        suggestions.push("Add a lowercase letter.");
    }

    if (/[0-9]/.test(password)) {
        score++;
    } else {
        suggestions.push("Add a number.");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    } else {
        suggestions.push("Add a special character.");
    }

    let strength;

    if (score <= 2) {
        strength = "Weak";
    } else if (score <= 4) {
        strength = "Medium";
    } else {
        strength = "Strong";
    }

    return { strength, suggestions };
}

rl.question("Enter a password: ", (password) => {
    const result = checkPassword(password);

    console.log("\nPassword Strength:", result.strength);

    if (result.suggestions.length > 0) {
        console.log("\nSuggestions:");

        result.suggestions.forEach((item) => {
            console.log("- " + item);
        });
    } else {
        console.log("Great! All basic checks passed.");
    }

    rl.close();
});
