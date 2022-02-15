import "reflect-metadata";
import express from 'express';
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../src/swagger.json'
import './database'
import './shared/container'
const app = express();
app.use(express.json());
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(3001, () => {
  console.log('Server is running');
})