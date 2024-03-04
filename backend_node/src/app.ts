import express from 'express';
import cors from 'cors';
import path = require('path');
import cookieParser from 'cookie-parser';
import "./utils/postgres";
import router from './routers/app/appRouter';
import apiRoutes from './routers/api/apiRouter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));
app.use(router);
app.use(apiRoutes);

app.listen(3000, () => console.log('Servidor ejecutándose en el puerto 3000'));
