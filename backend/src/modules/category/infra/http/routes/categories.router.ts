import CategoryController from '@modules/category/infra/http/controllers/CategoryController';
import { Router } from 'express';

const categoryRouter = Router();

categoryRouter.get('/', CategoryController.listCategory);
categoryRouter.post('/save', CategoryController.createCategory);


export default categoryRouter;