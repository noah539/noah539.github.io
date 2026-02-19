document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const recipeSections = document.querySelectorAll('.recipe-section');

    // Funktion zum Wechseln der Tabs
    function switchTab(targetId) {
        // Entferne 'active' von allen Buttons und Sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        recipeSections.forEach(sec => sec.classList.remove('active'));

        // Füge 'active' zum gewählten Button und der Section hinzu
        const activeButton = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
        const activeSection = document.getElementById(targetId);

        if (activeButton && activeSection) {
            activeButton.classList.add('active');
            activeSection.classList.add('active');
        }
    }

    // Event Listener für Klicks auf die Tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');
            switchTab(target);
            // URL anpassen für sauberes Neuladen
            history.pushState(null, null, `#${target}`);
        });
    });

    // Prüfen, ob ein Hash in der URL existiert (z.B. wenn man von index.html kommt)
    const currentHash = window.location.hash.substring(1);
    if (currentHash) {
        switchTab(currentHash);
    }
});