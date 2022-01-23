
const express = require('express');
const conectarDB = require('./config/db.js');


const app = express();

conectarDB();

const PORT  = process.env.PORT || 3000;


app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
});