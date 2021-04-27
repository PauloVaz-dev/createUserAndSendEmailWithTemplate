import { injectable, inject } from 'tsyringe';
import { AppError } from '../../erros/AppError';

import { User } from '../../models/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
    @inject('MailTemplateProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ name, email }: IRequest): Promise<User> {

    if(!name || !email){
      throw new AppError('Email and Name are requered');
    }
    const checkUserExist = await this.userRepository.findByEmail(email);

    console.log('check ',checkUserExist)

     if (checkUserExist) {
       //throw new AppError('Email already is used', 400);
     }

    await this.userRepository.create({ name, email });

    // await this.mailProvider.sendMail({
    //   from: {
    //     email: 'paulo@eprimesoft.com',
    //     name: 'Paulo Vaz',
    //   },
    //   to: {
    //     email,
    //     name,
    //   },
    //   subject: 'Bem vindo',
    //   template: 'template.html',
    //   replacements: {
    //     name,
    //   },
    // });

    return checkUserExist;
  }
}

export { CreateUserUseCase };
