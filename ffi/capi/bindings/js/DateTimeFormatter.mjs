// generated by diplomat-tool
import { DataProvider } from "./DataProvider.mjs"
import { DateLength } from "./DateLength.mjs"
import { DateTime } from "./DateTime.mjs"
import { Error } from "./Error.mjs"
import { IsoDateTime } from "./IsoDateTime.mjs"
import { Locale } from "./Locale.mjs"
import { TimeLength } from "./TimeLength.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X DateFormatter object capable of formatting a [`DateTime`] as a string,
*using some calendar specified at runtime in the locale.
*
*See the [Rust documentation for `DateTimeFormatter`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html) for more information.
*/
const DateTimeFormatter_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_DateTimeFormatter_destroy_mv1(ptr);
});

export class DateTimeFormatter {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("DateTimeFormatter is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            DateTimeFormatter_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static createWithLengths(provider, locale, dateLength, timeLength) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_DateTimeFormatter_create_with_lengths_mv1(diplomatReceive.buffer, provider.ffiValue, locale.ffiValue, dateLength.ffiValue, timeLength.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = (() => {for (let i of Error.values) { if(i[1] === diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)) return Error[i[0]]; } return null;})();
                throw new globalThis.Error('Error: ' + cause.value, { cause });
            }
            return new DateTimeFormatter(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    formatDatetime(value) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        
        const result = wasm.icu4x_DateTimeFormatter_format_datetime_mv1(diplomatReceive.buffer, this.ffiValue, value.ffiValue, write.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = (() => {for (let i of Error.values) { if(i[1] === diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)) return Error[i[0]]; } return null;})();
                throw new globalThis.Error('Error: ' + cause.value, { cause });
            }
            return write.readString8();
        }
        
        finally {
            diplomatReceive.free();
        
            write.free();
        }
    }

    formatIsoDatetime(value) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        
        const result = wasm.icu4x_DateTimeFormatter_format_iso_datetime_mv1(diplomatReceive.buffer, this.ffiValue, value.ffiValue, write.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = (() => {for (let i of Error.values) { if(i[1] === diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)) return Error[i[0]]; } return null;})();
                throw new globalThis.Error('Error: ' + cause.value, { cause });
            }
            return write.readString8();
        }
        
        finally {
            diplomatReceive.free();
        
            write.free();
        }
    }
}