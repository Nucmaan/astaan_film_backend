const express = require('express');
const notificationRoutes = require('./routes/notificationRoutes.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Notification Service ')
  })

app.use('/api/notifications', notificationRoutes);


module.exports = app;



