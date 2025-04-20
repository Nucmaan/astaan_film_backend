require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const   rateLimit  = require('express-rate-limit');


const app = express();

app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];

app.use(
  cors({
    origin: function (origin, callback) {
      if (
        allowedOrigins.length === 0 ||
        allowedOrigins.indexOf(origin) !== -1 ||
        !origin
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    limit: 100,
    standardHeaders: 'draft-8', 
    legacyHeaders: false, 
  message: 'Too many requests from this IP, please try again later.'  
 })

 app.use(limiter)

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/public", express.static("public"));


 const paymentRoutes = require("./route/paymentRoutes.js");

 app.use("/api/payments", paymentRoutes);


module.exports = app;
