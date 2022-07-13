import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";



class ListSpecificationUseCase { 

  constructor(private specificationRepository: ISpecificationsRepository) {

  }

  execute(): Specification[] {
    const categories = this.specificationRepository.list();

    return categories;
  }
}

export { ListSpecificationUseCase }