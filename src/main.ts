import 'express-async-errors';
import { Application } from './web';
import { prisma } from 'infra/repository/prisma/config/prisma-client';

const port = parseInt(process.env.PORT ?? '5000');

prisma
	.$connect()
	.then(() => {
		new Application().runServer(port);
	})
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
