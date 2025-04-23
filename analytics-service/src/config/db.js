const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    console.log(`Connecting to MongoDB at: ${mongoUrl}`);
    
    await mongoose.connect(mongoUrl);

    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;



