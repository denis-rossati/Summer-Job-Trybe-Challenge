# Gabarito dos exercícios

Há várias soluções para os exercícios propostos. Tentaremos manter a resolução simples para quem teve dificuldades em compreender os passos do exercício.

## Exercício 1

O Exercício pediu que criássemos uma espécie de sorteio, usando *rejects* e *resolves*. E em seguida nos forneceu o seguinte código:

```javascript
function guessTheNumber() {
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
  })
}

guessTheNumber()
```

Para começar, vamos fazer com que nossa função crie um número aleatório a cada vez que ela for chamada. Vamos inserir esse número numa variável. Usaremos a função *Math.random*, que gera esse número aleatório e depois iremos multiplica-lo por 10, indicando que queremos que o número que vai surgir estará entre 0 e 10. Depois disso, vamos por isso tudo entre parênteses para que essa operação seja executada antes de transformarmos o número em inteiro, que é responsabilidade da função *parseInt*, até agora o código ficará assim:

```javascript
function guessTheNumber() {
  const randomNumber = parseInt(Math.random() * 10);
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
  })
}

guessTheNumber()
```

Agora, vamos construir a lógica para que alguma funcionalidade seja disparada caso o número que seja igual a 5, no nosso caso, vamos fazer com que a resposta positiva chame uma mensagem de congratulações. Podemos resolver isso com um simples *if*:

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

Note que ainda não construímos a lógica para os casos negativos. Ou seja, queremos que haja uma rejeição que dispare uma frase em casos onde nosso número não é 5. Portanto, usaremos o else e o reject:

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

Está quase completo, mas nossa função por si só não imprime nossas mensagens. Para lidar com as informações retornadas, vamos usar nossos gerenciadores de fluxos, o *.then()* para respostas positivas e *.catch()* para lidar com as negativas:

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

***VIDEO***

E se ainda não ficou claro, por favor, reforce os estudos a respeito de Promises.

## Exercício 2

Esse exercício dá um passo adiante, pedindo que a gente consuma uma API real que nos retorna uma sugestão de atividade e então imprimirmos o texto na saída do console.

Primeiro, instalamos os módulos node rodando esse comando no terminal:

`npm i node-fetch`

O *npm* indica que estamos rodando um comando do Node Package Manager (não se preocupe em saber o que é isso agora, veremos muito a respeito dele ao longo do curso). O *i* é uma abreviação de 'install' e por fim, o *node-fetch* é a dependência que faremos download.

Após isso, vamos importar a função fetch para nosso arquivo e já vamos criar a sintaxe básica de nossa *Promise*:

```javascript
const fetch = require('node-fetch');

function imprimirTexto() {
  return new Promise((resolve, reject) => {

  })
}

imprimirTexto()
```

A primeira coisa que seria sensata a se fazer seria checar o retorno da nossa API para sabermos quais caminhos vamos tomar para conseguirmos ir até o valor que queremos. Você pode fazer isso dando um *console.log* logo após a *resposta.json()* ou ir à documentação da API. As duas alternativas são válidas.

O próximo passo é nos comunicarmos com nossa API, para isso vamos usar o fetch que nós já importamos anteriormente:

```javascript
const fetch = require('node-fetch');

function imprimirTexto() {
  return new Promise((resolve, reject) => {
    fetch('https://www.boredapi.com/api/activity')
  })
}

imprimirTexto()
```

E agora vamos adicionar recursos para que possamos manipular o seu resultado. O que faremos é mandar ele para um *.then()* poder mexer nos seus resultados e isso será possível embrulhando ele em um *resolve*:

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

Como pode-se ver, nós fizemos com que o primeiro *.then()* o transforme em um arquivo legível ao javascript com o *.json()* e então imprimimos a chave *activity* no console. Outra forma que nos levaria à nossa resposta seria inserir os dois *.then()* logo abaixo do *resolve*.

Nos resta lidar com as exceções da regra, ou seja, caso nossa API retorne uma resposta inválida ou não consigamos nos comunicar com ela. Dessa forma:

```javascript
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
```

Retornamos um *new Error* pois é uma boa prática. Além de termos adicionado o *.catch()* para podermos visualizar o erro.

Deu pra entender? Essa é a resolução final do exercício. Não se esqueça que você sempre pode tirar suas dúvidas com os instrutores da tribo. Caso ainda tenha ficado confuso, tente dar uma revisada no conteúdo proposto de hoje.

### Exercício Bônus

Agora é a hora de resolver o bônus. Não precisa se assustar, pois não é nada complicado. Vamos dar uma olhada no que ele propõe...

Ele pede para que dessa vez, a gente realize o exercício 2 usando *async* e *await*, conceitos aprendidos nessa aula, vamos lá?

Primeiro de tudo, podemos apagar a promise, não vamos usar mais ela, certo?

Então definimos nossa função como assíncrona usando o *async* logo antes de definirmos ela, assim:

```javascript
const fetch = require('node-fetch');

async function imprimirTexto() {
  
}

imprimirTexto()
```

Repare que não excluímos a importação do fetch pois ainda será necessário. Vamos adiante atribuindo uma varíavel à comunicação que vamos fazer com a API:

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
  // Aqui estamos chamando a variável e então adicionando o .then a ela.
  APIResult
  .then(response => response.json())
  .then(data => console.log(data.activity))
}

imprimirTexto()
```

Como de costume, convertemos a resposta para *.json* e então a chave *activity* foi imprimida no console.

Agora cuidemos do *catch*, okay?

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

Esperamos que tenha conseguido compreender todos os seus afazeres. Tire dúvidas, pesquise e reforce os estudos que os bons frutos com certeza chegarão. ;)
