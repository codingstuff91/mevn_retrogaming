var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mevn_retrogaming', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

mongoose.connection.on('open', () => {
    console.log("Connected to DB");
});

// Routers
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');

const PORT = process.env.PORT || 3000

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})

module.exports = app;
