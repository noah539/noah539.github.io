function updateCounter() {
    // Hochzeitsdatum/Startdatum: Jahr, Monat (0-basiert, daher 1 für Februar), Tag, Stunde, Minute, Sekunde
    const startDate = new Date(2000, 1, 25, 0, 0, 0); 
    const now = new Date();

    // Basis-Berechnungen
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Korrekturen für negative Werte (Überträge)
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Findet heraus, wie viele Tage der vorherige Monat hatte
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Tage in Wochen und restliche Tage aufteilen
    let weeks = Math.floor(days / 7);
    days = days % 7;

    // Werte ins HTML schreiben
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('weeks').innerText = weeks;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Skript direkt beim Laden einmal ausführen, damit keine "0" aufblitzt
updateCounter();

// Den Zähler jede Sekunde (1000 Millisekunden) aktualisieren
setInterval(updateCounter, 1000);