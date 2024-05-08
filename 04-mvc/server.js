const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 9000;
const app = require('./index');

//conectar a la dabase


//levantar el server
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})