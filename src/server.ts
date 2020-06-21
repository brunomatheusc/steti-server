import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		res.status(err.statusCode).json({ status: 'error', message: err.message });
	}

	return res.status(500).json({ status: 'error', message: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});