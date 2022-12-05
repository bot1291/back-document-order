import Router from 'express';
import EmployeeController from './EmployeeController.js';

const router = new Router();

router.get('/employees', EmployeeController.getAll);
router.put('/employees', EmployeeController.update);

export default router;
