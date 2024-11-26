import { BadRequestError } from 'domain/error/bad-request-error';
import { NextFunction } from 'express';
import * as z from 'zod';

export function validateData(schema: z.ZodObject<any, any>): any {
	return (req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse(req.body);

		if (!result.success) {
			throw new BadRequestError(JSON.parse(result.error.toString())[0].message);
		}
		next();
	};
}
