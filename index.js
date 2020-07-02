const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');
 
const app = express();
const PORT = 3012;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const DB_URL = "mongodb://localhost:27017/devblog"

app.use(cors())

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const routes = require("./routes");

app.use(routes)

app.listen(PORT, () => {
  console.log(`SERVER is running`);
})