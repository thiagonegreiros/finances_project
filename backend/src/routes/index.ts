import { Router } from 'express';

const routes = Router();

routes.use('/', (req, res) => {
  res.send({ message: 'Api finances - Thiago Negreiros' });
})


export default routes;