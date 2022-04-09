import { Router } from 'express';
import { download } from '../controller/download.controller';
const downloadRouter = Router();

downloadRouter.route('/').get(download);

export default downloadRouter;
