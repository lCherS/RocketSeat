const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

// Middlewares

function VerifyExistsACcountCPF(req, res, next) {
  const { cpf } = req.headers;
  const customer = customers.find(customer => customer.cpf === cpf);

  if(!customer) {
    return res.status(400).send({ error: "Customer not found" })
  }

  req.customer = customer;

  return next();
}

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const customersAlreadyExist = customers.some(
    (customer) => customer.cpf === cpf)

  if(customersAlreadyExist) {
    return res.status(400).send({
      error: "Customer already exists"
    })
  }
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })

  return res.status(201).send(customers.name);
})

app.get('/statement/', VerifyExistsACcountCPF, (req, res) => {
  //  const { cpf } = req.params;
  //  const { cpf } = req.headers; // ao invez de usar params, podemos utilizar o headers
  const { customer } = req;

  return res.send(customer);
})

app.listen(3333);