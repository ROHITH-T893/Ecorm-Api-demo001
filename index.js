
const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/connectdb.js");

// Load environment variables
dotenv.config({ path: path.join(__dirname, "config", ".env") });
app.use(express.json());

// CORS Configuration

const whitelist=["https://portfolio-rohith-dev11.netlify.app"]
const corp={
    origin:(origin,callback)=>{
        if(!origin||whitelist.includes(origin)){
            callback(null,true)
        }
        else{
            callback(new Error("Error you are not allowed"))
        }

    },
    optionsSuccessStatus:200
}
const corsOptions = {
    origin: "https://portfolio-rohith-dev11.netlify.app", // Allow only this origin
    optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corp));

// Connect to database
const condb = async () => {
    try {
        await connectdb();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};
condb();

// Define routes
app.use("/api", require(path.join(__dirname, "routes", "products.js")));
app.use("/api", require(path.join(__dirname, "routes", "orders.js")));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App is running on port ${PORT} in ${process.env.NODE_ENV || "development"}`);
});
