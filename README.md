# Task CRUD API using SQLite

A simple RESTful CRUD API built using **Node.js**, **Express.js**, and **SQLite**. The API allows users to create, read, update, and delete tasks while storing data permanently in a SQLite database.

---

## Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Data persists after server restarts

---

## Technologies Used

- Node.js
- Express.js
- SQLite
- sqlite3

---

## Why SQLite?

SQLite is a lightweight, serverless database that stores data in a single file. It was chosen because it is easy to set up, requires no separate database server, and is ideal for small backend projects and learning SQL.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/manshi-n/be-01-first-endpoint.git
```

### Open the project

```bash
cd be-01-first-endpoint
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node server.js
```

The server runs at:

```
http://localhost:3000
```

---

## Database

The SQLite database file is stored as:

```
tasks.db
```

The database and `tasks` table are created automatically when the application starts. If the table is empty, three sample tasks are inserted automatically.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Home route |
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get a task by ID |
| POST | /tasks | Create a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

---

## Example SQL Query

```sql
SELECT * FROM tasks;
```

Other SQL queries executed:

```sql
SELECT * FROM tasks WHERE done = 1;

SELECT COUNT(*) FROM tasks;

UPDATE tasks SET done = 1;

DELETE FROM tasks WHERE done = 1;
```

---

# SQL Query Screenshot

![SQL Query Result](1.jpg.png)

---

# Database Screenshot

![SQLite Database](2.jpg.png)

---

## Author

**Manshi **

GitHub: https://github.com/manshi-n