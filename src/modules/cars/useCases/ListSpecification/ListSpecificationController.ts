import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { container } from 'tsyringe'

class ListSpecificationController { 
  async handle(req: Request, res: Response) {
    const listSpecificationUseCase = container.resolve(ListSpecificationUseCase)
    const allSpecifications = await listSpecificationUseCase.execute()
    res.status(200).json(allSpecifications)
  }
}

export { ListSpecificationController }