const express = require('express');
const { processDataArray } = require('./lib/processData');
const { FULL_NAME, DOB, EMAIL, ROLL_NUMBER } = require('./config');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('✅ BFHL API is running. Use POST /bfhl');
});

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body || {};
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "Invalid input: 'data' must be an array" });
    }
    const result = processDataArray(data, { FULL_NAME, DOB, EMAIL, ROLL_NUMBER });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ is_success: false, error: err.message || 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));