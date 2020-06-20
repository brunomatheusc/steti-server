import { Router } from 'express';

import AppointmentsController from './../controllers/AppointmentsController';
import ensureAuthenticated from './../middlewares/ensureAuthenticated';

const appointmentsRoutes = Router();

appointmentsRoutes.use(ensureAuthenticated);

appointmentsRoutes.get('/', AppointmentsController.read);
appointmentsRoutes.post('/', AppointmentsController.create);

export default appointmentsRoutes;