import { getCustomRepository } from 'typeorm';
import ServicesRepository from './../repositories/ServicesRepository';

export default class CreateService {
	public async execute(name: string): Promise<void> {
		const servicesRespository = getCustomRepository(ServicesRepository);

		await servicesRespository.createService(name);
	}
}