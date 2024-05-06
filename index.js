const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log("Mongo DB Connected..."))
 .catch((err) => console.log(err))

// Routes
app.get("/", (req, res) => {
    res.send("welcome to memes api key ");
});



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
});
