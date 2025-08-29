const { processDataArray } = require('../lib/processData');
const { FULL_NAME, DOB, EMAIL, ROLL_NUMBER } = require('../config');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ is_success: false, error: 'Method Not Allowed. Use POST.' });
  }
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
};