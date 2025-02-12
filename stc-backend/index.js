const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // Ensure you have node-fetch installed

const app = express();
app.use(cors());

app.get("/api/schedule", async (req, res) => {
  try {
    const { startDate, endDate } = req.query; // Get dates from query parameters

    // Validate date format (Optional)
    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ error: "startDate and endDate are required" });
    }

    const response = await fetch(
      `https://play.tennis.com.au/v0/BookACourtVenue/eastmalverntennisclub/GetVenueSessions?resourceID=&startDate=${startDate}&endDate=${endDate}&roleId=&_=1739346143894`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
