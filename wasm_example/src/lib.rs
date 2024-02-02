#[no_mangle]
pub extern "C" fn test_function() -> i32 {
    42
}

// src/lib.rs

#[no_mangle]
pub extern "C" fn sum(a: i32, b: i32) -> i32 {
    a + b
}
