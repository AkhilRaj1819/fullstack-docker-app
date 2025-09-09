const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 5000;

// ✅ Enable CORS
app.use(cors({
  origin: ['http://localhost:3000','localhost:5173'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

const dbClient = new Client({
  host: process.env.DB_HOST || 'db',  // note: use 'db' as host because of docker-compose service name
  user: process.env.DB_USER || 'example',
  password: process.env.DB_PASSWORD || 'example',
  database: process.env.DB_NAME || 'example',
  port: process.env.DB_PORT || 5432,
});


dbClient.connect()
  .then(() => console.log('✅ Connected to Postgres'))
  .catch((err) => console.error('❌ Failed to connect to Postgres', err));

app.get('/api', async (req, res) => {
  try {
    const result = await dbClient.query('SELECT NOW() AS time');
    res.send(`Hello from Express + Postgres! 🐘 Server time: ${result.rows[0].time}`);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).send('Database error');
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
