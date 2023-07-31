import  express  from 'express';
import Connection from './database/dbconfig.js';
import DefaultData from './default.js';
import Route from './routes/Route.js';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
app.use(cors());
dotenv.config();

app.use('/',Route);

const port = 5000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;





Connection(username, password);

app.listen(port, () => console.log(`Server is running on port ${port}`))

DefaultData();