const express = require("express");
const performanceRoutes = require("./routes/performanceRoutes");

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Analytics Service ')
  })

app.use("/api/performance", performanceRoutes);



module.exports = app;
