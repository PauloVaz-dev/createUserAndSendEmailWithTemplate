<h1 align="center">
  Envio de email com Dependency Injection -
    <a href="https://github.com/microsoft/tsyringe">
    tsyringe
  </a>
</h1>

<h4 align="center">
	🚧 Envio de email com Dependency Injection -
    <a href="https://github.com/microsoft/tsyringe">
      tsyringe
    </a>
    📊 Em construção  🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#wrench-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-executar-o-projeto">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#memo-licença">Licença</a>
</p>

## 💻 Sobre o projeto


O projeto destina-se ao envio de email e salvando os dados no banco, contudo fiz o uso de alguns dos princípios do SOLID, [S]ingle Responsibility Principle, [L]iskov Substitution Principle e [D]ependency Inversion Principle, para ajudar em alguns desses principios, usei do pacote de injeção de dependências chamado
    <a href="https://github.com/microsoft/tsyringe">
      tsyringe
    </a>, permitindo automatizar a injeção das dependências.

---


## Funcionalidades

- [x] Cadastro de usuário
  - [x] Envio de email com um template
- [x] Listagem de todos os usuários
- [ ] Testes


---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Primeiro Passo

```bash

# Clone este repositório
$ git clone https://github.com/PauloVaz-dev/createUserAndSendEmailWithTemplate.git

# Acesse a pasta do projeto no terminal/cmd
$ cd createUserAndSendEmailWithTemplate

```

#### 🎲 Configurando as credenciais do EMAIL

```bash

# Altere o arquivo .env e coloque sua credencias da seu email
EMAIL_HOST=mail.dominio.com.
EMAIL_PORT=port
EMAIL_USER=email
EMAIL_PASSWORD=password

```

#### 🎲 Rodando o Front-end

```bash
# Acesse o diretório
$ cd frontend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O front-end inciará na porta:3000

# Abra seu navegado e digite http://localhost:3000

```

#### 🎲 Rodando o Backend (servidor)

```bash
# Acesse o diretório
$ cd api

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3001

# O template do email estar na pasta src/email

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Tsyringe](https://github.com/microsoft/tsyringe)**
-   **[TypeOrm](https://github.com/microsoft/tsyringe)**
-   **[Multer](https://github.com/microsoft/tsyringe)**
-   **[TypeScript](https://github.com/microsoft/tsyringe)**




## Autor

* **Paulo Vaz** - [LinkedIn](https://www.linkedin.com/in/paulo-vaz-05296a46/)

---

## :memo: Licença

Licença [MIT](./LICENSE).

---
Feito com :blue_heart: por Paulo Vaz :wave: [Entre em contato!](https://www.linkedin.com/in/paulovaz-dev/)
# tsyringe
