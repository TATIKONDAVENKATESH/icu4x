// generated by diplomat-tool
import { CodePointRangeIterator } from "./CodePointRangeIterator.mjs"
import { CodePointSetData } from "./CodePointSetData.mjs"
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Unicode Map Property object, capable of querying whether a code point (key) to obtain the Unicode property value, for a specific Unicode property.
*
*For properties whose values fit into 16 bits.
*
*See the [Rust documentation for `properties`](https://docs.rs/icu/latest/icu/properties/index.html) for more information.
*
*See the [Rust documentation for `CodePointMapData`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapData.html) for more information.
*
*See the [Rust documentation for `CodePointMapDataBorrowed`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html) for more information.
*/
const CodePointMapData16_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_CodePointMapData16_destroy_mv1(ptr);
});

export class CodePointMapData16 {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("CodePointMapData16 is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            CodePointMapData16_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    get(cp) {
        const result = wasm.icu4x_CodePointMapData16_get_mv1(this.ffiValue, cp);
    
        try {
            return result;
        }
        
        finally {}
    }

    iterRangesForValue(value) {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        
        const result = wasm.icu4x_CodePointMapData16_iter_ranges_for_value_mv1(this.ffiValue, value);
    
        try {
            return new CodePointRangeIterator(diplomatRuntime.internalConstructor, result, [], aEdges);
        }
        
        finally {}
    }

    iterRangesForValueComplemented(value) {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        
        const result = wasm.icu4x_CodePointMapData16_iter_ranges_for_value_complemented_mv1(this.ffiValue, value);
    
        try {
            return new CodePointRangeIterator(diplomatRuntime.internalConstructor, result, [], aEdges);
        }
        
        finally {}
    }

    getSetForValue(value) {
        const result = wasm.icu4x_CodePointMapData16_get_set_for_value_mv1(this.ffiValue, value);
    
        try {
            return new CodePointSetData(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    static loadScript(provider) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_CodePointMapData16_load_script_mv1(diplomatReceive.buffer, provider.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new CodePointMapData16(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }
}