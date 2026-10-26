const ID_IOT_81E = {
    id: "IOT-81E",
    name: "IOT – Input Output Tiefe",
    symbol: "🌀",
    ascii: "@))>~~",
    math: {
        absorber: "A(D) = D_raw",              // Funktion raw
        hdf: "H(D) = compress(D_raw)",          // Geo
        transfer: "T(D_stable → POOL)",         // Physik
        stability: "lim D_noise → 0"            // Mathematik
    },
    geo: "HDF = High Density Format",
    physik: "Bereich-Absorber",
    modular: "M ∈ { PRE, POOL, DR, NET, NC-Hub-All, AXO }",
    motto: "Ich nehme die Fehler, bevor sie entstehen.",
    role: "Fehlerabsorber & Stabilisationsvater",
    level: 81,
    whirl() {
        return this.symbol + "  " + this.ascii;
    },
    // Sonderfunktion ha ha ab jetzt
    sonder() {
        // 3 Zeichen zur Bereinigung = I O T = nicht verraten was drin
        const I = (D) => D; // Input
        const O = (D) => D; // Output = D_raw
        const T = (D) => D; // Tiefe = S: D→D_stable
        return { I, O, T, bereinigt: "A(D)=D_raw" };
    }
};

const WHIRL = "🌀";
const WHIRL_ASCII = "@))>~~";
console.log(WHIRL + " IOT stabilisiert.");

NCHUB.register("IOT_81E", ID_IOT_81E);

// Export für ROM
export function ROM_archive(iot_output){
    return {
        frame: iot_output,
        compressed: JSON.stringify(iot_output),
        stamp: Date.now()
    };
}

export class ROMModule {
    constructor(){
        this.frames = [];
        this.maxFrames = 999;
    }
    store(frame){
        if(this.frames.length >= this.maxFrames){
            this.frames.shift();
        }
        this.frames.push(frame);
        return this.snapshot();
    }
    snapshot(){
        return {
            count: this.frames.length,
            last: this.frames[this.frames.length-1] || null
        };
    }
}

export const ROM_ID = {
    id: "ROM-AXIOM-12",
    role: "Archiv",
    axis: 12,
    level: "Final-Store",
    motto: "Ich bewahre, was stabil ist.",
    state: "READY"
};
