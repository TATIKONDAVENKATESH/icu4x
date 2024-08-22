// generated by diplomat-tool
import { Calendar } from "./Calendar.mjs"
import { CalendarError } from "./CalendarError.mjs"
import { CalendarParseError } from "./CalendarParseError.mjs"
import { Date } from "./Date.mjs"
import { IsoWeekday } from "./IsoWeekday.mjs"
import { WeekCalculator } from "./WeekCalculator.mjs"
import { WeekOf } from "./WeekOf.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Date object capable of containing a ISO-8601 date
*
*See the [Rust documentation for `Date`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html) for more information.
*/
const IsoDate_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_IsoDate_destroy_mv1(ptr);
});

export class IsoDate {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("IsoDate is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            IsoDate_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static create(year, month, day) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_IsoDate_create_mv1(diplomatReceive.buffer, year, month, day);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarError[Array.from(CalendarError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarError: ' + cause.value, { cause });
            }
            return new IsoDate(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static fromString(v) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const vSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, v)).splat()];
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_IsoDate_from_string_mv1(diplomatReceive.buffer, ...vSlice);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarParseError[Array.from(CalendarParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarParseError: ' + cause.value, { cause });
            }
            return new IsoDate(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            functionCleanupArena.free();
        
            diplomatReceive.free();
        }
    }

    static unixEpoch() {
        const result = wasm.icu4x_IsoDate_unix_epoch_mv1();
    
        try {
            return new IsoDate(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    toCalendar(calendar) {
        const result = wasm.icu4x_IsoDate_to_calendar_mv1(this.ffiValue, calendar.ffiValue);
    
        try {
            return new Date(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    toAny() {
        const result = wasm.icu4x_IsoDate_to_any_mv1(this.ffiValue);
    
        try {
            return new Date(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    get dayOfYear() {
        const result = wasm.icu4x_IsoDate_day_of_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfMonth() {
        const result = wasm.icu4x_IsoDate_day_of_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfWeek() {
        const result = wasm.icu4x_IsoDate_day_of_week_mv1(this.ffiValue);
    
        try {
            return (() => {for (let i of IsoWeekday.values) { if(i[1] === result) return IsoWeekday[i[0]]; } return null;})();
        }
        
        finally {}
    }

    weekOfMonth(firstWeekday) {
        const result = wasm.icu4x_IsoDate_week_of_month_mv1(this.ffiValue, firstWeekday.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    weekOfYear(calculator) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 8, 4, false);
        
        const result = wasm.icu4x_IsoDate_week_of_year_mv1(diplomatReceive.buffer, this.ffiValue, calculator.ffiValue);
    
        try {
            return new WeekOf(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    get month() {
        const result = wasm.icu4x_IsoDate_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get year() {
        const result = wasm.icu4x_IsoDate_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get isInLeapYear() {
        const result = wasm.icu4x_IsoDate_is_in_leap_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get monthsInYear() {
        const result = wasm.icu4x_IsoDate_months_in_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get daysInMonth() {
        const result = wasm.icu4x_IsoDate_days_in_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get daysInYear() {
        const result = wasm.icu4x_IsoDate_days_in_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }
}