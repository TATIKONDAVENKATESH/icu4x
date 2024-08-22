// generated by diplomat-tool
import { Locale } from "./Locale.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

// Base enumerator definition
/** The various calendar types currently supported by [`Calendar`]
*
*See the [Rust documentation for `AnyCalendarKind`](https://docs.rs/icu/latest/icu/calendar/enum.AnyCalendarKind.html) for more information.
*/
export class AnyCalendarKind {
    #value = undefined;

    static values = new Map([
        ["Iso", 0],
        ["Gregorian", 1],
        ["Buddhist", 2],
        ["Japanese", 3],
        ["JapaneseExtended", 4],
        ["Ethiopian", 5],
        ["EthiopianAmeteAlem", 6],
        ["Indian", 7],
        ["Coptic", 8],
        ["Dangi", 9],
        ["Chinese", 10],
        ["Hebrew", 11],
        ["IslamicCivil", 12],
        ["IslamicObservational", 13],
        ["IslamicTabular", 14],
        ["IslamicUmmAlQura", 15],
        ["Persian", 16],
        ["Roc", 17]
    ]);

    constructor(value) {
        if (value instanceof AnyCalendarKind) {
            this.#value = value.value;
            return;
        }

        if (AnyCalendarKind.values.has(value)) {
            this.#value = value;
            return;
        }

        throw TypeError(value + " is not a AnyCalendarKind and does not correspond to any of its enumerator values.");
    }

    get value() {
        return this.#value;
    }

    get ffiValue() {
        return AnyCalendarKind.values.get(this.#value);
    }

    static Iso = new AnyCalendarKind("Iso");
    static Gregorian = new AnyCalendarKind("Gregorian");
    static Buddhist = new AnyCalendarKind("Buddhist");
    static Japanese = new AnyCalendarKind("Japanese");
    static JapaneseExtended = new AnyCalendarKind("JapaneseExtended");
    static Ethiopian = new AnyCalendarKind("Ethiopian");
    static EthiopianAmeteAlem = new AnyCalendarKind("EthiopianAmeteAlem");
    static Indian = new AnyCalendarKind("Indian");
    static Coptic = new AnyCalendarKind("Coptic");
    static Dangi = new AnyCalendarKind("Dangi");
    static Chinese = new AnyCalendarKind("Chinese");
    static Hebrew = new AnyCalendarKind("Hebrew");
    static IslamicCivil = new AnyCalendarKind("IslamicCivil");
    static IslamicObservational = new AnyCalendarKind("IslamicObservational");
    static IslamicTabular = new AnyCalendarKind("IslamicTabular");
    static IslamicUmmAlQura = new AnyCalendarKind("IslamicUmmAlQura");
    static Persian = new AnyCalendarKind("Persian");
    static Roc = new AnyCalendarKind("Roc");

    static getForLocale(locale) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_AnyCalendarKind_get_for_locale_mv1(diplomatReceive.buffer, locale.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return AnyCalendarKind[Array.from(AnyCalendarKind.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static getForBcp47(s) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const sSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, s)).splat()];
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_AnyCalendarKind_get_for_bcp47_mv1(diplomatReceive.buffer, ...sSlice);
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return AnyCalendarKind[Array.from(AnyCalendarKind.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
        }
        
        finally {
            functionCleanupArena.free();
        
            diplomatReceive.free();
        }
    }

    get bcp47() {
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.icu4x_AnyCalendarKind_bcp47_mv1(this.ffiValue, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            write.free();
        }
    }
}