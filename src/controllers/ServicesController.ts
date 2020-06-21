import { Request, Response } from 'express';

class ServicesController {
	public async create(req: Request, res: Response) {
		const { name } = req.body;			
	}

	public async all(req: Request, res: Response) {

	}

	public async getServiceById(req: Request, res: Response) {
		const { serviceId } = req.params;
	}
}

export default new ServicesController;