interface IAddress {
  email: string;
  name: string;
}
interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  template: string;
  replacements?: {
    [key: string]: string;
  };
}
interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}

export { IMailProvider, IMessage };
