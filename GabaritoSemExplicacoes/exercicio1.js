function guessTheNumber() {
  const randomNumber = parseInt(Math.random() * 10);
  return new Promise((resolve, reject) => {
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