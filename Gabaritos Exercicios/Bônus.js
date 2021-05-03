const fetch = require('node-fetch');

async function imprimirTexto() {
  const APIResult = fetch('https://www.boredapi.com/api/activity');
  APIResult
  .then(response => response.json())
  .then(data => console.log(data.activity))
  .catch(() => {
    throw new Error ('Não foi possível lhe dar o retorno esperado')
  })
}

imprimirTexto()
