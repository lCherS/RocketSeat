import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'aplicação iniciada'})
})

app.listen(3333, () => { 
  console.log('aplicação iniciada')
})