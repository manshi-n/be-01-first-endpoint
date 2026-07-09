# BE-01 — Build Your First API Endpoint

A minimal Node.js server with two JSON endpoints.

## Run it

```bash
node server.js
```

You should see:
```
Server running at http://localhost:3000
```

## Test it

**In your browser**, visit:
- http://localhost:3000/
- http://localhost:3000/status

**With curl:**
```bash
curl http://localhost:3000/
curl http://localhost:3000/status
```

Expected responses:
```json
{"message":"Hello, world!"}
{"status":"ok","uptime":12.345}
```

## Publish to GitHub

1. Create a new **public** repo on GitHub (e.g. `be-01-first-endpoint`).
2. In your project folder:
   ```bash
   git init
   git add server.js README.md
   git commit -m "BE-01: first API endpoint"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Copy the repo URL (e.g. `https://github.com/<your-username>/be-01-first-endpoint`) and paste it into the **Deliverable links** field on the assignment page.
