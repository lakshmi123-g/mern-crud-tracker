const express = require("express");
//const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();


const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/tracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: true,

    }
);
mongoose.connection
    .once("open", () => {
        console.log("Successfully connected mongoose");
    });


const port = process.env.PORT || 5003;
app.use(cors());
app.use(express.json());
const exerciseRouter = require("./routes/exercises");
app.use('/exercises', exerciseRouter);

const usersRouter = require("./routes/users");
app.use('/users', usersRouter);



app.listen(port, () => {
    console.log(`server is running on port:${port}`);
})

