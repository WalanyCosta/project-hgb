export default {
	host: (process.env.MAIL_HOST as string) ?? '',
	port: process.env.MAIL_PORT ?? 582,
	secure: false,
	auth: {
		user: process.env.MAIL_USER ?? 'maddison53@ethereal.email',
		pass: process.env.MAIL_PASSWORD ?? 'jn7jnAPss4f63QBp6D',
	},
};
