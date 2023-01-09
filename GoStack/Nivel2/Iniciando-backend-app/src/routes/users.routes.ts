import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from 'date-fns';
import multer from 'multer';

import uploadConfig from "../config/upload";
import CreateUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

// Uma rota deve apenas ser responsavel por receber os dados, chamar outro arquivo para tratar, e devolver uma resposta

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password
  })

  delete user.password;

  return res.json(user);
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req, res) => {
  const updateUserAvatar = new UpdateUserAvatarService();

  const user = await updateUserAvatar.execute({
    user_id: req.user.id,
    avatarFilename: req.file.filename
  })

  delete user.password;

  return res.json({user})
})

export default usersRouter;
