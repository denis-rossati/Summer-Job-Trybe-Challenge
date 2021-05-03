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

### Fazendo nossa primeira Promise

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

>*EPA, EPA, EPA!!!! Isso é muita informação de uma vez. Pra começar, o que raios é 'new' e o que ele faz?*

Você não precisa preocupar com essa funcionalidade agora, você ainda irá ver que ele é muito útil no conceito de classes em javascript mas ainda estamos longe de aprende-las. Porém, não precisa se alarmar com o que ele faz. Por enquanto, apenas atente-se ao que a Promise tem poder de fazer.

Os responsáveis por checar se a função sucedeu ou não são aqueles parâmetros ali. Após requisitarmos um serviço assíncrono, nós iremos escrever uma lógica que eles retornarão para a Promise.

Para resumir, se sua requisição deu bom, a callback que você definir dentro do resolve será executada. Caso contrário, o reject será executado.

Vamos usar um exemplo mais concreto agora. Você está com sua cabeça a mil no novo projeto que você tá encarando na Trybe. Então você quer checar se já chegou nos 80%... Vamos usar uma lógica na nossa Promise para averiguar isso. Execute isso no seu VS Code:

>*Dica: tente prever o que algo vai retornar antes de executar uma função, é um bom exercício ;)*

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
// 'Boa, falta pouco pra conseguir o 100% :D'

// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

```

Viu que a promise estava em *pending*? Isso acontece quando tentamos manipular ela enquanto o resultado ainda não foi elaborado. Nosso editor tem a gentileza de nos informar isso. Vamos combinar, programação é um mundo maravilhoso, não?

Agora que temos alguns do conceitos em mãos, vamos ir a frente e aprender dois métodos importantes, o *.then()* e o *.catch()*, eles são uma das chaves do conhecimento em Promises. Graças a eles, podemos fazer o que chamamos de encadeamento (ou *chaining*).

### Manipuladores de fluxos

O título já categorizou o que o *then* e o *catch* são. Esses carinhas vão fazer o que quisermos com o resultado das nossas funções logo após elas serem executadas. E esse é um dos grandes pontos, porque eles nunca irão proceder a execução antes da nosso Promise nos dar algum retorno, ou seja, nunca tentarão rodar uma callback caso nossa função esteja em  *pending*. Além disso, é com o catch que nós podemos tratar aquele erro feio que saiu no terminal lá em cima.

Além disso, temos que ter atenção porque o *then* e *catch* lidam com informações diferentes: **O primeiro só vai manipular informações retornadas pelo *resolve*, enquanto o outro só vai manipular as que forem retornadas pelo *reject*.**

Vamos ver o que cada um faz de pouco em pouco utilizando aquela nossa função lá do início. Primeiro o *then*:

```javascript
function projeto(porcentagem) {
  return new Promise((resolve, reject) => {
    if(porcentagem >= 80) {
      return resolve(porcentagem)
    } else {
      return reject('Ainda dá tempo de terminar, não queremos ficar de recuperação!!')
    }
  })
}

projeto(80).then((resposta) => console.log(`Nossa porcentagem é de ${resposta}`));

// Nossa porcentagem é de 80
```

Viu o que rolou aqui? Passamos a responsabilidade que o resolve tinha para o then. Agora é ele quem dá um console.log na mensagem. Note que normalmente, usariamos uma callback para uma outro função tratar nosso código. Se nós tivéssemos que fazer isso várias vezes, ficaria muito confuso. Mas com esses gestores de fluxo a gente pode encadear quantos then a gente quiser:

```javascript
function mostrarEncadeamento() {
  return new Promise((resolve, reject) => {
    return resolve()
  })
}

mostrarEncadeamento()
.then(() => console.log(`Primeiro encadeamento.`))
.then(() => console.log('Segundo encadeamento.'))
.then(() => console.log('Terceiro encadeamento.'))
.then(() => console.log('Posso fazer isso pelo resto da vida...'));

