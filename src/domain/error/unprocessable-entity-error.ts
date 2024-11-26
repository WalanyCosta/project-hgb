import { ApiError } from './api-error';

export class UnprocessableEntityError extends ApiError {
	constructor(message: string) {
		super(message, 422);
	}
}
