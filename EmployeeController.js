import EmployeeService from './EmployeeService.js';

class EmployeeController {
	async getAll(_req, res) {
		try {
			const employees = await EmployeeService.getAll();
			return res.json(employees);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async update(req, res) {
		try {
			const updatedEmployee = await EmployeeService.update(req.body);
			return res.json(updatedEmployee);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

export default new EmployeeController();
