import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import path from 'path';
import { AppError } from '../erros/AppError';

import { IMailProvider, IMessage } from './IMailProvider';

class MailTemplateProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    let htmlToSend: string
    try{

      const filePath = path.resolve('src','email', message.template);
      const source = fs.readFileSync(filePath, 'utf-8').toString();
      const template = handlebars.compile(source);
      htmlToSend = template(message.replacements);

    }catch(err){
      throw new AppError('template is not existe');
    }

    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: htmlToSend,
    });
  }
}

export { MailTemplateProvider };
