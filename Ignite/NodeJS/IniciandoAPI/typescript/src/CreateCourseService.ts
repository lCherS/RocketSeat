
/**
 * name - string
 * duration - number
 * educator - string
 */

type Course = {
  name: string,
  duration?: number,
  educator: string
}

class CreateCourseService {

  execute({duration = 8, educator , name}: Course) {
    console.log(`Cursando: ${name} duracao de ${duration} ensinado por ${educator}`);
  }
}

export default new CreateCourseService;