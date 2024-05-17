# WASM with web worker demo

This repo showcases the not working import/usage of a wasm module inside a web worker.

## Preparation

This example uses the [mdn tutorials](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_Wasm) for setup.

To check if the rust-wasm module is working use `index.html` and compile `pkg` with `wasm-pack build --target web`, run the `index.html` and look at the console log.

For the webpack and vite modules use `wasm-pack build --target bundler`. Run the modules with `npm run dev`.

## Error

For both modules, webpack and or vite it is not possible to import the wasm module. Neither the debugger breakpoint is called nor the console logs are generated.
