import { response, Router } from 'express';

import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/Categories.Repository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const {name, description} = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'category already exists'});
  }

    categoriesRepository.create({name, description});

  return res.status(201).send(`${name} , ${description}`);
})

categoriesRoutes.get('/', (req, res) => {

  const all = categoriesRepository.list();
  return res.json(all)
})

export { categoriesRoutes }