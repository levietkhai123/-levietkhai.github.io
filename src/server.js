import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine'
import initWebRoute from './routes/web'
import connectDB from './config/connectDB';
import * as dotenv from 'dotenv' ;
dotenv.config()

let app = express()


//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app)
initWebRoute(app)

//check connect database
connectDB();

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port :http://localhost:' + port);
})
