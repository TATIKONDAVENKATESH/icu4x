// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `GraphemeClusterBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.GraphemeClusterBreakIterator.html) for more information.
*/
const GraphemeClusterBreakIteratorUtf8_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_GraphemeClusterBreakIteratorUtf8_destroy_mv1(ptr);
});

export class GraphemeClusterBreakIteratorUtf8 {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    #aEdge = [];
    
    constructor(symbol, ptr, selfEdge, aEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("GraphemeClusterBreakIteratorUtf8 is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            GraphemeClusterBreakIteratorUtf8_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    next() {
        const result = wasm.icu4x_GraphemeClusterBreakIteratorUtf8_next_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }
}