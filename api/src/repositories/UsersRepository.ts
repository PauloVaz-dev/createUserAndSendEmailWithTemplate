import { getRepository, Repository } from 'typeorm';

import { AppError } from '../erros/AppError';
import { User } from '../models/User';
import { IUsersRepository, ICreateUserDTO } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async find(): Promise<User[]> {
    const user = await this.userRepository.find();
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const findInSameName = await this.userRepository.findOne({ email });
    return findInSameName;
  }

  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const findInSameName = await this.userRepository.findOne({ name });

    const user = this.userRepository.create({
      name,
      email,
    });

    await this.userRepository.save(user);

    return user;
  }
}

export { UsersRepository };
