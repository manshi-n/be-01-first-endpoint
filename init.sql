CREATE TABLE IF NOT EXISTS tasks(

id SERIAL PRIMARY KEY,

title TEXT NOT NULL,

done BOOLEAN DEFAULT FALSE

);

INSERT INTO tasks(title,done)

VALUES

('Learn Docker',false),

('Learn PostgreSQL',false),

('Deploy Backend',false);