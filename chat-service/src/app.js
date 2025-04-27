const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db.js");
const chatRoutes = require("./routes/chatRoutes.js");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());


app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.get('/', (req, res) => {
    res.send('Chat Service ')
  })

app.use("/public", express.static("public"));

app.use("/api/chat", chatRoutes);



module.exports = app;
