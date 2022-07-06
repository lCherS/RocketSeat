import express from 'express';


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log('hello dark')
})

app.listen(3333, () => { console.log('rodnado')});