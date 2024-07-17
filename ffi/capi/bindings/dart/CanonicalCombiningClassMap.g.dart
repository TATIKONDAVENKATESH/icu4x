// generated by diplomat-tool

part of 'lib.g.dart';

/// Lookup of the Canonical_Combining_Class Unicode property
///
/// See the [Rust documentation for `CanonicalCombiningClassMap`](https://docs.rs/icu/latest/icu/normalizer/properties/struct.CanonicalCombiningClassMap.html) for more information.
final class CanonicalCombiningClassMap implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  CanonicalCombiningClassMap._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_icu4x_CanonicalCombiningClassMap_destroy_mv1));

  /// Construct a new CanonicalCombiningClassMap instance for NFC
  ///
  /// See the [Rust documentation for `new`](https://docs.rs/icu/latest/icu/normalizer/properties/struct.CanonicalCombiningClassMap.html#method.new) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CanonicalCombiningClassMap(DataProvider provider) {
    final result = _icu4x_CanonicalCombiningClassMap_create_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CanonicalCombiningClassMap._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `get`](https://docs.rs/icu/latest/icu/normalizer/properties/struct.CanonicalCombiningClassMap.html#method.get) for more information.
  ///
  /// Additional information: [1](https://docs.rs/icu/latest/icu/properties/properties/struct.CanonicalCombiningClass.html)
  int operator [](Rune ch) {
    final result = _icu4x_CanonicalCombiningClassMap_get_mv1(_ffi, ch);
    return result;
  }
}

@meta.ResourceIdentifier('icu4x_CanonicalCombiningClassMap_destroy_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'icu4x_CanonicalCombiningClassMap_destroy_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CanonicalCombiningClassMap_destroy_mv1(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('icu4x_CanonicalCombiningClassMap_create_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CanonicalCombiningClassMap_create_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CanonicalCombiningClassMap_create_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CanonicalCombiningClassMap_get_mv1')
@ffi.Native<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CanonicalCombiningClassMap_get_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_CanonicalCombiningClassMap_get_mv1(ffi.Pointer<ffi.Opaque> self, Rune ch);
