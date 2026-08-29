# Backend REST API — FlyRank A1–A3

A backend REST API project developed as part of the **FlyRank Backend AI Engineering Internship**.

This repository contains the progressive implementation of the first three backend assignments:

- **A1 — Build your first CRUD API**
- **A2 — Connecting to the database**
- **A3 — Containerize your stack**

The project was developed incrementally in the same repository, starting with a basic Express REST API, adding PostgreSQL database integration, and finally containerizing the complete backend stack using Docker Compose.

---

## Assignments

### A1 — Build Your First CRUD API

The first assignment focused on building a REST API using Node.js and Express.js.

### Features

- Express.js REST API
- CRUD operations
- JSON request and response handling
- RESTful API routes
- Basic backend server setup

---

### A2 — Connecting to the Database

The second assignment extended the API by connecting it to a PostgreSQL database.

### Features

- PostgreSQL database integration
- Database-backed task management
- SQL database initialization
- Environment-based database configuration
- CRUD operations connected to PostgreSQL

### Database

The application uses:

- PostgreSQL 16
- `pg` Node.js PostgreSQL client

The database schema is initialized using the SQL initialization script.

---

### A3 — Containerize Your Stack

The third assignment containerized the backend and database so the complete application can be started with Docker Compose.

### Features

- Dockerized Node.js API
- PostgreSQL Docker container
- Docker Compose orchestration
- Persistent PostgreSQL volume
- Environment variable configuration
- PostgreSQL health check
- Service dependency management

The application consists of two services:

```text
┌──────────────────────────┐
│       Node.js API        │
│       Express.js         │
│       Port: 3000         │
└────────────┬─────────────┘
             │
             │ PostgreSQL
             ▼
┌──────────────────────────┐
│      PostgreSQL 16       │
│       Port: 5432         │
└──────────────────────────┘
