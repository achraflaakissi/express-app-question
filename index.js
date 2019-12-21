const express = require("express");
const bodyParse = require("body-parser");

const app = express();

const db = require("./config/db");
const questionRoutes = require("./resources/question/question.routes");
require("dotenv").config();
app.use(bodyParse.json());
app.use("/api/questions", questionRoutes);

db.getConnection(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Serve running at ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });