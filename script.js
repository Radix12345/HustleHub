// 1. Live Clock Logic
function updateClock() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    document.getElementById('live-clock').innerText = now.toLocaleString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

// 2. Your Side Hustle Data
const myHustles = [
    { name: "Prolific", status: "Active", note: "Check daily for high-paying studies." },
    { name: "Telus International", status: "Active", note: "Passed assessment! Watching for tasks." },
    { name: "OneForma (Centific)", status: "Active", note: "Waiting for task availability." },
    { name: "Upwork", status: "Active", note: "Bidding on Marketing/Dev projects." },
    { name: "SurveyJunkie", status: "Active", note: "Filler for downtime." },
    { name: "DataAnnotation", status: "Waiting", note: "Checking dashboard for starter tasks." },
    { name: "Outlier", status: "Testing", note: "Onboarding steps: Import skills phase." }
];

// 3. Wisdom Data
const quotes = [
    { text: "Trade money for time, not time for money. You're going to run out of time first.", author: "Naval Ravikant" },
    { text: "Time is more valuable than money. You can get more money, but you cannot get more time.", author: "Jim Rohn" },
    { text: "Earn with your mind, not your time.", author: "Naval Ravikant" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "The goal is to retire young and rich. 'Rich' means you have options, 'young' means you have time.", author: "Naval Ravikant" }
];

// Render Table
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

// Quote Function
function getNewQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').innerText = `"${quote.text}"`;
    document.getElementById('quote-author').innerText = `- ${quote.author}`;
}
getNewQuote();
