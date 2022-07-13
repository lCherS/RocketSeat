import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";


class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;
  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if(!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date()
    });
    
    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }


  FindByName(name: string): Specification {
    const specification = this.specifications.find(
      spec => spec.name === name
      );

    return specification;
  }
}

export { SpecificationRepository }