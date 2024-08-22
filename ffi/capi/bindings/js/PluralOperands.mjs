// generated by diplomat-tool
import { FixedDecimal } from "./FixedDecimal.mjs"
import { FixedDecimalParseError } from "./FixedDecimalParseError.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `PluralOperands`](https://docs.rs/icu/latest/icu/plurals/struct.PluralOperands.html) for more information.
*/
const PluralOperands_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_PluralOperands_destroy_mv1(ptr);
});

export class PluralOperands {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("PluralOperands is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            PluralOperands_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static fromString(s) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const sSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, s)).splat()];
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_PluralOperands_from_string_mv1(diplomatReceive.buffer, ...sSlice);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = FixedDecimalParseError[Array.from(FixedDecimalParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('FixedDecimalParseError: ' + cause.value, { cause });
            }
            return new PluralOperands(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            functionCleanupArena.free();
        
            diplomatReceive.free();
        }
    }

    static fromFixedDecimal(x) {
        const result = wasm.icu4x_PluralOperands_from_fixed_decimal_mv1(x.ffiValue);
    
        try {
            return new PluralOperands(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }
}