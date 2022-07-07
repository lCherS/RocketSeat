import { response, Router } from 'express';

import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/Categories.Repository';
import { PostgressCategoriesRepository } from '../repositories/PostgressCategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new PostgressCategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const {name, description} = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({name, description});

  return res.status(201).send('Nova categoria Criada');
})

categoriesRoutes.get('/', (req, res) => {

  const all = categoriesRepository.list();
  return res.json(all)
})

export { categoriesRoutes }