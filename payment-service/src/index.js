require("dotenv").config();
const sequelize = require("./database/index.js");  
const app = require("./app.js");

const PORT = process.env.PORT;

 sequelize.authenticate()
  .then(() => {
    console.log("Database connection successful!");

     app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});
