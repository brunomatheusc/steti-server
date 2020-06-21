import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import UsersController from './../controllers/UsersController';
import ensureAuthenticated from './../middlewares/ensureAuthenticated';

const userRoutes = Router();
const upload = multer(uploadConfig);

userRoutes.post('/', UsersController.create);
userRoutes.get('/', UsersController.read);

userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), UsersController.avatar);

export default userRoutes;