const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
require("dotenv").config();
console.log("dotenv loaded");

const app = express();

//Check if .env is being read correctly
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_PORT:", process.env.DB_PORT);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


app.use(bodyParser.json());

app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM public.users');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/login', async (req, res) => {
  console.log(req.query);
  try {
    const {username} = req.query;
    console.log({username});
    const queryText = 'SELECT id FROM public.users WHERE username=$1';
    const result = await pool.query(queryText, [username]);
    console.log(result);
    if (result.rows.length > 0) {
      res.json({ id: result.rows[0].id });
    } else {
      res.status(404).json({ error: 'User not found' });
    }

  } catch (error) {
    console.error('Error fetching username:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    // const {username} = username;
    // const {password} = password;
    console.log({username});
    const queryText = 'SELECT username FROM public.users WHERE username=$1';
    const result = await pool.query(queryText, [username]);
    console.log(result);
    if (result.rows.length > 0) {
      res.json({ id: result.rows[0].id });
      res.status(404).json({ error: 'User already exists' });
    } else {
      const insert = `
                INSERT INTO users (
                    username, 
                    password, 
                    date_created,
                    last_login
                ) VALUES ($1, $2, CURRENT_DATE, NULL);
            `
      const result = await pool.query(insert, [username, password])
      console.log("User Created:" + result)
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
