document.addEventListener('DOMContentLoaded', async () => {
  const resultDiv = document.querySelector('#result');  // Asegúrate de seleccionar por ID

  // Carga e instancia el módulo WebAssembly una vez
  const wasmInstance = await loadWasmModule();
  console.log(wasmInstance);
  const button = document.querySelector('button');
  const input1 = document.querySelector('input:nth-child(1)');
  const input2 = document.querySelector('input:nth-child(2)');

  button.addEventListener('click', () => {
    const num1 = parseInt(input1.value) || 0;
    const num2 = parseInt(input2.value) || 0;
    console.log(wasmInstance);
    // Llama a la función sum usando la instancia ya cargada
 
    const sum = wasmInstance.instance.exports.sum(num1, num2);
    console.log('Suma desde Rust:', sum);
    resultDiv.textContent = `RESULTADO: ${sum}`;
  });
});

async function loadWasmModule() {
  return fetch('target/wasm32-unknown-unknown/release/wasm_example.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}));
}
