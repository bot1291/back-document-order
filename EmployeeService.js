import Employee from './Employee.js';

class EmployeeService {
	async getAll() {
		const employees = await Employee.find();
		return employees;
	}

	async update(employee) {
		if (!employee._id) {
			throw new Error('Id не указано');
		}
		if (!employee.name) {
			throw new Error('Имя не указано');
		}
		if (!employee.document) {
			throw new Error('Документ не указан');
		}
		const currentEmployee = await Employee.findById(employee._id);
		const redactedDocuments = currentEmployee?.documents.map((d) =>
			d.toLocaleLowerCase().split(' ').join('')
		);
		const checkForCopy = redactedDocuments?.includes(
			employee.document.toLocaleLowerCase().split(' ').join('')
		);
		if (checkForCopy) {
			throw new Error(
				'Вы уже отправляли заявку на этот документ, она уже была учтена'
			);
		}
		const updatedEmployee = await Employee.findByIdAndUpdate(employee._id, {
			$push: { documents: employee.document },
		});
		return updatedEmployee;
	}
}

export default new EmployeeService();
