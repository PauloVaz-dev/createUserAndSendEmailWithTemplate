<h1 align="center">
  Dependency Injection -
    <a href="https://github.com/microsoft/tsyringe">
    tsyringe
  </a>
</h1>

<h4 align="center">
	🚧  Dependency Injection -
    <a href="https://github.com/microsoft/tsyringe">
      tsyringe
    </a>
    📊 Concluído ✅ 🚧
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


O projeto se destina para envio de email e salvando os dados no banco, contudo uso de alguns dos princípios do SOLID, [S]ingle Responsibility Principle, [L]iskov Substitution Principle e [D]ependency Inversion Principle, para ajudar em alguns desses principios, uso do pacote de injeção de dependências chamado
    <a href="https://github.com/microsoft/tsyringe">
      tsyringe
    </a>
    . Ele permite automatizar a injeção de dependências.

---


## Funcionalidades

- [x] Cadastro de usuário
  - [x] Envio de email com um template
- [x] Listagem de todos os usuários


---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Primeiro Passo

```bash

# Clone este repositório
$ git clone https://github.com/JonasCastro/dependency-injection-tsyringe.git

# Acesse a pasta do projeto no terminal/cmd
$ cd dependency-injection-tsyringe

```

#### 🎲 Configurando as credenciais do EMAIL

```bash

# Altere o arquivo .env e coloque sua credencias da seu email
EMAIL_HOST=mail.dominio.com.
EMAIL_PORT=port
EMAIL_USER=email
EMAIL_PASSWORD=password


```

#### 🎲 Rodando o Backend (servidor)

```bash

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3001


```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/JonasCastro/fullstack-challenge-cotabox#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Tsyringe](https://github.com/microsoft/tsyringe)**
-   **[TypeOrm](https://github.com/microsoft/tsyringe)**
-   **[Multer](https://github.com/microsoft/tsyringe)**
-   **[TypeScript](https://github.com/microsoft/tsyringe)**


> Veja o arquivo  [package.json](https://github.com/JonasCastro/dependency-injection-tsyringe/blob/master/package.json)

#### [](https://github.com/jonascastro/dependency-injection-tsyringe#utilit%C3%A1rios)**Utilitários**


-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[ESlintJS](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**, **[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   README Template:  **[README-ecoleta](https://github.com/tgmarinho/README-ecoleta/blob/master/README.md)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**


---


## Autor

Paulo Vaz

[![Linkedin Badge](https://img.shields.io/badge/-Jonas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonas-castro-b4044111a/)](https://www.linkedin.com/in/paulovaz-dev/)

---

## :memo: Licença

Licença [MIT](./LICENSE).

---
Feito com :blue_heart: por Paulo Vaz :wave: [Entre em contato!](https://www.linkedin.com/in/paulovaz-dev/)
# tsyringe
