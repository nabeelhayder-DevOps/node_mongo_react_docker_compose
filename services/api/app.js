const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/category');
const { helperParser } = require('./helpers/parseHelper');
const Post = require('./models/post');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/category', categoryRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.StatusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message,
        data
    })
})

// localhost:27017/categories

mongoose
    .connect(        
        'mongodb://mongo/categories', { useNewUrlParser: true}
    )
    .then(result => {
        app.listen(3010);
        
        Post
        .find()
        .then(res => {            
            if(res.length === 0) { 
                helperParser();                               
            }
        })      
        .catch(err => console.log(err));
        console.log('Server is run')  
    })
    .catch(err => console.log(err));