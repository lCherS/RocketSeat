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

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === 'credit') {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0)

  return balance;
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

  return res.send(customer.statement);
})

app.post('/deposit',VerifyExistsACcountCPF, (req, res) => {
  const { customer } = req;
  const {desc, amount } = req.body;

  const statementOperation = {
    desc,
    amount,
    create_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation);

  return res.status(201).send(customer.statement);

})

app.post('/withdraw', VerifyExistsACcountCPF, (req, res) => {
  const { customer } = req;
  const { amount } = req.body;

  const balance = getBalance(customer.statement);

  if(balance < amount) {
    return res.status(400).send({ error: "Insuficient Funds!"})
  }

  const statementOperation = {
    amount,
    create_at: new Date(),
    type: "debit"
  }

  customer.statement.push(statementOperation);

  return res.status(201).send("WithDraw Sucessfully.")
})

app.get('/statement/date', VerifyExistsACcountCPF, (req, res) => {
  //  const { cpf } = req.params;
  //  const { cpf } = req.headers; // ao invez de usar params, podemos utilizar o headers
  const { customer } = req;
  const { date } = req.query;

  const dateFormat = new Date(date + " 00:00");
  const statement = customer.statement.filter(
    statement => 
      statement.create_at.toDateString() === new Date(dateFormat).toDateString());

  return res.send(statement);
})

app.put("/account", VerifyExistsACcountCPF, (req, res) => {
  const { name } = req.body;
  const { customer } = req;

  customer.name = name;

  return res.status(201).send(name);
})

app.get('/account', VerifyExistsACcountCPF, (req, res) => {
  //  const { cpf } = req.params;
  //  const { cpf } = req.headers; // ao invez de usar params, podemos utilizar o headers
  const { customer } = req;

  return res.send(customer);
})

app.delete('/account', VerifyExistsACcountCPF, (req, res) => {
  const { customer } = req;

  customers.splice(customer, 1);

  return res.status(204).send('Removido com sucesso')

})

app.get('/balance', VerifyExistsACcountCPF, (req, res) => {
  const { customer } = req;

  const balance = getBalance(customer.statement);

  return res.json(balance)
})

app.listen(3333);