// Estou supondo que o node-modules já está instalado.

const fetch = require('node-fetch');

function imprimirTexto() {
  return new Promise((resolve, reject) => {
    return resolve(fetch('https://www.boredapi.com/api/activity'))
    return reject(new Error ('Não foi possível lhe dar o retorno esperado'))
  })
}

imprimirTexto()
.then((response) => response.json())
.then((data) => console.log(data.activity))
.catch((message) => console.error(message))