// generated by diplomat-tool

part of 'lib.g.dart';

/// An iterator over code point ranges, produced by `CodePointSetData` or
/// one of the `CodePointMapData` types
final class CodePointRangeIterator implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;
  // ignore: unused_field
  final core.List<Object> _aEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  CodePointRangeIterator._fromFfi(this._ffi, this._selfEdge, this._aEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_icu4x_CodePointRangeIterator_destroy_mv1));

  /// Advance the iterator by one and return the next range.
  ///
  /// If the iterator is out of items, `done` will be true
  CodePointRangeIteratorResult next() {
    final result = _icu4x_CodePointRangeIterator_next_mv1(_ffi);
    return CodePointRangeIteratorResult._fromFfi(result);
  }
}

@meta.ResourceIdentifier('icu4x_CodePointRangeIterator_destroy_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'icu4x_CodePointRangeIterator_destroy_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CodePointRangeIterator_destroy_mv1(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('icu4x_CodePointRangeIterator_next_mv1')
@ffi.Native<_CodePointRangeIteratorResultFfi Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointRangeIterator_next_mv1')
// ignore: non_constant_identifier_names
external _CodePointRangeIteratorResultFfi _icu4x_CodePointRangeIterator_next_mv1(ffi.Pointer<ffi.Opaque> self);
