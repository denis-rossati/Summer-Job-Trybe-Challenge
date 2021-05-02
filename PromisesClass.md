# Promises - Javascript

 ---

## O que vamos aprender?

Hoje iremos aprender dois materiais muitos úteis. Essas duas novas ferramentas são extremamente poderosas e vão nos dar um leque de práticas imenso e que abrirão novos horizontes na hora de construirmos nossos sites.

---

Você já viu o que são *Callbacks* e *Javascript Assíncrono* na [aula anterior](https://app.betrybe.com/course/fundamentals/javascript-assincrono-e-promises/javascript-assincrono-e-callbacks/303c0a19-063f-43cc-a365-0738e1783b54/o-que-vamos-aprender/41247a93-fcf6-49ec-9d78-075a6d87b3fe?use_case=calendar) e esses conceitos serão preciosos no dia de hoje pois iremos aprender sobre Promises.

 Se prepare para grandes momentos de *mindblowing* e abstração, mas não exija muito de si mesmo: esse conteúdo é extenso e complexo. Haverão várias oportunidades como pessoa desenvolvedora e estudante da Trybe para errar e acertar. Mas com prática e compromisso, você certamente vai dominar mais um artifício do mundo maravilhoso da programação.

### Você será capaz de

- Consumir serviços web utilizando API's.

- Construir requisições assíncronas por meio de Promises.

- Métodos .then() e .catch().

---

## Porque isso é importante?

Você estará em contato com Promises durante toda sua carreira como pessoa desenvolvedora. E usará elas sempre que precisar de uma função assíncrona. Ela garantirá que uma resposta (*response*) será entregue a você sempre que você fizer a chamada de um serviço assíncrono (*request*).

Para ilustrar de uma forma mais didática. Se imagine na seguinte situação: Você está em um bom restaurante e chama o garçom. Você faz o informa que quer um determinado prato e ele prontamente irá avisar o cozinheiro sobre o pedido. Depois de um tempo ele irá te dar uma resposta positiva, lhe entregando o prato. Ou uma resposta negativa, dizendo que faltou um ingrediente, o cozinheiro se demitiu enquanto fazia o prato ou algum outro problema.

Agora suponha que o garçom simplesmente anotasse seu pedido e então nunca mais aparecesse com a comida ou com o aviso que algo deu errado. Seria inconveninente, né? Ficaríamos esperando pelo resto dos tempos, caso fossemos pacientes.

Podemos abstrair essa situação como o propósito da Promise. Ela vai garantir que irá te entregar a resposta de um serviço assíncrono. Seja ela positiva ou não.

Essa é a principal função dela, mas não é a única. Iremos explicar em mais detalhes no tópico de conteúdos.

---

## Conteúdos

### Contextualizando

Promises são uma forma genial de se trabalhar com chamadas assíncronas no javascript. Ela tem várias particularidades e caminhos, nessa aula será abordado no estilo passo a passo e explicando o que cada elemento faz para que todas lacunas de dúvidas sejam preenchidas. Não se esqueça de pesquisar caso algo desperte sua curiosidade ou mesmo perguntar aos seus colegas e instrutores. É importante que esse conceito esteja bem fundado no seu leque de ferramentas porque você irá caminhar com Promises e assincronicidade daqui pra frente até o infinito.

Como aprendemos nas aulas anteriores, tudo que desenvolvemos até agora constitui como processos síncronos do javascript, ou seja, quando o navegador estiver interpretando seu código e deparar com uma função qualquer todo o processo irá parar e esperar o retorno daquela implementação. A chamada assíncrona é justamente o oposto. Quando ela for executada, será mandada para um processamento particular. Lá será esperado o retorno da aplicação enquanto o restante das funcionalidades continuam a todo vapor.
Nós queremos que nosso código seja o mais rápido quanto consigamos executar. Por isso as chamadas assíncronas são úteis, pois esses poucos segundos de espera podem definir qual site o usuário vai preferir. Além disso, muito tempo é poupado quando se tem quatro, dez ou vinte processos assíncronos (garantimos que é mais comum do que pode soar). E não queremos fazer que as pessoas esperem dezenas de segundos por uma simples funcionalidade, não é?

### Afinal, o que são Promises?

"*Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.*".

O nome pode ser auto explicativo, pois é como se estivéssemos o fizessemos o javascript prometer nos dar uma resposta. Seja ela positiva ou negativa. Em outras palavras, é a função que vai nos dar uma eventual resposta de conclusão ou falha.
Por meio das ferramentas .then() e .catch(), podemos manipular respostas e utilizar de uma das maiores vantagens da Promise: o encadeamento. É ele que nos evita utilizar vários callbacks em sequência.
Outras boas vantagens são:

- Manipulação de respostas de forma detalhada e abrangente.

- Adicionar uma ordem lógica ao retorno de respostas assíncronas, garantindo que uma função que depende de outra resposta nunca seja executada enquanto esta não terminar.

- Legibilidade de código, evitando o temido **Callback Hell**.

![Callback Hell...Só de pensar em ler esse código já dá um arrepio, não?](https://miro.medium.com/max/1442/1*zxx4iQAG4HilOIQqDKpxJw.jpeg "Philadelphia's Magic Gardens")

*É graças às Promises que não temos que lidar com códigos desse calibre no dia a dia de pessoa desenvolvedora. Só de olhar já dar uma dorzinha no cérebro, né?*

Bem, talvez o conceito de Promises ainda esteja um pouco embaçado na sua cabeça, mas não se preocupe. Esse é um assunto que demanda tempo e prática, então não esquente em aprender isso do dia pra noite. Você estará bem desde que entenda a sintaxe e o que cada elemento faz. O resto é a experiência que vai ajudar a te deixar mais natural com o processo.

### Fazendo nossa primeira Promise:

Temos a seguinte sintaxe básica:

```javascript
function teste() {
  return new Promise((resolve, reject) => {
    // se tudo deu certo
    resolve();

    // se algo saiu errado
    reject();
  });
}
```

Vamos com calma e aprendendo uma coisa de cada vez. Essa é a promise mais básica que você irá encontrar. Primeiro utilizamos o construtor new, que irá instanciar uma nova função Promise que já tem uma callback definida onde iremos passar dois paramêtros que devem obrigatoriamente seguir a ordem de sucesso (*resolve*) e falha (*reject*).

"*EPA, EPA, EPA!!!! Isso é muita informação de uma vez. Pra começar, o que raios é 'new' e o que ele faz?*"

Você não precisa preocupar com essa funcionalidade agora, você ainda irá ver que ele é muito útil no conceito de classes em javascript mas ainda estamos longe de aprende-las. Porém, não precisa se alarmar com o que ele faz. Por enquanto, apenas atente-se ao que a Promise tem poder de fazer.

Os responsáveis por checar se a função sucedeu ou não são aqueles parâmetros ali. Após requisitarmos um serviço assíncrono, nós iremos escrever uma lógica que eles retornarão para a Promise.

Para resumir, se sua requisição deu bom, a callback que você definir dentro do resolve será executada. Caso contrário, o reject será executado.

Vamos usar um exemplo mais concreto agora. Você está com sua cabeça a mil no novo projeto que você tá encarando na Trybe. Então você quer checar se já chegou nos 80%... Vamos usar uma lógica na nossa Promise para averiguar isso. Execute isso no seu VS Code:

(*Dica: tente prever o que algo vai retornar antes de executar uma função, é um bom exercício ;)*)

```javascript
function projeto(porcentagem) {
  return new Promise((resolve, reject) => {
    if(porcentagem >= 80) {
      resolve('Boa, falta pouco pra conseguir o 100% :D')
    } else {
      reject('Ainda dá tempo de terminar, não queremos ficar de recuperação!!')
    }
  });
}

console.log(projeto(80));
```

Executou?

Beleza... Por obséquio, pode diminuir os 80% ali no parâmetro e executar de novo?
Eita... A primeira linha até nos deu o que queríamos, mas provavelmente o resultado no seu terminal não foi nada bonito, não é? Deve estar escrito algo como:

```code
Ainda dá tempo de terminar, não queremos ficar de recuperação!!
(node:11464) UnhandledPromiseRejectionWarning: undefined
(node:11464) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:11464) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Mas não se preocupe, é apenas um aviso dizendo que nós não estamos tratando a rejeição da melhor forma. Não precisa entender o que isso é agora. Iremos abordar isso mais para frente na aula.

### Estados das promessas

Até agora pode parecer que uma Promise tem um humor binário: ou resolve ou não resolve. Mas não é bem assim.
Vamos voltar ao exemplo do restaurante... Enquanto o prato está cozinhando, ou seja, quando nossa Promise está sendo executada, ela resultou num *resolve* ou um *reject*? Nenhum dos dois, certo? Como o resultado ainda está sendo encaminhado, nossa promessa está num estado chamado *pending*. Ou seja, ainda está pendente, em execução. Assim que tudo for concluído nós teremos a resposta, no caso, uma rejeição ou resolução.

Chega de ilustrações. Vamos para as definições técnicas.

Uma promise possui três estados: resolve, reject e pending. Já sabemos o que os dois primeiros fazem, e acabamos de ter uma idéia do que o terceiro é. Vamos dar uma olhada em como isso rola em código bruto:

```javascript
function projeto(porcentagem) {
  return new Promise((resolve, reject) => {
    // vamos setar um timmer para que nossa função seja chamada ENQUANTO ela está sendo executada >:D
    // você pode dar uma olhada no que ele faz nesse link ali no final... Mas basicamente ele só espera um tempo antes de executar alguma coisa.
    setTimeout(() => {
      if(porcentagem >= 80) {
        resolve('Boa, falta pouco pra conseguir o 100% :D')
      } else {
        reject('Ainda dá tempo de terminar, não queremos ficar de recuperação!!')
      }
    }, 2000)
  });
}
console.log(projeto(80))

// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

```

Viu que a promise estava em *pending*? Isso acontece quando tentamos manipular ela enquanto o resultado ainda não foi elaborado. Nosso editor tem a gentileza de nos informar isso. Vamos combinar, programação é um mundo maravilhoso, não?

---

## Exercícios

### Agora, a prática

### Bônus

---

## Recursos adicionais

---
