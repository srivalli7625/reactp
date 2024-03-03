const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'customers',
  password: 'Amm@123',
  port: 5432,
});

app.get('/api/records', async (req, res) => {
  const { search, sort, page } = req.query;
  const limit = 20;
  const offset = (page - 1) * limit;

  const query = `
    SELECT * FROM (
      SELECT 
        sno, 
        customer_name, 
        age, 
        phone, 
        location, 
        created_at, 
        EXTRACT(DATE FROM created_at) AS date, 
        //EXTRACT(TIME FROM created_at) AS time,
      FROM customer
    ) AS records_with_date
    WHERE (customer_name ILIKE $1 OR location ILIKE $1)
    ORDER BY ${sort === 'date' ? 'date' : 'time'} ${sort === 'date' ? 'DESC' : 'ASC'}
    LIMIT $2 OFFSET $3
  `;

  const { rows } = await pool.query(query, ['%' + search + '%', limit, offset]);
  res.json(rows);
});

app.listen(5432, () => {
  console.log('Server is running on port 5432');
});