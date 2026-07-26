const express = require("express");
const db = require("./database/db");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({ message: "Task API is running" });
});

// GET all tasks
app.get("/tasks", (req, res) => {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        const tasks = rows.map(task => ({
            id: task.id,
            title: task.title,
            done: Boolean(task.done)
        }));

        res.json(tasks);
    });
});

// GET task by ID
app.get("/tasks/:id", (req, res) => {

    const id = req.params.id;

    db.get(
        "SELECT * FROM tasks WHERE id = ?",
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    error: "Task not found"
                });
            }

            row.done = Boolean(row.done);

            res.json(row);
        }
    );
});

// POST create task
app.post("/tasks", (req, res) => {

    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    db.run(
        "INSERT INTO tasks (title, done) VALUES (?, ?)",
        [title, 0],
        function (err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            db.get(
                "SELECT * FROM tasks WHERE id = ?",
                [this.lastID],
                (err, row) => {

                    if (err) {
                        return res.status(500).json({
                            error: err.message
                        });
                    }

                    row.done = Boolean(row.done);

                    res.status(201).json(row);
                }
            );
        }
    );
});

// PUT update task
app.put("/tasks/:id", (req, res) => {

    const id = req.params.id;
    const { title, done } = req.body;

    db.get(
        "SELECT * FROM tasks WHERE id = ?",
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    error: "Task not found"
                });
            }

            const updatedTitle =
                title !== undefined ? title : row.title;

            const updatedDone =
                done !== undefined ? (done ? 1 : 0) : row.done;

            db.run(
                "UPDATE tasks SET title=?, done=? WHERE id=?",
                [updatedTitle, updatedDone, id],
                function (err) {

                    if (err) {
                        return res.status(500).json({
                            error: err.message
                        });
                    }

                    db.get(
                        "SELECT * FROM tasks WHERE id=?",
                        [id],
                        (err, updatedTask) => {

                            if (err) {
                                return res.status(500).json({
                                    error: err.message
                                });
                            }

                            updatedTask.done = Boolean(updatedTask.done);

                            res.json(updatedTask);
                        }
                    );
                }
            );
        }
    );
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {

    const id = req.params.id;

    db.get(
        "SELECT * FROM tasks WHERE id=?",
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    error: "Task not found"
                });
            }

            db.run(
                "DELETE FROM tasks WHERE id=?",
                [id],
                function (err) {

                    if (err) {
                        return res.status(500).json({
                            error: err.message
                        });
                    }

                    res.json({
                        message: "Task deleted successfully"
                    });
                }
            );
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});