const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//database
const {mongoose} = require('./database');

const PORT = process.env.PORT || 3000;

//routes
app.use('/restaurantes', require('./routes/restaurantes.routes'));

//listen 
app.listen(PORT,()=>{
    console.log(`connect on port ${PORT}`);
});