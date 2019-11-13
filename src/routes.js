import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// Cadastro de alunos
routes.post('/students', authMiddleware, StudentController.store);
routes.put('/students/:id', authMiddleware, StudentController.update);

export default routes;
