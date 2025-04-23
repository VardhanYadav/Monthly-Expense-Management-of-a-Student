function loadTableauDashboard() {
    const container = document.getElementById('dashboardContainer');
    container.innerHTML = '';

    const vizUrl = "https://prod-apnortheast-a.online.tableau.com/t/vy1691-403942c21d/views/Final1_IV/Sheet1";
    const vizElement = document.createElement('tableau-viz');
    vizElement.src = vizUrl;
    vizElement.style.width = "100%";
    vizElement.style.height = "600px";
    container.appendChild(vizElement);
}

function loadPowerBIDashboard() {
    const dashboardContainer = document.getElementById('dashboardContainer');
    const content = document.getElementById('content');
    const descriptionList = document.getElementById('descriptionList');
    dashboardContainer.innerHTML = '';

    const powerbiIframe = document.createElement('iframe');
    powerbiIframe.title = "PowerBI Dashboard";
    powerbiIframe.width = "100%";
    powerbiIframe.height = "600px";
    powerbiIframe.src = "https://app.powerbi.com/reportEmbed?reportId=6f271771-b849-4da6-8da9-b9a4519dc5c0&autoAuth=true&ctid=813e6569-4e44-4d95-88a0-16a97bd5277c";
    powerbiIframe.frameBorder = "0";
    powerbiIframe.allowFullScreen = "true";
    dashboardContainer.appendChild(powerbiIframe);

    const powerBIDescription = `
        <li><strong>Sheet 1:</strong> Data collected from different institutes.</li>
        <li><strong>Sheet 2:</strong> Expected spending amounts for students.</li>
        <li><strong>Sheet 3:</strong> Monthly expense management for students.</li>
        <li><strong>Sheet 4:</strong> Trends and Expected spending amounts for students.</li>
        <li><strong>Sheet 5:</strong> Spending patterns by month.</li>
        <li><strong>Sheet 6:</strong> Monthly expense management for students.</li>
        <li><strong>Sheet 8:</strong> Data collected from different institutes.</li>
    `;
    descriptionList.innerHTML = powerBIDescription;
    content.querySelector('p').innerText = "This dashboard helps analyze student spending behavior effectively and make informed decisions based on data insights.";
}

function loadDashboard(type) {
    const content = document.getElementById('content');
    const descriptionList = document.getElementById('descriptionList');
    if (type === 'tableau') {
        loadTableauDashboard();
        descriptionList.innerHTML = `
            <li><strong>Sheet 1:</strong> Data collected from different institutes.</li>
            <li><strong>Sheet 2:</strong> Monthly expense management for students.</li>
            <li><strong>Sheet 3:</strong> Spending patterns by month.</li>
            <li><strong>Sheet 4:</strong> Most purchased food items by students.</li>
            <li><strong>Sheet 5:</strong> Expected spending amounts for students.</li>
            <li><strong>Sheet 6:</strong> Number of students with similar spending habits.</li>
            <li><strong>Sheet 7:</strong> Times of the week when students are likely to order food.</li>
        `;
        content.querySelector('p').innerText = "This dashboard helps analyze student spending behavior effectively and make informed decisions based on data insights.";
    } else if (type === 'powerbi') {
        loadPowerBIDashboard();
    }
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownOptions');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Initialize with Tableau dashboard by default
window.onload = function() {
    loadTableauDashboard();
};