// Primeiro encadeamento.
// Segundo encadeamento.
// Terceiro encadeamento.
// Posso fazer isso pelo resto da vida...
```

Se você estiver atento, talvez notou que agora nós começamos a adicionar *return* antes das resoluções. Fazemos isso porque, apesar do resolve e reject funcionarem como returns, eles não interrompem o restante da função de ser executada (diferente dos returns padrões). A diferença em exemplos ilustrativos como os do nosso estudo é microscópica, mas em aplicações maiores isso pode significar um atraso na execução. Então já comece a criar o hábito de colocar returns antes dos resolves e rejects.

Bem, você entendeu que o then manipula a informação retornada pelo resolve. Temos que também avisar que o primeiro parâmetro dos thens conseguintes, por padrão, sempre será o retorno da função anterior. Esse exemplo tem objetivo de mostrar melhor essa funcionalidade:

```javascript
function mostrarEncadeamento() {
  return new Promise((resolve, reject) => {
    return resolve(1)
  })
}

mostrarEncadeamento()
.then((response) => {
  return(response);
})
.then((response) => {
  return(response + 10);
})
.then((response) => {
  return(response + 100);
})
.then((response) => {
  console.log(response);
});
// 111

// É como se nosso código dissesse "Primeiro resolva a promise, então passe o retorno pro then, então adicione 10 e então adicione 100..."
// Aliás, then significa "então" em inglês ;)
```

Boa, o principal sobre o then foi cobrido. Você pode checar mais a fundo na seção de **Recursos Adicionais**.

>*Mas eu mudei o parâmetro da função e aquele erro horroroso continua no terminal, o que fazer??*

Não se desespere. Agora que vem o pulo do gato. O then não trata as resoluções da Promise? O catch faz o mesmo com o nosso parâmetro restante.

Vamos aprender umas particularidades do catch:

- Ele trata única e apenas os retornos do reject.

- Se a Promise dá um reject, ele salta todos os then's do código e vai direto pro catch

- O catch também trata qualquer erro que apareça durante a execução dos then's.

Por essas duas últimas razões, o catch é colocado geralmente no final do encadeamento, beleza?

Dito isto,

`.then(() => 'vamos ao exemplo :D');`

```javascript
function mostrarCatch(numero) {
  return new Promise((resolve, reject) => {
    if(numero > 99) {
      reject('Esse erro só vai ser exibido por causa do .catch()')
    }
  })
}

mostrarCatch(100)
.catch((error) => {
  console.log(error)
});
```

Mais uma vez, uma das grandes vantagens da Promise é o respeito entre o tempo de execução das funções e o encadeamento, tenha isso sempre em mente. Essas habilidades com Promises ainda não são o mais legal.

No próximo tópico, vamos dar uma revisada no que é API e Fetch para que juntos possamos deixar os conceitos bem claros quando formos consumir nosso primeiro serviço web.

#### API

É comum pensar que a API é um banco de dados que nos dá informações para nós, pessoas desenvolvedoras, utilizarmos mas NÃAAAO. API na verdade é a plataforma que permite que nossa aplicação e outra possam se comunicar, daí a sigla significa *Application Programming Interface*(que pode ser algo como **Interface** de programação de aplicação). No fim, a API é um conjunto de algoritmos e normas que estabelecem uma conexão entre plataformas.

Essa é uma explicação bem superficial, mas suficiente para sabermos o que iremos fazer hoje. Mais informações estão disponíveis nos Recursos Adicionais.

#### Fetch

Relemebrando o dia de ontem, aprendemos sobre o fetch, mas não colocamos muito em prática. Hoje iremos mergulhar nele tanto na explicação quanto nos exercícios, então se faz necessário falarmos um pouco mais sobre ele.

O Fetch é um dos recursos que temos quando se trata de funções assíncronas e requisições. Ele recebe dois parâmetros: A URL da API e um objeto. Esse objeto não é um conceito que você precisa se aprofundar agora, mas a nível de curiosidade, ele é como uma mensagem pro sistema da API, que enviar pra ela algumas especificações e informações que a API irá filtrar.

#### .JSON()

Grande parte das API's nos dão uma resposta em um formato que não é legível ao Javascript. Então assim que ela é retornada nós temos que converter a response para algo que a linguagem possa ler antes de saírmos manipulando coisas por ai.

Na nossa situação, o mais útil para nós é o .JSON (isto é **JavaScript Object Notation**... Sim, é como se fosse um objeto), com ele fica mais fácil para nosso interpretador de código visualizar as informações que estão lá. Veremos como fazer isso quando consumirmos nossa API mais à frente.

### Consumindo API com Fetch

Você já tem umas boas cartas na manga. Agora vamos consumir um serviço web mais adequado de todos: **UMA API QUE RETORNA FATOS SOBRE GATINHOS!!!**

Para realizar essa façanha histórica, primeiro vamos ter que instalar um modulo externo do node, pois sem ele nós não conseguiremos usar o *fetch*. Por isso, rode este comando no terminal:

`npm i node-fetch`

O *i* é de *init*, o *node-fetch* é o módulo que iremos instalar.

Depois de instalado, analise o seguinte código. Iremos explicar o que cada coisa faz. Recomendamos que veja o resultado no seu próprio VS Code.

```javascript
const fetch = require("node-fetch");

