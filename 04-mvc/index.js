
//libreerías
const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./router/userRouter');



//express meddlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World')
});

//utilizamos el router como un middleware
app.use('/user', userRouter);




module.exports = app;