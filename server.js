const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User } = require('./sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// create route user
app.post('/users/register', (req,res) =>{
    data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    User.create(data).then(user => {
        res.json(user);
    })
});

app.listen(3000, () => {
    console.log('listen in port 3000');
});