import app from './infra/api/server';

const port = process.env.PORT || '';

app.listen(port, () => {
	console.log(`Server is running in port ${port}`);
});
