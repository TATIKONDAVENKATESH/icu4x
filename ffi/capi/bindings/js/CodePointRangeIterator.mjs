// generated by diplomat-tool
import { CodePointRangeIteratorResult } from "./CodePointRangeIteratorResult.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An iterator over code point ranges, produced by `CodePointSetData` or
*one of the `CodePointMapData` types
*/
const CodePointRangeIterator_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_CodePointRangeIterator_destroy_mv1(ptr);
});

export class CodePointRangeIterator {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    #aEdge = [];
    
    constructor(symbol, ptr, selfEdge, aEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("CodePointRangeIterator is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            CodePointRangeIterator_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    next() {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 9, 4, false);
        
        const result = wasm.icu4x_CodePointRangeIterator_next_mv1(diplomatReceive.buffer, this.ffiValue);
    
        try {
            return new CodePointRangeIteratorResult(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }
}