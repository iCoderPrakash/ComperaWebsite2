const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const  quthRoutes = require("./routes/auth.route");
const dbConnect =require('./db/dbConnect');

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", quthRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});