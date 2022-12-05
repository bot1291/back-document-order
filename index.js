import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const PORT = 5000;
const DB_URL =
	'mongodb+srv://admin:admin@cluster0.nbefjjl.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT);
	} catch (error) {
		console.log(error);
	}
}

startApp();