function usandoUmaAPI() {
  return new Promise((resolve, reject) => {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then((response) => response.json())
    .then((data) => console.log(data))
  })
}

usandoUmaAPI()
```

1 - Aquele `const fetch = (...)` é o que puxa a função de dentro do pacote que instalamos, nos permitindo usar o fetch.

2 - Notou que passamos uma url pro *fetch* mas não passamos aquele objeto de que falamos mais cedo? Em muitas API's não é necessário. Mas ele é super útil. Iremos aprender mais pra frente no curso.

3 - Viu aquele `.json()` logo após a nossa response da API? É aquilo que transforma o texto bruto que a API retorna em um objeto interpretável pelo javascript!

Veja como os `.then()` se comportam. Consegue prever o que será retornado no terminal? Rode o código e veja.

Não foi algo legal de se ler não é? Nos foi retornado um objeto com as informações que a pessoa que criou a API julgou necessário ter.  Mas no meio daquela bagunça tem o que nós queremos. Nesse objeto, cheque a chave `text`... Lá tem o nosso fato sobre gatinhos, e aquilo é o que queremos.

Tente você mesmo acessar aquela chave modificando os `.then()` já existentes.

>*Dica: lembre-se que o retorno da API é um objeto :)*

Caso não tenha conseguido, uma solução simples seria:

```javascript
const fetch = require("node-fetch");

function usandoUmaAPI() {
  return new Promise((resolve, reject) => {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then((response) => response.json())
    // acessamos a chave text do objeto da API
    .then((data) => console.log(data.text))
  })
}

usandoUmaAPI()
```

>![OBJECTION!!!!](https://64.media.tumblr.com/tumblr_lu42vwKZEx1ql3o7so1_400.gif "JOGO: ace attorney")
>
>*Espera um segundo... CADÊ O REJECT????*

B-bem lembrado... Vamos adicionar um para que nos alerte caso a gente insira um url inválido *\*suando frio\**

```javascript
const fetch = require("node-fetch");

function usandoUmaAPI(link) {
  return new Promise((resolve, reject) => {
    if(link === 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1') {
      fetch(link)
      .then((response) => response.json())
      .then((data) => console.log(data.text));
    } else {
      reject(new Error('Não é um url de fatos sobre gatos >:('))
    }
  })
}
usandoUmaAPI('alguma outra url')
.catch(error => console.log(error))
```

Consegue compreender o que foi feito? Agora dizemos para a aplicação que queremos apenas uma URL específica, caso contrário soltamos um error.

Aliás, aquele `new Error`é uma boa prática de programação para os rejects. Por favor passe a usá-lo. O erro fica bem mais "amigável" dessa forma.

### Dando uma pincelada em async e await

Vimos muitas ferramentas maravilhosas. Agora nosso leque de habilidades consegue consumir serviços web. Mas vem cá pra eu contar um negócio... Não acaba por aqui.

Tem mais alguns truques úteis para caso você não tenha se familiarizado bem com as Promises.

Nós apresentamos o... **ASYNC E AWAIT**.

Essas maravilhas nos poupam de ter que criar uma Promise sempre que quisermos criar uma função assíncrona. É rápido e fácil, basta utilizar um `async` antes de definirmos uma função. Então nós substituimos os *resolves* por `returns` e os *rejects* por `throws`. Lembre-se que só podemos usar await dentro de funções com `async` declarado. Nossa função dos gatinhos ficaria assim:

```javascript
const fetch = require("node-fetch");

async function usandoUmaAPI (link) {
  const textoSobreGatinhos = fetch(link)
  .then(response => response.json())
  .then(data => console.log(data.text));
  return textoSobreGatinhos;
}

usandoUmaAPI('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1');
```

Legal, né? Mas ainda não demonstramos o poder do await. Com ele nós indicamos à função ou variável em que chamarmos o retorno da nossa API que é necessário esperar até que nossa resposta seja dada. Vamos à um exemplo ilustrativo:

```javascript
const fetch = require("node-fetch");

