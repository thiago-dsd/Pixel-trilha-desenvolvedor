// Crie sua função aqui
async function delayedSumArray (lista){
  return sumAPI(lista)
   .then((arrayPreenchido) => console.log(arrayPreenchido))
   //esse .message não faz sentido na minha mente!
   //eu não vejo sentido colocar .message na promisse rejeitada
   //e não colocar .message na aceita
   .catch((arrayVazio) => console.log(arrayVazio.message))
}


// Não altere as linhas abaixo

// Funções auxiliares
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function sumAPI(array) {
  const delay = getRandomNumber(1000, 5000)
  return new Promise((resolve, reject) => {
    if (array.length > 0) {
      setTimeout(() => {
        resolve(array.reduce((acc, cur) => acc + cur, 0))
      }, delay)
    } else {
      reject(new Error('Erro: array está vazio'))
    }
  })
}

// Isso se chama IIFE em javascript, pesquise para saber mais sobre
(async () => {
  await delayedSumArray([0, 1, 2, 3, 4, 5])
  await delayedSumArray([0])
  await delayedSumArray([])
})()


/*
  TENTATIVA DE RESOLUÇÃO QUE DEU ERRADO
  async function delayedSumArray (lista){
    let valor = 0;
    valor = await sumAPI(lista)
    return console.log(valor)
  }
*/