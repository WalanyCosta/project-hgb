import * as z from 'zod';
export const addParticipantSchema = z.object({
	name: z
		.string({
			required_error: 'name is requered',
			invalid_type_error: 'type name is string',
		})
		.min(5, { message: 'name must have a min of 8 characters' })
		.max(200, { message: 'name must have a max of 200 characters' }),
	email: z
		.string({
			required_error: 'email is requered',
			invalid_type_error: 'type email is string',
		})
		.email()
		.min(5, { message: 'email must have a min of 8 characters' })
		.max(200, { message: 'email must have a max of 200 characters' }),
	password: z
		.string({
			required_error: 'password is requered',
			invalid_type_error: 'type password is string',
		})
		.min(8, { message: 'password must have a min of 8 characters' }),
	phone: z
		.string({
			required_error: 'phone is requered',
			invalid_type_error: 'type phone is string',
		})
		.length(9, { message: 'phone must have 9 numbers' }),
	birthday: z
		.string({
			required_error: 'birthday is requered',
			invalid_type_error: 'type birthday is string',
		})
		.datetime(),
	gender: z
		.string({
			required_error: 'gender is requered',
			invalid_type_error: 'type gender is string',
		})
		.min(5, { message: 'gender must have a min of 5 characters' })
		.max(100, { message: 'gender must have a max of 100 characters' }),
});
