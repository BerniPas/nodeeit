
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
hbs.registerPartials(__dirname + '/views/partials');    


//express meddlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static('public'));

//utilizamos el router como un middleware
app.use('/user', userRouter);
//app.use('/product', productRouter);
//app.use('/admin', adminRouter);
//app.use('/login', loginRouter);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res) => {
    res.render('error');
});




module.exports = app;