import { Router } from 'express';

import { Student } from '../domain/entities/student';

const studentsRoutes = Router();

studentsRoutes.get('/', (request, response) => {
  const student = new Student();

  console.log(student);
  response.json({ msg: 'get' });
});

export { studentsRoutes };
