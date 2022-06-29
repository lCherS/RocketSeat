const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolvendo app Node + EJS'
        },
        {
            title: 'E',
            message: 'JS na base de JS para HTML'
        },
        {
            title: 'M',
            message: 'o facin usa-lo'
        },
        {
            title: 'A',
            message: 'prende-se rapidinho'
        },
        {
            title: 'I',
            message: 'ntuitivo e facil'
        },
        {
            title: 'S',
            message: 'uper convencional e belezinha'
        }
    ]
    res.render('pages/index', {
        qualitys: items
    });
})

app.get('/sobre', (req, res) => {
    res.render('pages/about');
})

app.listen(8080);
console.log('girando e rodando')