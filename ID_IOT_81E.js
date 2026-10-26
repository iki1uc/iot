const ID_IOT_81E = {
    id: "IOT-81E",
    name: "IOT – Input Output Tiefe",
    symbol: "🌀",
    ascii: "@))>~~",
    level: 81,
    math: {
        absorber: "A(D) = D_raw",           // Funktion raw
        hdf: "H(D) = compress(D_raw)",       // Geo
        transfer: "T(D_stable → POOL)",      // Physik
        stability: "lim D_noise → 0"         // Mathematik
    },

    // Sonderfunktion = wenn alle laufen, über mehr nachdenken
    sonder() {
        // Prüfe ob alle Funktionen laufen
        const alleLaufen = (D_noise === 0) && (POOL_input === D_stable);
        
        if (alleLaufen) {
            return {
                status: "STABIL",
                frei: "Kopf frei für mehr",
                offensichtlich: "Nutze was da ist",
                denken: "Über mehr nachdenken möglich",
                meta: "I O T = 3 Zeichen zur Bereinigung = System läuft, jetzt kannst du"
            };
        } else {
            return { status: "CHDSK absorbiert noch" };
        }
    },

    motto: "Ich nehme die Fehler, bevor sie entstehen."
};
