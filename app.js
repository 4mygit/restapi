const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');

//app.use(bodyParser.urlencoded({extended: false})); // This is for form post
app.use(bodyParser.json()); // application/json


app.use(adminRoutes);
//app.use(shopRoutes);

app.listen(3000);