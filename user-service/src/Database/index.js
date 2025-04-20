require("dotenv").config();
const { Sequelize } = require("sequelize");

const isDocker = process.env.NODE_ENV === 'docker';

const sequelize = new Sequelize(
  isDocker ? process.env.DOCKER_DB_NAME : process.env.userDb_Name, 
  isDocker ? process.env.DOCKER_DB_USER : process.env.DB_USER,     
  isDocker ? process.env.DOCKER_DB_PASS : process.env.DB_PASS,     
  {
    host: isDocker ? process.env.DOCKER_DB_HOST : process.env.DB_HOST, 
    dialect: "postgres",       
    logging: false,            
  }
);

(async () => {
  try {
    await sequelize.authenticate(); 
    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true }); 
    console.log("Tables synchronized successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();

module.exports = sequelize;



