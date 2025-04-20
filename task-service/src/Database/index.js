require("dotenv").config();

const { Sequelize } = require("sequelize");
const isDocker = process.env.NODE_ENV === 'docker';

const sequelize = new Sequelize(
  isDocker ? process.env.DOCKER_DB_NAME : process.env.taskDb_Name, 
  isDocker ? process.env.DOCKER_DB_USER : process.env.DB_USER, 
  isDocker ? process.env.DOCKER_DB_PASS : process.env.DB_PASS,
   {
  host: isDocker ? process.env.DOCKER_DB_HOST : process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL - Task Service"))
  .catch((err) => console.error("Unable to connect:", err));

module.exports = sequelize;


