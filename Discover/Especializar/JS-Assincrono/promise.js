  /*  Promise

let carro = false;
console.log('Solicitando Carro')
const promessa = new Promise((resolve, reject) => {
   carro ? resolve('Chegou!') :  reject('Negado!');
})

console.log('Aguardando')

promessa.
    // Executa e se o retorno for true, mostra o then
  then(result => {
    console.log(result)
  })
    // Retorna caso der algum erro
  .catch(err => {
    console.log(err)
  })
    // Executa ao final, independente do resultado
  .finally(() => {
    console.log('Finalizado')
  })
*/
  // Fetch

fetch('https://api.github.com/users/lCherS')
  .then( res => {
    console.log(res)
  })