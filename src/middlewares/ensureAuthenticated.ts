import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from './../errors/AppError';

interface TokeyPayload {
	iat: number;
	exp: number;
	sub: string;
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AppError('JWT token is missing', 401);
	}

	const [, token] = authHeader.split(' ');

	const { jwt: { secret }} = authConfig;

	try {
		const decodedToken = verify(token, secret);
		
		const { sub } = decodedToken as TokeyPayload;

		req.user = { id: sub };

		return next();
	} catch (error) {
		throw new AppError('Invalid JWT Token');		
	}

}