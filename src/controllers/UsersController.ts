import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from './../services/UpdateUserAvatarService';

class UsersController {
	public async create(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const createUser = new CreateUserService();

		const user = await createUser.execute({ name, email, password });

		delete user.password;

		return res.json({ user });
	}

	public read(req: Request, res: Response) {

	}

	public async avatar(req: Request, res: Response) {
		const updateUserAvatar = new UpdateUserAvatarService();

		const user = await updateUserAvatar.execute({ userId: req.user.id, avatar: req.file.filename });

		delete user.password;

		return res.json({ user });
	}
}

export default new UsersController;