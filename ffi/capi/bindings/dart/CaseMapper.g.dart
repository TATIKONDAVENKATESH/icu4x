// generated by diplomat-tool

part of 'lib.g.dart';

/// See the [Rust documentation for `CaseMapper`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html) for more information.
final class CaseMapper implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  CaseMapper._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_icu4x_CaseMapper_destroy_mv1));

  /// Construct a new CaseMapper instance
  ///
  /// See the [Rust documentation for `new`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.new) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CaseMapper(DataProvider provider) {
    final result = _icu4x_CaseMapper_create_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CaseMapper._fromFfi(result.union.ok, []);
  }

  /// Returns the full lowercase mapping of the given string
  ///
  /// See the [Rust documentation for `lowercase`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.lowercase) for more information.
  String lowercase(String s, Locale locale) {
    final temp = ffi2.Arena();
    final sView = s.utf8View;
    final write = _Write();
    _icu4x_CaseMapper_lowercase_mv1(_ffi, sView.allocIn(temp), sView.length, locale._ffi, write._ffi);
    temp.releaseAll();
    return write.finalize();
  }

  /// Returns the full uppercase mapping of the given string
  ///
  /// See the [Rust documentation for `uppercase`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.uppercase) for more information.
  String uppercase(String s, Locale locale) {
    final temp = ffi2.Arena();
    final sView = s.utf8View;
    final write = _Write();
    _icu4x_CaseMapper_uppercase_mv1(_ffi, sView.allocIn(temp), sView.length, locale._ffi, write._ffi);
    temp.releaseAll();
    return write.finalize();
  }

  /// Returns the full titlecase mapping of the given string, performing head adjustment without
  /// loading additional data.
  /// (if head adjustment is enabled in the options)
  ///
  /// The `v1` refers to the version of the options struct, which may change as we add more options
  ///
  /// See the [Rust documentation for `titlecase_segment_with_only_case_data`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.titlecase_segment_with_only_case_data) for more information.
  String titlecaseSegmentWithOnlyCaseData(String s, Locale locale, TitlecaseOptions options) {
    final temp = ffi2.Arena();
    final sView = s.utf8View;
    final write = _Write();
    _icu4x_CaseMapper_titlecase_segment_with_only_case_data_v1_mv1(_ffi, sView.allocIn(temp), sView.length, locale._ffi, options._toFfi(temp), write._ffi);
    temp.releaseAll();
    return write.finalize();
  }

  /// Case-folds the characters in the given string
  ///
  /// See the [Rust documentation for `fold`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.fold) for more information.
  String fold(String s) {
    final temp = ffi2.Arena();
    final sView = s.utf8View;
    final write = _Write();
    _icu4x_CaseMapper_fold_mv1(_ffi, sView.allocIn(temp), sView.length, write._ffi);
    temp.releaseAll();
    return write.finalize();
  }

  /// Case-folds the characters in the given string
  /// using Turkic (T) mappings for dotted/dotless I.
  ///
  /// See the [Rust documentation for `fold_turkic`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.fold_turkic) for more information.
  String foldTurkic(String s) {
    final temp = ffi2.Arena();
    final sView = s.utf8View;
    final write = _Write();
    _icu4x_CaseMapper_fold_turkic_mv1(_ffi, sView.allocIn(temp), sView.length, write._ffi);
    temp.releaseAll();
    return write.finalize();
  }

  /// Adds all simple case mappings and the full case folding for `c` to `builder`.
  /// Also adds special case closure mappings.
  ///
  /// In other words, this adds all characters that this casemaps to, as
  /// well as all characters that may casemap to this one.
  ///
  /// Note that since CodePointSetBuilder does not contain strings, this will
  /// ignore string mappings.
  ///
  /// Identical to the similarly named method on `CaseMapCloser`, use that if you
  /// plan on using string case closure mappings too.
  ///
  /// See the [Rust documentation for `add_case_closure_to`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.add_case_closure_to) for more information.
  void addCaseClosureTo(Rune c, CodePointSetBuilder builder) {
    _icu4x_CaseMapper_add_case_closure_to_mv1(_ffi, c, builder._ffi);
  }

  /// Returns the simple lowercase mapping of the given character.
  ///
  /// This function only implements simple and common mappings.
  /// Full mappings, which can map one char to a string, are not included.
  /// For full mappings, use `CaseMapper::lowercase`.
  ///
  /// See the [Rust documentation for `simple_lowercase`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.simple_lowercase) for more information.
  Rune simpleLowercase(Rune ch) {
    final result = _icu4x_CaseMapper_simple_lowercase_mv1(_ffi, ch);
    return result;
  }

  /// Returns the simple uppercase mapping of the given character.
  ///
  /// This function only implements simple and common mappings.
  /// Full mappings, which can map one char to a string, are not included.
  /// For full mappings, use `CaseMapper::uppercase`.
  ///
  /// See the [Rust documentation for `simple_uppercase`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.simple_uppercase) for more information.
  Rune simpleUppercase(Rune ch) {
    final result = _icu4x_CaseMapper_simple_uppercase_mv1(_ffi, ch);
    return result;
  }

  /// Returns the simple titlecase mapping of the given character.
  ///
  /// This function only implements simple and common mappings.
  /// Full mappings, which can map one char to a string, are not included.
  /// For full mappings, use `CaseMapper::titlecase_segment`.
  ///
  /// See the [Rust documentation for `simple_titlecase`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.simple_titlecase) for more information.
  Rune simpleTitlecase(Rune ch) {
    final result = _icu4x_CaseMapper_simple_titlecase_mv1(_ffi, ch);
    return result;
  }

  /// Returns the simple casefolding of the given character.
  ///
  /// This function only implements simple folding.
  /// For full folding, use `CaseMapper::fold`.
  ///
  /// See the [Rust documentation for `simple_fold`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.simple_fold) for more information.
  Rune simpleFold(Rune ch) {
    final result = _icu4x_CaseMapper_simple_fold_mv1(_ffi, ch);
    return result;
  }

  /// Returns the simple casefolding of the given character in the Turkic locale
  ///
  /// This function only implements simple folding.
  /// For full folding, use `CaseMapper::fold_turkic`.
  ///
  /// See the [Rust documentation for `simple_fold_turkic`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapper.html#method.simple_fold_turkic) for more information.
  Rune simpleFoldTurkic(Rune ch) {
    final result = _icu4x_CaseMapper_simple_fold_turkic_mv1(_ffi, ch);
    return result;
  }
}

