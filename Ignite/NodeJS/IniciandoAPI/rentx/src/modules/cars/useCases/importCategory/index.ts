import { CategoriesRepository } from "../../repositories/implementatios/Categories.Repository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositoy = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositoy);
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }