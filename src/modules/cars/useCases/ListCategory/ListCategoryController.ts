import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { container } from 'tsyringe'

class ListCategoryController {
  
  async handle(req: Request, res: Response) {
    const listCaregoryUseCase = container.resolve(ListCategoryUseCase)
    const allCategories = await listCaregoryUseCase.execute()
    res.status(200).json(allCategories)
  }
}

export { ListCategoryController }