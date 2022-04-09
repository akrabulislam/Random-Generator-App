import { Router } from 'express';

//now import all the router
import downloadRouter from './download.route';
import reportRouter from './report.route';
import generateRouter from './generate.route';
const routes = Router();

//now routes entry point
routes.use('/download', downloadRouter);
routes.use('/report', reportRouter);
routes.use('/generate', generateRouter);


export default routes;
