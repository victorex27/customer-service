import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import nocache from 'nocache';
import Routes from './routes';


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.hsts());
app.use(helmet.hidePoweredBy());
app.disable('x-powered-by');
app.use(nocache());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

Routes(app);

app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Welcome to Customer Service',
  })
);




app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('*', (req, res) =>
  res.status(404).json({
    status: 404,
    error: `Route ${req.url} Not found`,
  })
);

export { app };
