# Church APP API

## Introdução

Esse é um projeto para pessoal a fim de estudar as tecnologias: NodeJS, TypeScript e Desgn Patterns, e em futuro proximo será a base de api para estudos em ReactJS, VueJS e React Native

## Techs

Confome desenvolvemos o projeto, atualizar quais tecnologias estamos utilizando

* NodeJS: Linguagem de programação javascript;
* TypeScript: TypeScript é uma linguagem de código aberto que se baseia no JavaScript;
* Express: O Express é um framework para aplicativo da web do Node.js
* TypeOrm: TypeORM é um ORM que pode ser executado em NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native e etc...
* yarn: Yarn é um gerenciador de pacotes que também atua como gerente de projeto
* Docker: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres
* Docker-Compose: Compose é uma ferramenta para definir e executar aplicativos Docker de vários contêineres
* [postgres](https://www.postgresql.org): Bando de dados relacional para armazenamento de informaçõe.


## Requisitos

* Instalar o nodeJS ^14.0.1 [Instruções: https://github.com/nvm-sh/nvm#readme];
* Instalar o Yarn [Instruções: https://yarnpkg.com/getting-started/install]
* Instalar o Docker [https://docs.docker.com/engine/install/ubuntu/ | https://docs.docker.com/engine/install/windows/ | https://docs.docker.com/engine/install/wsl/];
* Instalar o Docker-Compose [https://docs.docker.com/engine/install/ubuntu/]
* Clonar este Repositorio:
  git clone git clone https://github.com/warleyhenrique/app-church-api.git
* instalar as dependencias com o Yarn
  yarn install
* instalar o container docker do Postgrees, rodando o seguinte comando na raiz do projeto:
  docker-compose -up
* Criar as tabelas no banco:
  yarn typeorm migration:run
* executar o Projeto:
  yarn dev
