import { Router } from 'express';
import { generate } from '../controller/generate.string.controller';
const generateRouter = Router();

generateRouter.route('/').get(generate);

export default generateRouter;
