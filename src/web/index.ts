import express from 'express';
import renderViews from './ejs/routes-views';
import apiRoute from './routes';
import { errorMiddleware } from './middlewares/error';
import bodyParser from 'body-parser';

export class Application {
	public readonly app;

	constructor() {
		this.app = express();
		this.app.set('view engine', 'ejs');
		this.app.set('views', 'views/pages');
		this.app.use(express.json());
		this.app.use(express.static('public'));
		this.app.use(renderViews);
		this.app.use(apiRoute);
		this.app.use(errorMiddleware);
	}

	public runServer(port: number): void {
		this.app.listen(port, () => {
			console.log(`Server is running ${port}`);
		});
	}
}
