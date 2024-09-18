// generated by diplomat-tool

part of 'lib.g.dart';

/// Legacy error
///
/// Additional information: [1](https://docs.rs/icu/latest/icu/datetime/enum.DateTimeError.html), [2](https://docs.rs/icu/latest/icu/provider/struct.DataError.html), [3](https://docs.rs/icu/latest/icu/provider/enum.DataErrorKind.html)
enum Error {
  /// The error is not currently categorized as Error.
  /// Please file a bug
  unknownError,

  dataMissingDataMarkerError,

  dataMissingLocaleError,

  dataNeedsLocaleError,

  dataExtraneousLocaleError,

  dataFilteredResourceError,

  dataMismatchedTypeError,

  dataCustomError,

  dataIoError,

  dataUnavailableBufferFormatError,

  dateTimePatternError,

  dateTimeMissingInputFieldError,

  dateTimeSkeletonError,

  dateTimeUnsupportedFieldError,

  dateTimeUnsupportedOptionsError,

  dateTimeMissingWeekdaySymbolError,

  dateTimeMissingMonthSymbolError,

  dateTimeFixedDecimalError,

  dateTimeMismatchedCalendarError,

  dateTimeDuplicateFieldError,

  dateTimeTooNarrowError,

  dateTimeMissingNamesError;

  int get _ffi {
    switch (this) {
      case unknownError:
        return 0;
      case dataMissingDataMarkerError:
        return 256;
      case dataMissingLocaleError:
        return 258;
      case dataNeedsLocaleError:
        return 260;
      case dataExtraneousLocaleError:
        return 261;
      case dataFilteredResourceError:
        return 262;
      case dataMismatchedTypeError:
        return 263;
      case dataCustomError:
        return 266;
      case dataIoError:
        return 267;
      case dataUnavailableBufferFormatError:
        return 268;
      case dateTimePatternError:
        return 2048;
      case dateTimeMissingInputFieldError:
        return 2049;
      case dateTimeSkeletonError:
        return 2050;
      case dateTimeUnsupportedFieldError:
        return 2051;
      case dateTimeUnsupportedOptionsError:
        return 2052;
      case dateTimeMissingWeekdaySymbolError:
        return 2053;
      case dateTimeMissingMonthSymbolError:
        return 2054;
      case dateTimeFixedDecimalError:
        return 2055;
      case dateTimeMismatchedCalendarError:
        return 2056;
      case dateTimeDuplicateFieldError:
        return 2057;
      case dateTimeTooNarrowError:
        return 2058;
      case dateTimeMissingNamesError:
        return 2059;
    }
  }
}
