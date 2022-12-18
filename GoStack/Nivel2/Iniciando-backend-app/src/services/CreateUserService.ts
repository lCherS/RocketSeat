import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/user';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    console.log(email)
    // Não posso criar um usuario com email duplicado
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });
    console.log('validação de email');
    console.log(checkUserExists);

    if(checkUserExists) {
      console.log('usuario ja existe')
      throw new Error('Email address already exists')
    }

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
