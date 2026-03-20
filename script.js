// 1. Clock Logic (Same as before)
function updateClock() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('live-clock').innerText = now.toLocaleString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

// 2. Data Logic (The Pro Move)
let myHustles = JSON.parse(localStorage.getItem('hustleData')) || [
    { name: "Prolific", status: "Active", note: "Check daily." }
];

function renderTable() {
    const listContainer = document.getElementById('hustle-list');
    listContainer.innerHTML = ''; // Clear table before re-rendering
    
    myHustles.forEach((hustle, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${hustle.name}</td>
            <td class="status-${hustle.status.toLowerCase()}">${hustle.status}</td>
            <td>${hustle.note}</td>
            <td><button class="btn-delete" onclick="deleteHustle(${index})">Delete</button></td>
        `;
        listContainer.appendChild(row);
    });
    
    // Save to LocalStorage every time we render
    localStorage.setItem('hustleData', JSON.stringify(myHustles));
}

function addHustle() {
    const name = document.getElementById('platform-name').value;
    const status = document.getElementById('platform-status').value;
    const note = document.getElementById('platform-note').value;

    if (name) {
        myHustles.push({ name, status, note });
        renderTable();
        // Clear inputs
        document.getElementById('platform-name').value = '';
        document.getElementById('platform-note').value = '';
    }
}

function deleteHustle(index) {
    myHustles.splice(index, 1);
    renderTable();
}

// 3. Wisdom Quotes
const quotes = [
    { text: "Trade money for time, not time for money.", author: "Naval Ravikant" },
    { text: "Time is more valuable than money.", author: "Jim Rohn" }
];

function getNewQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').innerText = `"${quote.text}"`;
    document.getElementById('quote-author').innerText = `- ${quote.author}`;
}

// Initial Run
renderTable();
getNewQuote();
