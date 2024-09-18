// generated by diplomat-tool
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** A type capable of looking up General Category mask values from a string name.
*
*See the [Rust documentation for `PropertyParser`](https://docs.rs/icu/latest/icu/properties/struct.PropertyParser.html) for more information.
*
*See the [Rust documentation for `GeneralCategory`](https://docs.rs/icu/latest/icu/properties/props/struct.GeneralCategory.html) for more information.
*/
const GeneralCategoryNameToMaskMapper_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_GeneralCategoryNameToMaskMapper_destroy_mv1(ptr);
});

export class GeneralCategoryNameToMaskMapper {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("GeneralCategoryNameToMaskMapper is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            GeneralCategoryNameToMaskMapper_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    getStrict(name) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const nameSlice = functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, name));
        
        const result = wasm.icu4x_GeneralCategoryNameToMaskMapper_get_strict_mv1(this.ffiValue, ...nameSlice.splat());
    
        try {
            return result;
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    getLoose(name) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const nameSlice = functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, name));
        
        const result = wasm.icu4x_GeneralCategoryNameToMaskMapper_get_loose_mv1(this.ffiValue, ...nameSlice.splat());
    
        try {
            return result;
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    static load(provider) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_GeneralCategoryNameToMaskMapper_load_mv1(diplomatReceive.buffer, provider.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = new DataError(diplomatRuntime.internalConstructor, diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer));
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new GeneralCategoryNameToMaskMapper(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }
}