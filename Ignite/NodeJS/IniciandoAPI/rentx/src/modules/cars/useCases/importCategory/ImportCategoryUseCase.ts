import fs from 'fs';
import {parse as csvParse}  from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepositoy: ICategoriesRepository) {}
  
   loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
  
      const parseFile = csvParse();
  
      stream.pipe(parseFile)
  
      parseFile.on('data', async (line) => {
        // console.log(line);
        const [name, description] = line; 
        categories.push({
          name,
          description
        })
      })
    .on('end', () =>{
      resolve(categories)
    })
    .on('error', (err) => {
      reject(err)
    })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
   const categories =  await this.loadCategories(file)
   
   console.log(categories);

   categories.map(async category => {
    const { name, description } = category;

    const existCategory = this.categoriesRepositoy.findByName(name);

    if(!existCategory) {
      this.categoriesRepositoy.create({
        name,
        description
      })
    }
   })

  }
}

export { ImportCategoryUseCase }