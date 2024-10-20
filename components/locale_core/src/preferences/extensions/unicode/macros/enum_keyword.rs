// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

#[macro_export]
/// TODO
#[doc(hidden)]
macro_rules! __enum_keyword_inner {
    ($name:ident, $variant:ident) => {
        $name::$variant
    };
    ($name:ident, $variant:ident, $s:ident, $v2:ident) => {{
        if $s.subtag_count() < 1 {
            $name::$variant(None)
        } else {
            $name::$variant($v2::try_from($s).ok())
        }
    }};
}
#[doc(inline)]
pub use __enum_keyword_inner as enum_keyword_inner;

#[macro_export]
/// TODO
#[doc(hidden)]
macro_rules! __enum_keyword {
    ($(#[$doc:meta])* $name:ident {
        $($key:expr => $variant:ident $(($v2:ident) {$($subk:expr => $subv:ident),*})?),* $(,)?
    }) => {
        #[non_exhaustive]
        #[derive(Debug, Clone, Eq, PartialEq, Copy)]
        $(#[$doc])*
        pub enum $name {
            $(
                /// TODO
                $variant $((Option<$v2>))?
            ),*
        }

        impl $name {
            /// TODO
            pub fn extend_value(self, input: &mut $crate::extensions::unicode::Value) {
                match self {
                    $(
                        // This is circumventing a limitation of the macro_rules - we need to have a conditional
                        // $()? case here for when the variant has a value, and macro_rules require us to
                        // reference the $v2 inside it, but in match case it becomes a variable, so clippy
                        // complaints.
                        #[allow(non_snake_case)]
                        Self::$variant $(($v2))? => {
                            input.push_subtag($crate::subtags::subtag!($key));

                            $(
                                if let Some(v2) = $v2 {
                                    v2.extend_value(input);
                                }
                            )?
                        },
                    )*
                }
            }
            }

        impl TryFrom<$crate::extensions::unicode::Value> for $name {
            type Error = $crate::preferences::extensions::unicode::errors::PreferencesParseError;

            fn try_from(mut s: $crate::extensions::unicode::Value) -> Result<Self, Self::Error> {
                let first_subtag = s.get_subtag(0).unwrap();
                Ok(match first_subtag.as_str() {
                    $(
                        $key => {
                            let _ = s.remove_subtag(0).unwrap();
                            $crate::__enum_keyword_inner!($name, $variant$(, s, $v2)?)
                        }
                    )*
                    _ => {
                        return Err(Self::Error::InvalidKeywordValue);
                    }
                })
            }
        }

        impl From<$name>  for $crate::extensions::unicode::Value {
            fn from(input: $name) -> $crate::extensions::unicode::Value {
                let mut result = $crate::extensions::unicode::Value::default();
                input.extend_value(&mut result);
                result
            }
        }
    };
    ($(#[$doc:meta])* $name:ident {
        $($key:expr => $variant:ident $(($v2:ident) {$($subk:expr => $subv:ident),*})?),* $(,)?
    }, $ext_key:literal) => {
        $crate::__enum_keyword!($(#[$doc])* $name {$($key => $variant $(($v2) {$($subk => $subv),*})?),*});

        impl $crate::preferences::PreferenceKey for $name {
            fn unicode_extension_key() -> Option<$crate::extensions::unicode::Key> {
                Some($crate::extensions::unicode::key!($ext_key))
            }

            fn is_custom(&self) -> bool {
                false
            }

            fn unicode_extension_value(&self) -> Option<$crate::extensions::unicode::Value> {
                Some(self.clone().into())
            }
        }
    };
}
pub use __enum_keyword as enum_keyword;

#[cfg(test)]
mod tests {
    use super::*;
    use crate::extensions::unicode;
    use core::str::FromStr;

    #[test]
    fn enum_keywords_test() {
        enum_keyword!(DummyKeyword {
            "standard" => Standard,
            "rare" => Rare,
        }, "dk");

        let v = unicode::Value::from_str("standard").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Standard);
        assert_eq!(unicode::Value::from(dk), v);

        let v = unicode::Value::from_str("rare").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Rare);
        assert_eq!(unicode::Value::from(dk), v);

        let v = unicode::Value::from_str("foo").unwrap();
        let dk = DummyKeyword::try_from(v);
        assert!(dk.is_err());
    }

    #[test]
    fn enum_keywords_nested_test() {
        enum_keyword!(DummySubKeyword {
            "standard" => Standard,
            "rare" => Rare,
        });

        enum_keyword!(DummyKeyword {
            "default" => Default,
            "sub" => Sub(DummySubKeyword) {
                "standard" => Standard,
                "rare" => Rare
            }
        }, "dk");

        let v = unicode::Value::from_str("default").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Default);
        assert_eq!(unicode::Value::from(dk), v);

        let v = unicode::Value::from_str("sub").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Sub(None));
        assert_eq!(unicode::Value::from(dk), v);

        let v = unicode::Value::from_str("foo").unwrap();
        let dk = DummyKeyword::try_from(v);
        assert!(dk.is_err());

        let v = unicode::Value::from_str("sub-standard").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Sub(Some(DummySubKeyword::Standard)));
        assert_eq!(unicode::Value::from(dk), v);

        let v = unicode::Value::from_str("sub-rare").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Sub(Some(DummySubKeyword::Rare)));
        assert_eq!(unicode::Value::from(dk), v);

        let v = unicode::Value::from_str("sub-foo").unwrap();
        let dk = DummyKeyword::try_from(v.clone()).unwrap();
        assert_eq!(dk, DummyKeyword::Sub(None));
        assert_eq!(unicode::Value::from(dk), unicode::value!("sub"));
    }
}
