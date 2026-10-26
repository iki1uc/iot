# IOT – Input Output Tiefe

IOT ist ein modulares Stabilisierungssystem.

Mathematische Funktion
I = Input = D = D_raw + D_noise
O = Output = D_stable = D_raw
T = Tiefe = Stabilisationsabbildung S: D → D_stable
mit lim D_noise → 0

Physik
IOT arbeitet als Bereich-Absorber. Fehler werden vor Erreichen des POOL absorbiert.

Geo
IOT nutzt HDF-Puffer = High Density Format = Verdichtung + Stabilisierung.

Modular
M ∈ { PRE, POOL, DR, NET, NC-Hub-All, AXO }
Für jedes Modul M gilt: M erhält nur D_stable.

Funktion raw: A(D) = D_raw
POOL_input = D_stable = garantiert fehlerfrei.
