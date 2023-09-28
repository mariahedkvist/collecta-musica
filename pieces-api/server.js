const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// endpoints
app.get('/api/v1/pieces', async (req, res) => {
  const url = 'http://localhost:3000/pieces';
  const { data } = await axios.get(url);
  res.status(200).json(data);
});

app.get('/api/v1/pieces/:id', async (req, res) => {
  const param = req.params.id;
  const url = `http://localhost:3000/pieces/${param}`;
  const { data } = await axios.get(url);
  res.status(200).json(data);
});

app.post('/api/v1/pieces', async (req, res) => {
  const url = 'http://localhost:3000/pieces';
  const body = req.body;
  const { data } = await axios.post(url, body);
  res.status(201).json(data);
});

const PORT = 5020;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
