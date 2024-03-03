const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

app.use(bodyParser.json());z

let records = []; 

app.get('/api/records', (req, res) => {
  res.json(records);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
