# Assincrono e Promisses

Sincrono Funciona em alinhamento, um seguido do outro.
O Processo atual necessita ser finalizado para o proximo ser iniciado.

## Promise
 Objeto com uma promessa de que algo vai ser realizado (Assincrono).

 4 Estagios:
  - **Pending**: Estado inicial, assim que o Objeto da promessa é iniciado.
  - **Fullfilled**: A promessa foi concluida com sucesso.
  - **Rejected**: A promessa foi rejeitada, houve um erro.
  - **Settled**: Seja com sucess ou com erro, ela foi concluida.

## Trocando Promises por Async/Await

```javascript
/*  Promises  */

promessa
  .then(function(response) {
  console.log(response);
})
  .catch(function(error) { 
    console.log(error)
  })
  .finally(function() {
    console.log('sempre executa ao final');
  });
```
```javascript
/*  Async/Await  */
async function () {
  try {
    const result = await promessa;
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('sempre executa ao final');
  }
}
```
  ### Para testes.

[codesandbox.io](https://codesandbox.io/)
