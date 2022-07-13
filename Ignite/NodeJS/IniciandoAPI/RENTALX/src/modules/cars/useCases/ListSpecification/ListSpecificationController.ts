import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private ListSpecificationUseCase: ListSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {

    const all = this.ListSpecificationUseCase.execute();
    return res.json(all)
  }
}

export { ListSpecificationController }