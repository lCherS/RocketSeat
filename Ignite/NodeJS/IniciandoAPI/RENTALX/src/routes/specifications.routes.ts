import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementatios/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase';
import { listSpecificationController } from '../modules/cars/useCases/ListSpecification';

const specificationRoutes = Router();

const specificationsRepository = SpecificationRepository.getInstance()

specificationRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
})

specificationRoutes.get('/', (req, res) => {
  return listSpecificationController.handle(req, res);
})


export { specificationRoutes }


