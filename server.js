const express = require("express");
const db = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({ message: "Task API is running" });
});

// GET all tasks
app.get("/tasks", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tasks ORDER BY id");

        const tasks = result.rows.map(task => ({
            id: task.id,
            title: task.title,
            done: task.done
        }));

        res.json(tasks);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
});

// GET task by ID
app.get("/tasks/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const result = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// POST create task
app.post("/tasks", async (req, res) => {

    try {

        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                error: "Title is required"
            });
        }

        const result = await db.query(
            "INSERT INTO tasks(title, done) VALUES($1,$2) RETURNING *",
            [title, false]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// PUT update task
app.put("/tasks/:id", async (req, res) => {

    try {

        const { id } = req.params;
        const { title, done } = req.body;

        const existing = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (existing.rows.length === 0) {

            return res.status(404).json({
                error: "Task not found"
            });

        }

        const updatedTitle =
            title !== undefined ? title : existing.rows[0].title;

        const updatedDone =
            done !== undefined ? done : existing.rows[0].done;

        const result = await db.query(
            `UPDATE tasks
             SET title=$1, done=$2
             WHERE id=$3
             RETURNING *`,
            [updatedTitle, updatedDone, id]
        );

        res.json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// DELETE task
app.delete("/tasks/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const result = await db.query(
            "DELETE FROM tasks WHERE id=$1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({
                error: "Task not found"
            });

        }

        res.json({
            message: "Task deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});