const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/schedule", async (req, res) => {
  try {
    const response = await fetch(
      "https://play.tennis.com.au/v0/BookACourtVenue/eastmalverntennisclub/GetVenueSessions?resourceID=&startDate=2025-02-05&endDate=2025-02-05&roleId=&_=1739346143894"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
