const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use('/api',userRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//mongooseDB conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() =>console.log("conected to the mongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));