import { Router } from 'express';

import UsersController from './../controllers/UsersController';

const userRoutes = Router();

userRoutes.get('/', UsersController.read);
userRoutes.post('/', UsersController.create);

export default userRoutes;