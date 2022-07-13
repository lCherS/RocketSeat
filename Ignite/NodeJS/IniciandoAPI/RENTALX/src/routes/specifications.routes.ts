import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationRepository()

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, description })

  return res.status(201).send('Criado');
})

specificationRoutes.get('/', (req, res) => {

  const all = specificationsRepository.list();
  return res.json(all);
})


export { specificationRoutes }


