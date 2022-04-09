import { Router } from 'express';
import { report } from '../controller/report.controller';

const reportRouter = Router();

reportRouter.route('/').get(report);

export default reportRouter;
