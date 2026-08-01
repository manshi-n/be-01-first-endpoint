# BE-01 First Endpoint

A simple Node.js + Express REST API connected to PostgreSQL using Docker Compose.

## Features

- REST API built with Express.js
- PostgreSQL database integration
- Dockerized application
- Environment variable configuration
- Database initialization using SQL script
- Health-checked PostgreSQL service

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL 16
- Docker
- Docker Compose

---

## Project Structure

```
be-01-first-endpoint/
│
├── database/
│   ├── db.js
│   └── init.sql
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── server.js
├── .env.example
├── README.md
└── .gitignore
```

---

## Prerequisites

- Docker Desktop
- Docker Compose
- Git

---

## Environment Variables

Create a `.env` file using the following template.

```env
PORT=3000

DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=tasksdb
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/<your-username>/be-01-first-endpoint.git
```

Go into the project directory.

```bash
cd be-01-first-endpoint
```

---

## Running the Project

Build and start all services.

```bash
docker compose up --build
```

To stop the application.

```bash
docker compose down
```

To remove containers and database volume.

```bash
docker compose down -v
```

---

## Database

The PostgreSQL database is automatically initialized using

```
database/init.sql
```

The default database credentials are

| Variable | Value |
|----------|-------|
| Host | db |
| Port | 5432 |
| User | postgres |
| Password | postgres |
| Database | tasksdb |

---

## API

The server starts on

```
http://localhost:3000
```

Example:

```
GET /
```

Response

```json
{
  "message": "API is running"
}
```

> Replace the example above with your actual endpoint responses if they differ.

---

## Docker Services

### API

- Express.js application
- Port **3000**

### Database

- PostgreSQL 16
- Port **5432**

---

## Useful Commands

Build and run

```bash
docker compose up --build
```

Run in background

```bash
docker compose up -d
```

Stop containers

```bash
docker compose down
```

Remove containers and volumes

```bash
docker compose down -v
```

View logs

```bash
docker compose logs
```

View logs for API only

```bash
docker compose logs api
```

---

## Sample Output

```
🚀 Server running on http://localhost:3000
✅ Connected to PostgreSQL
```

---

## Author

**Manshi Negi**

GitHub: https://github.com/<your-username>