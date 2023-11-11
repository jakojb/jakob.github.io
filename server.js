const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Beispiel-Endpunkt zum Speichern von Daten
app.post('/api/saveData', (req, res) => {
    const newData = req.body;
    // Hier könntest du die Daten in einer Datenbank speichern oder weitere Aktionen durchführen
    console.log('Empfangene Daten:', newData);
    res.json({ message: 'Daten erfolgreich gespeichert' });
});

// Beispiel-Endpunkt für eine einfache GET-Anfrage
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hallo von deinem Server!' });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
