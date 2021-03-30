import { Router } from 'express';
import CategoryController from '../controller/CategoryController'

const categoryRouter = Router();

categoryRouter.get('/', CategoryController.listCategory);
categoryRouter.post('/save', CategoryController.createCategory);


export default categoryRouter;