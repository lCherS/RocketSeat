import { ValidationError } from "yup"

interface Errors {
  [key: string]: string; 
}

export default function getValidationErrors(err: any): Errors {
  const validationErrors: Errors = {};
  
  err.inner.forEach((error: any) => {
    // validationErrors[error.path.] = error.message
    validationErrors[error.path] = error.message
    console.log(validationErrors[error.name]);
  })
  
  return validationErrors;

}