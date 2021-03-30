import { Router } from 'express';
import categoryRouter from './categories.router'

const routes = Router();

routes.use('/categories', categoryRouter);

routes.use('/', (req, res) => {
  res.send({ message: 'Api finances - Thiago Negreiros' });
});

export default routes;