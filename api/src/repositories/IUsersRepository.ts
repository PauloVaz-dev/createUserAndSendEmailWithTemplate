import { User } from '../models/User';

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  find(): Promise<User[]>;
  create({ name, email }: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
