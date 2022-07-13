import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementatios/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationRepository()

specificationRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
})

specificationRoutes.get('/', (req, res) => {

  const all = specificationsRepository.list();
  return res.json(all);
})


export { specificationRoutes }


