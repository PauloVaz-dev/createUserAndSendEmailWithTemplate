import { container } from 'tsyringe';

import { IMailProvider } from '../../providers/IMailProvider';
import { MailTemplateProvider } from '../../providers/MailTemplateProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { UsersRepository } from '../../repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IMailProvider>(
  'MailTemplateProvider',
  MailTemplateProvider,
);
