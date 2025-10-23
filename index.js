const express = require('express')
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const mongodbRoute = 'mongodb+srv://carlospalacio_db_user:Parlante12@practicetest.rmitya9.mongodb.net/'

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json)

async function start()
{
    try{
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`)
        });
        console.log('conexion ocn Mongo correcta')
    }
    catch (error)
    {
        console.log(`error de conexion a DB: ${error.message}`)
    }
}
start();