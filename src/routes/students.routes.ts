import { Router } from 'express';

const studentsRoutes = Router();

studentsRoutes.get('/', (request, response) => response.json({ msg: 'get' }));

export { studentsRoutes };