@meta.ResourceIdentifier('icu4x_CaseMapper_destroy_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_destroy_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_destroy_mv1(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('icu4x_CaseMapper_create_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_create_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CaseMapper_create_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CaseMapper_lowercase_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size, ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_lowercase_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_lowercase_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> sData, int sLength, ffi.Pointer<ffi.Opaque> locale, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_CaseMapper_uppercase_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size, ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_uppercase_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_uppercase_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> sData, int sLength, ffi.Pointer<ffi.Opaque> locale, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_CaseMapper_titlecase_segment_with_only_case_data_v1_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size, ffi.Pointer<ffi.Opaque>, _TitlecaseOptionsFfi, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_titlecase_segment_with_only_case_data_v1_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_titlecase_segment_with_only_case_data_v1_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> sData, int sLength, ffi.Pointer<ffi.Opaque> locale, _TitlecaseOptionsFfi options, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_CaseMapper_fold_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_fold_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_fold_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> sData, int sLength, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_CaseMapper_fold_turkic_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_fold_turkic_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_fold_turkic_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> sData, int sLength, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_CaseMapper_add_case_closure_to_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CaseMapper_add_case_closure_to_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CaseMapper_add_case_closure_to_mv1(ffi.Pointer<ffi.Opaque> self, Rune c, ffi.Pointer<ffi.Opaque> builder);

@meta.ResourceIdentifier('icu4x_CaseMapper_simple_lowercase_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CaseMapper_simple_lowercase_mv1')
// ignore: non_constant_identifier_names
external Rune _icu4x_CaseMapper_simple_lowercase_mv1(ffi.Pointer<ffi.Opaque> self, Rune ch);

@meta.ResourceIdentifier('icu4x_CaseMapper_simple_uppercase_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CaseMapper_simple_uppercase_mv1')
// ignore: non_constant_identifier_names
external Rune _icu4x_CaseMapper_simple_uppercase_mv1(ffi.Pointer<ffi.Opaque> self, Rune ch);

@meta.ResourceIdentifier('icu4x_CaseMapper_simple_titlecase_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CaseMapper_simple_titlecase_mv1')
// ignore: non_constant_identifier_names
external Rune _icu4x_CaseMapper_simple_titlecase_mv1(ffi.Pointer<ffi.Opaque> self, Rune ch);

@meta.ResourceIdentifier('icu4x_CaseMapper_simple_fold_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CaseMapper_simple_fold_mv1')
// ignore: non_constant_identifier_names
external Rune _icu4x_CaseMapper_simple_fold_mv1(ffi.Pointer<ffi.Opaque> self, Rune ch);

@meta.ResourceIdentifier('icu4x_CaseMapper_simple_fold_turkic_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CaseMapper_simple_fold_turkic_mv1')
// ignore: non_constant_identifier_names
external Rune _icu4x_CaseMapper_simple_fold_turkic_mv1(ffi.Pointer<ffi.Opaque> self, Rune ch);
