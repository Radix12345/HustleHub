// 1. Your Side Hustle Data
const myHustles = [
    { name: "Prolific", status: "Active", note: "Check daily for high-paying studies." },
    { name: "Telus International", status: "Active", note: "Passed assessment! Watching for tasks." },
    { name: "OneForma (Centific)", status: "Active", note: "Waiting for task availability." },
    { name: "Upwork", status: "Active", note: "Bidding on Marketing/Dev projects." },
    { name: "SurveyJunkie", status: "Active", note: "Filler for downtime." },
    { name: "DataAnnotation", status: "Waiting", note: "Checking dashboard for starter tasks." },
    { name: "Outlier", status: "Testing", note: "Onboarding steps: Import skills phase." }
];

// 2. Wisdom Quotes (Naval & Jim Rohn)
const quotes = [
    { text: "Specific knowledge is found by pursuing your genuine curiosity, resilience, and passion.", author: "Naval Ravikant" },
    { text: "Don't wish it were easier, wish you were better.", author: "Jim Rohn" },
    { text: "Earn with your mind, not your time.", author: "Naval Ravikant" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "If you can't decide, the answer is no.", author: "Naval Ravikant" },
    { text: "Formal education will make you a living; self-education will make you a fortune.", author: "Jim Rohn" }
];

// 3. Render the Table
const listContainer = document.getElementById('hustle-list');

myHustles.forEach(hustle => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${hustle.name}</td>
        <td class="status-${hustle.status.toLowerCase()}">${hustle.status}</td>
        <td>${hustle.note}</td>
    `;
    listContainer.appendChild(row);
});

// 4. Quote Functionality
function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote-text').innerText = `"${quote.text}"`;
    document.getElementById('quote-author').innerText = `- ${quote.author}`;
}

// Show a quote on load
getNewQuote();