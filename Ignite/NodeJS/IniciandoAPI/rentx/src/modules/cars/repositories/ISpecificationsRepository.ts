import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {

  create({name, description}: ICreateSpecificationDTO): void;
  list(): Specification[];
  FindByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO }




/*
0 / 9  / 79  - IRFF
00 nao - FTS
00 - INSS


tipo mensal para todos
*/