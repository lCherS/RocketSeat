import { getRepository } from 'typeorm';
import User from '../models/user';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    // Não posso criar um usuario com email duplicado
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if(checkUserExists) {
      throw new Error('Email address already exists')
    }

    const user = usersRepository.create({
      name,
      email,
      password
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