const imprimirTexto = async () => {
  const texto = await usandoUmaAPI('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
  console.log(texto)
}

async function usandoUmaAPI (link) {
  const textoSobreGatinhos = fetch(link)
  .then(response => response.json())
  .then(data => data.text);
  return (textoSobreGatinhos);
}

imprimirTexto()
```

Como podemos ver, agora chamamos uma callback para que possamos exemplificar melhor como fazemos uma função esperar pela resposta de uma API. Nesse ponto, você já deve ter notado que levam alguns segundos até nos dar o retorno. Reforçamos a importância de não termos que deixar nosso usuário esperando esses segundos na hora de usar nossos serviços, seria inconveniente.

Note também que usamos uma arrow function dessa vez. Fizemos isso para que você perceba a diferença entre colocar o async em uma função tradicional e uma arrow function.

Por fim, tente tirar o await da nossa callback, ou seja, faremos com que nossa função seja impaciente e não esperará o retorno do API. O que acha que irá acontecer? Teste você mesmo...

### Finalização e fixação

Ufa, quanta coisa, né? Se você ficou meio confuso e acha que não vai conseguir, não se estresse. Essa é uma caminhada longa, você não precisa decorar tudo de cabeça. Vá atrás de outros materias, veja os recursos adicionais e mais importante de tudo: não tenha medo de perguntar. Não se preocupe pois com a prática você irá sentir mais e mais que escrever promises vai ficar mais natural pro seu cérebro e pro seus dedos. Na pior das hipóteses você apenas terá que consultar a documentação e isso não é vergonha alguma. Todo tipo de pessoa desenvolvedora faz isso, desde o Júnior ao Senior.

Para solidificar tudo que aprendemos, porque não fazemos uma quiz? Assim que terminar você pode ir aos exercícios onde colocaremos tudo em prática.

Você pode acessar o Quiz por [aqui.](https://forms.gle/GRBxzcRoznQkCdvj7) Boa sorte.

---

## Exercícios

### Agora, a prática

Agora que você está se familiarizando com Promises, que tal começarmos a fazer uso delas? Abra seu VS Code porque vamos consumir uma API.

1 - O primeiro exercício será sobre o básico das Promises. O desafio é atribuir à Promise a responsabilidade de adivinhar se um número aleatório que lhe darmos por parâmetro é o mesmo que o que a Promise aceita. Basicamente é como se fosse um sorteio.

- Utillize esse código como base para você fazer suas operações:

```javascript
function guessTheNumber() {
  return new Promise((resolve, reject) => {
    // Seu código vai aqui.
  })
}

guessTheNumber()
```

- Dentro da função, crie uma variável que vai receber um número inteiro aleatório entre 1 e 10.

- Crie a lógica da Promise que irá ditar que será exibida a mensagem 'Parabéns, acertou o número em cheio!!!' caso o número aleatório gerado seja 5.

- Crie também a lógica que exiba a mensagem 'Não foi dessa vez...' caso o número não seja compatível com o gerado.

2 - Abra seu VSCode e installe os módulos do Node que lhe permitem usar a função fetch.

- Não tem problema caso você precise de voltar ao conteúdo para checar como é. Faz parte do processo.

- Vamos consumir essa API: [boredapi.com/api/activity](https://www.boredapi.com/api/activity). Abra o URL e dê uma olhada em como o retorno dela é. Essa é uma API que nos sugere atividades para realizarmos.

- Com o node-modules já instalado, instancie sua primeira Promise, dentro dela iremos fazer nossas operações com o resolve e reject.

- Utilize o resolve para retornar o valor da API, lembre-se que a comunicação com os serviços web é responsabilidade do fetch.

- Após isso, utilize um dos métodos que você aprendeu para acessar o valor retornado da API para que seja imprimido no console apenas a chave 'activity'.

- Só para não perdermos o costume, adicione um reject e um catch para tratarmos eventuais erros. Não se esqueça das boas práticas ensinadas.

### Bônus

Até agora trabalhamos com Promises, para não deixar o restante do conhecimento abandona, porque não tentamos realizar o exercício 2 mas dessa vez com async e await?

Caso se sinta a vontade, tente procurar por outras API's, tem muita coisa divertida pra ser usar nelas. Nós recomendamos procurar usar alguma [deste site](https://apipheny.io/free-api/), pois não necessitam de autenticação ou chave. Mas claro que seria um conhecimento a mais se você buscasse consumir uma que peça.

---

## Recursos adicionais

---
