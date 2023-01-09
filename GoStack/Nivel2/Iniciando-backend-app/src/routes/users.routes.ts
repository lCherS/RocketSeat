import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from 'date-fns';
import multer from 'multer';

import uploadConfig from "../config/upload";
import CreateUserService from "../services/CreateUserService";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

// Uma rota deve apenas ser responsavel por receber os dados, chamar outro arquivo para tratar, e devolver uma resposta

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    })

    delete user.password;

    return res.json(user);
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req, res) => {



  return res.json({ ok: true})
})

export default usersRouter;
