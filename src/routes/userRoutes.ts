import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/', UserController.index);
routes.post('/', UserController.store);
routes.get('/:id', UserController.show);
routes.delete('/:id', UserController.delete);
routes.put('/:id', UserController.update);

export default routes;
