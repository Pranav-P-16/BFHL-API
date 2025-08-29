const express = require("express");
const app = express();

app.use(express.json());

// POST /bfhl
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];
    const numbers = data.filter((x) => !isNaN(x));
    const alphabets = data.filter((x) => /^[a-zA-Z]$/.test(x));

    const response = {
      is_success: true,
      user_id: "pranav_29082005",
      email: "pranav@example.com",
      roll_number: "EE20BTECH11001",
      numbers,
      alphabets,
      highest_alphabet: alphabets.sort().slice(-1),
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

// GET /bfhl
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

module.exports = app;
