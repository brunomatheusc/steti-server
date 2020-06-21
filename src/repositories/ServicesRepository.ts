import { Repository, EntityRepository } from "typeorm";
import Service from './../models/Service';

@EntityRepository(Service)
export default class ServicesRepository extends Repository<Service> {
	public async createService(name: string): Promise<Service> {
		const service = this.create({ name });

		return service;
	}
}