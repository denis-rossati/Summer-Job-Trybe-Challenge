const fetch = require("node-fetch");

function usandoUmaAPI() {
  return new Promise((resolve, reject) => {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then((response) => response.json())
    .then((data) => data)
    // acessamos a chave text do objeto da API por meio de desestruturação.
    .then( ({ text }) => console.log(text))
  })
}

usandoUmaAPI()