# Configurações do VS Code para a trilha NodeJS

## Modulos
```Terminal
yarn typescript -D
yarn eslint -D
yarn add express
yarn

```
  - 
  - 
  - 
  - eslint -- Extensão
  - 
## EditorConfig

```json
/**
  Uma outra configuração que é geral e precisamos fazer para o VSCode
  formatar o código sempre que salvarmos algum arquivo é adicionar uma opção
  chamada codeActionsOnSave nas configurações, assim como mostrado abaixo:
**/
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
## Bash
```bash
yarn eslint --init

yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest

yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
```

## S.O.L.I.D

S -> SRP - Single Responsability Principle - Principio da responsabilidade unica
O -> OCP -Open-Closed Principle - principio aberto/fechado
L -> LSP  - Liskov Substituion Principle - principio de substituição de Liskov
I -> ISP  - Interface Segregation Principle - Principio de Segregação de interface
D -> DIP - Dependency Inversion Principle - Principio de inversão de dependencia