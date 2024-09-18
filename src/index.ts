import express, { Express } from 'express';
import router from './routes/routes';

const app: Express = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use('/',router);

// Exporting app using ES module syntax
export default app;
