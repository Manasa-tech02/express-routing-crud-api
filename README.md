# 📦 Express.js Routing — CRUD API

A RESTful CRUD API built with **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

> Built as a learning project to understand Express routing, MVC architecture, middleware, and database integration.

---

## ✨ Features

- ✅ Full **CRUD** operations (Create, Read, Update, Delete)
- ✅ **MVC architecture** — Models, Routes, Controllers
- ✅ **TypeScript** — Fully typed, strict mode
- ✅ **Prisma ORM** — Type-safe database queries & migrations
- ✅ **PostgreSQL** — Relational database
- ✅ Custom **Logger Middleware** — Logs method, URL & timestamp
- ✅ **CORS** enabled
- ✅ **ESLint** + **Prettier** configured

---

## 🧰 Tech Stack

| Technology   | Role                          |
| ------------ | ----------------------------- |
| Express.js   | Web framework                 |
| TypeScript   | Type-safe JavaScript          |
| Prisma ORM   | Database ORM & migrations     |
| PostgreSQL   | Relational database           |
| Nodemon      | Dev server with hot-reload    |
| ESLint       | Code linting                  |
| Prettier     | Code formatting               |

---

## 📁 Project Structure

```
Routing/
├── src/
│   ├── controllers/
│   │   └── userController.ts   # Request handlers (business logic)
│   ├── routes/
│   │   └── userRoutes.ts       # Route definitions
│   ├── models/
│   │   └── userModel.ts        # Type definitions
│   ├── middleware/
│   │   └── loggermiddleware.ts  # Custom logger middleware
│   ├── lib/
│   │   └── prisma.ts           # Prisma client singleton
│   └── index.ts                # App entry point
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Migration files
├── .env                        # Environment variables
├── prisma.config.ts            # Prisma configuration
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [PostgreSQL](https://www.postgresql.org/) installed and running

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/express-routing.git
cd express-routing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root:

```env
PORT=3000
DATABASE_URL="postgresql://username:password@localhost:5432/express_routing?schema=public"
```

> Replace `username` and `password` with your PostgreSQL credentials.

### 4. Run database migration

```bash
npx prisma migrate dev --name init
```

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Start the dev server

```bash
npm run dev
```

Server runs at → `http://localhost:3000` 🚀

---

## 📡 API Endpoints

| Method   | Endpoint      | Body (JSON)                                   | Description       |
| -------- | ------------- | --------------------------------------------- | ----------------- |
| `GET`    | `/`           | —                                             | Health check      |
| `GET`    | `/users`      | —                                             | Get all users     |
| `GET`    | `/users/:id`  | —                                             | Get user by ID    |
| `POST`   | `/users`      | `{ "name": "John", "email": "john@mail.com" }` | Create a user     |
| `PUT`    | `/users/:id`  | `{ "name": "Jane", "email": "jane@mail.com" }` | Update a user     |
| `DELETE` | `/users/:id`  | —                                             | Delete a user     |

---

## 📜 Available Scripts

| Script           | Command                  | Description                         |
| ---------------- | ------------------------ | ----------------------------------- |
| `npm run dev`    | Start dev server         | Hot-reload with nodemon             |
| `npm run build`  | Compile TypeScript       | Output to `dist/`                   |
| `npm start`      | Run production build     | Runs `dist/index.js`                |
| `npm run lint`   | Lint code                | Check for issues with ESLint        |
| `npm run format` | Format code              | Auto-format with Prettier           |
| `npm run migrate`| Run migrations           | Apply Prisma schema to DB           |
| `npm run studio` | Open Prisma Studio       | Visual database browser             |

---

## 🗄️ Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String   @db.VarChar(100)
  email     String   @unique @db.VarChar(100)
  createdAt DateTime @default(now())
}
```

| Field       | Type       | Details                            |
| ----------- | ---------- | ---------------------------------- |
| `id`        | `Int`      | Primary key, auto-increment        |
| `name`      | `String`   | Max 100 characters                 |
| `email`     | `String`   | Unique, max 100 characters         |
| `createdAt` | `DateTime` | Auto-set on creation               |

---

## 📚 What I Learned

1. **Express Routing** — RESTful routes with `Router()`
2. **Route Parameters** — Dynamic URL params (`:id`)
3. **MVC Pattern** — Separating concerns across layers
4. **Middleware** — Custom logger + built-in middleware
5. **Prisma ORM** — Schema, migrations & type-safe queries
6. **TypeScript** — Strict typing for Express handlers
7. **Error Handling** — Validation & try-catch patterns
8. **Environment Variables** — Config with `.env` + `dotenv`

---

## 📄 License

This project is for learning purposes.
