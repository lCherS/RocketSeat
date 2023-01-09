import { Router } from "express";

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRouter = Router();


sessionRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email, password
    })

    delete user.password;

    return res.json({ user, token });
  } catch (e: any) {
    return res.status(e.statusCode).json({ error: e.message })
  }
})

export default sessionRouter;
