import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {
    this.listSpecificationUseCase = listSpecificationUseCase
  }
  
  handle(req: Request, res: Response) {
    const allSpecifications = this.listSpecificationUseCase.execute()
    res.status(200).json(allSpecifications)
  }
}

export { ListSpecificationController }