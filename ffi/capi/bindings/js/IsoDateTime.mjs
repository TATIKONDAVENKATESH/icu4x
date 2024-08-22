// generated by diplomat-tool
import { Calendar } from "./Calendar.mjs"
import { CalendarError } from "./CalendarError.mjs"
import { CalendarParseError } from "./CalendarParseError.mjs"
import { DateTime } from "./DateTime.mjs"
import { IsoDate } from "./IsoDate.mjs"
import { IsoWeekday } from "./IsoWeekday.mjs"
import { Time } from "./Time.mjs"
import { WeekCalculator } from "./WeekCalculator.mjs"
import { WeekOf } from "./WeekOf.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X DateTime object capable of containing a ISO-8601 date and time.
*
*See the [Rust documentation for `DateTime`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html) for more information.
*/
const IsoDateTime_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_IsoDateTime_destroy_mv1(ptr);
});

export class IsoDateTime {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("IsoDateTime is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            IsoDateTime_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static create(year, month, day, hour, minute, second, nanosecond) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_IsoDateTime_create_mv1(diplomatReceive.buffer, year, month, day, hour, minute, second, nanosecond);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarError[Array.from(CalendarError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarError: ' + cause.value, { cause });
            }
            return new IsoDateTime(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static fromDateAndTime(date, time) {
        const result = wasm.icu4x_IsoDateTime_from_date_and_time_mv1(date.ffiValue, time.ffiValue);
    
        try {
            return new IsoDateTime(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    static fromString(v) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const vSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, v)).splat()];
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_IsoDateTime_from_string_mv1(diplomatReceive.buffer, ...vSlice);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarParseError[Array.from(CalendarParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarParseError: ' + cause.value, { cause });
            }
            return new IsoDateTime(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            functionCleanupArena.free();
        
            diplomatReceive.free();
        }
    }

    static localUnixEpoch() {
        const result = wasm.icu4x_IsoDateTime_local_unix_epoch_mv1();
    
        try {
            return new IsoDateTime(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    static fromMinutesSinceLocalUnixEpoch(minutes) {
        const result = wasm.icu4x_IsoDateTime_from_minutes_since_local_unix_epoch_mv1(minutes);
    
        try {
            return new IsoDateTime(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    get date() {
        const result = wasm.icu4x_IsoDateTime_date_mv1(this.ffiValue);
    
        try {
            return new IsoDate(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    get time() {
        const result = wasm.icu4x_IsoDateTime_time_mv1(this.ffiValue);
    
        try {
            return new Time(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    toAny() {
        const result = wasm.icu4x_IsoDateTime_to_any_mv1(this.ffiValue);
    
        try {
            return new DateTime(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    get minutesSinceLocalUnixEpoch() {
        const result = wasm.icu4x_IsoDateTime_minutes_since_local_unix_epoch_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    toCalendar(calendar) {
        const result = wasm.icu4x_IsoDateTime_to_calendar_mv1(this.ffiValue, calendar.ffiValue);
    
        try {
            return new DateTime(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    get hour() {
        const result = wasm.icu4x_IsoDateTime_hour_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get minute() {
        const result = wasm.icu4x_IsoDateTime_minute_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get second() {
        const result = wasm.icu4x_IsoDateTime_second_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get nanosecond() {
        const result = wasm.icu4x_IsoDateTime_nanosecond_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfYear() {
        const result = wasm.icu4x_IsoDateTime_day_of_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfMonth() {
        const result = wasm.icu4x_IsoDateTime_day_of_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfWeek() {
        const result = wasm.icu4x_IsoDateTime_day_of_week_mv1(this.ffiValue);
    
        try {
            return (() => {for (let i of IsoWeekday.values) { if(i[1] === result) return IsoWeekday[i[0]]; } return null;})();
        }
        
        finally {}
    }

    weekOfMonth(firstWeekday) {
        const result = wasm.icu4x_IsoDateTime_week_of_month_mv1(this.ffiValue, firstWeekday.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    weekOfYear(calculator) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 8, 4, false);
        
        const result = wasm.icu4x_IsoDateTime_week_of_year_mv1(diplomatReceive.buffer, this.ffiValue, calculator.ffiValue);
    
        try {
            return new WeekOf(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    get month() {
        const result = wasm.icu4x_IsoDateTime_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get year() {
        const result = wasm.icu4x_IsoDateTime_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get isInLeapYear() {
        const result = wasm.icu4x_IsoDateTime_is_in_leap_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get monthsInYear() {
        const result = wasm.icu4x_IsoDateTime_months_in_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get daysInMonth() {
        const result = wasm.icu4x_IsoDateTime_days_in_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get daysInYear() {
        const result = wasm.icu4x_IsoDateTime_days_in_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }
}