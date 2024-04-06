# Projeto pass.in - Next Level Week(NLW): Rockeseat

## Sobre o projeto

E uma aplicaçao de **gestão de participantes em eventos presenciais**. A ferramenta ira permitir que o organizador cadastre um evento e 
abra uma pagina de inscriçao, e os participantes inscritos no evento podem emitir uma credencial para checkin no dia do 
evento. O sistema fara um scan da credencial usando QRCode, permitindo a entrada do participante no evento.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;

- [x] O organizador deve poder visualizar dados de um evento;

- [x] O organizador deve poser visualizar a lista de participantes;

- [x] O participante deve poder se inscrever em um evento;

- [x] O participante deve poder visualizar seu crachá de inscrição;

- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;

- [x] O participante só pode se inscrever em eventos com vagas disponíveis;

- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Tecnologias
- **Node.js >= v20.10.0**
- **NPM >= v10.2.5**
- **Fastify >= v4.26.x**
- **Zod >= v3.22.4**
- **TypeScript >= v5.4.4**
- **Prisma >= v5.12.1**
- **fastify-type-provider-zod**

## Documentaçao da API (Swagger)

**fastify-swagger >= v8.14.0**

Para documentação da API.

## Banco de dados

**SQLite >= v3.45.2**

Nessa aplicação utilizamos o banco de dados ralacional (SQL). Para o desenvolvimento seguimos com o SQLite pela facilidade do ambiente.

## Diagrama ER

<img src="./.github/erd.svg" style="background-color: white">

## Como utilizar a aplicação

### E necessario ter o Node.js e o Git instalado

- Criar uma pasta para o projeto

```bash
~ mkdir project
```

- Clonar o projeto na pasta

```bash
project > git clone <esse_projeto>
```

- Instalar as dependencias

```bash
project/pass-in-NLW > npm i 
```

- Migrar as tebelas do banco de dados

```bash
project/pass-in-NLW > npm run db:migrate
```
- Utilizar a aplicação

```bash
project/pass-in-NLW > npm run dev
```