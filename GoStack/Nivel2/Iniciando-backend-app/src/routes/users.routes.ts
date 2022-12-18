import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from 'date-fns';

import CreateUserService from "../services/CreateUserService";

// Uma rota deve apenas ser responsavel por receber os dados, chamar outro arquivo para tratar, e devolver uma resposta

const usersRouter = Router();


usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    })

    return res.json(user);
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
})

export default usersRouter;
