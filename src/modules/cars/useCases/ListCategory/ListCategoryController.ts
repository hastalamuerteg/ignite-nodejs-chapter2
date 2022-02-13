import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCaregoryUseCase: ListCategoryUseCase) {
    this.listCaregoryUseCase = listCaregoryUseCase
  }
  
  async handle(req: Request, res: Response) {
    const allCategories = await this.listCaregoryUseCase.execute()
    res.status(200).json(allCategories)
  }
}

export { ListCategoryController }