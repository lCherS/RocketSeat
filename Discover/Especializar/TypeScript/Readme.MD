# TypeScript
Traz as tipagens ao JavaScript para fortalecer a linguagem como uma suplementação ao natual.

- Ajuda a encontrar erros antes da execução.
- Tipagem de variaveis para impedir erros.

```typescript
type TUser = {
  id: number,
  name: string
}

interface IUser {
  id: number,
  name: string
}
```

## Tipos Primitivos
  - boolean
  - string
  - number

## Tipos para arrays
  - numbers: number[]
  - string: string[] | string Array<string>

## Tipos para funções
  - function (): void{}
    - Função que não retorna nada

## Mais tipos
  - Para retornar mais de um tipo na tipagem, utiliza-se **|**
  - Generic: Tipagem livre, mas depois da 1 atribuiçao, só receberá aquele tipo de valor.
    - Convenções: T => type | K => key | V => value |  E => element
 
## Opções
  - isAdmin **?**: boolean -- a interregação serve para deixar o tipo (parametro) como opcional
  - type info = User **&** nick -- Atribui as 2 tipagens para um outro tipo.

## TS Config
Arquivo configurador para a melhor utilização do TS de acordo com o que esta trabalhando.