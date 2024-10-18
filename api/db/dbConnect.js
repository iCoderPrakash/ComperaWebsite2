const mongoose = require('mongoose');


const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully:", connectionInstance.connection.host);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
};


module.exports = dbConnect;
