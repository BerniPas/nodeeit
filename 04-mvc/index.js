
//libreerías
const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./router/userRouter');
const hbs = require('hbs');


// configuración de hbs
app.set('view engine', 'hbs');

//consfiguramos la carpeta de las vistas
app.set('views', './views');

//configuramos el directorio de los parciales

//express meddlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

//utilizamos el router como un middleware
app.use('/user', userRouter);
//app.use('/product', productRouter);
//app.use('/admin', adminRouter);
//app.use('/login', loginRouter);


module.exports = app;