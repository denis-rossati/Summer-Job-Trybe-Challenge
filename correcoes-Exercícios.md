# Correções

## Exercício 1

O Exercício pediu que criássemos uma espécie de sorteio, usando rejects e resolves. Em seguida nos forneceu o seguinte código:

```javascript
function guessTheNumber() {
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
  })
}

guessTheNumber()
```

Para começar, vamos fazer com que nossa função crie um número aleatório cada vez que ela for chamada. Vamos inserir ele numa variável. Usaremos a função *Math.random* para gerar esse número aleatório e depois multiplica-lo por 10, indicando que queremos que o número que queremos estará entre 0 e 10. Depois disso, inserimos isso tudo em parênteses para que essa operação seja executada antes de transformarmos o número em inteiro, que é responsabilidade da função Parseint, o código até agora ficará assim:

```javascript
function guessTheNumber() {
  const randomNumber = parseInt(Math.random() * 10);
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
  })
}

guessTheNumber()
```

Agora, vamos construir a lógica para que o número que seja igual a 5 dispare alguma funcionalidade, no nosso caso, vamos fazer com que a resposta positiva chame uma mensagem de congratulações. Podemos resolver isso com um simples if:

```javascript
function guessTheNumber() {
  const randomNumber = parseInt(Math.random() * 10);
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
    if (randomNumber === 5) {
      return resolve('Parabéns, acertou o número em cheio!!!')
    }
  })
}

guessTheNumber()
```

Note que ainda não construímos a lógica para os casos negativos. Ou seja, em casos em que nosso número não é 5, queremos que haja uma rejeição que dispare uma frase. Portanto, usaremos o else e o reject:

```javascript
function guessTheNumber() {
  const randomNumber = parseInt(Math.random() * 10);
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
    if (randomNumber === 5) {
      return resolve('Parabéns, acertou o número em cheio!!!')
    } else {
      return resolve(new Error('Não foi dessa vez...'))
    }
  })
}

guessTheNumber()
```

Até agora está quase completo, mas nossa função por si só não imprime nossas mensagens. Para lidar com as informações retornadas, vamos usar nossos gerenciadores de fluxos, usando o .then() para respostas positivas e *.catch()* para lidar com as negativas:

```javascript
function guessTheNumber() {
  const randomNumber = parseInt(Math.random() * 10);
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
    if (randomNumber === 5) {
      return resolve('Parabéns, acertou o número em cheio!!!')
    } else {
      return resolve(new Error('Não foi dessa vez...'))
    }
  })
}

guessTheNumber()
.then(response => console.log(response))
.catch(error => console.error(error))
```

E pronto, está finalizado. Caso não tenha conseguido entender, veja o vídeo abaixo onde o passo a passo é mais visível:

VIDEO

E se ainda não ficou claro, por favor, reforce os estudos a respeito de Promises.

## Exercício 2

Esse exercício dá um passo adiante, pedindo que a gente consuma uma API real que nos retorna sugestões de atividades e então imprimirmos o texto na saída do console.

 Primeiro, instalamos os módulos node rodando esse comando no terminal:

`npm i node-fetch`

O *npm* indica que estamos rodando um comando do Node Package Manager (não se preocupe em saber o que é isso agora, veremos muito a respeito dele ao longo do curso). O *i* é uma abreviação de 'install' e por fim, o *node-fetch* é a dependência que iremos instalar.

Após isso, vamos importar a função fetch para nosso arquivo e já vamos criar a sintaxe básica de nossa Promise:

```javascript
const fetch = require('node-fetch');

function imprimirTexto() {
  return new Promise((resolve, reject) => {

  })
}

imprimirTexto()
```

A primeira coisa que seria sensata a fazer, seria checar o retorno da nossa API para sabermos quais caminhos vamos tomar para conseguirmos ir até o valor que queremos, você pode fazer isso dando um console.log logo após a *resposta.json()* ou ir à documentação da API, os dois são válidos.

O próximo passo é nos comunicarmos com nossa API, para isso vamos usar o fetch que nós já importamos:

```javascript
const fetch = require('node-fetch');

function imprimirTexto() {
  return new Promise((resolve, reject) => {
    fetch('https://www.boredapi.com/api/activity')
  })
}

imprimirTexto()
```

Mas ele por si só não irá fazer nada, logo, vamos adicionar recursos para que possamos manipular o seu resultado. O que faremos é mandar ele para um *.then()* poder mexer nos seus resultados, e isso será possível embrulhando ele em um resolve:

```javascript
const fetch = require('node-fetch');

function imprimirTexto() {
  return new Promise((resolve, reject) => {
    return resolve(fetch('https://www.boredapi.com/api/activity'))
  })
}

imprimirTexto()
.then((response) => response.json())
.then((data) => console.log(data.activity))
```

Como podemos ver, nós permitimos que um *.then()* o transforme em um arquivo legível ao javascript com o *.json()* e então imprimimos a chave 'activity' no console. Outra forma válida seria inserir os dois *.then()* abaixo do *resolve*.

Nos resta agora lidar com as exceções da regra, ou seja, caso nossa API retorne uma resposta inválida ou caso não consigamos nos comunicar com ela. Dessa forma:

const fetch = require('node-fetch');

```javascript
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
```

Retornamos um *new Error* pois é uma boa prática. Além de termos adicionado o *.catch()* para podermos visualizar o erro.

Deu pra entender? Essa é a resolução final do exercício. Mas caso tenha ficado confuso, o vídeo aqui pode ajudar. Mas não se esqueça que você sempre pode tirar suas dúvidas com os instrutores da tribo. No mais, tente dar uma revisada no conteúdo proposto de hoje.

VIDEO

### Exercício Bônus

Agora é a hora de resolver o bônus. Não precisa se assustar, pois não é nada complicado. Vamos dar uma olhada no que ele propõe...

Ele pede para que dessa vez, a gente realize o exercício 2 usando async e await, conceitos aprendidos nessa aula, vamos lá?

Primeiro de tudo, podemos apagar a promise, não vamos usar mais ela, certo? 

Então definimos nossa função como assíncrona usando o *async* logo antes de definirmos ela, assim:

```javascript
const fetch = require('node-fetch');

async function imprimirTexto() {
  
}

imprimirTexto()
```

Repare que não excluímos a importação do fetch, pois ainda será necessário. Vamos adiante, atribuindo uma varíavel à comunicação que vamos fazer com a API:

```javascript
const fetch = require('node-fetch');

async function imprimirTexto() {
  const APIResult = fetch('https://www.boredapi.com/api/activity');
}

imprimirTexto()
```

Até agora simples, né? 

Dessa vez, vamos adicionar os gestores de fluxo bem na função. Vamos cuidar do *.then()* primeiro:

```javascript
const fetch = require('node-fetch');

async function imprimirTexto() {
  const APIResult = fetch('https://www.boredapi.com/api/activity');
  APIResult
  .then(response => response.json())
  .then(data => console.log(data.activity))
}

imprimirTexto()
```

Como de costume, convertemos a resposta para *.json* e então a informação *activity* foi imprimida no console.

Agora cuidemos do catch, okay?

```javascript
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
```

Como agora não podemos usar o resolve e então dar um console na resposta, utilizamos um *throw new Error* para lançar nossa mensagem de erro logo quando identificarmos ele.

Também temos um vídeo mostrando passo a passo caso tenha ficado meio confuso:

VIDEO
