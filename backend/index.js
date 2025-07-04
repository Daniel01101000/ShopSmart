import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

// Usa un puerto diferente al 3000 para evitar conflictos con React/Vite
const port = process.env.PORT || 5000;

// Conexión a la base de datos Railway
const db = await mysql.createConnection({
  host: 'trolley.proxy.rlwy.net',
  port: 29269,
  user: 'root',
  password: 'PdIIEIEIcJWuVKfVSPJyZwsMUgWzHhrf',
  database: 'railway',
});

// Ruta para obtener productos
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`✅ API listening on http://localhost:${port}`);
});