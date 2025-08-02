const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// ✅ Base route to fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("🎯 Fundraising Portal Backend is Running!");
});

// ✅ Dummy API route
app.get("/api/user", (req, res) => {
  res.json({
    name: "Vishwadeep Kumar Dubey",
    referralCode: "vishwadeep2025",
    amountRaised: 3500,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
