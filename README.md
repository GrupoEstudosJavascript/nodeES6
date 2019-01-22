### Para começar o projeto node com es6 devemos ter as seguintes bibliotecas

#### Desenvolvimento

- babel-cli, babel-preset-env, babel-polyfill, babel-plugin-transform-runtime, babel-watch eslint

#### Produção

- express, cors, compression, morgan, mongoose, body-parser, helmet

Primeiro começar configurando o .babelrc

dados:

{
"presets": ["env"],
"plugins": [["transform-runtime", { "polifill": false, "regenerator": true }]]
}

Fazer configuração do eslint executando: ./node_modules/.bin/eslint --init

adicionar o .editorconfig

criar o arquivo do servidor inicial server.js

Criar os scripts no package.json

"scripts": {
"build": "babel src -d dist",
"dev": "babel-watch src/server.js",
"serve": "npm run build && node dist/server.js",
"start": "npm run build && node dist/server.js"
},
