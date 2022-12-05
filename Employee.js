import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	documents: [String],
});

export default mongoose.model('Employee', EmployeeSchema);