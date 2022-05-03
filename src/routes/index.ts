import { Router } from 'express';

import { studentsRoutes } from './students.routes';

const routes = Router();
routes.use('/students', studentsRoutes);

export { routes };
