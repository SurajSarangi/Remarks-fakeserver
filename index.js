require('dotenv').config()

const controller = require('./controller');

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log("Connected to db.");
    app.listen(PORT, ()=>{
        console.log(`Listening to requests on http://localhost:${PORT}`);
    });
}).catch(err => console.log(err.message||"Error connecting to db."));

app.get("/", controller.getRemarks);

app.post("/", controller.addRemark);