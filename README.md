# DevNotes API

API RESTful construída em **TypeScript** para o backend do projeto DevNotes — um sistema de gerenciamento de notas e categorias.

Este repositório contém o backend da aplicação, incluindo rotas, lógica de negócio, modelos de dados com Prisma e configuração para execução local em desenvolvimento e produção. :contentReference[oaicite:1]{index=1}

---

## 📌 Funcionalidades

- Endpoints REST para **criar**, **listar**, **atualizar** e **deletar** notas.
- Possibilidade de organizar notas por categorias.
- Validação e tratamento de erros.
- Configuração com **Prisma ORM** para acesso ao banco de dados.
- Scripts para facilitar o desenvolvimento e deploy.

---

## 🚀 Tecnologias

O projeto utiliza as seguintes tecnologias:

| Tecnologia | Uso |
|------------|-----|
| TypeScript | Linguagem principal do backend |
| Node.js | Ambiente de execução |
| Express (ou similar) | Framework para rotas HTTP |
| Prisma | ORM para banco de dados SQL |
| Docker + Docker Compose | Facilita o ambiente de desenvolvimento |
| ts-node-dev | Hot reload em TypeScript |

---

## 📁 Estrutura

```text
devnotes-api/
├─ prisma/                   # Esquema e configuração do banco
├─ src/
│  ├─ controllers/          # Lógica dos endpoints
│  ├─ routes/               # Definição de rotas
│  ├─ database/             # Configuração do banco de dados
│  ├─ middlewares/          # Middlewares (ex: erros, validação)
│  └─ server.ts             # Ponto de entrada da aplicação
├─ .env-example             # Exemplo de variáveis de ambiente
├─ docker-compose.yml       # Configuração Docker
├─ tsconfig.json            # Config TypeScript
├─ package.json             # Scripts e dependências
└─ README.md                # Documentação que você está lendo
