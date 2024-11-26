import express, { Request, Response } from 'express';
import { addParticipantSchema } from './middlewares/schema/add-participant-schema';
import { validateData } from './middlewares/validator-middleware';
import { addParticipantService } from 'application/add-participant/add-participant-module';

const route = express.Router();

route.post(
	'/participants',
	validateData(addParticipantSchema),
	async (request: Request, response: Response) => {
		await addParticipantService.execute({
			...request.body,
			birthday: new Date(request.body.birthday),
		});
		response.status(201);
	},
);

export default route;
