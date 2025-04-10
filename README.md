
## Passo a Passo da Configuração

### 1. Instalando o Prisma
1. Instalei as dependências do projeto:
- npm install
2. Criei o arquivo .env com a variável DATABASE_URL 
- DATABASE_URL="file:./dev.db"
3. Executei as migrações:
npx prisma migrate dev



### 3. Criando o arquivo schema.prisma

O Prisma já criou o arquivo `prisma/schema.prisma`. Modifique-o conforme o modelo final:
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Task {
  id        Int     @id @default(autoincrement())
  descricao String
  concluida Boolean @default(false)

  criadaEm DateTime @default(now())

  @@map("tasks")
}

model startup {
  id        Int     @id @default(autoincrement())
  title     String  
  description String
  date      String
  location  String
  capacity  Int?
  category  String?
  price     Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("startups") 
}


## Exemplos de requisições para cada endpoint

- GET ById/startups
http://localhost:4000/startup/1
{
  "id": 1,
  "title": "teste",
  "description": "teste",
  "date": "02-02-2008",
  "location": "teste",
  "capacity": null,
  "category": null,
  "price": null,
  "createdAt": "2025-04-10T18:18:03.968Z",
  "updatedAt": "2025-04-10T18:18:03.968Z"
}

- POST /startups
http://localhost:4000/startup
{
  "title": "teste",
  "description": "teste",
  "date": "02-02-2008",
  "location": "teste",
  "capacity": null,
  "category": null,
  "price": null
}

- PUT /startups/1
http://localhost:4000/startup/1
{
  "id": 1,
  "title": "teste",
  "description": "teste",
  "date": "02-02-2008",
  "location": "teste",
  "capacity": null,
  "category": null,
  "price": null,
  "createdAt": "2025-04-10T18:18:03.968Z",
  "updatedAt": "2025-04-10T18:18:03.968Z"
}

- DELETE /startups/1
http://localhost:4000/startup/1
{
  "message": "Startup deletada com sucesso!"
}

## Tecnologias utilizadas
- Node.js
- Express
- Prisma
- SQLite