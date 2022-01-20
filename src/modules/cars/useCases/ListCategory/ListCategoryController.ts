import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCaregoryUseCase: ListCategoryUseCase) {
    this.listCaregoryUseCase = listCaregoryUseCase
  }
  
  handle(req: Request, res: Response) {
    const allCategories = this.listCaregoryUseCase.execute()
    res.status(200).json(allCategories)
  }
}

export { ListCategoryController }